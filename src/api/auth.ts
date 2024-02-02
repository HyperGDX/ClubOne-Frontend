import request from '@/utils/request.ts';

export async function loginWithUsrPwd(usr: string, pwd: string) {
  const response = await request({
    url: `/license/loginWithUsrPwd`,
    method: 'post',
    data: { usr, pwd },
  });

  if (response.status === 200 && response.data.token) {
    localStorage.setItem('token', response.data.token);
    return response.data;
  }
  throw new Error('Login failed');
}

export function loginWithCaptcha(usr: string, captcha: string) {
  return request({
    url: `/license`,
    method: 'post',
    data: { usr, captcha },
  });
}
