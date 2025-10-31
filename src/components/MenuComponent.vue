<template>
	<nav class="navbar navbar-expand-sm navbar-light bg-light">
		<div class="container-fluid">
			<router-link class="navbar-brand" to="/">Navbar</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link active" aria-current="page" to="/">
							Home
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/coches">Coches</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/algo">Algo</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/algo2">algo2</router-link>
					</li>
					<!-- <li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Oficios
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<li v-for="job in oficios" :key="job">
								<router-link
									class="dropdown-item"
									:to="'/empleadosoficios/' + job"
								>
									{{ job }}
								</router-link>
							</li>
						</ul>
					</li> -->
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
	export default {
		name: "MenuComponent",
	};
</script>
