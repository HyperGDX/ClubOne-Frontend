import request from '@/utils/request.ts';

export default function getPosts(channelId: number, pageIndex: number) {
  return request({
    url: `/posts?channelId=${channelId}&pageIndex=${pageIndex}`,
    method: 'get',
  });
}
