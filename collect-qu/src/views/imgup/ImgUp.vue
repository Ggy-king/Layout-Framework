<template>
<div class="clearfix" style="position: absolute;top:150px;left:240px;width: 500px;height: 550px;border: 2px solid #aaa;text-align: center; padding-top: 10px;">
    <a-upload
    directory
    :before-upload="beforeUpload"
    v-model:file-list="fileList"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    list-type="picture-card"
    @preview="handlePreview"
    >
    <div v-if="fileList.length < 17" >
        <plus-outlined />
        <div style="margin-top: 8px;width: 100">点击上传</div>
    </div>
    </a-upload>
    <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
    <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
</div>
</template>
<script>
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

function getBase64(file) {
return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = error => reject(error);
});
}

export default defineComponent({
components: {
    PlusOutlined,
},

setup() {
    const previewVisible = ref(false);
    const previewImage = ref('');
    const previewTitle = ref('');
    const fileList = ref([{
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://vdposter.bdstatic.com/d33fcfb1ce8855b14ce673bc5c01c237.jpeg',
    }, {
    uid: '-2',
    name: 'image.png',
    status: 'done',
    url: 'https://vdposter.bdstatic.com/d33fcfb1ce8855b14ce673bc5c01c237.jpeg',
    }, {
    uid: '-3',
    name: 'image.png',
    status: 'done',
    url: 'https://vdposter.bdstatic.com/d33fcfb1ce8855b14ce673bc5c01c237.jpeg',
    }, {
    uid: '-4',
    name: 'image.png',
    status: 'done',
    url: 'https://vdposter.bdstatic.com/d33fcfb1ce8855b14ce673bc5c01c237.jpeg',
    }, {
    uid: '-xxx',
    percent: 50,
    name: 'image.png',
    status: 'uploading',
    url: 'https://vdposter.bdstatic.com/d33fcfb1ce8855b14ce673bc5c01c237.jpeg',
    }, {
    uid: '-5',
    name: 'image.png',
    status: 'error',
    }]);

    const beforeUpload = file => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

      if (!isJpgOrPng) {
        message.error('你仅能上传png或jpg格式的图片');
      }

      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        message.error('你上传的图片不能超过2MB');
      }

      return isJpgOrPng && isLt2M;
    };

    const handleCancel = () => {
    previewVisible.value = false;
    previewTitle.value = '';
    };

    const handlePreview = async file => {
    if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
    }

    previewImage.value = file.url || file.preview;
    previewVisible.value = true;
    previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
    };

    return {
    previewVisible,
    previewImage,
    fileList,
    handleCancel,
    handlePreview,
    previewTitle,
    beforeUpload
    };
},

});
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
font-size: 32px;
color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
margin-top: 8px;
color: #666;
}
</style>