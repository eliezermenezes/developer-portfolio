<script setup lang="ts"></script>

<template>
  <footer class="footer py-4">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 text-lg-start">
          Copyright &copy; <b>Developer Portfolio</b>. All Rights Reserved
        </div>
        <div class="col-lg-4 my-3 my-lg-0">
          <a
            class="btn btn-dark btn-social mx-2"
            target="_blank"
            href="https://github.com/eliezermenezes"
          >
            <i class="fab fa-gitlab"></i>
          </a>
          <a
            class="btn btn-dark btn-social mx-2"
            target="_blank"
            href="https://github.com/eliezermenezes"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            class="btn btn-dark btn-social mx-2"
            target="_blank"
            href="https://linkedin.com/in/eliezer-dos-santos-menezes-0892a0139"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
  <a href="#" class="btn btn-primary btn-social scroll-top">
    <i class="fa fa-arrow-up"></i>
  </a>
</template>

<style scoped>
.scroll-top {
  position: fixed;
  opacity: 0;
  visibility: hidden;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  transition: all 0.4s;
}

.scroll-top.active {
  opacity: 1;
  visibility: visible;
}

.footer {
  text-align: center;
  font-size: 0.9rem;
  font-family: "Montserrat", sans-serif;
}
</style>
