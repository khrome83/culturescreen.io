import { storiesOf, addDecorator } from "@storybook/vue";
import { radios, text, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/vue";
import BaseAvatar from "../components/BaseAvatar.vue";

const stories = storiesOf("Base Avatar", module).addDecorator(centered);

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
      components: { BaseAvatar },
      props: {
        username: {
          default: text("Username", "Khrome83")
        },
        displayName: {
          default: text("Display Name", "Zane Milakovic")
        },
        src: {
          default: text("Source", "https://s.gravatar.com/avatar/bd4ab01cca64e633e003aefe3e1232ab?s=200&d=retro&r=pg")
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
        },
        hide: {
          default: boolean("Hide", false)
        },
      },
      template: `
        <base-avatar v-bind="{
          small: size === 'small',
          large: size === 'large',
          displayName,
          username,
          src,
          hide
        }" />
      `
    } as object)
);

