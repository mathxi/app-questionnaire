<template>
  <div>
    <md-tabs md-sync-route class="md-primary" md-alignment="centered">
      <md-tab md-icon="home" md-label="Accueil" to="/" exact></md-tab>
      <md-tab md-icon="accessible_forward" md-label="Admin" to="/about"></md-tab>
    </md-tabs>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: #00818a,
    // The primary color of your brand
      accent: #8186d5 // The secondary color of your brand
  )
);

@import "~vue-material/dist/theme/all"; // Apply the themeyle>

</style>
