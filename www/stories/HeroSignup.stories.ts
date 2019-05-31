import { storiesOf, addDecorator } from "@storybook/vue";
import { radios, text, boolean } from "@storybook/addon-knobs";
import sectionStates from "./decorators/sectionStates";
import HeroSignup from "../components/HeroSignup.vue";

const stories = storiesOf("Marketing/Hero Signup", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { HeroSignup },
      props: {
        emailLabel: {
          default: text("Email Label", "Your email address")
        },
        buttonLabel: {
          default: text("Button Label", "Sign up")
        },
      },
      template: `
        <hero-signup v-bind="{
          emailLabel,
          buttonLabel
        }" />
      `
    } as object)
);

