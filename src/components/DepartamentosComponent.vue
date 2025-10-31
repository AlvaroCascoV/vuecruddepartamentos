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
				</tr>
			</thead>
			<tbody>
				<tr v-for="dept in departamentos" :key="dept">
					<td>{{ dept.numero }}</td>
					<td>{{ dept.nombre }}</td>
					<td>{{ dept.localidad }}</td>
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
			service.getDepartamentos().then((result) => {
				this.departamentos = result;
				this.status = true;
			});
		},
	};
</script>

<style></style>
