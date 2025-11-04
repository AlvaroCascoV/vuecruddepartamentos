<template>
	<div>
		<h1>CRUD Departamentos</h1>
		<img src="./../assets/images/loading.png" v-if="status == false" />
		<table class="table table-bordered" v-else>
			<thead>
				<tr>
					<th>ID</th>
					<th>Nombre</th>
					<th>Localidad</th>
					<th>Accion</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="dept in departamentos" :key="dept">
					<td>{{ dept.numero }}</td>
					<td>{{ dept.nombre }}</td>
					<td>{{ dept.localidad }}</td>
					<td>
						<router-link
							:to="
								'/details/' +
								dept.numero +
								'/' +
								dept.nombre +
								'/' +
								dept.localidad
							"
							class="btn btn-warning"
						>
							Details
						</router-link>
						<router-link :to="'/update/' + dept.numero" class="btn btn-info">
							Edit
						</router-link>
						<router-link :to="'/delete/' + dept.numero" class="btn btn-danger">
							Delete
						</router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import ServiceDepartamentos from "@/services/ServiceDepartamentos";
	const service = new ServiceDepartamentos();
	export default {
		name: "DepartamentosComponent",
		data() {
			return {
				departamentos: [],
				status: false,
			};
		},
		mounted() {
			this.getDepartamentos();
		},
		methods: {
			getDepartamentos() {
				service.getDepartamentos().then((result) => {
					this.departamentos = result;
					this.status = true;
				});
			},
		},
	};
</script>

<style></style>
