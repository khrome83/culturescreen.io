import { storiesOf, addDecorator } from "@storybook/vue";
import { select, number, radios, text, boolean, object } from "@storybook/addon-knobs";
import nanoid from "nanoid";
import sectionStates from "./decorators/sectionStates";
import AnimatedHeading from "../components/AnimatedHeading.vue";

const stories = storiesOf("Marketing/Animated Heading", module).addDecorator(sectionStates);

stories.add(
  "Single Inline Example",
  () =>
    ({
      components: { AnimatedHeading },
      props: {
        level: {
          default: number("Level", 1, {
            range: true,
            min: 1,
            max: 4,
            step: 1
          }),
        },
        delay: {
          default: number("Delay (s)", 4)
        },
        offset: {
          default: number("Offset (s)", 0.5)
        },
      },
      data: () => ({
        animatedList: {
          one: ["Collaborative&nbspTeams", "Innovative&nbsp;Organizations", "Succesful&nbspCultures", "Happy&nbsp;Families", "Great&nbsp;Partnerships"],
        },
      }),
      template: `
        <animated-heading v-bind="{ level, animatedList, delay, offset }" >
          Simplify Building [%one]]
        </animated-heading>
      `
    } as object)
);

stories.add(
  "Multiple Inline Example",
  () =>
    ({
      components: { AnimatedHeading },
      props: {
        level: {
          default: number("Level", 1, {
            range: true,
            min: 1,
            max: 4,
            step: 1
          })
        },
        delay: {
          default: number("Delay (s)", 3)
        },
        offset: {
          default: number("Offset (s)", 0.5)
        },
      },
      data: () => ({
        animatedList: {
          one: ["Collaborative", "Insightful", "Quality", "Thoughtful", "Innovative"],
          two: ["Deliver&nbsp;Quickly", "Solve&nbsp;Problems", "Take&nbsp;Ownership"]
        },
      }),
      template: `
        <animated-heading v-bind="{ level, animatedList, delay, offset }" >
          Build [[one%] Teams That [%two]]
        </animated-heading>
      `
    } as object)
);

stories.add(
  "Single Newline Example",
  () =>
    ({
      components: { AnimatedHeading },
      props: {
        level: {
          default: number("Level", 1, {
            range: true,
            min: 1,
            max: 4,
            step: 1
          })
        },
        delay: {
          default: number("Delay (s)", 3)
        },
        offset: {
          default: number("Offset (s)", 1)
        },
      },
      data: () => ({
        animatedList: {
          one: ["Happy", "Healthy", "Wealthy"],

        },
      }),
      template: `
        <animated-heading v-bind="{ level, animatedList, delay, offset }" >
          Create [[one%] Teams
        </animated-heading>
      `
    } as object)
);
