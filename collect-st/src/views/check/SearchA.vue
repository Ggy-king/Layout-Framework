<template>
<div class="global-search-wrapper" style="width: 200px;margin-left: 40px">
    <a-auto-complete
    v-model:value="valueA"
    :dropdown-match-select-width="252"
    style="width: 200px"
    :options="dataSourceA"
    @select="onSelect"
    @search="handleSearch"
    >
    <template #option="item">
        <div style="display: flex; justify-content: space-between">
        <span>
            Found {{ item.query }} on
            <a
            :href="`https://s.taobao.com/search?q=${item.query}`"
            target="_blank"
            rel="noopener noreferrer"
            >
            {{ item.category }}
            </a>
        </span>
        <span>{{ item.count }} results</span>
        </div>
    </template>
    <a-input-search size="model" placeholder="请输入试卷名称" enter-button></a-input-search>
    </a-auto-complete>
</div>

<div class="global-search-wrapper" style="width: 200px;margin-left: 40px">
    <a-auto-complete
    v-model:value="valueB"
    :dropdown-match-select-width="252"
    style="width: 200px"
    :options="dataSourceB"
    @select="onSelect"
    @search="handleSearch"
    >
    <template #option="item">
        <div style="display: flex; justify-content: space-between">
        <span>
            Found {{ item.query }} on
            <a
            :href="`https://s.taobao.com/search?q=${item.query}`"
            target="_blank"
            rel="noopener noreferrer"
            >
            {{ item.category }}
            </a>
        </span>
        <span>{{ item.count }} results</span>
        </div>
    </template>
    <a-input-search size="model" placeholder="请输入相关知识点" enter-button></a-input-search>
    </a-auto-complete>
</div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
name: 'SearchA',
setup() {
    const valueA = ref('');
    const valueB = ref('');
    const dataSource = ref([]);

    const onSelect = value => {
    console.log('onSelect', value);
    };

    const getRandomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const searchResult = query => {
    return new Array(getRandomInt(5)).join('.').split('.').map((_item, idx) => ({
        query,
        category: `${query}${idx}`,
        value: `${query}${idx}`,
        count: getRandomInt(200, 100),
    }));
    };

    const handleSearch = val => {
    dataSource.value = val ? searchResult(val) : [];
    };

    return {
    valueA,
    valueB,
    dataSource,
    onSelect,
    handleSearch,
    };
},

});
</script>