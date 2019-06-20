import { auth } from '~/services/fireinit';
import { UserData } from "~/types";

export default ({ store }) => {
  auth.onAuthStateChanged(async user => {
    if (user) {
      const idTokenResult = await user.getIdTokenResult();
      user['admin'] = idTokenResult.claims;
      store.dispatch('user/setUser', user);
      store.dispatch('profile/bindProfile', user.uid);
    } else {
      store.dispatch('profile/unbindProfile');
    }
  })
}
