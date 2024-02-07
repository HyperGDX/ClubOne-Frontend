import request from '@/utils/request';

export default function getLastestCards(cardNum: number) {
  return request({
    url: '/whatsNew/cards',
    method: 'get',
    params: { cardNum },
  });
}
