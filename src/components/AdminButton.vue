
<template>
  <span>
    <md-button to="/admin" class="md-fab md-primary admin__button">
      <md-icon>security</md-icon>
    </md-button>
  </span>
</template>
<script>
export default {
  name: "AdminButton",
  computed: {
    admin: {
      get() {
        return this.$store.getters.getAdmin;
      },
      set(admin) {
        this.$store.commit("updateAdmin", admin);
      }
    }
  }
};
</script>

<style lang="scss">
.admin__button {
  position: fixed !important;
  top: 1%;
  left: 1%;
}
</style>