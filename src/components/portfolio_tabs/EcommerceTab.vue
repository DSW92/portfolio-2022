<template>
  <div>Ecommerce</div>
  <div>
    <div v-for="item in results" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  mounted() {
    const projects = this.projects.filter(
      (project) => project.category === "ecommerce"
    );

    this.results = projects;
  },
  data() {
    return {
      results: [],
    };
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
  },
};
</script>
