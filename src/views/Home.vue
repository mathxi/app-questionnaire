<template>
  <div class="home"></div>
</template>

<script>
import router from "../router";
import checkboxquestion from "../components/checkboxquestion.vue";
import radioquestion from "../components/radioquestion.vue";
import moment from "moment";
import pouchdb from "pouchdb";

var db = new pouchdb("QuestionnaireApp");

export default {
  name: "home",
  mounted() {
    const idUser = this.idUser;
    db.get(idUser)
      .then(doc => {
        this.user = doc;
        console.log("doc= ", this.user);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  computed: {},
  created() {},
  methods: {},
  data() {
    return {
      idUser:'MathieuJanioSurveyBadass',
      user: {
        _id: this.idUser,
        name: "Mathieu",
        surname: "Janio",
        compagny: "SurveyBadass",
        surveys: [
          {
            idSurvey: "", // un questionnaire
            label: "",
            questions: []
          }
        ]
      }
    };
  }
};
</script>

<style lang='scss'>
</style>
