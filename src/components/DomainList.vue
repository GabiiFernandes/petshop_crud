<template>
  <div>
    <div id="main">
      <div class="container">
        <div class="row">
          <AppItemList title="Animais" v-bind:items="pets" v-on:removeItem="removePet">
          </AppItemList>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import AppItemList from "./AppItemList.vue"
import Pets from '@/service/RetornaPets'
import RemovePet from "@/service/RemovePet"

export default {
  name: "App",
  components: {
    AppItemList,
  },
  data() {
    return {
      pets: {}
    }
  },
  methods: {
    removePet(item) {
      if (confirm('Deseja remover ' + item.Nome + '?')) {
        RemovePet.remover(item)
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      setTimeout(() => {
        this.carrega()
      }, 700);
    },
    carrega() {
      Pets.listar()
        .then(response => {
          this.pets = response.data.pets
        })
    }
  },
  mounted() {
    Pets.listar()
      .then(response => {
        this.pets = response.data.pets
      })
  }
}
</script>
  
<style>

</style>
  