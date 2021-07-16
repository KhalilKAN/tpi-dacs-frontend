<template>
    <NavBar login = 0 />
    <div class="btn">
        <button @click="redirigir()">Nuevo reporte</button>
    </div>
    
    <div class="container-reports" v-if="reportes!=null">
        <div class="report" v-for="(reporte, i) in reportes[0].report" :key="i">
            <Card :id="i" :id2="i+9999" :reportes="reporte"/>
        </div>

    </div>

    
</template>

<script>
import NavBar from  '@/components/NavBar.vue';
import Card from  '@/components/Card.vue';
import { mapActions } from 'vuex';

export default {
    name: "Reports",
    components: {
        NavBar,
        Card
    },
    data(){
        return {
            reportes:[
                {
                    "report":{
                        
                    }
                }
            ],

        }
    },
    mounted(){
        if(!localStorage.getItem("token")){
            window.location = "/ingresar";
        }

    },
    created(){
        this.obtenerReportes();
    },
    methods:{
        ...mapActions([
            "getReports"
        ]),
        async obtenerReportes(){
            this.reportes = await this.getReports();
        },
        redirigir(){
            window.location = "/reportes/nuevo";
        }
    }
    
}
</script>

<style lang="postcss" scoped>

    .container-reports{
        display: flex;
        flex-wrap: wrap;

    }

    .report{
        /* border-radius: 5px; */
        /* background: #fff; */
        margin: 5px;
        width: 350px;
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
        margin: 25px;
    }

    button:hover{
        background: #16d81c;
    }

    
</style>