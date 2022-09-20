<template>
  <div class="home">
    <DomainList></DomainList>
  </div>
</template>

<script>
// @ is an alias to /src
import DomainList from '@/components/DomainList.vue';

export default {
  name: 'HomeView',
  components: {
    DomainList
}
} 
</script>
