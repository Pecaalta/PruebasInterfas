<template>
  <div>
    <Login  v-if="this.$store.state.id == null || this.$store.state.id == ''"></Login>
    <Main   v-if="this.$store.state.id != null && this.$store.state.id != ''"></Main>
  </div>
</template>

<script>
  import Login from './page/Login.vue'
  import Main from './page/Main.vue'
  
  export default {
    props: ['postTitle'],
    data () {
      return {
        User: null,
        Pass: null,
        id: null
      }
    },
    components: {
      Login,
      Main
    }
  };
</script>