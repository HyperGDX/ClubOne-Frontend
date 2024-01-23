import request from '@/utils/request.ts';

export function getWiki(wikiIndex: string) {
  return request({
    url: `/wiki`,
    method: 'get',
    params: { wikiIndex },
  });
}

export function updateWiki(wikiIndex: string, wikiContent: string) {
  return request({
    url: `/wiki`,
    method: 'post',
    data: {
      wikiIndex,
      wikiContent,
    },
  });
}
