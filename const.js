const reward = {
    dingo: '딩고 호박',
    blackDye: '블랙 염색약',
    commonGemBox: '일반 보석 상자',
    increaseWood: '인크리스 우드',
    increaseFire: '인크리스 파이어',
    kingdomPresent: '왕국 수호 하사품',
    lightningOrb1: '빛 스킬북 I',
    lightningOrb2: '빛 스킬북 II',
    lightningOrb3: '빛 스킬북 III',
    darkBalloon1: '어둠 스킬북 I',
    darkBalloon2: '어둠 스킬북 II',
    darkBalloon3: '어둠 스킬북 III',
    fireCracker1:'불 스킬북 I', 
    fireCracker2:'불 스킬북 II', 
    fireCracker3:'불 스킬북 III', 
    waterBomb1: '물 스킬북 I',
    waterBomb2: '물 스킬북 II',
    waterBomb3: '물 스킬북 III',
    leafDance1: '풀 스킬북 I',
    leafDance2: '풀 스킬북 II',
    leafDance3: '풀 스킬북 III',
    lightPage1: '빛의 마법 페이지 I',
    darkPage1: '어둠의 마법 페이지 I',
    firePage1: '불의 마법 페이지 I',
    waterPage1: '물의 마법 페이지 I',
    treePage1: '나무의 마법 페이지 I',
    throneSkillBook: '왕성 스킬북 상자',
    darkMagicCrystal: '흑마법 결정 100개',
    blackRidingDye: '블랙 탈 것 염색약'
}

const productType = {
    normal: 'normal',
    light: 'light',
    dark: 'dark',
    fire: 'fire',
    water: 'water',
    tree: 'tree',
}

const group = {
    dingo: 'dingo',
    blackDye: 'blackDye',
    kingdomDungeonTree: 'kingdomDungeonTree',
    kingdomDungeonFire: 'kingdomDungeonFire',
    kingdomDefence: 'kingdomDefence',
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
    throne: 'throne'
}

const products = [
    {
        name: "유물 전장 승리: 딩고",
        rewards: [
            reward.dingo,
            reward.dingo,
        ],
        type: productType.normal,
        group: group.dingo,
    },
    {
        name: "유물 전장 승리: 블랙 염색약",
        rewards: [
            reward.blackDye,
            reward.blackDye,
        ],
        type: productType.normal,
        group: group.blackDye,
    },
    {
        name: "유물 전장 패배",
        rewards: [
            reward.dingo,
        ],
        type: productType.normal,
        group: group.dingo,
    },
    // {
    //     name: "엔트 석상 1단계",
    //     rewards: [
    //         reward.commonGemBox,
    //     ],
    //     type: productType.tree,
    //     group: group.kingdomDungeonTree,
    // },
    {
        name: "엔트 석상 4단계",
        rewards: [
            reward.increaseWood,
        ],
        type: productType.tree,
        group: group.kingdomDungeonTree,
    },
    {
        name: "엔트 석상 5단계",
        rewards: [
            reward.increaseWood,
            reward.increaseWood,
        ],
        type: productType.tree,
        group: group.kingdomDungeonTree,
    },
    // {
    //     name: "화염의 기사 라스 1단계",
    //     rewards: [
    //         reward.commonGemBox,
    //     ],
    //     type: productType.fire,
    //     group: group.kingdomDungeonFire,
    // },
    {
        name: "화염의 기사 라스 4단계",
        rewards: [
            reward.increaseFire,
        ],
        type: productType.fire,
        group: group.kingdomDungeonFire,
    },
    {
        name: "화염의 기사 라스 5단계",
        rewards: [
            reward.increaseFire,
            reward.increaseFire,
        ],
        type: productType.fire,
        group: group.kingdomDungeonFire,
    },
    {
        name: "킹덤 디펜스 5단계: 빛 승리 스킬북 II",
        rewards: [
            reward.lightningOrb2,
        ],
        type: productType.light,
        group: group.light2,
    },
    {
        name: "킹덤 디펜스 5단계: 빛 승리 스킬북 III",
        rewards: [
            reward.lightningOrb3,
        ],
        type: productType.light,
        group: group.light3,
    },
    {
        name: "킹덤 디펜스 5단계: 빛 패배",
        rewards: [
            reward.lightningOrb1,
        ],
        type: productType.light,
        group: group.light1,
    },
    {
        name: "킹덤 디펜스 5단계: 어둠 승리 스킬북 II",
        rewards: [
            reward.darkBalloon2,
        ],
        type: productType.dark,
        group: group.dark2,
    },
    {
        name: "킹덤 디펜스 5단계: 어둠 승리 스킬북 III",
        rewards: [
            reward.darkBalloon3,
        ],
        type: productType.dark,
        group: group.dark3,
    },
    {
        name: "킹덤 디펜스 5단계: 어둠 패배",
        rewards: [
            reward.darkBalloon1,
        ],
        type: productType.dark,
        group: group.dark1,
    },
    {
        name: "킹덤 디펜스 5단계: 불 승리 스킬북 II",
        rewards: [
            reward.fireCracker2,
        ],
        type: productType.fire,
        group: group.fire2,
    },
    {
        name: "킹덤 디펜스 5단계: 불 승리 스킬북 III",
        rewards: [
            reward.fireCracker3,
        ],
        type: productType.fire,
        group: group.fire3,
    },
    {
        name: "킹덤 디펜스 5단계: 불 패배",
        rewards: [
            reward.fireCracker1,
        ],
        type: productType.fire,
        group: group.fire1,
    },
    {
        name: "킹덤 디펜스 5단계: 물 승리 스킬북 II",
        rewards: [
            reward.waterBomb2,
        ],
        type: productType.water,
        group: group.water2,
    },
    {
        name: "킹덤 디펜스 5단계: 물 승리 스킬북 III",
        rewards: [
            reward.waterBomb3,
        ],
        type: productType.water,
        group: group.water3,
    },
    {
        name: "킹덤 디펜스 5단계: 물 패배",
        rewards: [
            reward.waterBomb1,
        ],
        type: productType.water,
        group: group.water1,
    },
    {
        name: "킹덤 디펜스 5단계: 나무 승리 스킬북 II",
        rewards: [
            reward.leafDance2,
        ],
        type: productType.tree,
        group: group.tree2,
    },
    {
        name: "킹덤 디펜스 5단계: 나무 승리 스킬북 III",
        rewards: [
            reward.leafDance3,
        ],
        type: productType.tree,
        group: group.tree3,
    },
    {
        name: "킹덤 디펜스 5단계: 나무 패배",
        rewards: [
            reward.leafDance1,
        ],
        type: productType.tree,
        group: group.tree1,
    },
    // {
    //     name: "킹덤 디펜스 5단계: 승리",
    //     rewards: [
    //         reward.kingdomPresent,
    //         reward.kingdomPresent,
    //         reward.kingdomPresent,
    //         reward.kingdomPresent,
    //         reward.kingdomPresent,
    //     ],
    //     type: productType.normal,
    //     group: group.kingdomDefence,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 빛 승리 스킬북",
    //     rewards: [
    //         reward.lightningOrb1,
    //     ],
    //     type: productType.light,
    //     group: group.light1,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 빛 패배",
    //     rewards: [
    //         reward.lightPage1,
    //     ],
    //     type: productType.light,
    //     group: group.kingdomDefence,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 어둠 승리 스킬북",
    //     rewards: [
    //         reward.darkBalloon1,
    //     ],
    //     type: productType.dark,
    //     group: group.dark1,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 어둠 패배",
    //     rewards: [
    //         reward.darkPage1,
    //     ],
    //     type: productType.dark,
    //     group: group.kingdomDefence,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 불 승리 스킬북",
    //     rewards: [
    //         reward.fireCracker1,
    //     ],
    //     type: productType.fire,
    //     group: group.fire1,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 불 패배",
    //     rewards: [
    //         reward.firePage1,
    //     ],
    //     type: productType.fire,
    //     group: group.kingdomDefence,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 물 승리 스킬북",
    //     rewards: [
    //         reward.waterBomb1,
    //     ],
    //     type: productType.water,
    //     group: group.water1,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 물 패배",
    //     rewards: [
    //         reward.waterPage1,
    //     ],
    //     type: productType.water,
    //     group: group.kingdomDefence,
    // },
    {
        name: "킹덤 디펜스 4단계: 나무 승리 스킬북",
        rewards: [
            reward.leafDance1,
        ],
        type: productType.tree,
        group: group.tree1,
    },
    {
        name: "킹덤 디펜스 4단계: 나무 패배",
        rewards: [
            reward.lightPage1,
        ],
        type: productType.tree,
        group: group.kingdomDefence,
    },
    // {
    //     name: "킹덤 디펜스 4단계: 승리",
    //     rewards: [
    //         reward.kingdomPresent,
    //         reward.kingdomPresent,
    //         reward.kingdomPresent,
    //         reward.kingdomPresent,
    //     ],
    //     type: 'common',
    //     group: group.kingdomDefence,
    // }
    {
        name: "왕위 쟁탈전: 승리",
        rewards: [
            reward.throneSkillBook,
            reward.darkMagicCrystal,
            reward.darkMagicCrystal,
            reward.blackRidingDye,
            reward.blackRidingDye,
        ],
        type: productType.normal,
        group: group.throne,
    },
    {
        name: "왕위 쟁탈전: 패배",
        rewards: [
            reward.throneSkillBook,
            reward.throneSkillBook,
            reward.darkMagicCrystal,
            reward.blackRidingDye,
        ],
        type: productType.normal,
        group: group.throne,
    },
].map((p, idx) => ({ ...p, id: idx + 1 }))

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
].sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    return 1;
}).map((m, idx) => ({
    ...m,
    id: idx + 1,
    stack: 0,
    rewards: [],
}))
