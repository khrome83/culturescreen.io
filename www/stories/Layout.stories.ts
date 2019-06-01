import { storiesOf } from "@storybook/vue";
import BaseSection from "../components/BaseSection.vue";
import LayoutColumn from "../components/LayoutColumn.vue";
import LayoutRow from "../components/LayoutRow.vue";

const stories = storiesOf("Styleguide/Layout", module);

stories.add(
  "Default",
  () =>
    ({
      components: { LayoutColumn, LayoutRow, BaseSection },
      template: `
        <base-section>
          <layout-row>
            <layout-column pinkx>
              <h1>Testing Heading</h1>
              <p>Deserunt amet magna sit irure laborum. Magna laboris veniam fugiat aute quis Lorem velit deserunt aliquip incididunt exercitation. In enim duis consequat deserunt veniam voluptate labore minim est. Incididunt ea mollit labore aute. Lorem velit commodo et laborum minim aliqua officia minim culpa deserunt. Excepteur reprehenderit commodo in sit nulla cupidatat sint ea et proident.</p>
            </layout-column>
            <layout-column purplex centered>
              <blockquote>
                <p>Enim commodo elit ex commodo quis irure sunt.</p>
              </blockquote>
              <cite>Randy Roberts</cite>
            </layout-column>
            <layout-column bluex>
              <ul>
                <li>Anim laborum nulla et tempor quis aliqua esse reprehenderit.</li>
                <li>Sint veniam aliquip excepteur exercitation consequat nulla sunt in aliqua amet ex ipsum.</li>
                <li>Incididunt cupidatat occaecat magna eiusmod non officia qui anim commodo.</li>
                <li>Enim laborum et culpa nostrud non veniam reprehenderit id nostrud velit nisi exercitation aliqua.</li>
                <li>Adipisicing anim eu aute tempor deserunt laborum aute culpa cupidatat ipsum anim.</li>
                <li>Aute laboris tempor exercitation exercitation sit deserunt veniam occaecat nulla et nostrud consectetur laboris occaecat.</li>
              </ul>
            </layout-column>
          </layout-row>
        </base-section>
      `
    } as object)
);
