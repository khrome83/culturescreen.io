import { RootState, Person } from "~/types";
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import { MutationTree, ActionTree } from "vuex";
import localRandomData from "~/static/random-data.json";
import db from "~/db";

export const state = (): RootState => ({
  people: [],
  users: [],
})

export const mutations: MutationTree<RootState> = {
  setPeople(state: RootState, people: Person[]): void {
    state.people = people;
  },
  ...vuexfireMutations,
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let people: Person[] = [];

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    people = context.isStatic ?
      localRandomData :
      await context.app.$axios.$get("./random-data.json");

    commit("setPeople", people.slice(0, 10));
  },
  bindUsers: firestoreAction(({ bindFirestoreRef }) => {
    // return the promise returned by `bindFirestoreRef`
    return bindFirestoreRef("users", db.collection("Users"));
  }),
};
