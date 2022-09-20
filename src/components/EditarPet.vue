<template>
    <div class="container">
        <h5>Alteração de cadastro</h5>
        <DadosPet v-bind:disable="0" v-bind:id="this.$route.params.id" mode="Alterar" v-on:alterar="Alterar"></DadosPet>
    </div>
</template>
      
<script>
import AtualizaPet from '@/service/AtualizaPet';
import DadosPet from './DadosPet.vue';
export default {
    name: "EditarVue",
    methods: {
        Alterar(json) {
            {
                AtualizaPet.atualizar(json)
                setTimeout(() => {
                    this.$router.push('/')
                }, 500);
            }
        }
    },
    components: { DadosPet }
}
</script>
        
<style scoped>
.container {
    max-width: 600px;
}

h5 {
    font-weight: bold;
}
</style>
    