<template>
<section class="section ">

    <div class="hero is-primary" >
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Producto X
            </h1>
            <h2 class="subtitle">
              Informacion
            </h2>
          </div>
        </div>
      </div>
      <nav class="level is-mobile">
        <div v-for="d in Datos" :key="d.id" class="level-item has-text-centered">
          <div class="tooltip is-tooltip-bottom" :data-tooltip="d.descripcion">
            <p class="heading">{{d.titulo}}</p>
            <p class="title">{{d.valor}}</p>
          </div>
        </div>
      </nav>

    <nav class="level">
        <!-- Left side -->
        <div class="level-left">
            <div class="level-item">
                <div class="field has-addons">
                    <p class="control">
                        <input class="input" type="text" placeholder="Find a post">
                    </p>
                    <p class="control">
                        <button class="button">
                            Search
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </nav>
    <table class="table customize is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th v-for="c in table.cavezera" :key="c"  ><abbr title="Position">{{c}}</abbr></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(d, iRegistro) in datoQuery" :key="iRegistro" >
                <td  v-for="(n, iDato) in table.imprimir" :key="iDato" >{{d[n]}}</td>
            </tr>
        </tbody>
    </table>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <a @click="pasarPagina(table.offset - table.size)" class="pagination-previous">Previous</a>
        <a @click="pasarPagina(table.offset + table.size)" class="pagination-next">Next page</a>
        <ul class="pagination-list">
            <li @click="pasarPagina(0)" v-if="((table.offset / table.size) - 2) >= 1"><a class="pagination-link" aria-label="Goto page 0" data-page="0">0</a></li>
            
            <li v-if="((table.offset / table.size) - 1) >= 1" ><span class="pagination-ellipsis">&hellip;</span></li>
            
            <li @click="pasarPagina(table.offset - table.size)" v-if="(table.offset / table.size) > 1"><a class="pagination-link" aria-label="Goto page 45">{{ (table.offset / table.size) - 1 }}</a></li>
            <li @click="pasarPagina(table.offset)" v-on:click="reloderTable"><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">{{ (table.offset / table.size) }}</a></li>
            <li @click="pasarPagina(table.offset + table.size)" v-if="(table.offset / table.size) < (table.count / table.size)" ><a class="pagination-link" aria-label="Goto page 47">{{ (table.offset / table.size) + 1 }}</a></li>
            
            <li v-if="(table.offset / table.size) + 2 < (table.count / table.size)"><span class="pagination-ellipsis">&hellip;</span></li>
            
            <li @click="pasarPagina(table.count - table.size)" v-if="(table.offset / table.size) + 1 < (table.count / table.size)"><a class="pagination-link" :aria-label="'Goto page' + table.count / table.size">{{table.count / table.size}}</a></li>
        </ul>
    </nav><div id="example-1">
</div>
                    </section>
</template>

<script>
export default {
  name: "Table",
  data () {
        return {
            Datos: [
                {
                    "id": 0,
                    "titulo": "Local",
                    "descripcion": "Stock existe fisicamente en el local",
                    "valor":-100
                }, {
                    "id": 1,
                    "titulo": "Total",
                    "descripcion": "Total",
                    "valor":-2000
                }, {
                    "id": 2,
                    "titulo": "Reserbado",
                    "descripcion": "Reserbado",
                    "valor":0
                }, {
                    "id": 3,
                    "titulo": "Disponible",
                    "descripcion": "Disponible",
                    "valor":400
                }
            ],
            table: {
                size: 20,
                offset: 200,
                count: 200,
                filtro: "",
                cavezera: ["Nombre","C.I.","Tel.","Compras", "Fecha"],// caveseras de la tabla
                imprimir: ["name","ci","tel","compra", "fecha"],//Valores de la tabla que quierop imprimir y en el orden en que lo quiero
            },
            datoQuery: [// datos que tengo de la api
                {
                    id:0,
                    name: "pedro",
                    ci: "1.123123-5",
                    tel: "000 000000",
                    compra: "1000",
                    fecha: "10/20/2018"
                },{
                    id:0,
                    name: "pedro",
                    ci: "1.123123-5",
                    tel: "000 000000",
                    compra: "1000",
                    fecha: "10/20/2018"
                }
            ]
        }
    },
  
  methods: {
    pasarPagina: function (num) {
      this.table.offset = num;
      this.pideDatos();
    },
    Buscar: function (q) {
      this.table.filtro = q;
      this.pideDatos();
    },
    pideDatos(){
        alert("dasd");
    }
  }
};
</script>