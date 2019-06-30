import { RootState, ProfileState } from "~/types";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { MutationTree, ActionTree } from "vuex";
import localRandomData from "~/static/random-data.json";
import { DB, Timestamp } from "~/services/fireinit";

export const state = (): ProfileState => ({
  profile: {}
});

export const mutations: MutationTree<ProfileState> = {
  ...vuexfireMutations
};

export const actions: ActionTree<ProfileState, RootState> = {
  bindProfile: firestoreAction(({ bindFirestoreRef }, id) => {
    if (id) {
      return bindFirestoreRef("profile", DB.collection("Profiles").doc(id));
    } else {

    }
  }),
  unbindProfile: firestoreAction(({ unbindFirestoreRef }) => {
    return unbindFirestoreRef('profile');
  }),
  async createProfile({ rootGetters }, data): Promise<void> {
    if (rootGetters['user/uid']) {
      try {
        await DB.collection("Profiles").doc(rootGetters['user/uid']).set({
          partial: true,
          createdAt: Timestamp.fromDate(new Date())
        });
      } catch (e) {
        console.log(e.message);
      }
    }
  },
  async createPartialProfile({ rootGetters }): Promise<void> {
    if (rootGetters['user/uid']) {
      try {
        const doc = await DB.collection("Profiles").doc(rootGetters['user/uid']).get();
        if (!doc.exists) {
          await DB.collection("Profiles").doc(rootGetters['user/uid']).set({
            partial: true,
            createdAt: Timestamp.fromDate(new Date())
          });
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  },
};

export default {
  state, mutations, actions
}
