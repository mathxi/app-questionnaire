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
  props: ["question"],
  created() {
    if (this.question.answer.length != 0) {
      console.log("J AI DEJA EU DES REPONSES");
      Object.assign(this.question.choices, this.question.answer);
    }
  }
};
</script>