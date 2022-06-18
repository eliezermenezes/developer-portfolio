<script setup lang="ts">
defineProps<{
  id?: string;
  classes?: string;
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <section class="page-section" :id="id" :class="classes">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">{{ title }}</h2>
        <h3 v-if="!!subtitle" class="section-subheading text-muted">
          {{ subtitle }}
        </h3>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<style scoped></style>
