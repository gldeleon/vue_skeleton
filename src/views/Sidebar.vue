<template>
  <div>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <b-navbar-brand href="#">
            <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
            Vue
            </b-navbar-brand>
            <button class="close-nav btn-info" variant="primary" block @click="hide" rigth> X </button>
            <hr />
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="/about" @click="hide">About</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
          
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<style scoped>
    .close-nav{
        float: right;
        align-self: flex-end;
    }
</style>