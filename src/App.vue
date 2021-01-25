<template>
  <polaris-layout>
    <polaris-layout-section>
      <polaris-card
        title="Price Rules"
        :subdued="false"
        sectioned
        class="card-content"
      >
        <ul class="price-rules-list">
          <li class="price-rules-item">
            <polaris-text-style variation="subdued">
              New Price Rule
            </polaris-text-style>
            <polaris-checkbox
              label=""
              :labelHidden="false"
              :checked="false"
              :error="false"
            />
          </li>
          <li class="price-rules-item">2</li>
        </ul>
        <div class="price-rules-config">
          <polaris-text-field
            placeholder="New Price Rule"
            value=""
            label="Rule name"
            class="polaris-text-field"
          />
          <polaris-layout>
            <polaris-layout-annotated-section
              title="If"
            >
            asdas
            </polaris-layout-annotated-section>
          </polaris-layout>
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
  width: 100%;
}
.card-content {
  & .Polaris-Heading {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #212b36;
  }

  & .Polaris-Card__Header {
    padding: 2rem 34px;
    border-bottom: 1px solid #dfe3e8;
  }

  & .Polaris-Card__Section {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
}

.control-buttons {
  padding: 0 35px;

  & .Polaris-PageActions {
    border: 0;
  }
}

.price-rules-list {
  width: 224px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.price-rules-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 10px 11px 34px;
  border: 1px solid #dfe3e8;
  border-top: 0;
  border-left: 0;
}

.price-rules-config {
  padding: 20px;
  width: 100%;

  & .polaris-text-field {
    width: 70%;
  }
}
</style>
