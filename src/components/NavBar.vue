<template>
    <div class="nav-container">
        <nav>
            <div class="nav-content">

                <img src="../assets/img/logo_argentina-blanco.svg">
                <div v-if="login == 1" class="login">
                    <ul id="ul-menu">
                        <li class="btn"><router-link to="/registrar" class=""><span>Registrar</span></router-link></li>
                        <li class="btn"><router-link to="/ingresar" class=""><span>Ingresar</span></router-link></li>
                    </ul>
                    <label id="icon" class="btn" @click="toggle">
                        <i class="fi-rs-menu-burger"></i>
                    </label>
                </div>
                <div v-else>
                    <button class="btn-salir" @click="logout()">Salir</button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: [
        'login',
        'nombre'
    ],
    methods:{
        toggle(){
            document.querySelector("#ul-menu").classList.toggle("show");
        },
        logout(){
            localStorage.removeItem("token");
            window.location = "/ingresar";
        }
    }
}
</script>

<style lang="postcss" scoped>
    
    nav{
        @apply grid;
        height: 72px;
        width: 100%;
        background: #37bbed;
        z-index: 2;
    }
    .nav-content{
        max-width: 1200px;
        width: 100%;   
        margin: 0 auto;
    }

    nav img{
        position: relative;
        top: 17px;
        width: 200px;
        margin-left: 25px;
    }

    nav .btn{
        @apply px-4;
        height: 44px;
        background-color: #fff;
        border-radius: 30px;
        margin: 0 10px;
    }
    /* nav .btn a{
        width: 100%;
        height: 100%;
    } */
    nav #icon{
        display: block;
        float: right;
        cursor: pointer;
        position: relative;
        bottom: 25px;
        margin-right: 25px;
    }

    nav #icon i{
        position: relative;
        top: 9px;
        color:#0072c1;
        font-weight: 600;
        font-size: 20px;
    }

    nav ul{
        position: fixed;
        width: 100%;
        height: 150px;
        background: #37bbed;
        top: 72px;
        left:-100%;
        text-align: center;
        transition: .4s ease-in-out !important;
        z-index: 1000;
    }
    nav ul.show{
        left: 0px;
    }
    nav li{
        display: block;
        margin: 20px !important;
        
    }
    nav li span{
        position: relative;
        top: 9px;
        color:#0072c1;
        font-weight: 600;
        padding: 0 10px;
        
    }

    .btn-salir{
        float: right;
        position: relative;
        bottom: 30px;
        background: #fff;
        padding: 15px;
        border-radius: 30px;
        color: #0072c1;
        font-weight: 600;
    }

    @screen sm{
        .nav-content{
            width:90%;
        }
        nav img{
            position: relative;
            top: 10px;
            width: 254px;
        }
        nav ul{
            float: right;
            position: inherit;
            top:auto;
            left:auto;
            width: auto;
            height: auto;
            background: none;
            position: relative ;
            bottom: 56px ;
        }
    
        nav li{
            display: inline-block;
            margin: 0 8px;
        }

        nav #icon{
            display: none;
        }

        .btn-salir{
            float: right;
            position: relative;
            bottom: 40px;
            background: #fff;
            padding: 15px;
            border-radius: 30px;
            color: #0072c1;
            font-weight: 600;
        }
    }
</style>