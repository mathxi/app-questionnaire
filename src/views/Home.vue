<template>
  <div class="home">
    <div class="center__elem">
      <!-- <template v-for="question in surveys[0].questions">
        <RadioQuestion
          v-if="question.type === 'radio'"
          :key="question.idQuestion"
          :question="question"
        ></RadioQuestion>
        <CheckboxQuestion
          v-else-if="question.type === 'checkbox'"
          :key="question.idQuestion"
          :question="question"
        ></CheckboxQuestion>
      </template>-->
      <md-card>
        <md-card-header>
          <div class="md-title">{{surveys[currentSurvey.survey].label}}</div>
          <div
            class="md-subhead"
          >Total questions: {{surveys[currentSurvey.survey].questions.length}}</div>
        </md-card-header>

        <RadioQuestion
          v-if="surveys[currentSurvey.survey].questions[currentSurvey.question].type === 'radio'"
          :question="surveys[currentSurvey.survey].questions[currentSurvey.question]"
        ></RadioQuestion>
        <CheckboxQuestion
          v-else-if="surveys[currentSurvey.survey].questions[currentSurvey.question].type === 'checkbox'"
          :question="surveys[currentSurvey.survey].questions[currentSurvey.question]"
        ></CheckboxQuestion>

        <md-card-actions>
          <md-button v-on:click="nextQuestion">Suivant</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import checkboxquestion from "../components/checkboxquestion.vue";
import radioquestion from "../components/radioquestion.vue";
import moment from "moment";
export default {
  name: "home",
  methods: {
    nextQuestion: function() {
      if (this.currentSurvey.question + 1 === this.surveys[this.currentSurvey.survey].questions.length) {
        this.finished = true;
      } else {
        this.currentSurvey.question++;
      }
    }
  },
  data() {
    return {
      currentSurvey: {
        startSurvey: moment().format("DD-MM-YYYY HH:mm"),
        survey: 0,
        question: 0,
        finished: false
      },
      surveys: [
        {
          idSurvey: 1,
          label: "Le survey badass",
          questions: [
            {
              idQuestion: 1,
              type: "radio",
              question: "Est-tu beau?",
              choices: [
                {
                  idChoice: 1,
                  label: "oui",
                  value: "false"
                },
                {
                  idChoice: 2,
                  label: "non",
                  value: "true"
                }
              ],
              answer: []
            },
            {
              idQuestion: 2,
              type: "checkbox",
              question: "Quesque tu aime?",
              choices: [
                {
                  idResponse: 1,
                  label: "Pâte Carbonara",
                  value: "false"
                },
                {
                  idChoice: 2,
                  label: "Pâtes bolo",
                  value: "false"
                },
                {
                  idChoice: 3,
                  label: "Pâtes bolo",
                  value: "false"
                }
              ],
              answer: []
            }
          ]
        }
      ]
    };
  },
  components: {
    CheckboxQuestion: checkboxquestion,
    RadioQuestion: radioquestion
  }
};
</script>

<style lang='scss'>
.md-card {
  width: 700px;
  padding: 20px;
}

.md-checkbox {
  display: flex;
}
.center__elem {
  margin: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
