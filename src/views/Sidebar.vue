<template>
  <div>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <b-navbar-brand href="#">
            <img src="../assets/logo.png" class="d-inline-block align-top" alt="Logo">
            
            </b-navbar-brand>
            <button class="close-nav btn-info" variant="primary" block @click="hide"> X </button>
            <hr />
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item to="/home" exact exact-active-class="active" active @click="hide"><b-icon-award></b-icon-award> General <b-icon-chevron-compact-right class="close-nav"></b-icon-chevron-compact-right></b-nav-item>
              <b-nav-item to="/empresas" exact exact-active-class="active" active @click="hide"><b-icon-building></b-icon-building> Empresas <b-icon-chevron-compact-right class="close-nav"></b-icon-chevron-compact-right> </b-nav-item>
              <b-nav-item to="/impuestos" exact exact-active-class="active" @click="hide"><b-icon-pen></b-icon-pen> Impuestos <b-icon-chevron-compact-right class="close-nav"></b-icon-chevron-compact-right> </b-nav-item>
              <b-nav-item to="/declaraciones" exact exact-active-class="active" @click="hide"><b-icon-file-earmark></b-icon-file-earmark> Declaraciones <b-icon-chevron-compact-right class="close-nav"></b-icon-chevron-compact-right> </b-nav-item>
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