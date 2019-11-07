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
        <md-button class="md-raised md-primary" @click="verifierInscription()">Commencer le test</md-button>
      </md-card-actions>
    </md-card>
    <md-snackbar md-position="center" :md-duration="mdDuration" :md-active.sync="showSnackbar">
      <span>Champs non correct</span>
      <md-button class="md-primary" @click="showSnackbar = false">Cacher</md-button>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    verifierInscription() {
      if (this.isConnected()) { // mixin in app.vue
        this.$router.push("questionnaire");
      } else {
        this.showSnackbar = true;
      }
    }
  },
  components: {},
  data() {
    return {
      showSnackbar: false,
      mdDuration: 1500
    };
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
