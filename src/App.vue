<template>
  <polaris-layout>
    <polaris-layout-section>
      <polaris-card title="Price Rules" :subdued="false" sectioned>
        The contentqweqwe
      </polaris-card>
    </polaris-layout-section>
    <polaris-layout-section>
      <polaris-page-actions
        :primaryAction="{ content: 'Start' }"
        :secondaryActions="[
          { content: 'Disactivate' },
          { content: 'Save draft' },
        ]"
      />
    </polaris-layout-section>
  </polaris-layout>
</template>

<script>
export default {
  components: {},
  data: () => ({
    loading: true,
  }),
  methods: {
    onTabChange(title) {
      console.log("onTabChange", title);
    },
  },
  async created() {
    this.loading = false;
    document.querySelector("[data-role=loader]").style.display = "none";
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
}
</style>
