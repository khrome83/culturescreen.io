import { RootState, UserState, EmailLogin, EmailRegistration } from "~/types";
import { MutationTree, ActionTree, GetterTree } from "vuex";
import firebase, { auth, DB, Timestamp, GoogleProvider, GithubProvider, MicrosoftProvider } from "~/services/fireinit";
import { userInfo } from "os";

export const state = (): UserState => ({
  user: null,
});

export const getters: GetterTree<UserState, RootState> = {
  isAuthenticated(state: UserState): boolean {
    return !!state.user;
  },
  uid(state: UserState): string | null {
    return (state.user) ? state.user.uid : null;
  }
};

export const mutations: MutationTree<UserState> = {
  setUser(state: UserState, user: object | any): void {
    state.user = user.toJSON();
  },
  resetUser(state: UserState): void {
    state.user = null;
  }
};

export const actions: ActionTree<UserState, RootState> = {
  setUser({ commit }, user): void {
    commit('setUser', user);
  },
  async createWithEmail({ commit, dispatch }, data: EmailRegistration): Promise<void> {
    const { email, password } = data;

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      dispatch('profile/createProfile', data, { root: true });
    } catch (e) {
      console.log(e.code, e.message);
    }
  },
  async signInWithEmail({ commit }, data: EmailLogin): Promise<void> {
    const { email, password } = data;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
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
  }
};
