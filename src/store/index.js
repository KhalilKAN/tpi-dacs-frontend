import { createStore } from 'vuex'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    createBusiness: async (state, data) => {
      const url = "https://ministeriodesarrolloproductivo.herokuapp.com/api/signup";
      const parametros = {
        method:"POST",
        headers:{
          "Content-Type": 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
      };

      var res = await fetch(url, parametros);
      const status = res.status;
      var respuesta = await res.json()
      console.log(respuesta);
      console.log(data);
      if(status == 200){
        const token = await res.headers.get("token");
        localStorage.setItem("token", token);
      }      

      return status;
    },

    login: async (state, data) =>{
      if(data.empleado){
        var url = "https://ministeriodesarrolloproductivo.herokuapp.com/api/loginMinisterio";
      }else{
        var url = "https://ministeriodesarrolloproductivo.herokuapp.com/api/login";
      }
      const parametros = {
        method:"POST",
        mode: "cors",
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
      };

      const res = await fetch(url, parametros);
      const status = res.status;
      if(status == 200){
        if(!data.empleado){
          const token = await res.headers.get("token");
          const data = await res.json();
          localStorage.setItem("token", token);
          localStorage.setItem("cuit", data.cuit);
          localStorage.setItem("razon_social", data.razon_social);
        }
      }      

      return status;
    },

    getReports: async (state) =>{
      const url = "https://ministeriodesarrolloproductivo.herokuapp.com/api/reports";
      const parametros = {
        method:"GET",
        mode: "cors",
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
          'token' : localStorage.getItem("token")
        }
      };
      const res = await fetch(url, parametros);
      const data = await res.json();
      // const status = res.status; 
      return data;
    },

    postReports: async (state, data) =>{
      const url = "https://ministeriodesarrolloproductivo.herokuapp.com/api/reports";
      const parametros = {
        method:"POST",
        mode: "cors",
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
          'token' : localStorage.getItem("token")
        },
        body: JSON.stringify(data)
      };
      
      const res = await fetch(url, parametros);
      return res.status;
    },

    putReports: async (state, data) =>{
      const url = "https://ministeriodesarrolloproductivo.herokuapp.com/api/reports/" + data[data.length-1];
      data.pop();
      const parametros = {
        method:"PUT",
        mode: "cors",
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
          'token' : localStorage.getItem("token")
        },
        body: JSON.stringify(data)
      };
      
      const res = await fetch(url, parametros);
      return res.status;
    },
    deleteReport: async (state, id) => {
      const url = "https://ministeriodesarrolloproductivo.herokuapp.com/api/reports/" + id;
      const parametros = {
        method:"DELETE",
        mode: "cors",
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
          'token' : localStorage.getItem("token")
        }
      };

      const res = await fetch(url, parametros);
      return res.status;
    },
    getEstadisticas: async (state, year) =>{
      const url = "https://ministeriodesarrolloproductivo.herokuapp.com/api/estadisticas?year=" + year;
      const parametros = {
        method:"GET",
        mode: "cors",
        headers:{
          'Content-type': 'application/json; charset=UTF-8'
        }
      };

      const res = await fetch(url, parametros);
      const data = await res.json();
      return data;
    }
  },
  modules: {
  }
})
