<template>
  <div>
    <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item logo" href="#">
        <img src="logo.svg" width="50" height="28">
      </a>
      <div onclick="side()" class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
    <aside id="sidebar">
        <ul>
            <li v-for="(route, i) in this.$router.options.routes" :key="i">
            <router-link 
              tag="li" 
              :to="route.path"
              v-if="route.name">
              <a :class="{'is-active':($route.name == route.name)}" >
                <i :class="'fas ' + route.icon"></i>
                {{ route.name != "" ? route.name : "Dashboard" }}
              </a>
              <ul v-if="route.children != null && $route.path == route.path">
                  <router-link 
                  v-for="(routeChildren, e) in route.children" 
                  tag="li" 
                  :to="routeChildren.path"
                  :key="e">
                    <a :class="{'is-active':($route.name == route.name)}" >
                      <i :class="'fas ' + route.icon"></i>
                      {{ routeChildren.name }}
                    </a>
                  </router-link>
              </ul>
            </router-link>
            </li>
        </ul>
    </aside>
  <main>
    <router-view></router-view>
  </main>
  </div>
</template>

<script>
    export default {
    name: "Main",
    props: {},
    components: {}
    };
</script>