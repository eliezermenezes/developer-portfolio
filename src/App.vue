<script setup lang="ts">
import AppNavbar from "./components/partials/AppNavbar.vue";
import PageSection from "./components/partials/PageSection.vue";
import HomeView from "./components/HomeView.vue";
import Parte1 from "./components/Parte1.vue";
import Parte2 from "./components/Parte2.vue";
import Parte3 from "./components/Parte3.vue";
import Parte4 from "./components/Parte4.vue";
import SkillsView from "./components/SkillsView.vue";
import ContactsView from "./components/ContactsView.vue";
import AppFooter from "./components/partials/AppFooter.vue";
</script>

<template>
  <AppNavbar />
  <HomeView />

  <PageSection
    title="Services"
    subtitle="Lorem ipsum dolor sit amet consectetur."
  >
    <Parte1 />
  </PageSection>

  <PageSection
    id="portfolio"
    title="Portfólio"
    subtitle="Lorem ipsum dolor sit amet consectetur."
    classes="bg-light"
  >
    <Parte2 />
  </PageSection>

  <PageSection
    id="about"
    title="Sobre"
    subtitle="Lorem ipsum dolor sit amet consectetur."
  >
    <Parte3 />
  </PageSection>

  <PageSection
    id="skills"
    title="Habilidades"
    subtitle="Lorem ipsum dolor sit amet consectetur."
    classes="bg-light"
  >
    <Parte4 />
  </PageSection>

  <SkillsView />

  <PageSection
    id="contact"
    title="Contato"
    subtitle="Lorem ipsum dolor sit amet consectetur."
  >
    <ContactsView />
  </PageSection>

  <AppFooter />
</template>

<style>
@import "./assets/base.css";
</style>
