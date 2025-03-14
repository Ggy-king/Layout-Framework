<!-- 创作底部标签 -->
<script setup lang="ts">
import { reactive, ref,computed, onUnmounted } from 'vue'
import type { ComponentSize, FormInstance, FormRules,UploadProps,UploadInstance, UploadUserFile } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import hooks from '@/utils/hooks';
import { postWriteInfo, patchWriteEdit } from '@/api/write'
import { userFromStore , writeStore } from '@/stores'
import { TESTBATH } from '@/config/config'
import { onMounted } from 'vue';

const props = withDefaults(defineProps<{
  essayFrom: any
}>(),{
  essayFrom: {}
})
// -------------表单数据
interface RuleForm {
  title: string
  topic: string
  summarize: string
  currency: string[]
  technology: string
  imgFile: UploadUserFile[]   
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  title: '',
  topic: '',
  summarize: '',
  currency: [],
  technology: '',
  imgFile: []
})

const rules = reactive<FormRules<RuleForm>>({
  title: [
    { required: true, message: '请输入标题名字', trigger: 'change' },
    { min: 5, max: 62, message: '长度在5-62字之间', trigger: 'change' },
  ],
  topic: [
    {
      required: true,
      message: '请选择分类',
      trigger: 'change',
    },
  ],
  summarize: [
    { required: true, message: '请写摘要', trigger: 'change' },
    { min: 20, max: 200,message: '长度在20-200字之间', trigger: 'change' }
  ],
  currency: [
    {
      type: 'array',
      required: true,
      message: '请至少选择一个种类',
      trigger: 'change',
    },
  ],
  technology: [
    {
      required: true,
      message: '请选择一项技术，如果没有符合请选择大数据',
      trigger: 'change',
    },
  ],
  imgFile: [
    {
      message: '请上传一张小于2MB的图片作为您的封面，格式仅限png、jpg、webp。如"出现图片符合要求"等提示可忽略此句',
      required: true , 
      trigger: 'change' 
    }
  ]
})

// -------------处理图片
const userStore = userFromStore()
const action = `${TESTBATH}/write/cover-img`
const headers = computed(() => ({
  Authorization: userStore.token
}))
const uploadRef = ref<UploadInstance>()
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const timeoutIds = ref<number[]>([])
  
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
}
const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
const checkImgChange: UploadProps['onChange'] = (uploadFile,uploadFiles) => {
  if (!['image/jpeg','image/png','image/webp'].includes(uploadFile.raw?.type as string)) {
    const timeoutId = setTimeout(() => {
      ruleForm.imgFile.splice(ruleForm.imgFile.indexOf(uploadFile,1))
      hooks.message('上传的图片只支持JPG、PNG、WEBP格式',"error")
    },500)

    timeoutIds.value.push(timeoutId)
  } else if (uploadFile.size as number / 1024 / 1024 > 2) {
    const timeoutId = setTimeout(() => {
      ruleForm.imgFile.splice(ruleForm.imgFile.indexOf(uploadFile,1))
      hooks.message('上传的图片请小于2MB!',"error")
    }, 500)

    timeoutIds.value.push(timeoutId)
  } else {
    hooks.message('图片符合要求，添加成功！准备上传...',"success")
  }
}
const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    hooks.message('只能上传一张图片作为封面！',"warning")
}
const handleImgUpload = async () => {
  if (ruleForm.imgFile[0]?.status === 'success')  return
  return new Promise((resolve, reject) => {

    const timeout = setTimeout(() => {
      hooks.message('图片上传时间过长，请检查网络连接', 'error');
      reject(new Error('图片上传超时'))
    }, 30000)

    // 使用状态管理
    const checkStatus = () => {
      if (ruleForm.imgFile[0]?.status === 'success') {
        clearTimeout(timeout)
        resolve(ruleForm.imgFile[0].response)
      } else if (ruleForm.imgFile[0]?.status === 'fail') {
        clearTimeout(timeout)
        reject(new Error('图片上传失败'))
      } else {
        setTimeout(checkStatus, 200) // 每100ms检查一次状态
      }
    }

    // 开始检查状态
    checkStatus()
    
    // 触发上传
    uploadRef.value?.submit()
  })
}

// ------------文章创作相关
const writeContentStore = writeStore()

const plainText = () => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = writeContentStore.writeContentHtml
  return tempDiv.textContent || tempDiv.innerText || ''
}
const handleSubmitWrite = () => {
  const writeText = plainText()
  if(writeContentStore.writeContentHtml === '<h2>欢迎来看小高发文章🎉</h2><p>可以写下所有你想写的文章，大展你身手，当然，可能我做的编辑器并不符合你的心意，当这也是无法避免的。毕竟我是打算练习更多的领域所以引入富文本编辑器，望客观谅解哦</p><h3>接下来有做什么？</h3><ol><li><strong>编辑好你的题目：</strong>起一个响亮点的名字	</li><li><strong>开启你的创作之路：</strong>随意编辑</li></ol><h3>简单的介绍一下我</h3><ul><li>📝 高广源 计算机专业，</li><li>📕 全栈工程师，基本没有不会的，</li><li>⭐️ <a href="https://github.com/ggy" target="">GitHub</a> 我的github点击查看链接</li><li>🏠 展示秘密，</li><li>🧑‍💻 A18581897806@outlook.com 我的邮箱</li></ul><h3>我的技术栈(怕吓到你)</h3><p>	<strong>我会Vue 2、Vue 3、router、vuex，Pinia、Ts、Less、Sass、React、HTML、CSS、JavaScript、es6+、ajax、Webpack、npm、pnpm、yarn、Node、Express、MongoDB、Apifox、Postman、antd、element-ui、vant、bootstrap、veevalidate、git、husky、eslint、prettier、uniapp、echarts、Flutter、Web3、区块链技术、Svelte、Solid等等等等...</strong></p>')
  {
    hooks.message('文章不能为原始内容哦~','warning')
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    return false
  }
  if(writeText === '') {
    hooks.message('文章不能为空，最少200字哦~','warning')
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    return false
  } 
  if(writeText.length < 200) {
    hooks.message('文章字数太少了，请写够200字，亲~','warning')
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    return false
  }
  return true
}

// ------------封装请求

const postWriteAll = async (formObj:Record<string,any>,formEl: FormInstance | undefined,imgPath?: string) :Promise<void> => {
  
  // 更新逻辑
  if(props.essayFrom._id) {
    try {
      formObj._id = props.essayFrom._id
      formObj.originalUrl = props.essayFrom.imgPath
      const res = await patchWriteEdit(formObj,imgPath)
      if(res.data.code === '3000') {
        hooks.message('文章修改成功！感谢您的再次创作','success')
        return formEl?.resetFields()
      } 
      if(res.data.code === '3004') return hooks.message('文章更新失败，请重试','error')
    } catch (error) {
      return hooks.message('文章更新失败，请重试或联系开发者','error')
    }
  }
  
  // 创作逻辑
  try {
    const res = await postWriteInfo(formObj,imgPath)
    if(res.data.code === '3000') {
      hooks.message('文章已上传成功！感谢您的创作','success')
      formEl?.resetFields()
    } 
    if(res.data.code === '3003') return hooks.message('文章上传失败，请重试','error')
    
  } catch (error) {
    hooks.message('文章上传失败，请重试或联系开发者','error')
  }
}

// ------------提交 重写
const fromObjCreate = (formEl: FormInstance | undefined) => {
  const formObj:Record<string,any> = {}
  formEl?.fields.forEach((value) => {
    if(value.prop === 'imgFile') return
    formObj[value.prop as string] = value.fieldValue
  })
  formObj.writeHtml = writeContentStore.writeContentHtml
  return formObj
}


// 保存提交
const submitForm = async (formEl: FormInstance | undefined) => {
  
  // 第一步：文章内容验证
  const isPerfectWrite = handleSubmitWrite()
  if (!isPerfectWrite || !formEl) return

  // 第二步：表单验证
  const val = await formEl.validate((valid, fields) => {
    if(!valid) return hooks.message('请您把内容填写完整，谢谢！','warning')
  })
  if(!val) return

  // 第三步：登录验证
  if (!userStore.token) {
    hooks.message('请登录!登录后可发布文章','warning')
    userStore.changeLoginVisible(true)
    return
  }
  
  // 第四步上传
  try {

    // 第一步：上传图片
    const imgRes = await handleImgUpload()  // 要拿到路径
    
    // 第二步：提交文章
    const formObj = fromObjCreate(formEl)
    const timeoutId = setTimeout(() => {
        postWriteAll(formObj, formEl, (imgRes as { data?: any })?.data)
    }, 500)
    timeoutIds.value.push(timeoutId)

  } catch (error) {
    hooks.message('上传失败，请检查网络或重试', 'error')
  }


}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

onMounted(() => {
  if(props.essayFrom._id) {
    ruleForm.title = props.essayFrom.title
    ruleForm.topic = props.essayFrom.topic
    ruleForm.summarize = props.essayFrom.summarize
    ruleForm.currency = props.essayFrom.currency
    ruleForm.technology = props.essayFrom.technology
    ruleForm.imgFile = [{name: 'user',url:props.essayFrom.imgPath}]
  }
})
onUnmounted(() => {
  timeoutIds.value.forEach(id => clearTimeout(id))  // 清除所有定时器
})

</script>

<template>
  <el-card>
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="auto"
            class="ruleForm"
            :size="formSize"
            status-icon
        >
            <el-form-item label="文章标题" prop="title">
                <el-input v-model="ruleForm.title" placeholder="请输入题目"/>
            </el-form-item>

            <el-form-item 
                label="添加封面"  prop="imgFile"
            >
                <el-upload
                  ref="uploadRef"
                  v-model:file-list="ruleForm.imgFile"
                  :action="action"
                  :headers="headers"
                  list-type="picture-card"
                  :auto-upload="false"
                  :limit="1"
                  :on-exceed="handleExceed"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-change="checkImgChange"
                >
                    <el-icon><Plus /></el-icon>
                </el-upload>

                <el-dialog v-model="dialogVisible">
                    <img w-full :src="dialogImageUrl" alt="放大观看图片" />
                </el-dialog>
            </el-form-item>

            
            <el-form-item label="文章分类" prop="topic">
                <el-select v-model="ruleForm.topic" placeholder="请选择">
                    <el-option label="投资领域" value="投资领域" />
                    <el-option label="交易心得" value="交易心得" />
                    <el-option label="监管政策" value="监管政策" />
                    <el-option label="交易所相关" value="交易所相关" />
                    <el-option label="期货品种分析" value="期货品种分析" />
                    <el-option label="期货社会影响" value="期货社会影响" />
                    <el-option label="市场创新或前景" value="市场创新或前景" />
                </el-select>
            </el-form-item>

            <el-form-item label="文章摘要" prop="summarize">
                <el-input v-model="ruleForm.summarize" type="textarea" placeholder="摘要：帮助读者快速了解内容，200字以内"/>
            </el-form-item>


            <el-form-item label="主要币种" prop="currency">
                <el-checkbox-group v-model="ruleForm.currency">
                    <el-checkbox value="农产品" name="currency">
                      农产品期货
                    </el-checkbox>
                    <el-checkbox value="金属" name="currency">
                      金属期货
                    </el-checkbox>
                    <el-checkbox value="能源" name="currency">
                      能源期货
                    </el-checkbox>
                    <el-checkbox value="化工" name="currency">
                      化工期货
                    </el-checkbox>
                    <el-checkbox value="金融" name="currency">
                      金融期货
                    </el-checkbox>
                    <el-checkbox value="期权" name="currency">
                      期权
                    </el-checkbox>
                    <el-checkbox value="股票" name="currency">
                      股票相关
                    </el-checkbox>
                    
                </el-checkbox-group>
            </el-form-item>


            <el-form-item label="主要技术领域" prop="technology">
                <el-radio-group v-model="ruleForm.technology">
                    <el-radio value="云计算">云计算</el-radio>
                    <el-radio value="大数据">大数据</el-radio>
                    <el-radio value="人工智能">人工智能</el-radio>
                    <el-radio value="区块链">区块链</el-radio>
                    <el-radio value="技术分析">技术分析</el-radio>
                    <el-radio value="其他技术或无">其他技术或无</el-radio>
                </el-radio-group>
            </el-form-item>


           
            <el-form-item>

            <div class="form-btn">
                <el-button type="primary" @click="submitForm(ruleFormRef)">保存提交</el-button>
                <el-button @click="resetForm(ruleFormRef)">清空重填</el-button>
            </div>

            </el-form-item>
        </el-form>
  </el-card>
    
</template>

<style scoped lang="scss">
.el-card {
    margin: 20px 0;
    .ruleForm {
        padding: 20px 20px 40px;
        border: 1px solid #ae782c;
        .form-btn {
            position: absolute;
            top: 10px;
            right: 10px;
        }
        :deep(.el-dialog) {
          width: max-content;
        }
    }
}


</style>

