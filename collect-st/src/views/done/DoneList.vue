<template>
<a-list item-layout="vertical" size="small" :pagination="pagination" :data-source="listData">
    <template #footer>
    <div>
        <b>物理竞赛题</b>
        今日份
    </div>
    </template>
    <template #renderItem="{ item }">
    <a-list-item key="item.title" style="background-color: #eaeaea; margin-bottom: 6px;">
        <template #actions>
        <span v-for="{ type, text } in actions" :key="type">
            <component :is="type" style="margin-right: 2px" />
            {{ text }}
        </span>
        </template>
        <template #extra>
            <!-- #A0F1EA -->
        <img
            style="border: 2px solid #ccc;padding: 2px;"

            width="600"
            alt="logo"
            src="../../assets/images/imgs/7.png"
        />
        </template>
        <a-list-item-meta :description="item.description">
        <template #title>
            <a :href="item.href">{{ item.title }}</a>
        </template>
        <template #avatar><a-avatar :src="item.avatar" /></template>
        </a-list-item-meta>
        {{ item.content }}
    </a-list-item>
    </template>
</a-list>
</template>
<script>
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
const listData = [];

for (let i = 0; i < 23; i++) {
listData.push({
    href: 'https://www.antdv.com/',
    title: `数学题 ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description: '此处为题目小介绍，比如上传时间，难易程度等',
    content: '此处为题目总介绍，比如知识点等。此处为题目总介绍，比如知识点等。此处为题目总介绍，比如知识点等。此处为题目总介绍，比如知识点等。此处为题目总介绍，比如知识点等。此处为题目总介绍，比如知识点等。此处为题目总介绍，比如知识点等。',
});
}

export default defineComponent({
name: 'DoneList',
components: {
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
},

setup() {
    const pagination = {
    onChange: page => {
        console.log(page);
    },
    pageSize: 3,
    };
    const actions = [{
    type: 'StarOutlined',
    text: '156',
    }, {
    type: 'LikeOutlined',
    text: '156',
    }, {
    type: 'MessageOutlined',
    text: '2',
    }];
    return {
    listData,
    pagination,
    actions,
    };
},

});
</script>