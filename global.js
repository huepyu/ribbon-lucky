const appVersion = '1.0.0'

const reward = {
  dingo: '딩고 호박',
  blackDye: '블랙 염색약',
  increaseWood: '인크리스 우드',
  increaseFire: '인크리스 파이어',
  lightSkillBook1: '빛 스킬북 I',
  lightSkillBook2: '빛 스킬북 II',
  lightSkillBook3: '빛 스킬북 III',
  darkSkillBook1: '어둠 스킬북 I',
  darkSkillBook2: '어둠 스킬북 II',
  darkSkillBook3: '어둠 스킬북 III',
  fireSkillBook1: '불 스킬북 I',
  fireSkillBook2: '불 스킬북 II',
  fireSkillBook3: '불 스킬북 III',
  waterSkillBook1: '물 스킬북 I',
  waterSkillBook2: '물 스킬북 II',
  waterSkillBook3: '물 스킬북 III',
  treeSkillBook1: '나무 스킬북 I',
  treeSkillBook2: '나무 스킬북 II',
  treeSkillBook3: '나무 스킬북 III',
  throneSkillBook: '왕성 스킬북 상자',
  darkMagicCrystal100: '흑마법 결정 100개',
  blackRidingDye: '블랙 탈 것 염색약',
  ivoryRidingDye: '아이보리 탈 것 염색약',
  defensiveKingdom: '디펜시브 킹덤',
  offensiveKingdom: '오펜시브 킹덤',
}

// for background-color, color
const productType = {
  normal: 'normal',
  light: 'light',
  dark: 'dark',
  fire: 'fire',
  water: 'water',
  tree: 'tree',
  normal_ivory: 'normal_ivory',
}

const group = {
  dingo: 'dingo',
  blackDye: 'blackDye',
  increaseWood: 'increaseWood',
  increaseFire: 'increaseFire',
  light1: 'light1',
  light2: 'light2',
  light3: 'light3',
  dark1: 'dark1',
  dark2: 'dark2',
  dark3: 'dark3',
  fire1: 'fire1',
  fire2: 'fire2',
  fire3: 'fire3',
  water1: 'water1',
  water2: 'water2',
  water3: 'water3',
  tree1: 'tree1',
  tree2: 'tree2',
  tree3: 'tree3',
  throneSkillBook: 'throneSkillBook',
  darkMagicCrystal100: 'darkMagicCrystal100',
  blackRidingDye: 'blackRidingDye',
  ivoryRidingDye: 'ivoryRidingDye',
  defensiveKingdom: 'defensiveKingdom',
  offensiveKingdom: 'offensiveKingdom',
}

const products = [
  {
    name: '유물 전장 승리: 딩고 호박 2개',
    rewards: [reward.dingo, reward.dingo],
    type: productType.normal,
    group: group.dingo,
    line: 0,
  },
  {
    name: '유물 전장 승리: 블랙 염색약 2개',
    rewards: [reward.blackDye, reward.blackDye],
    type: productType.normal,
    group: group.blackDye,
    line: 0,
  },
  {
    name: '유물 전장 패배: 딩고 호박',
    rewards: [reward.dingo],
    type: productType.normal,
    group: group.dingo,
    line: 0,
  },
  {
    name: '엔트 석상 4단계: 인크리스 우드',
    rewards: [reward.increaseWood],
    type: productType.tree,
    group: group.increaseWood,
    line: 1,
  },
  {
    name: '엔트 석상 5단계: 인크리스 우드 2권',
    rewards: [reward.increaseWood, reward.increaseWood],
    type: productType.tree,
    group: group.increaseWood,
    line: 1,
  },
  {
    name: '엔트 석상 6단계: 인크리스 우드 2권',
    rewards: [reward.increaseWood, reward.increaseWood],
    type: productType.tree,
    group: group.increaseWood,
    line: 1,
  },
  {
    name: '화염의 기사 라스 4단계: 인크리스 파이어',
    rewards: [reward.increaseFire],
    type: productType.fire,
    group: group.increaseFire,
    line: 2,
  },
  {
    name: '화염의 기사 라스 5단계: 인크리스 파이어 2권',
    rewards: [reward.increaseFire, reward.increaseFire],
    type: productType.fire,
    group: group.increaseFire,
    line: 2,
  },
  {
    name: '화염의 기사 라스 6단계: 인크리스 파이어 2권',
    rewards: [reward.increaseFire, reward.increaseFire],
    type: productType.fire,
    group: group.increaseFire,
    line: 2,
  },
  {
    name: '킹덤 디펜스 5단계 승리: 빛 스킬북 II',
    rewards: [reward.lightSkillBook2],
    type: productType.light,
    group: group.light2,
    line: 3,
  },
  {
    name: '킹덤 디펜스 5단계 승리: 빛 스킬북 III',
    rewards: [reward.lightSkillBook3],
    type: productType.light,
    group: group.light3,
    line: 3,
  },
  {
    name: '킹덤 디펜스 5단계 패배: 빛 스킬북 I',
    rewards: [reward.lightSkillBook1],
    type: productType.light,
    group: group.light1,
    line: 3,
  },
  {
    name: '킹덤 디펜스 5단계 승리: 어둠 스킬북 II',
    rewards: [reward.darkSkillBook2],
    type: productType.dark,
    group: group.dark2,
    line: 4,
  },
  {
    name: '킹덤 디펜스 5단계 승리: 어둠 스킬북 III',
    rewards: [reward.darkSkillBook3],
    type: productType.dark,
    group: group.dark3,
    line: 4,
  },
  {
    name: '킹덤 디펜스 5단계 패배: 어둠 스킬북 I',
    rewards: [reward.darkSkillBook1],
    type: productType.dark,
    group: group.dark1,
    line: 4,
  },
  {
    name: '킹덤 디펜스 5단계 승리: 불 스킬북 II',
    rewards: [reward.fireSkillBook2],
    type: productType.fire,
    group: group.fire2,
    line: 5,
  },
  {
    name: '킹덤 디펜스 5단계 승리: 불 스킬북 III',
    rewards: [reward.fireSkillBook3],
    type: productType.fire,
    group: group.fire3,
    line: 5,
  },
  {
    name: '킹덤 디펜스 5단계 패배: 불 스킬북 I',
    rewards: [reward.fireSkillBook1],
    type: productType.fire,
    group: group.fire1,
    line: 5,
  },
  {
    name: '킹덤 디펜스 5단계 승리: 물 스킬북 II',
    rewards: [reward.waterSkillBook2],
    type: productType.water,
    group: group.water2,
    line: 6,
  },
  {
    name: '킹덤 디펜스 5단계 승리: 물 스킬북 III',
    rewards: [reward.waterSkillBook3],
    type: productType.water,
    group: group.water3,
    line: 6,
  },
  {
    name: '킹덤 디펜스 5단계 패배: 물 스킬북 I',
    rewards: [reward.waterSkillBook1],
    type: productType.water,
    group: group.water1,
    line: 6,
  },
  {
    name: '킹덤 디펜스 5단계 승리: 나무 스킬북 II',
    rewards: [reward.treeSkillBook2],
    type: productType.tree,
    group: group.tree2,
    line: 7,
  },
  {
    name: '킹덤 디펜스 5단계 승리: 나무 스킬북 III',
    rewards: [reward.treeSkillBook3],
    type: productType.tree,
    group: group.tree3,
    line: 7,
  },
  {
    name: '킹덤 디펜스 5단계 패배: 나무 스킬북 I',
    rewards: [reward.treeSkillBook1],
    type: productType.tree,
    group: group.tree1,
    line: 7,
  },
  {
    name: '왕위 쟁탈전 승리: 왕성 스킬북 상자',
    rewards: [reward.throneSkillBook],
    type: productType.normal,
    group: group.throneSkillBook,
    line: 8,
  },
  {
    name: '왕위 쟁탈전 승리: 흑마법 결정 100개 x 2',
    rewards: [reward.darkMagicCrystal100, reward.darkMagicCrystal100],
    type: productType.normal,
    group: group.darkMagicCrystal100,
    line: 8,
  },
  {
    name: '왕위 쟁탈전 승리: 블랙 탈 것 염색약 2개',
    rewards: [reward.blackRidingDye, reward.blackRidingDye],
    type: productType.normal,
    group: group.blackRidingDye,
    line: 8,
  },
  {
    name: '왕위 쟁탈전 패배: 왕성 스킬북 상자 2권',
    rewards: [reward.throneSkillBook, reward.throneSkillBook],
    type: productType.normal,
    group: group.throneSkillBook,
    line: 8,
  },
  {
    name: '왕위 쟁탈전 패배: 흑마법 결정 100개',
    rewards: [reward.darkMagicCrystal100],
    type: productType.normal,
    group: group.darkMagicCrystal100,
    line: 8,
  },
  {
    name: '왕위 쟁탈전 패배: 블랙 탈 것 염색약',
    rewards: [reward.blackRidingDye],
    type: productType.normal,
    group: group.blackRidingDye,
    line: 8,
  },
  {
    name: '킹덤 침공전 승리: 아이보리 탈 것 염색약 2개',
    rewards: [reward.ivoryRidingDye, reward.ivoryRidingDye],
    type: productType.normal_ivory,
    group: group.ivoryRidingDye,
    line: 9,
  },
  {
    name: '킹덤 침공전 패배: 아이보리 탈 것 염색약',
    rewards: [reward.ivoryRidingDye],
    type: productType.normal_ivory,
    group: group.ivoryRidingDye,
    line: 9,
  },
  {
    name: '유물 판매 보상: 디펜시브 킹덤',
    rewards: [reward.defensiveKingdom],
    type: productType.normal,
    group: group.defensiveKingdom,
    line: 10,
  },
  {
    name: '유물 판매 보상: 오펜시브 킹덤',
    rewards: [reward.offensiveKingdom],
    type: productType.normal,
    group: group.offensiveKingdom,
    line: 10,
  },
].map((p, idx) => ({ ...p, id: idx + 1 }))
