<template>
  <div class="home">
    <div class="center__elem">
      
    </div>
  </div>
</template>

<script>
import checkboxquestion from "../components/checkboxquestion.vue";
import radioquestion from "../components/radioquestion.vue";
import moment from "moment";
export default {
  name: "resultats",
  data() {
    return {
      currentSurvey: {
        //Permet de gérer le survey courant mais également la fin / début et question courrante et peut être des stats avec le temps passé
        startSurvey: moment().format("DD-MM-YYYY HH:mm"),
        survey: 0,
        question: 0,
        finished: false
      },
      surveys: [
        // liste des peut-être différents questionnaires
        {
          idSurvey: 1, // un questionnaire
          label: "Le survey badass",
          questions: [
            //Liste des question pour ce questionnaire
            {
              idQuestion: 1,
              type: "radio",
              question: "Est-tu beau?",
              choices: [
                //les choix pour cette question
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
              answer: [], // le / les object qui ont été répondu
              trueAnswer: [
                {
                  idChoice: 2,
                  label: "non",
                  value: "true"
                }
              ]
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
              answer: [], // le / les object qui ont été répondu
              trueAnswer: [
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
              ]
            }
          ]
        }
      ]
    };
  },
}
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
  padding-top: 50px;
  margin: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
