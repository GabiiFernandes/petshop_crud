<template>
  <div>
    <h5>{{ title }}</h5>
    <div class="card">
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Idade</th>
              <th>Raça</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" v-bind:key="item">
              <td> {{ item.Nome }} </td>
              <td> {{ item.Tipo }} </td>
              <td> {{ item.Idade }} </td>
              <td> {{ item.Raca }} </td>
              <td>
                <button class="btn btn-info" v-on:click="visualizar(item.id)"><span class="fa fa-eye"></span></button>
                <button class="btn btn-info" v-on:click="removeItem(item)"><span class="fa fa-trash"></span></button>
                <router-link :to="{name:'editar',params:{id:item.id}}">
                  <button class="btn btn-info">Editar</button>
                </router-link>
                
              </td>
              <PopupVisualizar v-bind:id="idVisualizar" v-if="popupTriggers.buttonTrigger" v-on:fecha="fechaPopup">
              </PopupVisualizar>
            </tr>
          </tbody>
        </table>
        <br />
        <div class="input-group">
          <router-link to="/cadastro">
            <button class="btn btn-info"><span class="fa fa-plus"></span></button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "font-awesome/css/font-awesome.css";
import PopupVisualizar from "./PopupVisualizar.vue";
import { ref } from 'vue';

export default {
  name: "AppItemList",
  props: ["title", "items"],
  data() {
    return {
      item: "",
      popupTriggers: {},
      idVisualizar: 0
    };
  },
  methods: {
    removeItem(item) {
      this.$emit("removeItem", item);
    },
    visualizar(id) {
      this.popupTriggers.buttonTrigger = true;
      this.idVisualizar = id;
    },
    fechaPopup() {
      this.popupTriggers.buttonTrigger = false;
    }
  },
  mounted() {
    this.popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: false
    });
  },
  components: { PopupVisualizar }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  background-color: #42b883;
}
</style>
