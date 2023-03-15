<template>
    <div>
      <div style="margin-bottom: 0">
        <!-- <a-button type="primary" :disabled="!hasSelected" :loading="loading" @click="start">
          操作
        </a-button> -->
        <span style="margin-left: 8px">
          <template v-if="hasSelected">
            {{ `Selected ${selectedRowKeys.length} items` }}
          </template>
        </span>
      </div>
      <a-table
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :columns="columns"
        :data-source="data"
      />
    </div>
  </template>
  <script>
  import { computed, defineComponent, reactive, toRefs } from 'vue';
  const columns = [{
    title: '文件名',
    width:'55%',
    dataIndex: 'name',
  }, {
    title: '创建时间',
    width:'15%',
    dataIndex: 'age',
  }, {
    title: '题目数量',
    width:'15%',
    dataIndex: 'address',
  }, {
    title: '操作',
    width:'15%',
    dataIndex: 'edit',
  }];
  const data = [];
  
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `【英语】2021年辽宁省大连市初中结业考试英语真题${i}`,
      age: `2022.9.${i}`,
      address: `3${i}`,
      edit:'查看 打印 删除'
    });
  }
  
  export default defineComponent({
    setup() {
      const state = reactive({
        selectedRowKeys: [],
        // Check here to configure the default column
        loading: false,
      });
      const hasSelected = computed(() => state.selectedRowKeys.length > 0);
  
      const start = () => {
        state.loading = true; // ajax request after empty completing
  
        setTimeout(() => {
          state.loading = false;
          state.selectedRowKeys = [];
        }, 1000);
      };
  
      const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        state.selectedRowKeys = selectedRowKeys;
      };
  
      return {
        data,
        columns,
        hasSelected,
        ...toRefs(state),
        // func
        start,
        onSelectChange,
      };
    },
  
  });
  </script>