<template>
  <div class="content">
    <base-section theme="dark">
      <layout-row reversed>
        <layout-column centered>
          <placeholder-graphic/>
        </layout-column>
        <layout-column centered>
          <animated-heading :level="1" v-bind="{ animatedList }">Build [[one%] Teams That [%two]]</animated-heading>
        </layout-column>
      </layout-row>
    </base-section>

    <base-section theme="grey" centered>
      <h2>Pricing</h2>
      <p>Nostrud ad reprehenderit veniam minim non laboris sit culpa tempor aliqua ipsum veniam Lorem.</p>
      <layout-row>
        <layout-column>
          <pricing-table
            identifier="copper_01"
            heading="Copper"
            text="The ideal plan for a small businesses that are just [[/getting_started|getting started]]."
            :price="35"
            frequency=" / month"
            button-label="Try Now"
          >
            <template v-slot:graphic>
              <copper-icon/>
            </template>
            <template v-slot:list>
              <ul>
                <li>1 Job</li>
                <li>50 One-Way Interviews</li>
                <li>10 User Seats</li>
                <li>Rating System</li>
                <li>Interview Tagging</li>
                <li>Company Profile</li>
                <li>Rejection Management</li>
                <li>Grandular User Permissions</li>
                <li>Question Bank</li>
                <li>Think Time</li>
              </ul>
            </template>
          </pricing-table>
        </layout-column>
        <layout-column>
          <pricing-table
            identifier="silver_01"
            heading="Silver"
            text="The ideal plan for a small businesses that are just getting started."
            :price="199"
            frequency=" / month"
            button-label="Try Now"
            promoted
          >
            <template v-slot:graphic>
              <silver-icon/>
            </template>
            <template v-slot:list>
              <ul>
                <li>5 Jobs</li>
                <li>Unlimtied One-Way Interviews</li>
                <li>25 User Seats</li>
                <li>Rating System</li>
                <li>Interview Tagging</li>
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
        </layout-column>
        <layout-column>
          <pricing-table
            identifier="gold_01"
            heading="Gold"
            text="The ideal plan for a small businesses that are just getting started."
            :price="485"
            frequency=" / month"
            button-label="Try Now"
          >
            <template v-slot:graphic>
              <gold-icon/>
            </template>
            <template v-slot:list>
              <ul>
                <li>Unlimted Jobs</li>
                <li>Unlimtied One-Way Interviews</li>
                <li>50 User Seats</li>
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
        </layout-column>
      </layout-row>
    </base-section>

    <base-section theme="grey" centered skinny>
      <h3>All Features</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Copper</th>
            <th>Silver</th>
            <th>Gold</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unlimited Jobs</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>Unlimited One-Way Interviews</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>50 User Seats</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>Branding</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>Rating System</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>Interview Tagging</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>Company Profile</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>Rejection Management</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>Grandular User Permissions</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>Company Intro Video</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>Company Outro Video</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>Question Bank</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>Custom Questions</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
          <tr>
            <td>Think Time</td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
            <td>
              <checkmark-icon/>
            </td>
          </tr>
        </tbody>
      </table>
    </base-section>

    <base-section theme="grey" centered skinny>
      <h2>Add Ons</h2>
      <pricing-card v-bind="{ ...addons.support }" horizontal>
        <base-button large tertiary>{{addons.support.buttonLabel}}</base-button>
      </pricing-card>
    </base-section>

    <base-section theme="dark" layout="short" centered skinny>
      <h2>14 Day Free Trial</h2>
      <p>No Credit Card Required</p>
      <layout-row>
        <layout-column>
          <feature-tile-horizontal v-bind="trialPromo.startedInMinutes"/>
        </layout-column>
        <layout-column>
          <feature-tile-horizontal v-bind="trialPromo.cancelAnytime"/>
        </layout-column>
      </layout-row>
      <hero-signup v-bind="{ ...trialSignup }"/>
    </base-section>

    <base-section theme="light" centered skinny>
      <h2>Common Questions</h2>
      <base-expander :heading="faq.one.question" expanded>
        <p>{{faq.one.answer}}</p>
      </base-expander>
      <base-expander :heading="faq.two.question">
        <p>{{faq.two.answer}}</p>
      </base-expander>
      <base-expander :heading="faq.three.question">
        <p>{{faq.three.answer}}</p>
      </base-expander>
      <base-expander :heading="faq.four.question">
        <p>{{faq.four.answer}}</p>
      </base-expander>
      <base-expander :heading="faq.five.question">
        <p>{{faq.five.answer}}</p>
      </base-expander>
      <base-button class="more-questions" to="/faqs" tertiary small>More Questions</base-button>
    </base-section>

    <base-section theme="light" centered skinny>
      <h2>Here to Help</h2>
      <contact-form v-bind="contactForm"/>
    </base-section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Jsonld } from "nuxt-jsonld";
import AnimatedHeading from "~/components/AnimatedHeading.vue";
import BaseButton from "~/components/BaseButton.vue";
import BaseExpander from "~/components/BaseExpander.vue";
import BaseSection from "~/components/BaseSection.vue";
import ContactForm from "~/components/ContactForm.vue";
import FeatureTileHorizontal from "~/components/FeatureTileHorizontal.vue";
import HeroSignup from "~/components/HeroSignup.vue";
import LayoutColumn from "~/components/LayoutColumn.vue";
import LayoutRow from "~/components/LayoutRow.vue";
import PricingCard from "~/components/PricingCard.vue";
import PricingTable from "~/components/PricingTable.vue";
import CheckmarkIcon from "~/assets/svg/checkmark.svg";
import CopperIcon from "~/assets/svg/medals/copper.svg";
import SilverIcon from "~/assets/svg/medals/silver.svg";
import GoldIcon from "~/assets/svg/medals/gold.svg";
import PlaceholderGraphic from "~/assets/svg/placeholder.svg";

@Jsonld
@Component({
  components: {
    AnimatedHeading,
    BaseButton,
    BaseExpander,
    BaseSection,
    ContactForm,
    FeatureTileHorizontal,
    HeroSignup,
    LayoutColumn,
    LayoutRow,
    PricingCard,
    PricingTable,
    CheckmarkIcon,
    CopperIcon,
    SilverIcon,
    GoldIcon,
    PlaceholderGraphic
  }
})
export default class extends Vue {
  animatedList = {
    one: ["Collaborative", "Insightful", "Quality", "Thoughtful", "Innovative"],
    two: ["Deliver&nbsp;Quickly", "Solve&nbsp;Problems", "Take&nbsp;Ownership"]
  };

  contactForm = {
    nameLabel: "Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email",
    emailPlaceholder: "john.doe@example.com",
    messageLabel: "Message",
    messagePlaceholder: "What can we help you with?",
    tosLabel: "I agree to the [[/terms|Terms of Services]].",
    buttonLabel: "Send"
  };

  faq = {
    one: {
      question:
        "Non ad veniam consequat nisi mollit nostrud tempor anim consectetur fugiat.",
      answer:
        "Ex sunt qui ex officia non ex occaecat velit ut. Veniam quis incididunt quis laborum ea laborum deserunt pariatur. Do irure cillum ut aliqua aliquip. Anim magna occaecat consequat dolore occaecat nostrud occaecat in ut non excepteur laborum. Cupidatat deserunt est voluptate fugiat dolore deserunt esse eu quis nostrud sint dolore duis. Voluptate id fugiat dolore velit magna Lorem do fugiat aliqua."
    },
    two: {
      question:
        "Adipisicing qui sit eiusmod consectetur minim consectetur aliqua Lorem commodo ipsum id.",
      answer:
        "Qui nisi cupidatat laboris eiusmod ex non occaecat ad laborum enim mollit. Ex consequat eiusmod esse officia ea sit. Sunt labore ea culpa sit anim aliquip quis. Id occaecat occaecat proident culpa aute ea elit non reprehenderit excepteur quis ex. Culpa quis do amet sint ipsum exercitation sit deserunt officia. Lorem duis incididunt in sit id adipisicing ipsum fugiat est exercitation culpa nostrud."
    },
    three: {
      question:
        "Proident magna amet tempor voluptate aute commodo elit nulla velit.",
      answer:
        "Aliqua voluptate aliqua anim in aliqua non. Tempor occaecat cillum eiusmod consectetur do culpa. Qui ea anim aliqua est Lorem exercitation."
    },
    four: {
      question:
        "Magna nisi pariatur voluptate ullamco reprehenderit magna sunt ea velit in aliqua.",
      answer:
        "Nostrud incididunt fugiat esse laboris ex eiusmod. Amet deserunt aliqua qui ullamco sint dolore quis nostrud esse. Adipisicing nisi nulla veniam ea nulla Lorem enim cillum qui cupidatat esse adipisicing. Id non aliquip esse anim. Eiusmod reprehenderit labore aliqua fugiat cillum adipisicing sint. Pariatur dolore ipsum voluptate irure velit consectetur enim Lorem aute dolore fugiat magna occaecat. Nostrud qui aliqua officia aliquip incididunt aliqua nostrud aliquip et."
    },
    five: {
      question:
        "Deserunt sunt magna reprehenderit eiusmod anim proident ut Lorem ad duis cillum minim anim.",
      answer:
        "Eiusmod id consectetur do sunt. Eiusmod nulla sunt culpa esse ad nulla nisi. Dolor laborum amet voluptate irure aliqua sit et et nostrud tempor non. Eiusmod culpa do consequat et Lorem commodo."
    }
  };

  addons = {
    support: {
      preText: "Priorty Support",
      postText: "Email, Slack, and Live Chat",
      curreny: "$",
      frequency: " / monthly",
      price: 199,
      buttonLabel: "Add Support"
    }
  };

  trialSignup = {
    emailLabel: "Your email address",
    buttonLabel: "Try Now"
  };

  trialPromo = {
    startedInMinutes: {
      heading: "Get Started in Minutes",
      text: "Change how you screen candidates in just a minutes.",
      level: 3
    },
    cancelAnytime: {
      heading: "Cancel Anytime",
      text: "We make it painless to signup and never lock you in.",
      level: 3
    }
  };

  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: "https://www.culturescreen.io",
      logo: "https://www.culturescreen.io/logo.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-401-555-1212",
          contactType: "customer service"
        }
      ]
    };
  }
}
</script>

<style scoped>
.more-questions {
  margin: 4rem auto 0;
  display: block;
  width: 12rem;
}

.hero-signup {
}
</style>
