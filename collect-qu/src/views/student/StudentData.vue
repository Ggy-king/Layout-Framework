<template>
  <a-table :columns="columns" :data-source="dataSource" bordered>
    <template #bodyCell="{ column, text, record }">
      <template v-if="['name', 'age', 'address'].includes(column.dataIndex)">
        <div>
          <a-input
            v-if="editableData[record.key]"
            v-model:value="editableData[record.key][column.dataIndex]"
            style="margin: -5px 0"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.key]">
            <a-typography-link @click="save(record.key)">Save</a-typography-link>
            <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="edit(record.key)">Edit</a>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>
<script>
import { cloneDeep } from 'lodash-es';
import { defineComponent, reactive, ref } from 'vue';
const columns = [{
  title: '学校',
  dataIndex: 'name',
  width: '25%',
}, {
  title: '名字',
  dataIndex: 'age',
  width: '15%',
}, {
  title: '年级',
  dataIndex: 'address',
  width: '40%',
}, {
  title: '操作',
  dataIndex: 'operation',
}];
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `理工大学 ${i}`,
    age: '张三',
    address: `no. ${i}`,
  });
}

export default defineComponent({
  setup() {
    const dataSource = ref(data);
    const editableData = reactive({});

    const edit = key => {
      editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
    };

    const save = key => {
      Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
      delete editableData[key];
    };

    const cancel = key => {
      delete editableData[key];
    };

    return {
      dataSource,
      columns,
      editingKey: '',
      editableData,
      edit,
      save,
      cancel,
    };
  },

});
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>