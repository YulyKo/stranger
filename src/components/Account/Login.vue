<template>
  <div id="form">
    <p>{{isAdmin}}</p>
    <ul v-if="errors">
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    <label for="login">Login</label>
    <input class="input" v-model="user.login" id="login" type="text">
    <label for="password">Password</label>
    <input class="input" v-model="user.password" id="password" type="number" min="5">
    <button @click="loginUser">Login</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        login: '',
        name: '',
        password: '',
      },
      errors: [],
    };
  },
  methods: {
    checkExistingUser() {
      this.allUsers.forEach((key) => {
        if (this.allUsers[key].login === this.user.login
              && this.allUsers[key].password_hash !== this.user.password) {
          this.errors.push('Wrong password');
        }
        if (this.user.login === this.allUsers[key].login) {
          this.user.name = this.allUsers[key].name;
          console.log(this.allUsers[key].name);
          console.log(this.allUsers[key].password_hash);
        }
      });
    },
    loginUser() {
      this.checkExistingUser();
      if (this.errors !== [] && this.user.name !== '') {
        this.$store.dispatch('user/LOGIN_USER_TO_APP', this.user.login, this.user.name);
      } else console.log(this.errors);

      this.errors = [];
      this.user = {
        login: '',
        name: null,
        password: '',
      };
    },
  },
  computed: {
    ...mapGetters({
      allUsers: 'users/USERS',
      isAdmin: 'user/IS_ADMIN',
    }),
  },
  beforeCreate() {
    this.$store.dispatch('users/GET_USERS_FROM_API', 'users_with_hash');
  },
};
</script>
