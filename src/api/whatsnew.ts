import request from '@/utils/request.ts';

export default function getLastestCards(cardNum: number) {
  return request({
    url: '/whatsNew/cards',
    method: 'get',
    params: { cardNum },
  });
}
