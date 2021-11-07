const reward = {
    dingo: '딩고 호박',
    blackDye: '블랙 염색약',
    commonGemBox: '일반 보석 상자',
    increaseWood: '마법서: 인크리스 우드',
    increaseFire: '마법서: 인크리스 파이어',
    kingdomPresent: '왕국 수호 하사품',
    lightningOrb1: '마법서: 라이트닝 오브 I',
    lightningOrb2: '마법서: 라이트닝 오브 II',
    lightningOrb3: '마법서: 라이트닝 오브 III',
    darkBalloon1: '마법서: 다크 벌룬 I',
    darkBalloon2: '마법서: 다크 벌룬 II',
    darkBalloon3: '마법서: 다크 벌룬 III',
    fireCracker1:'마법서: 파이어크래커 I', 
    fireCracker2:'마법서: 파이어크래커 I', 
    fireCracker3:'마법서: 파이어크래커 III', 
    waterBomb1: '마법서: 워터 밤 I',
    waterBomb2: '마법서: 워터 밤 II',
    waterBomb3: '마법서: 워터 밤 III',
    leafDance1: '마법서: 리프 댄스 I',
    leafDance2: '마법서: 리프 댄스 II',
    leafDance3: '마법서: 리프 댄스 III',
    lightPage1: '빛의 마법 페이지 I',
    darkPage1: '어둠의 마법 페이지 I',
    firePage1: '불의 마법 페이지 I',
    waterPage1: '물의 마법 페이지 I',
    treePage1: '나무의 마법 페이지 I',
}

const productType = {
    normal: 'normal',
    light: 'light',
    dark: 'dark',
    fire: 'fire',
    water: 'water',
    tree: 'tree',
}

const products = [
    {
        id: 1,
        name: "유물 전장 승리",
        rewards: [
            reward.dingo,
            reward.dingo,
            reward.blackDye,
            reward.blackDye,
        ],
        type: 'normal',
    },
    {
        id: 2,
        name: "유물 전장 패배",
        rewards: [
            reward.dingo,
        ],
        type: 'normal',
    },
    {
        id: 3,
        name: "엔트 석상 1단계",
        rewards: [
            reward.commonGemBox,
        ],
        type: 'tree',
    },
    {
        id: 4,
        name: "엔트 석상 4단계",
        rewards: [
            reward.increaseWood,
        ],
        type: 'tree',
    },
    {
        id: 5,
        name: "엔트 석상 5단계",
        rewards: [
            reward.increaseWood,
            reward.increaseWood,
        ],
        type: 'tree',
    },
    {
        id: 6,
        name: "화염의 기사 라스 1단계",
        rewards: [
            reward.commonGemBox,
        ],
        type: 'fire',
    },
    {
        id: 7,
        name: "화염의 기사 라스 4단계",
        rewards: [
            reward.increaseFire,
        ],
        type: 'fire',
    },
    {
        id: 8,
        name: "화염의 기사 라스 5단계",
        rewards: [
            reward.increaseFire,
            reward.increaseFire,
        ],
        type: 'fire',
    },
    {
        id: 9,
        name: "킹덤 디펜스 5단계: 빛 승리 스킬북",
        rewards: [
            reward.lightningOrb2,
            reward.lightningOrb3,
        ],
        type: 'light',
    },
    {
        id: 10,
        name: "킹덤 디펜스 5단계: 빛 패배",
        rewards: [
            reward.lightningOrb1,
        ],
        type: 'light',
    },
    {
        id: 11,
        name: "킹덤 디펜스 5단계: 어둠 승리 스킬북",
        rewards: [
            reward.darkBalloon2,
            reward.darkBalloon3,
        ],
        type: 'dark',
    },
    {
        id: 12,
        name: "킹덤 디펜스 5단계: 어둠 패배",
        rewards: [
            reward.darkBalloon1,
        ],
        type: 'dark',
    },
    {
        id: 13,
        name: "킹덤 디펜스 5단계: 불 승리 스킬북",
        rewards: [
            reward.fireCracker2,
            reward.fireCracker3,
        ],
        type: 'fire',
    },
    {
        id: 14,
        name: "킹덤 디펜스 5단계: 불 패배",
        rewards: [
            reward.fireCracker1,
        ],
        type: 'fire',
    },
    {
        id: 15,
        name: "킹덤 디펜스 5단계: 물 승리 스킬북",
        rewards: [
            reward.waterBomb2,
            reward.waterBomb3,
        ],
        type: 'water',
    },
    {
        id: 16,
        name: "킹덤 디펜스 5단계: 물 패배",
        rewards: [
            reward.waterBomb1,
        ],
        type: 'water',
    },
    {
        id: 17,
        name: "킹덤 디펜스 5단계: 나무 승리 스킬북",
        rewards: [
            reward.leafDance2,
            reward.leafDance3,
        ],
        type: 'tree',
    },
    {
        id: 18,
        name: "킹덤 디펜스 5단계: 나무 패배",
        rewards: [
            reward.leafDance1,
        ],
        type: 'tree',
    },
    {
        id: 19,
        name: "킹덤 디펜스 5단계: 승리",
        rewards: [
            reward.kingdomPresent,
            reward.kingdomPresent,
            reward.kingdomPresent,
            reward.kingdomPresent,
            reward.kingdomPresent,
        ],
        type: 'normal',
    },
    {
        id: 20,
        name: "킹덤 디펜스 4단계: 빛 승리 스킬북",
        rewards: [
            reward.lightningOrb1,
        ],
        type: 'light',
    },
    {
        id: 21,
        name: "킹덤 디펜스 4단계: 빛 패배",
        rewards: [
            reward.lightPage1,
        ],
        type: 'light',
    },
    {
        id: 22,
        name: "킹덤 디펜스 4단계: 어둠 승리 스킬북",
        rewards: [
            reward.darkBalloon1,
        ],
        type: 'dark',
    },
    {
        id: 23,
        name: "킹덤 디펜스 4단계: 어둠 패배",
        rewards: [
            reward.darkPage1,
        ],
        type: 'dark',
    },
    {
        id: 24,
        name: "킹덤 디펜스 4단계: 불 승리 스킬북",
        rewards: [
            reward.fireCracker1,
        ],
        type: 'fire',
    },
    {
        id: 25,
        name: "킹덤 디펜스 4단계: 불 패배",
        rewards: [
            reward.firePage1,
        ],
        type: 'fire',
    },
    {
        id: 26,
        name: "킹덤 디펜스 4단계: 물 승리 스킬북",
        rewards: [
            reward.waterBomb1,
        ],
        type: 'water',
    },
    {
        id: 27,
        name: "킹덤 디펜스 4단계: 물 패배",
        rewards: [
            reward.waterPage1,
        ],
        type: 'water',
    },
    {
        id: 28,
        name: "킹덤 디펜스 4단계: 나무 승리 스킬북",
        rewards: [
            reward.leafDance1,
        ],
        type: 'tree',
    },
    {
        id: 29,
        name: "킹덤 디펜스 4단계: 나무 패배",
        rewards: [
            reward.lightPage1,
        ],
        type: 'tree',
    },
    {
        id: 30,
        name: "킹덤 디펜스 4단계: 승리",
        rewards: [
            reward.kingdomPresent,
            reward.kingdomPresent,
            reward.kingdomPresent,
            reward.kingdomPresent,
        ],
        type: 'common',
    }
]

const members = [
    { id: 1, name: '단밤' },
    { id: 2, name: '단밤' },
    { id: 3, name: '단밤' },
    { id: 4, name: '단밤' },
    { id: 5, name: '단밤' },
    { id: 6, name: '단밤' },
    { id: 7, name: '단밤' },
    { id: 8, name: '단밤' },
    { id: 9, name: '단밤' },
    { id: 10, name: '단밤' },
    { id: 11, name: '단밤' },
    { id: 12, name: '단밤' },
    { id: 13, name: '단밤' },
    { id: 14, name: '단밤' },
    { id: 15, name: '단밤' },
    { id: 16, name: '단밤' },
    { id: 17, name: '단밤' },
    { id: 18, name: '단밤' },
    { id: 19, name: '단밤' },
    { id: 20, name: '단밤' },
    { id: 21, name: '단밤' },
    { id: 22, name: '단밤' },
    { id: 23, name: '단밤' },
    { id: 24, name: '단밤' },
    { id: 25, name: '단밤' },
    { id: 26, name: '단밤' },
    { id: 27, name: '단밤' },
    { id: 28, name: '단밤' },
    { id: 29, name: '단밤' },
    { id: 30, name: '단밤' },
    { id: 31, name: '단밤' },
    { id: 32, name: '단밤' },
    { id: 33, name: '단밤' },
    { id: 34, name: '단밤' },
    { id: 35, name: '단밤' },
    { id: 36, name: '단밤' },
]