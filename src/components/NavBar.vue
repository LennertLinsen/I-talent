<template>
  <nav class="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-lg">
    <h1 class="text-xl font-bold text-primary">Italent Portfolio</h1>
    <ul class="flex gap-4">
      <li><router-link to="/I-talent/" class="element font-bold">Home</router-link></li>
      <li><router-link to="/I-talent/projects" class="element font-bold">Activiteiten</router-link></li>
      <li><router-link to="/I-talent/innovationroute" class="element font-bold">Innovatieroute UI/UX</router-link></li>
      <li><router-link to="/I-talent/projectweek" class="element font-bold">Projectweek 2de jaar</router-link></li>
      <li><router-link to="/I-talent/thevaluehub" class="element font-bold">The Value Hub</router-link></li>
      <li><router-link to="/I-talent/reflection" class="element font-bold">EindReflectie</router-link></li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
</script>
<style scoped>
.element:hover {
  color: #4A90E2;
}
</style>