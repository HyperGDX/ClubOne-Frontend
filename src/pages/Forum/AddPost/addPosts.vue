<template>
  <div class="addPostPage">
    <el-form :model="form" :rules="rules" ref="ruleFormRef" label-width="120px">
      <el-form-item label="Title" prop="title">
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
        <el-checkbox-group v-model="form.channelId" min="1">
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
              jpg/png files with a size less than {{ sizeLimit }}MB
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <router-link to="/forum/general">
          <el-button style="margin-left: 16px">Cancel</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import {
  ElMessage,
  FormInstance,
  FormRules,
  UploadUserFile,
} from 'element-plus';
import { addPosts } from '@/api/forums';
import {
  AddPosts,
  AddPostsReq,
  ChannelList,
  ChannelListMap,
} from '@/types/forum.d';
import { useRouter } from 'vue-router';
import useUpload from '@/hooks/useUpload';

const channels = [
  ChannelList.General,
  ChannelList.Club,
  ChannelList.Tech,
  ChannelList.Others,
];

const ruleFormRef = ref<FormInstance>();

const fileList = ref<UploadUserFile[]>([]);

const sizeLimit = ref(5);

const router = useRouter();

const {
  uploadFilzeSizeLimit,
  beforeUpload,
  upLoadPicsLimit,
  handleExceed,
  requestUpload,
  url,
} = useUpload();

onMounted(() => {
  uploadFilzeSizeLimit.value = sizeLimit.value;
  upLoadPicsLimit.value = 9;
});

const rules = reactive<FormRules<AddPosts>>({
  title: {
    required: true,
    message: 'Please input title',
    trigger: 'blur',
  },
});

const form = reactive<AddPosts>({
  userId: 1,
  title: '',
  content: '',
  status: true,
  channelId: [ChannelList.General],
  pics: [],
});

const handleUploadSuccess = () => {
  form.pics.push(url.value);
};

const switchChannelId = (channelStrs: string[]) => {
  const res = channelStrs.map((channelStr) => {
    return ChannelListMap[channelStr as keyof typeof ChannelListMap];
  });
  return res;
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      const post: AddPostsReq = {
        userId: form.userId,
        title: form.title,
        content: form.content,
        status: form.status ? 1 : 0,
        channelId: switchChannelId(form.channelId),
        pics: form.pics,
      };
      addPosts(post);
      router.push({
        name: 'general',
      });
    } else {
      ElMessage({ message: `error submit! ${fields?.title[0].message}` });
    }
  });
};
</script>

<style scoped>
.layout-container-demo .addPostPage {
  margin-top: 24px;
}
</style>
