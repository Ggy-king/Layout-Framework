<!-- 创作主体 -->
<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router';

import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { writeStore } from '@/stores'
import hooks from '@/utils/hooks'

// ----------------编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 模式
const mode = ref('default')

// 内容 HTML
const props = defineProps({
  writeHtml: String
})
const writeContentStore = writeStore()
const valueHtml = ref(
  '<h2>欢迎来看小高发文章🎉</h2><p>可以写下所有你想写的文章，大展你身手，当然，可能我做的编辑器并不符合你的心意，当这也是无法避免的。毕竟我是打算练习更多的领域所以引入富文本编辑器，望客观谅解哦</p><h3>接下来有做什么？</h3><ol><li><strong>编辑好你的题目：</strong>起一个响亮点的名字	</li><li><strong>开启你的创作之路：</strong>随意编辑</li></ol><h3>简单的介绍一下我</h3><ul><li>📝 高广源 计算机专业，</li><li>📕 全栈工程师，基本没有不会的，</li><li>⭐️ <a href="https://github.com/ggy" target="">GitHub</a> 我的github点击查看链接</li><li>🏠 展示秘密，</li><li>🧑‍💻 A18581897806@outlook.com 我的邮箱</li></ul><h3>我的技术栈(怕吓到你)</h3><p>	<strong>我会Vue 2、Vue 3、router、vuex，Pinia、Ts、Less、Sass、React、HTML、CSS、JavaScript、es6+、ajax、Webpack、npm、pnpm、yarn、Node、Express、MongoDB、Apifox、Postman、antd、element-ui、vant、bootstrap、veevalidate、git、husky、eslint、prettier、uniapp、echarts、Flutter、Web3、区块链技术、Svelte、Solid等等等等...</strong></p>',
    )
const toolbarConfig = {}
const editorConfig = { 
  placeholder: '图片导入已经禁用了，请考虑一下小的的服务器，没钱括了...' 
}
toolbarConfig.excludeKeys = [
    'lineHeight',
    'group-video',
    'fullScreen',
    'group-image'
]

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
const handleChange = () => {
  writeContentStore.changeWriteContent(valueHtml.value)
}

onMounted( async() => {
  if(props.writeHtml) valueHtml.value = await props.writeHtml
})

onBeforeRouteLeave((to, from, next) => {
  hooks.confirm('请问您确定要离开吗？离开后内容不会保存！','链界探索者提示您：')
  .then(data => next())
  .catch(err => next(false))
})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
</script>


<template>
    <el-card>
      <div style="border: 1px solid #ae782c;height: 900px;">
        <Toolbar
          style="border-bottom: 1px solid #aaa;"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
        />
        <Editor
          style="height: 90%; overflow-y: hidden;"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="handleCreated"
          @onChange="handleChange"
        />
      </div>
    </el-card>
</template>

<style lang="scss" scoped>

.el-card {
  height: 940px;
}
:deep(.w-e-bar) {
  background-color: #f5f5f5;
}

:deep(.w-e-menu-tooltip-v5:hover) {
  background-color: rgba($color: #ae782c, $alpha: .5);
} 

:deep(.active) {
  background-color: rgba($color: #ae782c, $alpha: .8);
}

    
</style>