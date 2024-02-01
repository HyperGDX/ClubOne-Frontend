import request from '@/utils/request';

export function getPosts(channelId: number, pageIndex: number) {
  return request({
    url: `/forum/posts/channel/${channelId}`,
    method: 'get',
    params: { pageIndex },
  });
}

export function getOSSPolicy() {
  return request({
    url: `/forum/posts/OSSPolicy`,
    method: 'get',
  });
}
