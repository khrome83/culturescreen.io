import { AuthError, RootState, UserState, EmailLogin, EmailRegistration, ServerErrorMsg } from "~/types";
import { MutationTree, ActionTree, GetterTree } from "vuex";
import firebase, { auth, DB, Timestamp, GoogleProvider, GithubProvider, MicrosoftProvider } from "~/services/fireinit";
import { userInfo } from "os";

export const state = (): UserState => ({
  user: null,
  authError: undefined,
});

export const getters: GetterTree<UserState, RootState> = {
  isAuthenticated(state: UserState): boolean {
    return !!state.user;
  },
  isVerified(state: UserState): boolean {
    return (state.user) ? state.user.emailVerified : false;
  },
  uid(state: UserState): string | null {
    return (state.user) ? state.user.uid : null;
  },
  authError(state: UserState): ServerErrorMsg {
    const output = {
      target: "",
      message: "",
    }

    if (!state.authError) return output;

    switch (state.authError.code) {
      case "auth/email-already-in-use":
        output.target = "email";
        output.message = "This email address is already in use. [[/login|Sign in]]?";
        break;
      case "auth/invalid-email":
        output.target = "email";
        output.message = "Email address is not formatted corrrectly.";
        break;
      case "auth/user-not-found":
        output.target = "email";
        output.message = "No user with this email address was found.";
        break;
      case "auth/weak-password":
        output.target = "password";
        output.message = "The password must be 6 characters long or more."
        break;
      case "auth/wrong-password":
        output.target = "password";
        output.message = "Incorrect password";
        break;
      case "auth/too-many-requests":
        // how to handle?
        break;
    }

    return output;
  },
};

export const mutations: MutationTree<UserState> = {
  setUser(state: UserState, user: object | any): void {
    console.log(user.toJSON());
    state.user = user.toJSON();
  },
  resetUser(state: UserState): void {
    state.user = null;
  },
  setAuthError(state: UserState, e: AuthError): void {
    state.authError = e;
  },
  resetAuthError(state: UserState): void {
    state.authError = undefined;
  }
};

export const actions: ActionTree<UserState, RootState> = {
  setUser({ commit }, user): void {
    commit('setUser', user);
  },
  async createWithEmail({ commit, dispatch }, data: EmailRegistration): Promise<void> {
    const { email, password } = data;

    try {
      commit('resetAuthError');
      await auth.createUserWithEmailAndPassword(email, password);
      dispatch('profile/createProfile', data, { root: true });
      dispatch('sendVerifyEmail');
    } catch (e) {
      commit('setAuthError', e);
      console.log(e.code, e.message);
    }
  },
  async signInWithEmail({ commit }, data: EmailLogin): Promise<void> {
    const { email, password } = data;

    try {
      commit('resetAuthError');
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      commit('setAuthError', e);
      console.log(e.code, e.message);
    }
  },
  async sendVerifyEmail({ commit }): Promise<void> {
    // Only send email when user is not verified
    // Due to multiple providers using the same email account
    if (auth.currentUser && !auth.currentUser.emailVerified) {
      try {
        commit('resetAuthError');
        await auth.currentUser.sendEmailVerification();
      } catch (e) {
        commit('setAuthError', e);
        console.log(e.code, e.message);
        throw true;
      }
    }
  },
  async verifyEmail({ commit }, actionCode: string): Promise<void> {
    try {
      commit('resetAuthError');
      const resp = await auth.applyActionCode(actionCode);
      throw true;
      console.log("RESP", resp);
    } catch (e) {
      commit('setAuthError', e);
      console.log(e.code, e.message);
      throw true;
    }
  },
  async passwordResetEmail({ commit }, email: string): Promise<void> {
    try {
      commit('resetAuthError');
      await auth.sendPasswordResetEmail(email);
    } catch (e) {
      commit('setAuthError', e);
      console.log(e.code, e.message);
    }
  },
  async signInWithGoogle({ commit, dispatch }): Promise<void> {
    try {
      auth.useDeviceLanguage()
      await auth.signInWithPopup(GoogleProvider);
      dispatch('profile/createPartialProfile', null, { root: true });
    } catch (e) {
      console.log(e.code, e.message);
    }
  },
  async signInWithGithub({ commit, dispatch }): Promise<void> {
    try {
      auth.useDeviceLanguage();
      GithubProvider.addScope('user:email');
      await auth.signInWithPopup(GithubProvider);
      dispatch('profile/createPartialProfile', null, { root: true });
    } catch (e) {
      console.log(e.code, e.message);
    }
  },
  async signInWithMicrosoft({ commit, dispatch }): Promise<void> {
    try {
      auth.useDeviceLanguage();
      await auth.signInWithPopup(MicrosoftProvider);
      dispatch('profile/createPartialProfile', null, { root: true });
    } catch (e) {
      console.log(e.code, e.message);
    }
  },
  async signOut({ commit }): Promise<void> {
    try {
      await auth.signOut();
      commit('resetUser')
    } catch (e) {
      console.log(e.code, e.message);
    }
  },
};

export default {
  getters, state, mutations, actions
};
