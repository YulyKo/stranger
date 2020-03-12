<template>
    <form id="form" @submit="addUser">
        <ul v-if="errors">
            <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        <label for="login">Login</label>
        <input v-model="user.login" id="login" type="text">
        <label for="name">Name</label>
        <input v-model="user.name" id="name" type="text">
        <label for="birthday">Birthday</label>
        <input v-model="user.date_of_birth" id="birthday" type="date" data-date=""
               data-date-format="DD MM YYYY"
               value="2015-08-09" pattern="/^\d{2}-\d{2}$/">>
        <label for="password">Password</label>
        <input v-model="user.password" id="password" type="number" min="5">
        <input v-model="password_repeat" type="number" min="5" placeholder="password repeat">
        <button>Registration</button>
    </form>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Registration",
        data() {
            return {
                user: {
                    login: '',
                    name: '',
                    date_of_birth: '',
                    password: '',
                },
                password_repeat: '',
                errors: [],
            }
        },
        methods: {
            addUser() {
                if (this.checkError()) {
                    this.$store.dispatch('users_module/POST_USER_TO_API', this.user);
                }
                this.error = [];
            },
            checkError() {
                if (!(this.user.login.length >= 2) || this.user.login === '') this.errors.push('login is so shot');
                if (!(this.user.name.length >= 1) || this.user.name === '') this.errors.push('name is so shot');
                if ((this.user.password !== this.password_repeat)
                    || this.user.password === ''
                    || this.password_repeat === '') this.errors.push('passwords is not equals');
                if (!this.validDate() || !this.user.date_of_birth) this.errors.push('login is so shot');
                return this.errors.length === 0;
            },
            validDate() {
                const reg = /^\d{4}-\d{2}-\d{2}$/;
                console.log(this.user.date_of_birth);
                if (reg.test(this.user.date_of_birth)) return true;
            },
        },
        computed: {
            ...mapGetters({
                newUser: 'users_module/USER',
            }),
        },
    };
</script>

<style scoped>

</style>