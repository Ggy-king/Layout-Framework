import pluginVue, { rules } from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,  //单引号
          semi: false, // 无分号
          printWidth: 80, //每行宽度最多80字符
          trailingComma: 'none', // 不加对象/数组最后的逗号
          endOfline: 'auto' //换行符号不限制
        }
      ],
      // ESLint规范
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index'] //vue组件名称多单词组成，忽略index.vue
        }
      ],
      'vue/no-setup-props-destructure': ['off'], //关闭props解构校验
      'no-undef': 'error'  // 未定义变量报错
    },
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,
]
