<template>
  <form class="form" action>
    <base-input v-model="name" :placeholder="namePlaceholder">{{ nameLabel }}</base-input>
    <base-textarea v-model="message" :placeholder="messagePlaceholder" :label="messageLabel"/>
    <base-checkbox class="tos" v-model="tos" value="true">{{ tosLabel }}</base-checkbox>
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
  @Prop({ required: true }) namePlaceholder!: string;
  @Prop({ required: true }) messageLabel!: string;
  @Prop({ required: true }) messagePlaceholder!: string;
  @Prop({ required: true }) tosLabel!: string;
  @Prop({ required: true }) buttonLabel!: string;

  name = "";
  message = "";
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
