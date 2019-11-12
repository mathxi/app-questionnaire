<template>
  <div>
    <h1>{{question.label}}</h1>
    <md-checkbox
      v-for="choice in question.choices"
      v-bind:key="choice.idResponse"
      v-model="choice.value"
      :disabled="disable"
    >{{choice.label}}</md-checkbox>
  </div>
</template>
<script>
export default {
  name: "CheckboxQuestion",
  props: ["question","disable"],
};
</script>