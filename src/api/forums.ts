import { AddPostsReq } from '@/types/forum.d';
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
    url: `/third/oss/policy`,
    method: 'get',
  });
}

export function addPosts(data: AddPostsReq) {
  return request({
    url: '/forum/posts',
    method: 'post',
    data,
  });
}
