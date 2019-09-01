<template>
  <div id="app">
      <table border=1>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Country</th>
                  <th @click="sort">Electricity</th>
              </tr>
          </thead>
          <tbody>
              <tr v-bind:key="dam.name" v-for="dam in damsByElectricity">
                  <td>{{ dam.name }}</td>
                  <td>{{ dam.country }}</td>
                  <td>{{ dam.electricity }} megawatts</td>
              </tr>
          </tbody>
      </table>
      <p>Order: {{ order }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
        dams: [
            {name: "Nurek Dam", country: "Tajikistan", electricity: "3200"},
            {name: "Three Gorges Dam", country: "China", electricity: "22500"},
            {name: "Tarbela Dam", country: "Pakistan", electricity: "3500"},
            {name: "Guri Dam", country: "Venezuela", electricity: "6100"},
        ],
        order: 1
    }
  },

  computed: {
    damsByElectricity() {
      const sortByElectricity = (d1, d2) => (d2.electricity - d1.electricity) * this.order

      return this.dams
        .slice()
        .sort(sortByElectricity)
    }
  },

  methods: {
    sort() {
      this.order = this.order * -1
    }
  }
}
</script>

<style>
</style>