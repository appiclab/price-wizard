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
            <ul class="card-content__rules-control">
              <li>
                <button class="card-content__rules-button">
                  <polaris-icon
                    color="Teal"
                    accessibilityLabel="Accessibility label"
                    source="add"
                  />
                </button>
              </li>
              <li>
                <button class="card-content__rules-button">
                  <polaris-icon
                    color="Teal"
                    accessibilityLabel="Accessibility label"
                    source="duplicate"
                  />
                </button>
              </li>
              <li>
                <button class="card-content__rules-button">
                  <polaris-icon
                    color="Teal"
                    accessibilityLabel="Accessibility label"
                    source="chevronRight"
                  />
                </button>
              </li>
              <li>
                <button class="card-content__rules-button">
                  <polaris-icon
                    color="Teal"
                    accessibilityLabel="Accessibility label"
                    source="circleCancel"
                  />
                </button>
              </li>
              <li>
                <button class="card-content__rules-button">
                  <polaris-icon
                    color="Teal"
                    accessibilityLabel="Accessibility label"
                    source="delete"
                  />
                </button>
              </li>
            </ul>
          </polaris-layout>
          <polaris-layout class="card-content__config">
            <polaris-text-field
              placeholder="New Price Rule"
              value=""
              label="Rule name"
              class="rule-name"
            />
            <polaris-layout>
              <polaris-layout-annotated-section
                title="If"
                class="card-content__config-if"
              >
                <div class="card-content__config-selects">
                  <polaris-select
                    :options="[
                      { label: 'one', value: 'one' },
                      { label: 'tow', value: 'tow' },
                    ]"
                    placeholder="Select..."
                    class="select-control"
                  />
                  <polaris-select
                    :options="[
                      { label: 'one', value: 'one' },
                      { label: 'tow', value: 'tow' },
                    ]"
                    placeholder="Is equal to..."
                    class="select-control"
                  />
                </div>
                <div class="card-content__config-inputs">
                  <polaris-text-field placeholder="Type the value" />
                  <div class="card-content__config-checkboxes">
                    <polaris-checkbox
                      label="And"
                      :labelHidden="false"
                      :checked="false"
                      :error="false"
                    />
                    <polaris-checkbox
                      label="Or"
                      :labelHidden="false"
                      :checked="false"
                      :error="false"
                    />
                  </div>
                </div>
              </polaris-layout-annotated-section>
            </polaris-layout>
            <polaris-layout>
              <polaris-layout-annotated-section
                title="Then select"
                class="card-content__config-then-select"
              >
                <div class="card-content__config-selects">
                  <polaris-select
                    :options="[
                      { label: 'one', value: 'one' },
                      { label: 'tow', value: 'tow' },
                    ]"
                    placeholder="Select..."
                    class="select-control"
                  />
                  <polaris-select
                    :options="[
                      { label: 'one', value: 'one' },
                      { label: 'tow', value: 'tow' },
                    ]"
                    placeholder="And set to value..."
                    class="select-control"
                  />
                </div>
                <div class="card-content__config-inputs">
                  <polaris-text-field placeholder="Type the value" />
                </div>
              </polaris-layout-annotated-section>
            </polaris-layout>
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
  flex-direction: column;
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

.card-content__rules-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  width: 100%;
  padding: 16px 10px 16px 34px;
  border: 1px solid #dfe3e8;
  border-top: 0;
  border-left: 0;
}

.card-content__rules-button {
  background: transparent;
  width: 20px;
  height: 20px;
  outline: none;
  border: 0;
  padding: 0;
}

.card-content__config {
  flex: 1;
  flex-direction: column;
  margin-left: 20px !important;
  padding-top: 20px;

  & .Polaris-Connected {
    min-width: 306px;
  }

  & .Polaris-Layout {
    flex-direction: column;
    width: 100%;
  }
}

.control-buttons {
  padding: 0 35px;

  & .Polaris-PageActions {
    border: 0;
  }
}

.rule-name {
  margin-bottom: 15px;
}

.select-control {
  min-width: 208px;
}

.card-content__config-if,
.card-content__config-then-select {
  min-width: 540px !important;
  max-width: 100% !important;

  & .Polaris-Layout__AnnotationContent {
    margin-top: 0;
  }
}

.card-content__config-selects {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
}

.card-content__config-inputs {
  display: flex;
  align-items: center;
}

.card-content__config-checkboxes {
  margin-left: 27px;
  flex: 1;
  display: flex;
  align-items: center;

  & div {
    padding-right: 18px;

    &:last-child {
      padding: 0;
    }
  }
}
</style>
