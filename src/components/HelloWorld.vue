<template>
  <div clas="wrapper">
      <div>
       <b-jumbotron header="" lead="">
            <b-icon-award></b-icon-award> General
          
        </b-jumbotron>
    </div>
        <div>
          <b-table responsive :fields="fields" :items="items">
            <template v-slot:cell(name)="data">
              <!-- `data.value` is the value after formatted by the Formatter -->
                      <router-link to="/empresas">{{ data.value }}</router-link>
            </template>
          </b-table>
        </div>
  </div>
</template>
<script>
export default {
  name: 'C_Home',
  data() {
      return {           
        fields: [
          {
            // A column that needs custom formatting,
            // calling formatter 'fullName' in this app
            key: 'name',
            label: 'Empresa',
            formatter: 'fullName'
          },
          // A regular column
          'vendido',
          'cobrado',
          'comprado',
          'pagado'
        ],
        items: [
          { name: { first: 'Empresa', last: '1' }, vendido: 456, cobrado: 42, comprado: 42, pagado: 42 },
          { name: { first: 'Empresa', last: '2' }, vendido: 489, cobrado: 36, comprado: 42, pagado: 42 },
          { name: { first: 'Empresa', last: '3' }, vendido: 789, cobrado: 73, comprado: 42, pagado: 42 },
          { name: { first: 'Empresa', last: '4' }, vendido: 123, cobrado: 62, comprado: 42, pagado: 42 }
        ]
      }
    },
    methods: {
      fullName(value) {
        return `${value.first} ${value.last}`
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
