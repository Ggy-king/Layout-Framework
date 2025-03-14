import { defineStore } from "pinia"
import { ref } from 'vue'

export const writeStore = defineStore('write-store',() => {
    const writeContentHtml = ref(
        '<h2>欢迎来看小高发文章🎉</h2><p>可以写下所有你想写的文章，大展你身手，当然，可能我做的编辑器并不符合你的心意，当这也是无法避免的。毕竟我是打算练习更多的领域所以引入富文本编辑器，望客观谅解哦</p><h3>接下来有做什么？</h3><ol><li><strong>编辑好你的题目：</strong>起一个响亮点的名字	</li><li><strong>开启你的创作之路：</strong>随意编辑</li></ol><h3>简单的介绍一下我</h3><ul><li>📝 高广源 计算机专业，</li><li>📕 全栈工程师，基本没有不会的，</li><li>⭐️ <a href="https://github.com/ggy" target="">GitHub</a> 我的github点击查看链接</li><li>🏠 展示秘密，</li><li>🧑‍💻 A18581897806@outlook.com 我的邮箱</li></ul><h3>我的技术栈(怕吓到你)</h3><p>	<strong>我会Vue 2、Vue 3、router、vuex，Pinia、Ts、Less、Sass、React、HTML、CSS、JavaScript、es6+、ajax、Webpack、npm、pnpm、yarn、Node、Express、MongoDB、Apifox、Postman、antd、element-ui、vant、bootstrap、veevalidate、git、husky、eslint、prettier、uniapp、echarts、Flutter、Web3、区块链技术、Svelte、Solid等等等等...</strong></p>',
    )

    const changeWriteContent = (newHtml:string) => {
        writeContentHtml.value = newHtml
    }

    return {
        writeContentHtml,
        changeWriteContent
    }
})