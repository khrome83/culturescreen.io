import { storiesOf, addDecorator } from "@storybook/vue";
import { select, number, radios, text, boolean } from "@storybook/addon-knobs";
import nanoid from "nanoid";
import sectionStates from "./decorators/sectionStates";
import FeatureTileHorizontal from "../components/FeatureTileHorizontal.vue";
import Graphic from "../assets/svg/samples/video.svg";

const stories = storiesOf("Marketing/Feature Tile Horizontal", module).addDecorator(sectionStates);

stories.add(
  "Icon",
  () =>
    ({
      components: { FeatureTileHorizontal, Graphic },
      props: {
        heading: {
          default: text("Heading", "Fast Playback")
        },
        text: {
          default: text("Text", "World class video CDN delivers HD quality video. Check out these [[/path/to/benchmarks|benchmarks]] to learn more.")
        },
        level: {
          default: number("Level", 3, {
            range: true,
            min: 1,
            max: 4,
            step: 1
          })
        },
      },
      template: `
        <feature-tile-horizontal :heading="heading" :text="text" :level="level">
          <graphic />
        </feature-tile-horizontal>
      `
    } as object)
);

stories.add(
  "Checkmark",
  () =>
    ({
      components: { FeatureTileHorizontal, Graphic },
      props: {
        heading: {
          default: text("Heading", "Fast Playback")
        },
        text: {
          default: text("Text", "World class video CDN delivers HD quality video. Check out these [[/path/to/benchmarks|benchmarks]] to learn more.")
        },
        level: {
          default: number("Level (1)", 3, {
            range: true,
            min: 1,
            max: 4,
            step: 1
          })
        },
      },
      template: `
        <feature-tile-horizontal :heading="heading" :text="text" :level="level" />
      `
    } as object)
);
