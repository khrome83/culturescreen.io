import { storiesOf, addDecorator } from "@storybook/vue";
import { select, number, radios, text, boolean } from "@storybook/addon-knobs";
import nanoid from "nanoid";
import sectionStates from "./decorators/sectionStates";
import PricingTable from "../components/PricingTable.vue";
import Graphic from "../assets/svg/samples/video.svg";

const stories = storiesOf("Marketing/Pricing Table", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { PricingTable, Graphic },
      props: {
        identifier: {
          default: text("Identifier", "bronze_01")
        },
        cycle: {
          default: text("Cycle", "monthly")
        },
        heading: {
          default: text("Heading", "Bronze")
        },
        promoted: {
          default: boolean("Promoted", false)
        },
        text: {
          default: text("Text", "The ideal plan for small businesses that are growing slowly, or just starting out.")
        },
        currency: {
          default: text("Currency", "$")
        },
        price: {
          default: number("Price", 35)
        },
        frequency: {
          default: text("Frequency", " / month")
        },
        buttonLabel: {
          default: text("Button Label", "Start Now")
        },
      },
      template: `
        <pricing-table v-bind="{ identifier, cycle, heading, promoted, text, currency, price, frequency, buttonLabel }">
          <template v-slot:graphic>
            <graphic />
          </template>
          <template v-slot:list>
            <ul>
              <li>1 Job</li>
              <li>Unlimtied One-Way Interviews</li>
              <li>10 User Seats</li>
              <li>Branding</li>
              <li>Rating System</li>
              <li>Interview Tagging</li>
              <li>Company Profile</li>
              <li>Rejection Management</li>
              <li>Grandular User Permissions</li>
              <li>Company Intro Video</li>
              <li>Company Outro Video</li>
              <li>Question Bank</li>
              <li>Custom Questions</li>
              <li>Think Time</li>
            </ul>
          </template>
        </pricing-table>
      `
    } as object)
);
