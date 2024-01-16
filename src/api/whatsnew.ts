import request from '@/utils/request.ts';

export default function getLastestCards(cardNum: number) {
  return request({
    url: '/whatsNew/latestCards',
    method: 'get',
    params: { cardNum },
  });
}
