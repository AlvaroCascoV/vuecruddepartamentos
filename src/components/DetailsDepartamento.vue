<template>
	<div class="container">
		<h1>Detalles</h1>
		<ul class="list-group">
			<li class="list-group-item">Id: {{ $route.params.id }}</li>
			<li class="list-group-item">Nombre: {{ $route.params.nombre }}</li>
			<li class="list-group-item">Localidad: {{ $route.params.localidad }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "DetailsDepartamento",
	};
</script>
