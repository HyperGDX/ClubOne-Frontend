<template>
  <div class="addPostPage">
    <el-form :model="form" label-width="120px">
      <el-form-item label="Title">
        <el-input v-model="form.name" placeholder="Title" />
      </el-form-item>
      <el-form-item label="Content">
        <el-input
          v-model="form.desc"
          :autosize="{ minRows: 4, maxRows: 6 }"
          type="textarea"
          placeholder="Content"
        />
      </el-form-item>
      <el-form-item label="Channel">
        <el-checkbox-group v-model="form.channel">
          <el-checkbox label="General" name="channel" />
          <el-checkbox label="Club" name="channel" />
          <el-checkbox label="Tech" name="channel" />
          <el-checkbox label="Others" name="channel" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Status">
        <el-switch
          v-model="form.status"
          active-text="Show"
          inactive-text="Hidden"
        />
      </el-form-item>
      <el-form-item>
        <el-upload
          v-model:file-list="dataObj"
          accept="image/jpeg,image/png"
          class="upload-demo"
          action="https://company-one-pics.oss-cn-nanjing.aliyuncs.com"
          show-file-list
          multiple
          list-type="picture-card"
          :before-upload="beforeUpload"
          :limit="9"
          :on-exceed="handleExceed"
        >
          <el-button type="primary">Upload</el-button>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 5MB
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
// import type { UploadProps, UploadUserFile } from 'element-plus';
import { reactive } from 'vue';
import { ElMessage, UploadProps } from 'element-plus';
import { v4 } from 'uuid';
import { getOSSPolicy } from '@/api/forums';

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  status: true,
  channel: ['General'],
  resource: '',
  desc: '',
  pics: [],
});

const dataObj = reactive({
  policy: '',
  signature: '',
  key: '',
  ossaccessKeyId: '',
  dir: '',
  host: '',
  uuid: '',
});

// const fileList = ref<UploadUserFile[]>([
//   {
//     name: 'food.jpeg',
//     url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
//   },
// ]);

const onSubmit = () => {
  console.log('submit!');
};

const beforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 5) {
    ElMessage.error('Picture size can not exceed 5MB!');
    return false;
  }
  getOSSPolicy()
    .then((response) => {
      dataObj.policy = response.data.policy;
      dataObj.signature = response.data.signature;
      dataObj.ossaccessKeyId = response.data.accessid;
      dataObj.key = `${response.data.dir}/${v4()}_\${filename}`;
      dataObj.dir = response.data.dir;
      dataObj.host = response.data.host;
    })
    .catch((err) => {
      console.log('出错了...', err);
    });
  return true;
};

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 9, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};
</script>

<style scoped>
.layout-container-demo .addPostPage {
  margin-top: 24px;
}
</style>
