<template>
  <a-upload-dragger
    style="width: 550px;padding-top: 300px;"
    :max-count="1"
    v-model:fileList="fileList"
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    @change="handleChange"
    @drop="handleDrop"
  >
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">点击或拖拽选择文件</p>
    <p class="ant-upload-hint">
     仅支持PDF上传，每次只能上传一个文件。注意: 该功能正在开发测试中
    </p>
  </a-upload-dragger>
</template>
<script>
import { InboxOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'PdfUp',
  components: {
    InboxOutlined,
  },

  setup() {
    const handleChange = info => {
      const status = info.file.status;

      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }

      if (status === 'done') {
        message.success(`${info.file.name} 文件上传成功`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    };

    return {
      handleChange,
      fileList: ref([]),
      handleDrop: e => {
        console.log(e);
      },
    };
  },

});
</script>