<template>
  <div class="addPostPage">
    <el-form :model="form" label-width="120px">
      <el-form-item label="Title">
        <el-input v-model="form.title" placeholder="Title" />
      </el-form-item>
      <el-form-item label="Content">
        <el-input
          v-model="form.content"
          :autosize="{ minRows: 4, maxRows: 6 }"
          type="textarea"
          placeholder="Content"
        />
      </el-form-item>
      <el-form-item label="Channel">
        <el-checkbox-group v-model="form.channelId">
          <el-checkbox-button
            v-for="channelId in channels"
            :key="channelId"
            :label="channelId"
            >{{ channelId }}
          </el-checkbox-button>
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
          v-model:file-list="fileList"
          accept="image/jpeg,image/png"
          class="upload-demo"
          show-file-list
          multiple
          auto-upload
          list-type="picture-card"
          :http-request="requestUpload"
          :before-upload="beforeUpload"
          :limit="upLoadPicsLimit"
          :on-exceed="handleExceed"
          :on-success="handleUploadSuccess"
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
import { reactive, ref } from 'vue';
import {
  ElMessage,
  UploadProps,
  UploadRequestHandler,
  UploadUserFile,
} from 'element-plus';
import { v4 } from 'uuid';
import { getOSSPolicy } from '@/api/forums';
import axios from 'axios';
import { AddPosts } from '@/types/forum.d';

const channels = ['General', 'Club', 'Tech', 'Others'];

const upLoadPicsLimit = ref(9);

// do not use same name with ref
const form: AddPosts = reactive({
  title: '',
  content: '',
  status: true,
  channelId: ['General'],
  pics: [],
});

// OSS policy and signature
const dataObj = reactive({
  policy: '',
  signature: '',
  key: '',
  OSSAccessKeyId: '',
  dir: '',
  host: '',
});

const fileList = ref<UploadUserFile[]>([]);

const onSubmit = () => {
  console.log('submit!');
};

const uploadPicsToOSS = () => {
  return axios(dataObj.host, {
    method: 'post',
    data: dataObj,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 上传图片到OSS
const requestUpload: UploadRequestHandler = async () => {
  uploadPicsToOSS().then((response) => {
    if (response.status !== 200) {
      ElMessage({ message: 'Upload failed', type: 'error', showClose: true });
    }
  });
};

// 上传之前获得OSS的policy和signature
const beforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 5) {
    ElMessage.error('Picture size can not exceed 5MB!');
    return false;
  }
  return new Promise((resolve, reject) => {
    getOSSPolicy()
      .then((response) => {
        const dataTmp = {
          policy: response.data.policy,
          signature: response.data.signature,
          OSSAccessKeyId: response.data.accessid,
          key: `${response.data.dir}${v4()}_${rawFile.name}`,
          dir: response.data.dir,
          host: response.data.host,
        };
        Object.assign(dataObj, dataTmp);
        resolve(true);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
        // eslint-disable-next-line
        reject(false);
      });
  });
};

const handleUploadSuccess = () => {
  form.pics.push(`${dataObj.host}/${dataObj.key}`);
};

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is ${upLoadPicsLimit.value}, you selected ${files.length} files this time, add up to ${
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
