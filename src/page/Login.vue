<template>
    <section class="hero login-cont is-fullheight" style=" margin: 0; border-radius: 0;">
        <div class="hero-body">
            <div class="container">
                <div class="login">
                    <img class="login-logo" src="./logo.svg">
                    <input  v-model="user" class="login-input input is-rounded" type="text" placeholder="Rounded input">
                    <input  v-model="pass" class="login-input input is-rounded" type="text" placeholder="Rounded input">
                    <label >
                        <input v-model="recordar" type="checkbox"> Remember me
                    </label>
                    <hr>
                    <div class="text-center">
                        <a class="button md-5">Registrar</a>
                        <a class="button md-5" @click="login()">Entrar</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            user:       null,
            pass:       null,
            id:         null,
            recordar:   null
        }
    },
    components: {
        
    },
    methods: {
        login () {
            this.id = 10;
            this.$store.commit('login', {
                name:       this.user,
                pass:       this.pass,
                id:         this.id,
                recordar:   this.recordar,
            });
        }
    }
};
</script>

<style>
    .login-logo{
        max-width: 100px;
        margin: 30px;
    }
    .login-cont{
        background-color: rgb(50, 115, 220);
        color: rgb(255, 255, 255);
        background-image: url("./bg.png");
    }
    .login {
        width: 100%;
        max-width: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: auto
    }
    .login-input {
        margin: 5px;
    }
    .text-center{
        display: flex;
        justify-content: center;

    }
    .md-5 {
        margin: 5px
    }
</style>
