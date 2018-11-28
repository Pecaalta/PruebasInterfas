<template>
                    <section class="section ">
                      <div class="hero is-primary">
                          <div class="hero-body">
                              <div class="container">
                                  <h1 class="title">
                                      Primary title
                                  </h1>
                                  <h2 class="subtitle">
                                      Primary subtitle
                                  </h2>
                              </div>
                          </div>
                      </div>
                      <br>
                        <div class="tile is-ancestor">
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <line-chart :height="200" :chart-data="Ventas"></line-chart>
                                </article>
                            </div>
                        </div>

                        <div class="tile is-ancestor">
                            <div class="tile is-vertical is-9">
                                <div class="tile">
                                    <div class="tile is-parent">
                                        <article class="tile is-child box">
                                            <p class="title">Five</p>
                                            <p class="subtitle">Subtitle</p>
                                            <div class="content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                                    semper
                                                    diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
                                                    volutpat
                                                    tellus diam, consequat gravida libero rhoncus ut. Morbi maximus,
                                                    leo
                                                    sit amet vehicula eleifend, nunc dui porta orci, quis semper odio
                                                    felis
                                                    ut quam.</p>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="tile is-8 is-vertical">
                                        <div class="tile">
                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                    <p class="title">Six</p>
                                                    <p class="subtitle">Subtitle</p>
                                                </article>
                                            </div>
                                            <div class="tile is-parent">
                                                <article class="tile is-child box">
                                                    <p class="title">Seven</p>
                                                    <p class="subtitle">Subtitle</p>
                                                </article>
                                            </div>
                                        </div>
                                        <div class="tile is-parent">
                                            <article class="tile is-child box">
                                                <p class="title">Eight</p>
                                                <p class="subtitle">Subtitle</p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div class="tile">
                                    <div class="tile is-8 is-parent">
                                        <article class="tile is-child box">
                                            <p class="title">Nine</p>
                                            <p class="subtitle">Subtitle</p>
                                            <div class="content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                                    ornare
                                                    magna eros, eu pellentesque tortor vestibulum ut. Maecenas non
                                                    massa
                                                    sem. Etiam finibus odio quis feugiat facilisis.</p>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="tile is-parent">
                                        <article class="tile is-child box">
                                            <p class="title">Ten</p>
                                            <p class="subtitle">Subtitle</p>
                                            <div class="content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                                    ornare
                                                    magna eros, eu pellentesque tortor vestibulum ut. Maecenas non
                                                    massa
                                                    sem. Etiam finibus odio quis feugiat facilisis.</p>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <div class="content">
                                        <p class="title">Eleven</p>
                                        <p class="subtitle">Subtitle</p>
                                        <div class="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper
                                                diam
                                                at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus
                                                diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet
                                                vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat,
                                                vitae congue lectus dolor consequat libero. Donec leo ligula, maximus
                                                et
                                                pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta.
                                                Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <div class="tile is-ancestor">
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">Twelve</p>
                                    <p class="subtitle">Subtitle</p>
                                    <div class="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                                            eros, eu pellentesque tortor vestibulum ut.</p>
                                    </div>
                                </article>
                            </div>
                            <div class="tile is-parent is-6">
                                <article class="tile is-child box">
                                    <p class="title">Thirteen</p>
                                    <p class="subtitle">Subtitle</p>
                                    <div class="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                                            eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam
                                            finibus odio quis feugiat facilisis.</p>
                                    </div>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">Fourteen</p>
                                    <p class="subtitle">Subtitle</p>
                                    <div class="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                                            eros, eu pellentesque tortor vestibulum ut.</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
</template>
<style>

  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>

<script>
  import LineChart from './LineChart.js'

export default {
  name: "Dashboard",
  props: {
    node: Object,
    ruta: String
  },
  components: {
    LineChart
  },
    data () {
      return {
        Ventas: null,
        Compras: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.Ventas = {
          labels: ["asdsa"],
          datasets: [
            {
              label: 'Enero',
              backgroundColor: 'rgba(0,0,0,.5)',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Febrero',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Septimbre',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
        this.Compras = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Enero',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Febrero',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Septimbre',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
};
</script>