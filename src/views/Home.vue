<template>
  <div class="home">
    <Nav_m />
    <Side_b />
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Nav_m from '@/views/Nav.vue'
import Side_b from '@/views/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Nav_m,
    Side_b
  },
  data () {
    return { }
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  },
  methods: {
    logout: function () {
      this.$session.destroy()
      this.$router.push('/')
    }
  }
}
</script>
