<template>
    <section>
        <b-container>
        <b-form @submit.prevent="register()">
            
            <b-input type="email" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Email" name="email"  v-model="user.email"> </b-input>
            <label for="inline-form-input-password"> </label>
            <b-input type="password" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Password" name="password"  v-model="user.password.first"></b-input>
            <label for="inline-form-input-lastName"> </label>
            <b-input type="lastname" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Lastname" name="lastName" id="lastName" v-model="user.lastName"></b-input>
            <label for="inline-form-input-firstName"> </label>
            <b-input type="firstname" class="mb-2 mr-sm-2 mb-sm-0" placeholder="FirstName" name="firtsName" id="firstName" v-model="user.firstName"></b-input>
            <button>Sign up</button>
        </b-form>
        </b-container>
        <p v-if="message">{{message}}</p>
    </section>
</template>

<script>
import { Auth } from "@/services/auth";

export default {
    data() {
        return {
            user: {
                email: '',
                password: {
                    first: ''
                },
                lastName: "",
                firstName: "",
            },
            message: ''
        }
    },
    methods: {
        register() {
            let auth = new Auth();
            auth.register(this.user)
            .then(() => this.message = 'You have been registered')
            .catch(errors => this.message = errors);
            
        }
    }

}
</script>

<style>

</style>
