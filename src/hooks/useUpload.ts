import { ElMessage, UploadProps, UploadRequestHandler } from 'element-plus';
import { v4 } from 'uuid';
import { computed, reactive, ref } from 'vue';
import axios from 'axios';
import { getOSSPolicy } from '../api/forums';

export default function () {
  const dataObj = reactive({
    policy: '',
    signature: '',
    key: '',
    OSSAccessKeyId: '',
    dir: '',
    host: '',
  });

  const uploadFilzeSizeLimit = ref(5);

  const upLoadPicsLimit = ref(1);

  const beforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.size / 1024 / 1024 > uploadFilzeSizeLimit.value) {
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
            file: rawFile,
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

  const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
      `The limit is ${upLoadPicsLimit.value}, you selected ${files.length} files this time, add up to ${
        files.length + uploadFiles.length
      } totally`
    );
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
      if (response.status !== 204) {
        ElMessage({ message: 'Upload failed', type: 'error', showClose: true });
      }
    });
  };

  const url = computed(() => {
    return `${dataObj.host}/${dataObj.key}`;
  });
  return {
    uploadFilzeSizeLimit,
    beforeUpload,
    upLoadPicsLimit,
    handleExceed,
    requestUpload,
    url,
  };
}
