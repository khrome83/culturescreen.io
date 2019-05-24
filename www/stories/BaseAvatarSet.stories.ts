import { storiesOf, addDecorator } from "@storybook/vue";
import { radios, text, number, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/vue";
import BaseAvatarSet from "../components/BaseAvatarSet.vue";
import BaseAvatar from "../components/BaseAvatar.vue";

const stories = storiesOf("Base Avatar Set", module).addDecorator(centered);

/* GRAVATAR IMAGES TO USE */
// https://s.gravatar.com/avatar/bd4ab01cca64e633e003aefe3e1232ab?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/7ef707630312e66e717f0165938fa0b3?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/7ef707630312e66e717f0165938fa0b3?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/bee436794e066a5423040cf673c7506f?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/b0d0ce2a0e59387acbf0848f62aa52bf?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/7b27d41bc94bc689f23c33aa62157dcb?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/188a9d4deb76ac6e69c7f65358897476?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/8cd069d50251bc8f7c770f7bb9665c6e?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/59247a80fdf2632dfea43b8824e07cdb?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/f0607686c32fd18a7af74392a2652860?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/046a214756b50ddfb0ad46f41839f509?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/1439e90e6361bfbcef96639fed4c6241?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/adeec54c0270bb3165639ea159eedc04?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/2c04013472d06237223e159d043c9035?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/6f2834ffe6ea1e0e852a514139986bc1?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/0bb885dc67864a9a91cd123b97968d4c?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/44128d17e23187413cded5010698ecb8?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/10c98143f6275f023f6f67cbcb789974?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/b7c755d66083b2770c53aecbb3fcdb2b?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/354bf07bc260006735563585f9e18d99?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/8e1cb379a74478b5ac44bc5b227bd802?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/68878a88e4a574904cc193a6782c66d0?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/c58e7bdd366b2f3b6d6c29e9283ea67a?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/8972424a01b25a343b664d5b8ff75a45?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/5e6805ca1cd7538ad32437cdb7fc1221?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/9ec8c7889756fc31d0a16ad5be4a938b?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/09d6787a152d7d815ea89618432ac80c?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/81b58502541f9445253f30497e53c280?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/2dcef6cf0bd7c3698c903177ec0ee58f?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/00eedd7282eab774e300918f9e32558b?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/3f760d83193dbd5d6cc13c2eb7f1ee8c?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/2b2f596bd2c0eb8ff254436f76523f4b?s=200&d=retro&r=pg
// https://s.gravatar.com/avatar/f0496460f5eca1389b00b45ac06d5daf?s=200&d=retro&r=pg

stories.add(
  "Default",
  () =>
    ({
      components: { BaseAvatarSet, BaseAvatar },
      props: {
        limit: {
          default: number("Limit", 3, {
            range: true,
            min: 1,
            max: 34,
            step: 1
          })
        },
        count: {
          default: number("Count", 3, {
            range: true,
            min: 1,
            max: 34,
            step: 1
          })
        },
        size: {
          default: radios(
            "Size",
            {
              Small: "small",
              Normal: "normal",
              Large: "large"
            },
            "normal"
          )
        }
      },
      template: `
      <base-avatar-set :limit="limit" v-bind="{ small: size === 'small', large: size === 'large' }">
        <base-avatar v-if="count >= 1" src="https://s.gravatar.com/avatar/bd4ab01cca64e633e003aefe3e1232ab?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Zane Milakovic" username="Khrome83" />
        <base-avatar v-if="count >= 2" src="https://s.gravatar.com/avatar/7ef707630312e66e717f0165938fa0b3?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Jaki Milakovic" username="JustJaki21" />
        <base-avatar v-if="count >= 3" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Bob Saget" username="GreatBog" />
        <base-avatar v-if="count >= 4" src="https://s.gravatar.com/avatar/bee436794e066a5423040cf673c7506f?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Ryan Luibrand" username="BluDog" />
        <base-avatar v-if="count >= 5" src="https://s.gravatar.com/avatar/b0d0ce2a0e59387acbf0848f62aa52bf?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Rachel Numish" username="HouseCatCrazy" />
        <base-avatar v-if="count >= 6" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Nolan North" username="NotNormal" />
        <base-avatar v-if="count >= 7" src="https://s.gravatar.com/avatar/7b27d41bc94bc689f23c33aa62157dcb?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Genevieve Gilbert" username="ECejitepus" />
        <base-avatar v-if="count >= 8" src="https://s.gravatar.com/avatar/188a9d4deb76ac6e69c7f65358897476?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Hester Chandler" username="MThucgagew" />
        <base-avatar v-if="count >= 9" src="https://s.gravatar.com/avatar/8cd069d50251bc8f7c770f7bb9665c6e?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Hilda Castillo" username="BAdecroevm" />
        <base-avatar v-if="count >= 10" src="https://s.gravatar.com/avatar/59247a80fdf2632dfea43b8824e07cdb?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Glen Castro" username="MCdierjotg" />
        <base-avatar v-if="count >= 11" src="https://s.gravatar.com/avatar/f0607686c32fd18a7af74392a2652860?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Joseph Conner" username="FMvomdecne" />
        <base-avatar v-if="count >= 12" src="https://s.gravatar.com/avatar/046a214756b50ddfb0ad46f41839f509?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Marcus Williamson" username="PSmouzdumw" />
        <base-avatar v-if="count >= 13" src="https://s.gravatar.com/avatar/1439e90e6361bfbcef96639fed4c6241?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Mabel Hogan" username="BEezimujte" />
        <base-avatar v-if="count >= 14" src="https://s.gravatar.com/avatar/adeec54c0270bb3165639ea159eedc04?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Nina Potter" username="MHkucnudub" />
        <base-avatar v-if="count >= 15" src="https://s.gravatar.com/avatar/2c04013472d06237223e159d043c9035?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Sam Owens" username="FMpafcelpu" />
        <base-avatar v-if="count >= 16" src="https://s.gravatar.com/avatar/6f2834ffe6ea1e0e852a514139986bc1?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Louise Edwards" username="CIgajagzib" />
        <base-avatar v-if="count >= 17" src="https://s.gravatar.com/avatar/0bb885dc67864a9a91cd123b97968d4c?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Gussie Wells" username="GWzemivoho" />
        <base-avatar v-if="count >= 18" src="https://s.gravatar.com/avatar/44128d17e23187413cded5010698ecb8?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Helen Jennings" username="SLpotuglud" />
        <base-avatar v-if="count >= 19" src="https://s.gravatar.com/avatar/10c98143f6275f023f6f67cbcb789974?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Duane Andrews" username="LUehibtetv" />
        <base-avatar v-if="count >= 20" src="https://s.gravatar.com/avatar/b7c755d66083b2770c53aecbb3fcdb2b?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Carrie Stevens" username="SMcudsemid" />
        <base-avatar v-if="count >= 21" src="https://s.gravatar.com/avatar/354bf07bc260006735563585f9e18d99?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Vera Chavez" username="HRboageduv" />
        <base-avatar v-if="count >= 22" src="https://s.gravatar.com/avatar/8e1cb379a74478b5ac44bc5b227bd802?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Edna Myers" username="GMvikdaput" />
        <base-avatar v-if="count >= 23" src="https://s.gravatar.com/avatar/68878a88e4a574904cc193a6782c66d0?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Tony Mendoza" username="WFimartupw" />
        <base-avatar v-if="count >= 24" src="https://s.gravatar.com/avatar/c58e7bdd366b2f3b6d6c29e9283ea67a?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Francisco Baker" username="UYcofobpia" />
        <base-avatar v-if="count >= 25" src="https://s.gravatar.com/avatar/8972424a01b25a343b664d5b8ff75a45?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Bobby Ball" username="GMhuukeuvr" />
        <base-avatar v-if="count >= 26" src="https://s.gravatar.com/avatar/5e6805ca1cd7538ad32437cdb7fc1221?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Christopher Lowe" username="LTafcunhuf" />
        <base-avatar v-if="count >= 27" src="https://s.gravatar.com/avatar/9ec8c7889756fc31d0a16ad5be4a938b?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Caleb Lawrence" username="GLfoljuvke" />
        <base-avatar v-if="count >= 28" src="https://s.gravatar.com/avatar/09d6787a152d7d815ea89618432ac80c?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Jeffrey Robinson" username="VAmensituv" />
        <base-avatar v-if="count >= 29" src="https://s.gravatar.com/avatar/81b58502541f9445253f30497e53c280?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Inez Watson" username="CNdicautov" />
        <base-avatar v-if="count >= 30" src="https://s.gravatar.com/avatar/2dcef6cf0bd7c3698c903177ec0ee58f?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Juan Davis" username="GMnujekuli" />
        <base-avatar v-if="count >= 31" src="https://s.gravatar.com/avatar/00eedd7282eab774e300918f9e32558b?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Tom Nash" username="WFlaniumiv" />
        <base-avatar v-if="count >= 32" src="https://s.gravatar.com/avatar/3f760d83193dbd5d6cc13c2eb7f1ee8c?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Ellen Fisher" username="GLzilhukut" />
        <base-avatar v-if="count >= 33" src="https://s.gravatar.com/avatar/2b2f596bd2c0eb8ff254436f76523f4b?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Ernest Kim" username="TGlesomizo" />
        <base-avatar v-if="count >= 34" src="https://s.gravatar.com/avatar/f0496460f5eca1389b00b45ac06d5daf?s=200&d=retro&r=pg" v-bind="{ small: size === 'small', large: size === 'large' }" display-name="Tyler Gilbert" username="GUtijcupke" />
      </base-avatar-set>
      `
    } as object)
);

