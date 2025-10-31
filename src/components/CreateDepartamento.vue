<template>
	<div>
		<h3>Create</h3>
		<form v-on:submit.prevent="insertDepartamento()">
			<label>ID</label>
			<input class="form-control" type="number" v-model="departamento.numero" />
			<label>Nombre</label>
			<input class="form-control" type="text" v-model="departamento.nombre" />
			<label>Localidad</label>
			<input
				class="form-control"
				type="text"
				v-model="departamento.localidad"
			/>
			<button class="btn btn-primary">Insertar departamento</button>
		</form>
		<h4 style="color: red">{{ mensaje }}</h4>
	</div>
</template>

<script>
	import ServiceDepartamentos from "@/services/ServiceDepartamentos";
	let service = new ServiceDepartamentos();

	export default {
		name: "CreateDepartamento",
		data() {
			return {
				departamento: {
					numero: 113,
					nombre: "",
					localidad: "",
				},
				mensaje: "",
			};
		},
		methods: {
			insertDepartamento() {
				service.insertDepartamento(this.departamento).then((result) => {
					this.mensaje = "Insertado " + result;
					this.$router.push("/");
				});
			},
		},
	};
</script>
