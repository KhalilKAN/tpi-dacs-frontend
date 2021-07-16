<template>
    <div class="container-card">
        <h1>Periodo: {{reportes.periodo.month}}/{{reportes.periodo.year}}</h1>
        <span>Fecha de carga: {{reportes.date_upload.replaceAll("-", "/").substring(0,10)}}</span>
        <div class="acordeon">
            <div class="acordeon_item">
                <input type="checkbox" :id="id">
                <label :for="id" class="acordeon_titulo">Productos</label>
                <div class="contenido">
                    <!-- {{reportes[0].report[0].listaRegistro[0].denominacion}} -->
                    <div class="producto" v-for="(producto, i) in reportes.listaRegistro" :key="i">
                        <p><span>Denominacion:</span> {{producto.denominacion}}</p>
                        <p><span>Codigo EAN:</span> {{producto.codigo_ean}}</p>
                        <p><span>Precio Unitario:</span> ${{producto.precio_unidad}}</p>
                        <p><span>Unidad Medida:</span> {{producto.unidad_medida}}</p>
                        <p><span>Cantidad Producida:</span> {{producto.cantidad_prod}}</p>
                        <p><span>Cantidad Vendida:</span> {{producto.cantidad_vend}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex">

            <div class="botonera">
                <div>
                    <button class="btn-editar" @click="editarReporte(reportes._id)">Editar</button>
                </div>
                <!-- <div>
                    <button class="btn-eliminar">Eliminar</button>
                </div> -->
            </div>

            <div class="acordeon2">
                <input type="checkbox" :id="id2">
                    <label :for="id2" class="acordeon_titulo2">Eliminar</label>
                    <div class="contenido">
                        <span>¿Estas seguro?</span>
                        <div class="container-btn-eliminar">
                            <button class="btn-eliminar" @click="eliminarReporte(reportes._id)">Confirmar</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "Card",
    props:[
        "id",
        "id2",
        "reportes"
    ],
    methods:{
        ...mapActions([
            "deleteReport"
        ]),
        editarReporte(id){
            // this.$router.push(`/reportes/actualizar/${id}`);
            window.location = `/reportes/actualizar/${id}`;
        },
        async eliminarReporte(id){
            const status = await this.deleteReport(id);
            if(status == 200){
                window.location = "/reportes";
            }
        }
    }
}
</script>

<style lang="postcss" scoped>
    .container-card{
        background: #fff;
        border-radius: 7px;
        padding: 25px;
        box-shadow: 10px 10px 47px -12px rgba(0,0,0,0.2);
        -webkit-box-shadow: 10px 10px 47px -12px rgba(0,0,0,0.2);
        -moz-box-shadow: 10px 10px 47px -12px rgba(0,0,0,0.2);
    }
    .acordeon{
        /* background: olive; */
    }
    .acordeon input{
        display: none;
    }

    .acordeon2 input{
        display: none;
    }

    .acordeon_titulo{
        display: block;
        padding: 15px;
        margin-top: 15px;
        background: #37bbed;
        color: #fff;
        cursor: pointer;
        text-align: center;
    }
    .acordeon_titulo2{
        display: inline-block;
        width: 150px;
        padding: 10px 25px;
        background: rgb(251, 5, 5);
        color: #fff;
        cursor: pointer;
        text-align: center;
    }

    .acordeon_titulo:hover{
        background: #51c8f3;
    }

    .contenido{
        max-height: 0;
        overflow: hidden;
        margin: 0;
        transition: ease-in-out 0.4s;
    }

    .contenido p{
        display: block;
    }

    .contenido span{
        font-weight: 700;
    }

    .acordeon input:checked ~ .contenido{
        max-height: 5000px;
        margin: 15px 0;
    }
    .acordeon2 input:checked ~ .contenido{
        max-height: 5000px;
        margin: 15px 0;
    }

    .producto{
        margin-top: 25px;
    }

    .botonera{
        display: flex;
        justify-content: space-between;
    }

    button{
        padding: 10px 25px;
        width: 150px;
        outline: none;
        color: #fff;
    }

    .btn-editar{
        background: #0d7cfa;
        
    }
    .btn-editar:hover{
        background: #348ff8;
        
    }
    .container-btn-eliminar{
        margin-top: 20px;
    }
    .btn-eliminar{
        background: rgb(251, 5, 5);
    }
    .btn-eliminar:hover{
        background: rgb(251, 75, 75);
    }

    .flex{
        display: flex;
    }
</style>