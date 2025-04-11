<template>
  <div style="height: 100%; display: flex; flex-direction: column">
    <p style="flex: 0 1 0%">
      Theme:
      <select style="margin-right: 16px" v-model="baseTheme.id">
        <option v-for="t in baseThemes" :key="t.id" :value="t.id">{{ t.id }}</option>
      </select>

      Icons:
      <select style="margin-right: 16px" v-model="iconSet.id">
        <option v-for="iconSet in iconSets" :key="iconSet.id" :value="iconSet.id">{{ iconSet.id }}</option>
      </select>

      Color scheme:
      <select style="margin-right: 16px" v-model="colorScheme.id">
        <option v-for="colorScheme in colorSchemes" :key="colorScheme.id" :value="colorScheme.id">{{ colorScheme.id }}</option>
      </select>
    </p>

    <div style="flex: 1 1 0%">
      <ag-grid-vue
        class="ag-theme-alpine"
        style="height: 100%;"
        :theme="theme"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :rowData="rowData"
        :sideBar="true"
      ></ag-grid-vue>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, defineComponent } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';
import { ModuleRegistry } from 'ag-grid-community';
import { AllEnterpriseModule } from 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import './index.ts';

import {
  themeAlpine,
  themeBalham,
  themeQuartz,
  colorSchemeLight,
  iconSetAlpine,
  iconSetMaterial,
} from 'ag-grid-community';

ModuleRegistry.registerModules([AllEnterpriseModule]);

const baseThemes = [
  { id: 'themeQuartz', theme: themeQuartz },
  { id: 'themeBalham', theme: themeBalham },
  { id: 'themeAlpine', theme: themeAlpine },
];

const colorSchemes = [
  { id: '(unchanged)', part: null },
  { id: 'colorSchemeLight', part: colorSchemeLight },
];

const iconSets = [
  { id: '(unchanged)', part: null },
  { id: 'iconSetAlpine', part: iconSetAlpine },
  { id: 'iconSetMaterial', part: iconSetMaterial },
];

const baseTheme = ref(baseThemes[0]);
const iconSet = ref(iconSets[0]);
const colorScheme = ref(colorSchemes[0]);

const theme = computed(() => {
  let currentTheme = baseTheme.value.theme;
  if (colorScheme.value.part) {
    currentTheme = currentTheme.withPart(colorScheme.value.part);
  }
  if (iconSet.value.part) {
    currentTheme = currentTheme.withPart(iconSet.value.part);
  }
  return currentTheme;
});

const columnDefs = [
  { field: 'make' },
  { field: 'model' },
  { field: 'price' },
];

const defaultColDef = {
  editable: true,
  flex: 1,
  minWidth: 100,
  filter: true,
};

const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxster', price: 72000 },
];

</script>
