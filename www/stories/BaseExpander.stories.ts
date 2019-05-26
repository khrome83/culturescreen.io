import { storiesOf, addDecorator } from "@storybook/vue";
import { text, number } from "@storybook/addon-knobs";
import sectionStates from "./decorators/sectionStates";
import BaseExpander from "../components/BaseExpander.vue";

const stories = storiesOf("Components/Base Expander", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { BaseExpander },
      props: {
        heading1: {
          default: text("Heading (1)", "Question A", "Item 1")
        },
        contents1: {
          default: text("Contents (1)", "Vivamus ut fermentum quam. Integer massa nulla, aliquam id nibh non, porttitor pretium risus. Donec sodales urna lacus, vitae laoreet diam dapibus et. Nunc volutpat accumsan velit, nec volutpat magna efficitur vel. Etiam risus tortor, placerat varius nisi iaculis, commodo convallis erat. Vivamus sodales ultricies lectus sit amet fermentum. Pellentesque gravida faucibus vehicula. Pellentesque ornare nisl a magna mollis blandit. Nulla tortor velit, consectetur ultrices nunc sed, tincidunt cursus ipsum. Aliquam nec mi cursus, eleifend risus porta, tempor ex. Phasellus consequat nec diam a scelerisque.", "Item 1")
        },
        level1: {
          default: number("Level (1)", 3, {
            range: true,
            min: 1,
            max: 4,
            step: 1
          }, "Item 1")
        },
        heading2: {
          default: text("Heading (2)", "Question A", "Item 2")
        },
        contents2: {
          default: text("Contents (2)", "Nunc vitae commodo sem. Aenean tortor nibh, aliquam ac urna sed, facilisis tincidunt mi. Vestibulum pretium ante pulvinar leo blandit pharetra vitae quis nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam a cursus sem. Nulla at erat eleifend, ullamcorper odio quis, pellentesque libero. Etiam lectus arcu, scelerisque lacinia libero sed, ultricies consectetur felis. Donec non est quis purus dignissim consectetur. Nullam eu magna in felis semper pellentesque in consequat augue. Maecenas dolor tellus, tincidunt nec scelerisque vel, ultrices eu ex. Quisque erat lorem, venenatis id consequat non, sollicitudin a orci. Donec porttitor pretium augue, quis placerat orci bibendum vitae.", "Item 2")
        },
        level2: {
          default: number("Level (2)", 3, {
            range: true,
            min: 1,
            max: 4,
            step: 1
          }, "Item 2")
        },
        heading3: {
          default: text("Heading (3)", "Question A", "Item 3")
        },
        contents3: {
          default: text("Contents (3)", "Nunc tristique nibh vitae risus pharetra blandit et eu neque. Proin nisi est, finibus sed mollis nec, eleifend sit amet erat. Nunc et risus eu augue congue consequat sit amet sit amet lorem. Aliquam quis aliquet nisl. Proin quis lectus urna. Proin rhoncus nisl malesuada quam ullamcorper, a imperdiet sem egestas. Nam mi neque, tristique nec justo non, malesuada commodo est. Integer felis neque, ullamcorper a consectetur sit amet, pharetra sit amet erat. Morbi vulputate justo quam, quis maximus neque euismod et. Donec non molestie arcu, eget scelerisque nulla. Proin vel leo elit. Phasellus luctus vulputate imperdiet. Maecenas sagittis, neque nec lobortis lacinia, odio purus sollicitudin dolor, quis pellentesque ex lacus sed turpis.", "Item 3")
        },
        level3: {
          default: number("Level (3)", 3, {
            range: true,
            min: 1,
            max: 4,
            step: 1
          }, "Item 3")
        },
      },
      template: `
      <div>
        <base-expander :level="level1" :heading="heading1" expanded ><p>{{contents1}}</p></base-expander>
        <base-expander :level="level2" :heading="heading2" ><p>{{contents2}}</p></base-expander>
        <base-expander :level="level3" :heading="heading3" ><p>{{contents3}}</p></base-expander>
      </div>
      `
    } as object)
);
