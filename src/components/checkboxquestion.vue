<template>
  <div>
    <h1>{{question.question}}</h1>
    <md-checkbox
      v-for="choice in question.choices"
      v-bind:key="choice.idResponse"
      v-model="question.answer"
      :value="choice"
    >{{choice.label}}</md-checkbox>
    <pre>{{question}}</pre>
  </div>
</template>
<script>
export default {
  name: "CheckboxQuestion",
  props: ["question"]
};
</script>