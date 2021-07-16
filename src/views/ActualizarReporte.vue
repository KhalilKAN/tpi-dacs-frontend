<template>
    <NavBar login = 0 />
    <!-- <h1>Hola loco, como andas hijo de puta?</h1> -->

    <div class="titulo">
        <h1>Actualizar reporte</h1>
    </div>

    <div>
        <form id="formulario">
            
            <div class="producto">
                <Producto 
                    index="1"
                />
            </div>
            <div class="oculto" id="producto">
                <Producto 
                    :index=index
                />
            </div>



        </form>
        <div class="producto">
            <button @click="nuevoProducto()">+1 Producto</button>
        </div>
        <div class="producto">
            <button @click="crearReporte()">Actualizar</button>
        </div>
    </div>
</template>
<script>
import NavBar from  '@/components/NavBar.vue';

import Producto from '@/components/Producto.vue';
import { mapActions } from 'vuex';
export default {
    name: "NuevoReporte",
    components: {
        NavBar,
        Producto,
    },
    data(){
        return{
            index: 2,

        }
    },
    mounted(){
        if(!localStorage.getItem("token")){
            window.location = "/ingresar";
        }

    },
    methods:{
        ...mapActions([
            "putReports"
        ]),
        nuevoProducto(){
            this.index++;
            var formulario = document.querySelector("#formulario");
            var clon = document.querySelector("#producto");
            clon = clon.cloneNode(true);
            clon.classList.add("producto");
            clon.classList.remove("oculto");
            formulario.appendChild(clon);
        },
        async crearReporte(){

            const denominacion = document.querySelectorAll(".class_denominacion > input");
            const codigo_ean = document.querySelectorAll(".class_ean > input");
            const precio_unitario = document.querySelectorAll(".class_pre_uni > input");
            const unidad_medida = document.querySelectorAll(".class_uni_med > input");
            const cantidad_prod = document.querySelectorAll(".class_cant_prod > input");
            const cantidad_vend = document.querySelectorAll(".class_cant_vend > input");

            var lista_registro = [];
            for( var i = 0; i < denominacion.length; i++){
                if(i != 1){ //ignora la segunda posicion ya que es el elemento oculto
                    lista_registro.push({
                        "denominacion"      : denominacion[i].value,
                        "codigo_ean"        : codigo_ean[i].value,
                        "precio_unidad"     : precio_unitario[i].value,
                        "unidad_medida"     : unidad_medida[i].value,
                        "cantidad_prod"     : cantidad_prod[i].value,
                        "cantidad_vend"     : cantidad_vend[i].value,
                    });
                }
            }

            // const data = {
            //     "infoEmpresa" : {
            //         "cuit" : localStorage.getItem("cuit"),
            //         "razon_social": localStorage.getItem("razon_social")
            //     },
            //     "listaRegistro": lista_registro,
            //     "periodo":{
            //         "year": year,
            //         "month": mes
            //     }
            // };

            lista_registro.push(this.$route.params.id);
            console.log(this.$route.params.id);
            const status = await this.putReports(lista_registro);
            if(status == 200){
                this.$router.push("/reportes");
            }
        }
    }
}
</script>
<style scoped>
    .titulo{
        margin: 50px 0 ;
        font-size: 30px;
    }
    .campo{
        margin: 50px 0;
    }
    .producto, .campo, .titulo{
        max-width: 1000px;
        margin: 50px auto;
    }
    .oculto{
        display: none;
    }
    button{
        background: #1bbb1f;
        padding: 10px 40px;
        border-radius: 25px;
        color: #fff;
        font-weight: 500;
        outline: none;
        transition: .03s;
        /* margin-bottom: 260px; */
    }

    button:hover{
        background: #16d81c;
    }
</style>
