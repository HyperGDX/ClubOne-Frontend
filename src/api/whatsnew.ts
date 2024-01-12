import request from '@/utils/request';

export function getLastestCards(cardNum: number) {
  return request({
    url: '/whatsNew/latestCards',
    method: 'get',
    params: { cardNum },
  });
}
