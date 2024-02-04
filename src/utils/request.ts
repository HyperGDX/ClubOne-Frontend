import axios from 'axios';
import { ElMessageBox } from 'element-plus';
import router from '@/router/index.ts';

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // 这里可以添加一些请求前的处理
    return config;
  },
  (error) => {
    // 请求错误的处理
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    // 这里可以添加一些响应的处理
    return response.data;
  },
  (error) => {
    // 响应错误的处理
    if (!error.response) {
      ElMessageBox.confirm(
        `
        <p>检测到请求错误</p>
        <p>${error}</p>
        `,
        '请求报错',
        {
          dangerouslyUseHTMLString: true,
          distinguishCancelAndClose: true,
          confirmButtonText: '稍后重试',
          cancelButtonText: '取消',
        }
      );
      return;
    }
    // eslint-disable-next-line default-case
    switch (error.response.status) {
      case 500:
        ElMessageBox.confirm(
          `
        <p>检测到接口错误${error}</p>
        <p>错误码<span style="color:red"> 500 </span>：此类错误内容常见于后台panic，请先查看后台日志，如果影响您正常使用可强制登出清理缓存</p>
        `,
          '接口报错',
          {
            dangerouslyUseHTMLString: true,
            distinguishCancelAndClose: true,
            confirmButtonText: '清理缓存',
            cancelButtonText: '取消',
          }
        ).then(() => {
          localStorage.clear();
          router.push({ name: 'Login', replace: true });
        });
        break;
      case 404:
        ElMessageBox.confirm(
          `
          <p>检测到接口错误${error}</p>
          <p>错误码<span style="color:red"> 404 </span>：此类错误多为接口未注册（或未重启）或者请求路径（方法）与api路径（方法）不符--如果为自动化代码请检查是否存在空格</p>
          `,
          '接口报错',
          {
            dangerouslyUseHTMLString: true,
            distinguishCancelAndClose: true,
            confirmButtonText: '我知道了',
            cancelButtonText: '取消',
          }
        );
        break;
    }
    // eslint-disable-next-line consistent-return
    return Promise.reject(error);
  }
);

export default service;
