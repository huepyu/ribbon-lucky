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
}

const products = [
    {
        name: "유물 전장 승리: 딩고",
        rewards: [
            reward.dingo,
            reward.dingo,
        ],
        type: 'normal',
        group: group.dingo,
    },
    {
        name: "유물 전장 승리: 블랙 염색약",
        rewards: [
            reward.blackDye,
            reward.blackDye,
        ],
        type: 'normal',
        group: group.blackDye,
    },
    {
        name: "유물 전장 패배",
        rewards: [
            reward.dingo,
        ],
        type: 'normal',
        group: group.dingo,
    },
    // {
    //     name: "엔트 석상 1단계",
    //     rewards: [
    //         reward.commonGemBox,
    //     ],
    //     type: 'tree',
    //     group: group.kingdomDungeonTree,
    // },
    {
        name: "엔트 석상 4단계",
        rewards: [
            reward.increaseWood,
        ],
        type: 'tree',
        group: group.kingdomDungeonTree,
    },
    {
        name: "엔트 석상 5단계",
        rewards: [
            reward.increaseWood,
            reward.increaseWood,
        ],
        type: 'tree',
        group: group.kingdomDungeonTree,
    },
    // {
    //     name: "화염의 기사 라스 1단계",
    //     rewards: [
    //         reward.commonGemBox,
    //     ],
    //     type: 'fire',
    //     group: group.kingdomDungeonFire,
    // },
    {
        name: "화염의 기사 라스 4단계",
        rewards: [
            reward.increaseFire,
        ],
        type: 'fire',
        group: group.kingdomDungeonFire,
    },
    {
        name: "화염의 기사 라스 5단계",
        rewards: [
            reward.increaseFire,
            reward.increaseFire,
        ],
        type: 'fire',
        group: group.kingdomDungeonFire,
    },
    {
        name: "킹덤 디펜스 5단계: 빛 승리 스킬북 II",
        rewards: [
            reward.lightningOrb2,
        ],
        type: 'light',
        group: group.light2,
    },
    {
        name: "킹덤 디펜스 5단계: 빛 승리 스킬북 III",
        rewards: [
            reward.lightningOrb3,
        ],
        type: 'light',
        group: group.light3,
    },
    {
        name: "킹덤 디펜스 5단계: 빛 패배",
        rewards: [
            reward.lightningOrb1,
        ],
        type: 'light',
        group: group.light1,
    },
    {
        name: "킹덤 디펜스 5단계: 어둠 승리 스킬북 II",
        rewards: [
            reward.darkBalloon2,
        ],
        type: 'dark',
        group: group.dark2,
    },
    {
        name: "킹덤 디펜스 5단계: 어둠 승리 스킬북 III",
        rewards: [
            reward.darkBalloon3,
        ],
        type: 'dark',
        group: group.dark3,
    },
    {
        name: "킹덤 디펜스 5단계: 어둠 패배",
        rewards: [
            reward.darkBalloon1,
        ],
        type: 'dark',
        group: group.dark1,
    },
    {
        name: "킹덤 디펜스 5단계: 불 승리 스킬북 II",
        rewards: [
            reward.fireCracker2,
        ],
        type: 'fire',
        group: group.fire2,
    },
    {
        name: "킹덤 디펜스 5단계: 불 승리 스킬북 III",
        rewards: [
            reward.fireCracker3,
        ],
        type: 'fire',
        group: group.fire3,
    },
    {
        name: "킹덤 디펜스 5단계: 불 패배",
        rewards: [
            reward.fireCracker1,
        ],
        type: 'fire',
        group: group.fire1,
    },
    {
        name: "킹덤 디펜스 5단계: 물 승리 스킬북 II",
        rewards: [
            reward.waterBomb2,
        ],
        type: 'water',
        group: group.water2,
    },
    {
        name: "킹덤 디펜스 5단계: 물 승리 스킬북 III",
        rewards: [
            reward.waterBomb3,
        ],
        type: 'water',
        group: group.water3,
    },
    {
        name: "킹덤 디펜스 5단계: 물 패배",
        rewards: [
            reward.waterBomb1,
        ],
        type: 'water',
        group: group.water1,
    },
    {
        name: "킹덤 디펜스 5단계: 나무 승리 스킬북 II",
        rewards: [
            reward.leafDance2,
        ],
        type: 'tree',
        group: group.tree2,
    },
    {
        name: "킹덤 디펜스 5단계: 나무 승리 스킬북 III",
        rewards: [
            reward.leafDance3,
        ],
        type: 'tree',
        group: group.tree3,
    },
    {
        name: "킹덤 디펜스 5단계: 나무 패배",
        rewards: [
            reward.leafDance1,
        ],
        type: 'tree',
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
    //     type: 'normal',
    //     group: group.kingdomDefence,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 빛 승리 스킬북",
    //     rewards: [
    //         reward.lightningOrb1,
    //     ],
    //     type: 'light',
    //     group: group.light1,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 빛 패배",
    //     rewards: [
    //         reward.lightPage1,
    //     ],
    //     type: 'light',
    //     group: group.kingdomDefence,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 어둠 승리 스킬북",
    //     rewards: [
    //         reward.darkBalloon1,
    //     ],
    //     type: 'dark',
    //     group: group.dark1,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 어둠 패배",
    //     rewards: [
    //         reward.darkPage1,
    //     ],
    //     type: 'dark',
    //     group: group.kingdomDefence,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 불 승리 스킬북",
    //     rewards: [
    //         reward.fireCracker1,
    //     ],
    //     type: 'fire',
    //     group: group.fire1,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 불 패배",
    //     rewards: [
    //         reward.firePage1,
    //     ],
    //     type: 'fire',
    //     group: group.kingdomDefence,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 물 승리 스킬북",
    //     rewards: [
    //         reward.waterBomb1,
    //     ],
    //     type: 'water',
    //     group: group.water1,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 물 패배",
    //     rewards: [
    //         reward.waterPage1,
    //     ],
    //     type: 'water',
    //     group: group.kingdomDefence,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 나무 승리 스킬북",
    //     rewards: [
    //         reward.leafDance1,
    //     ],
    //     type: 'tree',
    //     group: group.tree1,
    // },
    // {
    //     name: "킹덤 디펜스 4단계: 나무 패배",
    //     rewards: [
    //         reward.lightPage1,
    //     ],
    //     type: 'tree',
    //     group: group.kingdomDefence,
    // },
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
].map((p, idx) => ({ ...p, id: idx + 1 }))

const members = [
    { name: '단밤' },
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
    { name: '쥬s' },
    { name: '망고띠' },
    { name: '리치푸른' },
    { name: '리망' },
    { name: '싱싱브로콜리' },
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
