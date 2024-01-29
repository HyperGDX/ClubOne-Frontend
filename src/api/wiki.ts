import request from '@/utils/request.ts';

export function getWikis() {
  return request({
    url: `/wiki`,
    method: 'get',
  });
}

export function getWiki(wikiUuid: string) {
  return request({
    url: `/wiki/${wikiUuid}`,
    method: 'get',
  });
}

export function updateWiki(wikiUuid: string, wikiContent: string) {
  return request({
    url: `/wiki/${wikiUuid}`,
    method: 'put',
    data: {
      wikiContent,
    },
  });
}

export function createWiki(creator: string) {
  return request({
    url: `/wiki`,
    method: 'post',
    data: {
      creator,
    },
  });
}

export function deleteWiki(wikiUuid: string) {
  return request({
    url: `/wiki/${wikiUuid}`,
    method: 'delete',
  });
}
