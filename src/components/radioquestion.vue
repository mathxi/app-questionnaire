<template>
  <div>
    <h1>{{question.question}}</h1>
    <md-radio
      v-for="choice in question.choices"
      :key="choice.idResponse"
      v-model="choice.value"
      value="true"
      v-on:change="toogle(choice)"
    >{{choice.label}}</md-radio>
    <!-- <pre>{{question}}</pre> -->
  </div>
</template>
<script>
export default {
  name: "RadioQuestion",
  props: ["question"],
  created() {
    this.question.answer  = this.question.choices.find( choice => {
      return choice.value == "true"
    });

    if(this.question.answer.length != 0){
      console.log("J AI DEJA EU DES REPONSES");
      Object.assign(this.question.choices, this.question.answer)
      
    }
  },
  methods: {
    toogle(e) {
      e.value = "true";
      this.question.choices.forEach(choice => {
        if (choice.idChoice != e.idChoice) {
          choice.value = "false";
        }
      });
      this.question.answer = e;
    }
  }
};
</script>