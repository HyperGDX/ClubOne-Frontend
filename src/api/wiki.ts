import request from '@/utils/request.ts';

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

export function createWiki() {
  return request({
    url: `/wiki`,
    method: 'post',
  });
}

export function deleteWiki(wikiUuid: string) {
  return request({
    url: `/wiki/${wikiUuid}`,
    method: 'delete',
  });
}
