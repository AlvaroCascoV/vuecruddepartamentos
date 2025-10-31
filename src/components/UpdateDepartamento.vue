<template>
	<div>
		<h1>Update departamento id: {{ $route.params.id }}</h1>
		<router-link class="btn btn-danger" to="/">Volver</router-link>
		<form v-on:submit.prevent="updateDepartamento" v-if="departamento != null">
			<label>ID</label>
			<input
				type="number"
				class="form-control"
				v-model="departamento.numero"
				disabled
			/>
			<label>Nombre</label>
			<input class="form-control" type="text" v-model="departamento.nombre" />
			<label>Localidad</label>
			<input
				class="form-control"
				type="text"
				v-model="departamento.localidad"
			/>
			<button class="btn btn-success">Update</button>
		</form>
	</div>
</template>

<script>
	import ServiceDepartamentos from "@/services/ServiceDepartamentos";

	let service = new ServiceDepartamentos();
	export default {
		name: "UpdateDepartamento",
		data() {
			return {
				departamento: null,
			};
		},
		mounted() {
			let id = this.$route.params.id;
			service.findDepartamento(id).then((result) => {
				this.departamento = result;
			});
		},
		methods: {
			updateDepartamento() {
				service.updateDepartamento(this.departamento).then(() => {
					this.$router.push(
						"/details/" +
							this.departamento.numero +
							"/" +
							this.departamento.nombre +
							"/" +
							this.departamento.localidad
					);
				});
			},
		},
	};
</script>
