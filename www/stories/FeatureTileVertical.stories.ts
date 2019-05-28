import { storiesOf, addDecorator } from "@storybook/vue";
import { select, number, radios, text, boolean } from "@storybook/addon-knobs";
import nanoid from "nanoid";
import sectionStates from "./decorators/sectionStates";
import FeatureTileVerticle from "../components/FeatureTileVerticle.vue";
import Graphic from "../assets/svg/samples/video.svg";

const stories = storiesOf("Marketing/Feature Tile Verticle", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { FeatureTileVerticle, Graphic },
      props: {
        heading: {
          default: text("Heading", "Fast Playback")
        },
        text: {
          default: text("Text", "World class video CDN delivers HD quality video. Check out these [[/path/to/benchmarks|benchmarks]] to learn more.")
        },
        level: {
          default: number("Level", 2, {
            range: true,
            min: 1,
            max: 4,
            step: 1
          })
        },
      },
      template: `
        <feature-tile-verticle :heading="heading" :text="text" :level="level">
          <graphic />
        </feature-tile-verticle>
      `
    } as object)
);
