<template>
  <polaris-layout>
    <polaris-layout-section>
      <polaris-card title="Price Rules" :subdued="false" sectioned class="card">
        <div class="card-content">
          <polaris-layout secondary="" class="card-content__rules">
            <ul class="card-content__rules-list">
              <li>
                New Price Rule
                <polaris-checkbox
                  label=""
                  :labelHidden="false"
                  :checked="false"
                  :error="false"
                />
              </li>
              <li>
                New Price Rule
                <polaris-checkbox
                  label=""
                  :labelHidden="false"
                  :checked="false"
                  :error="false"
                />
              </li>
            </ul>
          </polaris-layout>
          <polaris-layout class="card-content__config"> sda </polaris-layout>
        </div>
      </polaris-card>
    </polaris-layout-section>
    <polaris-layout-section class="control-buttons">
      <polaris-page-actions
        :primaryAction="{ content: 'Start' }"
        :secondaryActions="[
          { content: 'Disactivate', destructive: true },
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

<style lang="scss">
.card {
  & .Polaris-Card__Header {
    padding: 20px 34px;
  }

  & .Polaris-Card__Section {
    border-top: 1px solid #dfe3e8;
  }
}

.card-content {
  display: flex;
  justify-content: space-between;
}

.card-content__rules {
  width: 225px;
}

.card-content__rules-list {
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 10px 16px 34px;
    border: 1px solid #dfe3e8;
    border-top: 0;
    border-left: 0;
  }
}

.card-content__config {
  flex: 1;
  margin-left: 20px !important;
}

.control-buttons {
  padding: 0 35px;

  & .Polaris-PageActions {
    border: 0;
  }
}
</style>
