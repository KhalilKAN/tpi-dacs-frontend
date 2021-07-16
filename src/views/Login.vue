<template>
    <NavBar login = 1 />

    <div class="container">
        <div class="row span-account">
            <h2>Ingresá a tu cuenta</h2>
        </div>

        <form>
            <div class="campo">
                <Campo label = "Email" id = "email"/>
            </div>
            <div class="campo">
                <Campo label = "Contraseña" pass = 1 id = "password" />
            </div>
            <div>
                <p>Si es un empleado del Ministerio de Desarrollo Productivo, haga click en la siguiente opción</p>
            </div>
            <div class="checkbox-ministerio">
                <input type="checkbox" id="empleado-ministerio">
                <label for="empleado-ministerio">Empleado de ministerio</label>
            </div>

        </form>

        <div class="btn">
            <button @click="ingresar()">Ingresar</button>
        </div>
    </div>

    <!-- <Footer /> -->
    
</template>

<script>
import NavBar from  '@/components/NavBar.vue';
import Campo from '@/components/Campo.vue';
import Footer from '@/components/Footer.vue';

import { mapActions } from 'vuex';

export default {
    name: "Login",
    components: {
        NavBar,
        Campo,
        Footer
    },
    mounted(){
        if(localStorage.getItem("token")){
            this.$router.push("/reportes");
        }
    },
    methods:{
        ...mapActions([
            "login"
        ]),
        async ingresar(){
            const check = document.querySelector("#empleado-ministerio");
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;
            const status = await this.login({
                email,
                password,
                "empleado": check.checked
            });

            if(status == 200){
                if(check.checked){
                    this.$router.push("/ministerio");
                }else{
                    this.$router.push("/reportes");
                }
            }
            
        }
    }
}
</script>

<style lang="postcss" scoped>
    .container{
        @apply grid;
        margin: 0 auto;
        max-width: 1200px;
        width: 90%; 
    }

    .span-account{
        padding: 25px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .span-account h2{
        font-size: 30px;
        font-weight: 700;
        color: #333333;
    }

    .text, .span-text, .checkbox label{
        color: #333333;
        font-weight: 500;
        margin: 20px 0;
    }

    form{
        margin-top: 40px;
    }

    .checkbox-ministerio{
        margin-top: 20px;
        margin-bottom: 25px;
    }
    .checkbox-ministerio label, .checkbox-ministerio input{
        margin: 10px;
        cursor: pointer;
    }

    .campo{
        width: 100%;
        margin-bottom: 60px;
    }

    button{
        background: #1bbb1f;
        padding: 10px 40px;
        border-radius: 25px;
        color: #fff;
        font-weight: 500;
        /* width: 100%; */
        outline: none;
        transition: .03s;
        margin-bottom: 260px;
    }

    button:hover{
        background: #16d81c;
    }
</style>
