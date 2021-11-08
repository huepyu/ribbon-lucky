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
        name: "유물 전장 패배",
        rewards: [
            reward.dingo,
        ],
        type: 'normal',
    },
    {
        name: "엔트 석상 1단계",
        rewards: [
            reward.commonGemBox,
        ],
        type: 'tree',
    },
    {
        name: "엔트 석상 4단계",
        rewards: [
            reward.increaseWood,
        ],
        type: 'tree',
    },
    {
        name: "엔트 석상 5단계",
        rewards: [
            reward.increaseWood,
            reward.increaseWood,
        ],
        type: 'tree',
    },
    {
        name: "화염의 기사 라스 1단계",
        rewards: [
            reward.commonGemBox,
        ],
        type: 'fire',
    },
    {
        name: "화염의 기사 라스 4단계",
        rewards: [
            reward.increaseFire,
        ],
        type: 'fire',
    },
    {
        name: "화염의 기사 라스 5단계",
        rewards: [
            reward.increaseFire,
            reward.increaseFire,
        ],
        type: 'fire',
    },
    {
        name: "킹덤 디펜스 5단계: 빛 승리 스킬북 II",
        rewards: [
            reward.lightningOrb2,
        ],
        type: 'light',
    },
    {
        name: "킹덤 디펜스 5단계: 빛 승리 스킬북 III",
        rewards: [
            reward.lightningOrb3,
        ],
        type: 'light',
    },
    {
        name: "킹덤 디펜스 5단계: 빛 패배",
        rewards: [
            reward.lightningOrb1,
        ],
        type: 'light',
    },
    {
        name: "킹덤 디펜스 5단계: 어둠 승리 스킬북 II",
        rewards: [
            reward.darkBalloon2,
        ],
        type: 'dark',
    },
    {
        name: "킹덤 디펜스 5단계: 어둠 승리 스킬북 III",
        rewards: [
            reward.darkBalloon3,
        ],
        type: 'dark',
    },
    {
        name: "킹덤 디펜스 5단계: 어둠 패배",
        rewards: [
            reward.darkBalloon1,
        ],
        type: 'dark',
    },
    {
        name: "킹덤 디펜스 5단계: 불 승리 스킬북 II",
        rewards: [
            reward.fireCracker2,
        ],
        type: 'fire',
    },
    {
        name: "킹덤 디펜스 5단계: 불 승리 스킬북 III",
        rewards: [
            reward.fireCracker3,
        ],
        type: 'fire',
    },
    {
        name: "킹덤 디펜스 5단계: 불 패배",
        rewards: [
            reward.fireCracker1,
        ],
        type: 'fire',
    },
    {
        name: "킹덤 디펜스 5단계: 물 승리 스킬북 II",
        rewards: [
            reward.waterBomb2,
        ],
        type: 'water',
    },
    {
        name: "킹덤 디펜스 5단계: 물 승리 스킬북 III",
        rewards: [
            reward.waterBomb3,
        ],
        type: 'water',
    },
    {
        name: "킹덤 디펜스 5단계: 물 패배",
        rewards: [
            reward.waterBomb1,
        ],
        type: 'water',
    },
    {
        name: "킹덤 디펜스 5단계: 나무 승리 스킬북 II",
        rewards: [
            reward.leafDance2,
        ],
        type: 'tree',
    },
    {
        name: "킹덤 디펜스 5단계: 나무 승리 스킬북 III",
        rewards: [
            reward.leafDance3,
        ],
        type: 'tree',
    },
    {
        name: "킹덤 디펜스 5단계: 나무 패배",
        rewards: [
            reward.leafDance1,
        ],
        type: 'tree',
    },
    {
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
        name: "킹덤 디펜스 4단계: 빛 승리 스킬북",
        rewards: [
            reward.lightningOrb1,
        ],
        type: 'light',
    },
    {
        name: "킹덤 디펜스 4단계: 빛 패배",
        rewards: [
            reward.lightPage1,
        ],
        type: 'light',
    },
    {
        name: "킹덤 디펜스 4단계: 어둠 승리 스킬북",
        rewards: [
            reward.darkBalloon1,
        ],
        type: 'dark',
    },
    {
        name: "킹덤 디펜스 4단계: 어둠 패배",
        rewards: [
            reward.darkPage1,
        ],
        type: 'dark',
    },
    {
        name: "킹덤 디펜스 4단계: 불 승리 스킬북",
        rewards: [
            reward.fireCracker1,
        ],
        type: 'fire',
    },
    {
        name: "킹덤 디펜스 4단계: 불 패배",
        rewards: [
            reward.firePage1,
        ],
        type: 'fire',
    },
    {
        name: "킹덤 디펜스 4단계: 물 승리 스킬북",
        rewards: [
            reward.waterBomb1,
        ],
        type: 'water',
    },
    {
        name: "킹덤 디펜스 4단계: 물 패배",
        rewards: [
            reward.waterPage1,
        ],
        type: 'water',
    },
    {
        name: "킹덤 디펜스 4단계: 나무 승리 스킬북",
        rewards: [
            reward.leafDance1,
        ],
        type: 'tree',
    },
    {
        name: "킹덤 디펜스 4단계: 나무 패배",
        rewards: [
            reward.lightPage1,
        ],
        type: 'tree',
    },
    {
        name: "킹덤 디펜스 4단계: 승리",
        rewards: [
            reward.kingdomPresent,
            reward.kingdomPresent,
            reward.kingdomPresent,
            reward.kingdomPresent,
        ],
        type: 'common',
    }
].map((p, idx) => ({ ...p, id: idx + 1 }))

const members = [
    { name: '단밤' },
    { name: '리치푸른' },
    { name: '슈슈베리' },
    { name: '당신어머' },
    { name: '둘째이모' },
    { name: '휴퓨' },
    { name: '츄퓨' },
    { name: '클린' },
    { name: '유한량' },
    { name: 'HyunA' },
    { name: '꼬마짱구' },
    { name: '팔색조' },
    { name: '기린아' },
    { name: '퓨엘' },
    { name: '귓밥' },
    { name: '주녕코' },
    { name: '로로리다' },
    { name: 'ESNA' },
    { name: '희네입니다' },
    { name: '강제이행' },
    { name: '수란' },
    { name: '르봄' },
    { name: '퓨리' },
    { name: '도밍고' },
    { name: '범천동피주먹' },
    { name: '촙촙이' },
    { name: '촙촙2' },
    { name: '르미르르미' },
    { name: '야옹개' },
    { name: '잠자고싶쿨' },
    { name: 'Callous' },
    { name: '쥬s' },
    { name: '망고띠' },
    { name: '기계광' },
    { name: '크로스리' },
].map((m, idx) => ({ ...m, id: idx + 1 }))
