import { storiesOf, addDecorator } from "@storybook/vue";
import { radios, text, boolean } from "@storybook/addon-knobs";
import sectionStates from "./decorators/sectionStates";
import ContactForm from "../components/ContactForm.vue";

const stories = storiesOf("Marketing/Contact Form", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { ContactForm },
      props: {
        nameLabel: {
          default: text("Name Label", "Name")
        },
        namePlaceholder: {
          default: text("Name Placeholder", "John Doe")
        },
        messageLabel: {
          default: text("Message Label", "Message")
        },
        messagePlaceholder: {
          default: text("Message Placeholder", "Enter Your Message")
        },
        tosLabel: {
          default: text("Terms of Service Label", "I agree to the [[/terms|Terms of Services]].")
        },
        buttonLabel: {
          default: text("Button Label", "Send")
        },
      },
      template: `
        <contact-form v-bind="{
          nameLabel,
          namePlaceholder,
          messageLabel,
          messagePlaceholder,
          tosLabel,
          buttonLabel
        }" />
      `
    } as object)
);

