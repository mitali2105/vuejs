<template>
  <div class="ag-theme-alpine" style="height: 500px; width: 100%">
    <AgGridVue
      :rowData="rowData"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      :pagination="true"
      :paginationPageSize="10"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const columnDefs = ref([
  { field: 'name', sortable: true, filter: true },
  { field: 'age', sortable: true, filter: true },
  { field: 'email', sortable: true, filter: true },
])

const rowData = ref([
  { name: 'John Doe', age: 30, email: 'john@example.com' },
  { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  { name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
])

const defaultColDef = {
  resizable: true,
  sortable: true,
  filter: true,
}
</script>
