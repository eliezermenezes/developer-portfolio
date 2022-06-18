<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="main-nav">
    <div class="container">
      <a class="navbar-brand test" href="#">Developer Portfólio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars ms-1"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#services">Início</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Portfólio</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="#about">Sobre</a></li>
          <li class="nav-item">
            <a class="nav-link" href="#team">Habilidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contatos</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");

#main-nav {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #212529;
}

#main-nav .navbar-toggler {
  padding: 0.75rem;
  font-size: 0.75rem;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
}

#main-nav .navbar-brand {
  color: #ffc800;
  font-family: "Kaushan Script", sans-serif;
  font-weight: 700;
  letter-spacing: 0.0625em;
}

#main-nav .navbar-nav .nav-item .nav-link {
  font-family: "Montserrat", sans-serif;
  font-size: 0.95rem;
  color: #fff;
  letter-spacing: 0.0625em;
}

#main-nav .navbar-nav .nav-item .nav-link.active,
#main-nav .navbar-nav .nav-item .nav-link:hover {
  color: #ffc800;
}

@media (min-width: 992px) {
  #main-nav {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border: none;
    background-color: transparent;
    transition: padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;
  }

  #main-nav .navbar-brand {
    font-size: 1.5em;
    font-weight: 700;
    transition: font-size 0.3s ease-in-out;
  }

  #main-nav.navbar-shrink {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #212529;
  }

  #main-nav.navbar-shrink .navbar-brand {
    font-size: 1.25em;
  }

  #main-nav.navbar-shrink .navbar-brand svg,
  #main-nav.navbar-shrink .navbar-brand img {
    height: 1.5rem;
  }

  #main-nav .navbar-nav .nav-item {
    margin-right: 1rem;
  }

  #main-nav .navbar-nav .nav-item:last-child {
    margin-right: 0;
  }
}
</style>
