<template>
	<div class="popup">
		<div class="popup-inner">
			<slot />
			<DadosPet v-bind:id="id" v-bind:disable="1" mode="Show" v-on:fecha="voltar"></DadosPet>
		</div>
	</div>
</template>

<script>
import DadosPet from './DadosPet.vue';

export default {
	props: ["id"],
	components: { DadosPet },
	methods: {
		voltar() {
			this.$emit("fecha");
		}
	},
	mounted() {
		window.addEventListener('keyup', event => {

			if (event.code === 'Escape')
				this.voltar();
		});
	}
}
</script>

<style scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);

	display: flex;
	align-items: center;
	justify-content: center;
}

.popup-inner {
	background: #FFF;
	padding: 32px;
}
</style>