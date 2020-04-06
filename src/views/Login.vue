<template>
  <div class="login">
    <c_login msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import c_login from '@/components/C_Login.vue'

export default {
  name: 'Login',
  components: {
    c_login
  }
}
</script>
