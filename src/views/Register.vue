<template>
    <NavBar login = 1 />

    <div class="container">
        <div class="span-account">
            <h2>Creá tu cuenta</h2>
        </div>

        <p class="text">Por favor completá estos datos para continuar</p>

        <form>
            
            <div class="campo">
                <Campo label = "CUIT" id = "cuit" />
            </div>

            <div class="campo">
                <Campo label = "Razón Social" id = "razon_social" />
            </div>

            <div class="campo">
                <Campo label = "Industria" id = "industria" />
            </div>
        

            <div class="campo">
                <Campo label = "Ciudad" id = "ciudad"/>
            </div>

            <div class="campo">
                <Campo label = "Teléfono" id = "telefono"/>
            </div>

            <div class="campo">
                <Campo label = "Correo Electrónico" id = "email" />
            </div>

            <div class="campo">
                <Campo label = "Contraseña" id = "password" 
                pass = 1
                />
            </div>
            

        </form>

        <div class="terminos-condiciones">
            <div class="span-terminos">
                <h3>Términos y condiciones</h3>
            </div>
            <div class="span-text">
                <p>Para crear tu cuenta es necesario que aceptes los <span>Términos y condiciones generales</span>.</p>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="check">
                <label for="check">Acepto términos y condiciones generales.</label>
            </div>
        </div>

        <div class="btn">
            <button @click="nuevaEmpresa()" >Crear cuenta</button>
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
    name: "Register",
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
            "createBusiness"
        ]),
        async nuevaEmpresa(){
            const cuit = document.querySelector("#cuit").value;
            const razon_social = document.querySelector("#razon_social").value;
            const industria = document.querySelector("#industria").value;
            const ciudad = document.querySelector("#ciudad").value;
            const tel = document.querySelector("#telefono").value;
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;

            const status = await this.createBusiness({
                cuit,
                razon_social,
                industria,
                ciudad,
                tel,
                email,
                password
            });

            if(status == 200){
                this.$router.push("/ingresar");
            }
        }
    }
    
}
</script>

<style scoped>
    *{
        font-family: 'Encode Sans', sans-serif;
    }
    .container{
        display: grid;
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

    /* .group{
        @apply grid grid-cols-3 gap-x-10;
    } */
    
    .campo{
        width: 100%;
        margin-bottom: 60px;
    }

    .terminos-condiciones{
        background: #f5f5f5;
        padding: 20px 25px;
        border-radius: 5px;
        border: 1px solid rgb(0, 0, 0, 0.2);
        margin-bottom: 60px;
    }

    .terminos-condiciones .span-terminos{
        font-size: 18px;
        font-weight: 600;
        color: #333333;
    }

    .terminos-condiciones .span-text span{
        text-decoration: underline;
        color: #0072bb;
        cursor: pointer;
    }

    .terminos-condiciones .checkbox label{
        margin-left: 10px;
        color: #707070;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
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
