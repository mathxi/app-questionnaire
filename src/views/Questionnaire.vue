<template>
  <div class="questionnaire">
    <div class="center__elem">
      <h1>Questionnaire de {{$user.prenom}}</h1>
      <md-card>
        <md-progress-bar class="md-accent" md-mode="determinate" :md-value="percentresponce"></md-progress-bar>
        <md-card-header>
          <div class="md-title">{{questionnaire.label}}</div>
          <div class="md-subhead">Total questions: {{questionnaire.questions.length}}</div>
        </md-card-header>
        <CheckboxQuestion
          v-bind:disable="false"
          :question="questionnaire.questions[curQuestionPosition() -1]"
        ></CheckboxQuestion>

        <md-card-actions>
          <md-button v-if="!isLastQuestion()" v-on:click="nextQuestion">Suivant</md-button>
          <md-button v-if="!isFirstQuestion()" v-on:click="precQuestion">Précédent</md-button>
          <md-button v-if="isLastQuestion()" v-on:click="endSurvey">Terminer</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import checkboxquestion from "../components/checkboxquestion.vue";
export default {
  name: "questionnaire",
  components: {}
};
</script>

<style lang="scss">
</style>
