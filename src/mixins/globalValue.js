export const globalValue = {
    created() {
        console.log("created !")
    },
    methods: {
        M_isConnected() {
            if (
                this.$user.prenom != "" &&
                this.$user.nom != "" &&
                this.$user.entreprise != ""
            ) {
                return true;
            } else {
                return false;
            }
        }
    },
    data() {
        return {
            M_showSnackbar: false,
            M_mdDuration: 1500,
            M_message: ""
        };
    }
}