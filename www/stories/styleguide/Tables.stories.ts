import { storiesOf } from "@storybook/vue";
import sectionStates from "../decorators/sectionStates";

// Tables
const tables = storiesOf("Styleguide/Tables", module).addDecorator(sectionStates)

tables.add("Default", () => `
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Street Address</th>
        <th>City</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Maurice Weaver</td>
        <td>1844 Seban Ridge</td>
        <td>Popihmo</td>
        <td>Vatican City</td>
      </tr>
      <tr>
        <td>Belle Mendoza</td>
        <td>1530 Anona Manor</td>
        <td>Suwcowa</td>
        <td>Costa Rica</td>
      </tr>
      <tr>
        <td>Alejandro Washington</td>
        <td>227 Ludki Grove</td>
        <td>Hawecgan</td>
        <td>Caribbean Netherlands</td>
      </tr>
    </tbody>
  </table>
`);
