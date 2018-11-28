import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false;

/* ---------------------------------------------------------- */
import App from './App.vue'

import Dashboard from "./page/Dashboard";
import Table from "./page/Table";
import Contenido from "./page/Contenido";
import Novedades from "./page/Novedades";
import Nuevo from "./page/Nuevo";


const premisos = [1,2,3];
let rutasPash = [];



if (premisos.indexOf(1)){
  rutasPash.push({ 
    path: '/',              
    name: 'user',    
    component: Dashboard ,
    icon: 'fa-exclamation-triangle'
  });
}
if (premisos.indexOf(2)){
  rutasPash.push({ 
    path: '/stock',              
    name: 'Stock',    
    component: Dashboard,
    icon: 'fa-box'
  });
}
if (premisos.indexOf(3)){
  rutasPash.push({ 
    path: '/fabrica/', 
    name: 'Fabrica',    
    component: Table,
    children: [
      {
        path: 'resetas',
        name: 'Resetas',
        component: Contenido,
        icon: 'fa-exclamation-triangle'
      },{
        path: 'maquinaria',
        name: 'Maquinaria',
        component: Contenido,
        icon: 'fa-exclamation-triangle'
      }
    ],
    icon: 'fa-cubes'
  });
}
if (premisos.indexOf(4)){
  rutasPash.push({ 
    path: '/empleados/', 
    name: 'Empleados',    
    component: Nuevo,
    icon: 'fa-user',
    children: [
      {
        path: 'listado',
        name: 'Listado',
        component: Contenido,
        icon: 'fa-exclamation-triangle'
      },{
        path: 'nuevo',
        name: 'Nuevo',
        component: Contenido,
        icon: 'fa-exclamation-triangle'
      },{
        path: 'editar',
        name: 'Editar',
        component: Contenido,
        icon: 'fa-exclamation-triangle'
      },{
        path: 'imprimir',
        name: 'Imprimir',
        component: Contenido,
        icon: 'fa-exclamation-triangle'
      }
    ]
  });
}
if (premisos.indexOf(4)){
  rutasPash.push({ 
    path: '/Novedades/', 
    name: 'Novedades',    
    component: Novedades,
    icon: 'fa-newspaper'
  });
}
if (premisos.indexOf(4)){
  rutasPash.push({ 
    path: '/ayuda/', 
    name: 'Ayuda',    
    component: Novedades,
    icon: 'fa-hands-helping'
  });
}
/* ---------------------------------------------------------- */
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: rutasPash
})

/* ---------------------------------------------------------- */
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

const store = new Vuex.Store({
  state: {
    user: getCookie("FoxUser"),
    pass: getCookie("FoxPass"),
    id:   getCookie("FoxTocken")
  },
  mutations: {
    login (state, {name, pass, id, recordar}) {
      state.user  = name;
      state.pass  = pass;
      state.id    = id;
      if ( recordar ){
        setCookie( "FoxUser"   , name , 1 );
        setCookie( "FoxPass"   , pass , 1 );
        setCookie( "FoxTocken" , id   , 1 );
      }
    },
    logout (state) {
      state.user  = "";
      state.pass  = "";
      state.id    = "";
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');