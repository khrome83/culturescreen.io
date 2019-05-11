import { OverPanelState } from "~/types";
import { MutationTree } from "vuex";

export const state = (): OverPanelState => ({
  overpanelVisible: false,
  overpanelComponent: ""
});

export const mutations: MutationTree<OverPanelState> = {
  closeOverpanel(state) {
    state.overpanelVisible = false;
  },
  openOverpanel(state, componentName: string) {
    state.overpanelVisible = true;
    state.overpanelComponent = componentName;
  }
};
