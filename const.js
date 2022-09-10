const kingdomName = 'Ribbon'

const members = [
  { name: '단밤' },
  { name: '어머' },
  { name: '워니니' },
  { name: '유한량' },
  { name: 'HyunA' },
  { name: '주녕코' },
  { name: 'ESNA' },
  { name: '르미르르미' },
  { name: '리망' },
  { name: '김쨩아' },
  { name: '플럼' },
  { name: '구름빛블루베리' },
  { name: '슈슈베리' },
  { name: '쳔상' },
  { name: 'HOWL하울' },
  { name: '초원의초밥' },
  { name: '명탐정밍또찌' },
  { name: '유기농브로콜리' },
  { name: '맛깔고등어로버프' },
  { name: '소금맛아이스' },
  { name: '신기하당' },
  { name: '김얄루' },
  { name: '김은님' },
  { name: '행복이숑' },
  { name: '밍공이' },
  { name: '복수의망치' },
  { name: '날아라치킨맨' },
  { name: '때리지마라' },
  { name: '희네입니다' },
  { name: '단밤찐빵' },
  { name: '짱배' },
  { name: '더브' },
  { name: '꾸우루밍' },
  { name: '아이솔칸' },
  { name: '나몽체리' },
  { name: '역기든고양이' },
  { name: '아기하양' },
  { name: '아기까망' },
  { name: '후작' },
  { name: '망고띠' },
  { name: '강초당' },
  { name: '김주요' },
  { name: '닐라바닐라' },
  { name: '런더너' },
  { name: '아담콩' },
  { name: '히토모히토' },
  { name: '규일이' },
  { name: '춤추는나무' },
  { name: '얼짱' }
]
  .sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    return 1
  })
  .map((m, idx) => ({
    ...m,
    id: idx + 1,
    stack: 0,
    rewards: [],
  }))
