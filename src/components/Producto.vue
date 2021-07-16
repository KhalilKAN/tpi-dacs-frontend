<template>
    <div>
        <div class="titulo">
            <span>Producto {{index}}</span>
        </div>
        
        <div class="campo">
            <Campo label = "Denominación" class="class_denominacion" />
        </div>
        <div class="campo">
            <Campo label = "Código EAN" class="class_ean" />
        </div>
        <div class="campo">
            <Campo label = "Precio Unitario" class="class_pre_uni" />
        </div>
        <div class="campo">
            <Campo label = "Unidad de Medida" class="class_uni_med" />
        </div>
        <div class="campo">
            <Campo label = "Cantidad Producida" class="class_cant_prod" />
        </div>
        <div class="campo">
            <Campo label = "Cantidad Vendida" class="class_cant_vend" />
        </div>
    </div>    
</template>
<script>
import Campo from '@/components/Campo.vue';
export default{
    name: "Producto",
    components:{
        Campo
    },
    props:[
        // "class_denominacion",
        // "class_ean",
        // "class_pre_uni",
        // "class_uni_med",
        // "class_cant_prod",
        // "class_cant_vend",
        "index"

    ]

}
</script>
<style scoped>
    .titulo{
        margin-bottom: 40px;
        font-size: 20px;
    }
    .campo{
        margin-bottom: 35px;
    }
</style>
