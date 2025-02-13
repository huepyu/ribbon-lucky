const kingdomName = 'Ribbon'

const KINGDOM_A = 'A'
const KINGDOM_B = 'B'

const members = [
  // 운영진: 리본
  { kingdom: KINGDOM_A, name: '단밤', ratio: 2, prefix: '★' },
  { kingdom: KINGDOM_B, name: '주녕코', ratio: 2, prefix: '☆' },
  { kingdom: KINGDOM_A, name: '리망', ratio: 2, prefix: '☆' },
  { kingdom: KINGDOM_A, name: '휴퓨', ratio: 2, prefix: '☆' },
  { kingdom: KINGDOM_A, name: '구름빛블루베리', ratio: 2, prefix: '☆' },
  { kingdom: KINGDOM_A, name: '꾸우루밍', ratio: 2, prefix: '☆' },
  { kingdom: KINGDOM_A, name: '김쨩아', ratio: 2, prefix: '☆' },
  { kingdom: KINGDOM_A, name: '삐누', ratio: 2, prefix: '☆' },
  // 일반 킹덤원: 리본
  { kingdom: KINGDOM_A, name: 'HyunA', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '유한량', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '유기농브로콜리', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '킴과자', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '닐라바닐라', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '다솜다솜', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '밍공이', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '레미마르', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '므s', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '루다퀸', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '몽뭉몽뭉잉', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '맛깔고등어로버프', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '춤추는나무', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '아이솔칸', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '아기하양', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '망고띠', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: 'HOWL하울', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '나랑고양이', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '슈슈베리', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '규일이', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '때리지마라', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '햇사리', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '아기까망', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '유기농고사리', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '츄퓨', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '츄뚱이', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '어머', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '행복이숑', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '하미또', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '김은님', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '단밤찐빵', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '옥봉팔', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '르미르르미', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '희네입니다', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '소금맛아이스', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '초원의초밥', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '복수의망치', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: 'ESNA', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '명탐정밍또지', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '클린아티', ratio: 1, prefix: '' },
  { kingdom: KINGDOM_A, name: '505호', ratio: 1, prefix: '' },
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
