<template>
    <NavBar login = 0 />

    <div class="container">
        <div class="container-busqueda">
            <Campo label = "Buscar" id="buscar"/>
        </div>
        <div>
            <button @click="buscar()">Buscar</button>
        </div>

        <div class="container-table">
            <table>
                <thead>
                    <tr>
                        <th>Industria</th>
                        <th>Cant. Vendida</th>
                        <th>Cant. Producida</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import NavBar from  '@/components/NavBar.vue';
import Campo from '@/components/Campo.vue';
import { mapActions } from 'vuex';
export default{
    name: "Ministerio",
    components:{
        NavBar,
        Campo
    },
    data(){
        return{
            registros:[]
        }
    },
    methods:{
        ...mapActions([
            "getEstadisticas"
        ]),
        async buscar(){
            const valor = document.querySelector("#buscar").value;
            const estadisticas = await this.getEstadisticas(valor);
            console.log(estadisticas)

            const tbody = document.querySelector("tbody");
            tbody.innerHTML = "";
            for(var i = 0; i < estadisticas.length; i++){
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var td3 = document.createElement("td");
                var txt1 = document.createTextNode(estadisticas[i].nombre);
                var txt2 = document.createTextNode(estadisticas[i].cantV);
                var txt3 = document.createTextNode(estadisticas[i].cantP);

                td1.appendChild(txt1);
                td2.appendChild(txt2);
                td3.appendChild(txt3);

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);

                tbody.appendChild(tr);
            }
        }
    }

}
</script>
<style scoped>
    .container{
        max-width: 1000px;
        margin: 0 auto;
    }
    .container-busqueda{
        margin-top: 60px;
        margin-bottom: 30px;
    }


    table{
        background: #fff;
        text-align: center;
        width: 100%;
        border-collapse: collapse;

    }

    th, td{
        padding: 7px;
    }
    thead{
        background: #37bbed;
        color: #fff;

    }

    tr:hover td{
        background: rgb(241, 241, 241);
    }
    tr{
        border-bottom: 1px solid rgba(0,0,0, 0.2);
    }

    button{
        background: #1bbb1f;
        padding: 10px 40px;
        border-radius: 25px;
        color: #fff;
        font-weight: 500;
        outline: none;
        transition: .03s;
        margin-bottom: 50px;
    }

    button:hover{
        background: #16d81c;
    }
</style>