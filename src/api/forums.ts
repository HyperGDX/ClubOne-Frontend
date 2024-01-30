import request from '@/utils/request.ts';

export default function getPosts(channelId: number, pageIndex: number) {
  return request({
    url: `/forum/posts/channel/${channelId}`,
    method: 'get',
    params: { pageIndex },
  });
}
