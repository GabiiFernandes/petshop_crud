<template>
  <div class="cadastro">
    <FormularioCadastro title="Cadastre um novo pet"></FormularioCadastro>
  </div>
</template>

    <DomainList></DomainList>

<script>
import FormularioCadastro from '@/components/FormularioCadastro.vue';

export default {
  name: 'CadastroView',
  components: {
    FormularioCadastro
}
} 
</script>