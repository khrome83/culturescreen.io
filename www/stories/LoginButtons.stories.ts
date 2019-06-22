import { storiesOf, addDecorator } from "@storybook/vue";
import { radios, text, boolean } from "@storybook/addon-knobs";
import LoginGithub from "../components/LoginGithub.vue";
import LoginMicrosoft from "../components/LoginMicrosoft.vue";
import LoginGoogle from "../components/LoginGoogle.vue";

const stories = storiesOf("Marketing/Login Buttons", module)

stories.add(
  "Sign in with Github",
  () =>
    ({
      components: { LoginGithub },
      template: `
        <login-github />
      `
    } as object)
);

stories.add(
  "Sign in with Microsoft",
  () =>
    ({
      components: { LoginMicrosoft },
      template: `
        <login-microsoft />
      `
    } as object)
);


stories.add(
  "Sign in with Google",
  () =>
    ({
      components: { LoginGoogle },
      template: `
        <login-google />
      `
    } as object)
);


