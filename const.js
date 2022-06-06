const kingdomName = 'Ribbon'

const members = [
  { name: '단밤' },
  { name: '어머' },
  { name: '워니니' },
  { name: '유한량' },
  { name: 'HyunA' },
  { name: '꼬마짱구' },
  { name: '주녕코' },
  { name: 'ESNA' },
  { name: '르미르르미' },
  { name: '리치푸른' },
  { name: '리망' },
  { name: '김쨩아' },
  { name: '플럼' },
  { name: '능구렁이' },
  { name: '구름빛블루베리' },
  { name: '슈슈베리' },
  { name: '파랑공룡' },
  { name: '쳔상' },
  { name: '규일이' },
  { name: '르릉' },
  { name: 'HOWL하울' },
  { name: '초원의초밥' },
  { name: '명탐정밍또찌' },
  { name: '막힛' },
  { name: '유기농브로콜리' },
  { name: '네츠' },
  { name: '맛깔고등어로버프' },
  { name: '못생긴붕어' },
  { name: '박삐뽀' },
  { name: '세비' },
  { name: '소금맛아이스' },
  { name: '신기하당' },
  { name: '츄베리' },
  { name: '카사리안' },
  { name: '커꾜' },
  { name: '커덩' },
  { name: '포동포포이' },
  { name: '형낑' },
  { name: '김얄루' },
  { name: '김은님' },
  { name: '행복이숑' },
  { name: '밍공이' },
  { name: '폭력군' },
  { name: '복수의망치' },
  { name: '날아라치킨맨' },
  { name: '때리지마라' },
  { name: '쑥덕이' },
  { name: '곰탱아' },
  { name: '희네입니다' },
  { name: '단밤찐빵' },
  { name: '짱배' },
  { name: '더브' },
  { name: '꾸우루밍' },
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
