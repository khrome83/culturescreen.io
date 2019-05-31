<template>
  <form class="form" action>
    <base-input id="cf-name" v-model="name" :placeholder="namePlaceholder" required>{{ nameLabel }}</base-input>
    <base-input
      id="cf-email"
      v-model="email"
      type="email"
      :placeholder="emailPlaceholder"
      required
    >{{ emailLabel }}</base-input>
    <base-textarea
      id="cf-message"
      v-model="message"
      :placeholder="messagePlaceholder"
      :label="messageLabel"
      required
    />
    <base-checkbox id="cf-checkbox" class="tos" v-model="tos" value="true">{{ tosLabel }}</base-checkbox>
    <base-button to="/action/submit">
      <template v-slot:post-icon>
        <send-icon aria-hidden="true" class="send-icon"/>
      </template>
      <template v-slot:default>{{ buttonLabel }}</template>
    </base-button>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import BaseCheckbox from "~/components/BaseCheckbox.vue";
import BaseInput from "~/components/BaseInput.vue";
import BaseTextarea from "~/components/BaseTextarea.vue";
import SendIcon from "~/assets/svg/send.svg";

@Component({
  components: {
    BaseButton,
    BaseCheckbox,
    BaseInput,
    BaseTextarea,
    SendIcon
  }
})
export default class ContactForm extends Vue {
  @Prop({ required: true }) nameLabel!: string;
  @Prop() namePlaceholder!: string;
  @Prop({ required: true }) emailLabel!: string;
  @Prop() emailPlaceholder!: string;
  @Prop({ required: true }) messageLabel!: string;
  @Prop() messagePlaceholder!: string;
  @Prop({ required: true }) tosLabel!: string;
  @Prop({ required: true }) buttonLabel!: string;

  name = "";
  message = "";
  email = "";
  tos = false;
}
</script>

<style scoped>
.form {
  display: block;
}

.tos {
  margin: 1rem 0 3rem;
}

.button .send-icon {
  margin-left: 1rem;
}
</style>
