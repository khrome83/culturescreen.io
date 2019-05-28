import { storiesOf, addDecorator } from "@storybook/vue";
import { select, number, radios, text, boolean } from "@storybook/addon-knobs";
import nanoid from "nanoid";
import sectionStates from "./decorators/sectionStates";
import PricingCard from "../components/PricingCard.vue";
import BaseButton from "../components/BaseButton.vue";

const stories = storiesOf("Marketing/Pricing Card", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { PricingCard, BaseButton },
      props: {
        preText: {
          default: text("Pre Text", "Starting At")
        },
        price: {
          default: number("Price", 35)
        },
        frequency: {
          default: text("Frequency", " / month")
        },
        postText: {
          default: text("Post Text", "After FREE 30 Day Trial")
        },
        buttonLabel: {
          default: text("Button Label", "Start Now")
        },

        horizontal: {
          default: boolean("Horizontal", false)
        },
      },
      template: `
        <pricing-card :post-text="postText" :pre-text="preText" :frequency="frequency" :price="price" :horizontal="horizontal">
          <base-button>{{buttonLabel}}</base-button>
        </pricing-card>
      `
    } as object)
);
