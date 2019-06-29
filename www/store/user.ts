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
    }

    return output;
  },
};

export const mutations: MutationTree<UserState> = {
  setUser(state: UserState, user: object | any): void {
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
      dispatch('verifyEmail');
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
  async verifyEmail({ commit }): Promise<void> {
    try {
      commit('resetAuthError');
      await auth.currentUser.sendEmailVerification();
    } catch (e) {
      commit('setAuthError', e);
      console.log(e.code, e.message);
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
      console.log(e.message);
    }
  },
  async signInWithGithub({ commit, dispatch }): Promise<void> {
    try {
      auth.useDeviceLanguage();
      GithubProvider.addScope('user:email');
      await auth.signInWithPopup(GithubProvider);
      dispatch('profile/createPartialProfile', null, { root: true });
    } catch (e) {
      console.log(e.message);
    }
  },
  async signInWithMicrosoft({ commit, dispatch }): Promise<void> {
    try {
      auth.useDeviceLanguage();
      await auth.signInWithPopup(MicrosoftProvider);
      dispatch('profile/createPartialProfile', null, { root: true });
    } catch (e) {
      console.log(e.message);
    }
  },
  async signOut({ commit }): Promise<void> {
    try {
      await auth.signOut();
      commit('resetUser')
    } catch (e) {
      console.log(e.message);
    }
  },
};
