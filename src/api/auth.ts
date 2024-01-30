import request from '@/utils/request.ts';

export default function loginWithUsrPwd(usr: string, pwd: string) {
  return request({
    url: `/posts`,
    method: 'post',
    data: { usr, pwd },
  });
}
