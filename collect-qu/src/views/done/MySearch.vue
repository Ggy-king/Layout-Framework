<template>
    <div style="position: relative;">
        <a-button style="margin-right: 20px;">新建文件夹</a-button>
        <a-button>删除</a-button>
        <a-input-search
        style="position: absolute;top: 0;right: 0;width: 20%;"
        v-model:value="value"
        placeholder="搜索"
        enter-button
        @search="onSearch"
        />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref('');

    const onSearch = searchValue => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };

    return {
      value,
      onSearch,
    };
  },

});
</script>

<style>

</style>