<template>
  <div>
    <transition name="router-anim">
      <router-view />
    </transition>
    <md-snackbar md-position="center" :md-duration="M_mdDuration" :md-active.sync="M_showSnackbar">
      <span>{{M_message}}</span>
      <md-button class="md-primary" @click="M_showSnackbar = false">Cacher</md-button>
    </md-snackbar>
  </div>
</template>

<script lang="ts">
export default {
  name: "appBase",
  mounted() {
  }
};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: #26959c,
    // The primary color of your brand
      accent: #8186d5 // The secondary color of your brand
  )
);

@import "~vue-material/dist/theme/all"; // Apply the themeyle>

.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 0.5s;
}

@keyframes going {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes coming {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
