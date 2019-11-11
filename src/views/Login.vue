<template>
  <div class="login">
    <md-card class="card__login">
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>Prénom</label>
          <md-input class="inputLogin" v-model="$user.prenom" placeholder="Marc"></md-input>
        </md-field>
        <md-field>
          <label>Nom</label>
          <md-input class="inputLogin" v-model="$user.nom" placeholder="Janio"></md-input>
        </md-field>
        <md-field>
          <label>Entreprise</label>
          <md-input class="inputLogin" v-model="$user.entreprise" placeholder="C2C WorldWide"></md-input>
        </md-field>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-raised md-primary" @click="verifierInscription('questionnaire','Champs non remplis')">Commencer le test</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>

export default {
  name: "login",
  created(){
    console.log("Created snackbar",this.$store.state.globalMessage)
  },
  methods: {

  },
  computed:{
    getSnacBar(){
      return this.$store.state.globalMessage;
    }
  },
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.card__login {
  width: 500px;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.md-input {
  background-color: rgba(195, 195, 195, 0.2) !important;
  padding: 5px !important;
}
</style>
