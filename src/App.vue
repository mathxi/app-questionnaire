<template>
  <div>
    <transition name="router-anim">
      <router-view v-if="logged" />
      <div v-else class="container__loader">
        <loader></loader>
      </div>
    </transition>
    <md-snackbar
      md-position="center"
      :style="snackBar.M_style"
      :md-duration="snackBar.M_mdDuration"
      :md-active.sync="snackBar.M_showSnackbar"
    >
      <span>{{snackBar.M_message}}</span>
      <!-- <md-button class="md-primary" @click="snackBar.M_showSnackbar = false">Cacher</md-button> -->
    </md-snackbar>

  </div>
</template> 

<script lang="ts">
import loader from "./components/Loader.vue";
export default {
  name: "appBase",
  data() {
    return {
      logged: false
    };
  },
  async created() {
    this.logged = false;
    if (this.$router.app.$route.name != "login") {
      if (await this.$store.dispatch("isConnected")) {
        this.logged = true;
      } else {
        this.$store.commit("updateSnackBar", {
          M_showSnackbar: true,
          M_mdDuration: 1500,
          M_style: "background-color: #bd4747;",
          M_message: "Non connecté"
        });
        this.$router.replace("/");
      }
    } else {
      this.logged = true;
    }
  },
  computed: {
    snackBar: {
      get() {
        return this.$store.getters.getSnackBar;
      }
    }
  },
  mounted() {},
  components: {
    loader
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

.container__loader {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

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
