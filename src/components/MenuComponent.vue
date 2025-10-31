<template>
	<nav class="navbar navbar-expand-sm navbar-light bg-light">
		<div class="container-fluid">
			<router-link class="navbar-brand" to="/">
				<img src="./../assets/logo.png" width="45px" />
			</router-link>
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
						<router-link class="nav-link" to="/create">Create</router-link>
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
							Departamentos
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<li v-for="dept in departamentos" :key="dept">
								<router-link
									class="dropdown-item"
									:to="'/departamentos/' + dept.numero"
								>
									{{ dept.nombre }}
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
