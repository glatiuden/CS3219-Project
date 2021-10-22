import _ from "lodash";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      loading: "user/loading",
      user: "user/user",
      has_user: "user/has_user",
    }),
  },

  methods: {
    ...mapActions({
      GET_USER: "user/GET_USER",
      CREATE_USER: "user/CREATE_USER",
      LOGIN_USER: "user/LOGIN_USER",
    }),

    ...mapMutations({
      SET_LOADING: "user/SET_LOADING",
    }),
  },
};
