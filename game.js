// 游戏常量
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 700;
const PLAYER_WIDTH = 60;
const PLAYER_HEIGHT = 60;
const ENEMY_WIDTH = 50;
const ENEMY_HEIGHT = 50;
const BOSS_WIDTH = 250; // 普通飞机的5倍
const BOSS_HEIGHT = 250; // 普通飞机的5倍
const BULLET_WIDTH = 5;
const BULLET_HEIGHT = 20;
const ENEMY_BULLET_WIDTH = 5;
const ENEMY_BULLET_HEIGHT = 15;
const ENEMY_SCATTER_BULLET_WIDTH = 4;
const ENEMY_SCATTER_BULLET_HEIGHT = 12;
const ENEMY_HOMING_BULLET_WIDTH = 6;
const ENEMY_HOMING_BULLET_HEIGHT = 18;
const ENEMY_CIRCLE_BULLET_WIDTH = 5;
const ENEMY_CIRCLE_BULLET_HEIGHT = 5;
const ENEMY_HEAVY_BULLET_WIDTH = 8;
const ENEMY_HEAVY_BULLET_HEIGHT = 25;
const BOSS_MISSILE_WIDTH = 10;
const BOSS_MISSILE_HEIGHT = 30;
const BOSS_CIRCLE_MISSILE_WIDTH = 8;
const BOSS_CIRCLE_MISSILE_HEIGHT = 8;
const BOSS_RANDOM_MISSILE_WIDTH = 12;
const BOSS_RANDOM_MISSILE_HEIGHT = 12;
const BOSS_LASER_WIDTH = 20;
const BOSS_LASER_HEIGHT = 100;
const BOSS_HOMING_MISSILE_WIDTH = 12;
const BOSS_HOMING_MISSILE_HEIGHT = 12;
const PLAYER_SPEED = 5;
const ENEMY_SPEED = 1.5;
const BOSS_SPEED = 0.8;
const BULLET_SPEED = 15;
const ENEMY_BULLET_SPEED = 4;
const ENEMY_SCATTER_BULLET_SPEED = 5;
const ENEMY_HOMING_BULLET_SPEED = 3;
const ENEMY_CIRCLE_BULLET_SPEED = 3.5;
const ENEMY_HEAVY_BULLET_SPEED = 2.5;
const BOSS_MISSILE_SPEED = 3;
const BOSS_CIRCLE_MISSILE_SPEED = 2.5;
const BOSS_RANDOM_MISSILE_SPEED = 4;
const BOSS_LASER_SPEED = 5;
const BOSS_HOMING_MISSILE_SPEED = 2.5;
const ENEMY_SPAWN_RATE = 80;
const ENEMY_SHOOT_RATE = 0.01;
const BOSS_SHOOT_RATE = 0.002; // 更缓慢地发射导弹
const BOSS_CIRCLE_SHOOT_RATE = 0.001; // 圆圈扩散导弹发射频率
const BOSS_RANDOM_SHOOT_RATE = 0.0015; // 随机方向导弹发射频率
const BOSS_LASER_SHOOT_RATE = 0.0008; // 激光发射频率
const BOSS_HOMING_SHOOT_RATE = 0.0012; // 追踪导弹发射频率
const BOSS_SHIELD_INTERVAL = 15000; // 巨型盾牌出现间隔（15秒）
const BOSS_SHIELD_DURATION = 5000; // 巨型盾牌持续时间（5秒）
const BOSS_SPAWN_INTERVAL = 60000; // 60秒
const NUKE_MAX_RADIUS = 400; // 扩大核弹范围
const NUKE_EXPLOSION_TIME = 1500; // 增加爆炸时间
// 第二种BOSS属性
const BOSS2_WIDTH = 200;
const BOSS2_HEIGHT = 200;
const BOSS2_SPEED = 0.6;
const BOSS2_LIVES = 600;
const BOSS2_BULLET_WIDTH = 6;
const BOSS2_BULLET_HEIGHT = 6;
const BOSS2_BULLET_SPEED = 4;
const BOSS2_SPREAD_SHOOT_RATE = 0.001; // 全屏幕扩散发射频率较低
const BOSS2_NUM_SPREAD_BULLETS = 24; // 全屏幕扩散发射的子弹数量

// 关卡系统
const MAX_LEVELS = 8;
const levels = [
    // 第1关
    {
        name: "新手入门",
        description: "简单的敌人，适合新手练习",
        enemyCount: 10,
        eliteCount: 0,
        bossType: 1,
        enemySpeedMultiplier: 1.0,
        enemyAttackRate: 0.005,
        enemyHealthMultiplier: 1.0,
        bgColor1: '#000428', // 深蓝色渐变顶部
        bgColor2: '#004e92'  // 深蓝色渐变底部
    },
    // 第2关
    {
        name: "进阶挑战",
        description: "增加了精英敌人",
        enemyCount: 15,
        eliteCount: 2,
        bossType: 1,
        enemySpeedMultiplier: 1.2,
        enemyAttackRate: 0.008,
        enemyHealthMultiplier: 1.2,
        bgColor1: '#1a1a2e', // 深紫色渐变顶部
        bgColor2: '#16213e'  // 深紫色渐变底部
    },
    // 第3关
    {
        name: "精英对决",
        description: "更多精英敌人，更强的攻击力",
        enemyCount: 20,
        eliteCount: 4,
        bossType: 2,
        enemySpeedMultiplier: 1.4,
        enemyAttackRate: 0.01,
        enemyHealthMultiplier: 1.4,
        bgColor1: '#0f0c29', // 深紫色渐变顶部
        bgColor2: '#302b63'  // 紫色渐变底部
    },
    // 第4关
    {
        name: "BOSS挑战",
        description: "强大的BOSS，需要精准的操作",
        enemyCount: 25,
        eliteCount: 6,
        bossType: 2,
        enemySpeedMultiplier: 1.6,
        enemyAttackRate: 0.012,
        enemyHealthMultiplier: 1.6,
        bgColor1: '#2c3e50', // 深蓝色渐变顶部
        bgColor2: '#34495e'  // 灰色渐变底部
    },
    // 第5关
    {
        name: "极限生存",
        description: "大量敌人，考验生存能力",
        enemyCount: 30,
        eliteCount: 8,
        bossType: 1,
        enemySpeedMultiplier: 1.8,
        enemyAttackRate: 0.015,
        enemyHealthMultiplier: 1.8,
        bgColor1: '#141e30', // 深黑色渐变顶部
        bgColor2: '#243b55'  // 深蓝色渐变底部
    },
    // 第6关
    {
        name: "终极之战",
        description: "最强的敌人和BOSS，终极挑战",
        enemyCount: 40,
        eliteCount: 12,
        bossType: 2,
        enemySpeedMultiplier: 2.0,
        enemyAttackRate: 0.02,
        enemyHealthMultiplier: 2.0,
        bgColor1: '#000000', // 黑色渐变顶部
        bgColor2: '#1a1a1a'  // 深灰色渐变底部
    },
    // 第7关（特殊关卡）
    {
        name: "双BOSS挑战",
        description: "同时面对两个BOSS，极限挑战",
        enemyCount: 35,
        eliteCount: 10,
        bossType: 3, // 特殊类型，表示双BOSS
        enemySpeedMultiplier: 2.2,
        enemyAttackRate: 0.025,
        enemyHealthMultiplier: 2.2,
        bgColor1: '#3a6186', // 蓝紫色渐变顶部
        bgColor2: '#89253e'  // 紫红色渐变底部
    },
    // 第8关（特殊关卡）
    {
        name: "无尽模式",
        description: "没有尽头的敌人，挑战你的极限",
        enemyCount: 50,
        eliteCount: 15,
        bossType: 4, // 特殊类型，表示无尽模式
        enemySpeedMultiplier: 2.5,
        enemyAttackRate: 0.03,
        enemyHealthMultiplier: 2.5,
        bgColor1: '#642b73', // 深紫色渐变顶部
        bgColor2: '#c6426e'  // 粉红色渐变底部
    }
];

// 游戏状态
let canvas, ctx;
let player;
let enemies = [];
let bullets = [];
let enemyBullets = [];
let bossMissiles = [];
let bossCircleMissiles = [];
let bossRandomMissiles = [];
let bossLasers = [];
let bossHomingMissiles = [];
let boss2SpreadBullets = []; // 第二种BOSS的扩散子弹
let nukes = 3; // 每局3次核弹
let nukeActive = false;
let nukeRadius = 0;
let nukeMaxRadius = NUKE_MAX_RADIUS; // 核弹爆炸最大半径
let nukeDamage = 100; // 核弹伤害
let nukeStartTime = 0; // 记录核弹开始时间
let score = 0;
let lives = 100;
let maxLives = 100;
let gameRunning = false;
let animationId;
let enemySpawnTimer = 0;
let bossSpawnTimer = 0;
let boss = null;
let selectedPlane = 0;
let gameStartTime = 0;
let enemiesKilled = 0;
let bossShieldActive = false;
let bossShieldTimer = 0;
let bossShieldLastActivated = 0;
let lastBossDefeatedTime = 0; // 记录上次击败BOSS的时间
// 背景颜色变化
let backgroundColor1 = '#000428';
let backgroundColor2 = '#004e92';

// 背景图片管理
let backgroundImages = [];
let currentBackgroundImage = null;
let backgroundLoaded = false;
let lastColorChange = 0;
const COLOR_CHANGE_INTERVAL = 30000; // 30秒
// 等级系统
let level = 1;
let maxLevel = 10;
let experience = 0;
let experienceToNextLevel = 10; // 每级需要10点经验
let levelUpBonus = 2; // 每级提升2点全属性
// 粒子系统
let particles = [];
const MAX_PARTICLES = 100; // 最大粒子数量
const PARTICLE_COLORS = ['#00ffff', '#00ff00', '#ffff00', '#ff00ff', '#ff0000', '#ffffff'];

// 关卡系统状态
let currentLevel = 0; // 当前关卡索引，从0开始
let levelProgress = 0; // 关卡进度（已击败敌人数量）

let levelEnemiesKilled = 0; // 当前关卡已击败敌人数量
let levelElitesKilled = 0; // 当前关卡已击败精英敌人数量
let levelNukesUsed = 0; // 当前关卡使用的核弹数量
let levelStartTime = 0; // 当前关卡开始时间
let gameState = 'menu'; // 游戏状态：menu, levelSelect, playing, gameOver, levelComplete
let levelSelectVisible = false; // 关卡选择界面是否可见
let currentLevelData = null; // 当前关卡数据
let selectedLevel = 0; // 选中的关卡索引
let remainingEnemies = 0; // 剩余敌人数量
let remainingElites = 0; // 剩余精英敌人数量

// 可选飞机类型
const planes = [
    {
        name: "闪电号",
        speed: 7,
        maxLives: 500,
        attackPower: 6,
        color: "#00ffff",
        shield: 0
    },
    {
        name: "雷霆号",
        speed: 7,
        maxLives: 650,
        attackPower: 11,
        color: "#ff00ff",
        shield: 0
    },
    {
        name: "飓风号",
        speed: 8,
        maxLives: 550,
        attackPower: 8,
        color: "#ffff00",
        shield: 0
    },
    {
        name: "泰坦号",
        speed: 7,
        maxLives: 750,
        attackPower: 15,
        color: "#ff4500",
        shield: 0
    },
    {
        name: "守护者",
        speed: 7,
        maxLives: 600,
        attackPower: 9,
        color: "#00ff00",
        shield: 50
    },
    {
        name: "宙斯盾",
        speed: 7,
        maxLives: 700,
        attackPower: 12,
        color: "#800080",
        shield: 80
    },
    {
        name: "凤凰号",
        speed: 7,
        maxLives: 675,
        attackPower: 13,
        color: "#ff6b6b",
        shield: 60
    },
    {
        name: "龙鳞号",
        speed: 7,
        maxLives: 800,
        attackPower: 14,
        color: "#4ecdc4",
        shield: 70
    },
    {
        name: "星际号",
        speed: 9,
        maxLives: 525,
        attackPower: 10,
        color: "#95e1d3",
        shield: 40
    },
    {
        name: "灭世号",
        speed: 7,
        maxLives: 900,
        attackPower: 18,
        color: "#f38181",
        shield: 90
    }
];

// 初始化游戏
// 加载背景图片
function loadBackgroundImages() {
    // 加载background文件夹中的20张图片
    for (let i = 1; i <= 20; i++) {
        const img = new Image();
        const imgName = i.toString().padStart(3, '0'); // 生成001, 002, ..., 020
        img.src = `background/${imgName}.png`;
        img.onload = function() {
            backgroundImages.push(img);
            if (backgroundImages.length === 20) {
                backgroundLoaded = true;
                // 初始随机选择一张背景图片
                selectRandomBackgroundImage();
            }
        };
    }
}

// 随机选择一张背景图片
function selectRandomBackgroundImage() {
    if (backgroundImages.length > 0) {
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        currentBackgroundImage = backgroundImages[randomIndex];
    }
}

function initGame() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    // 初始化粒子系统
    initParticles();
    
    // 初始化事件监听器
    initEventListeners();
    
    // 加载背景图片
    loadBackgroundImages();
    
    // 设置游戏状态为菜单
    gameState = 'menu';
    levelSelectVisible = false;
    
    // 初始化关卡选择界面
    initLevelSelect();
    
    // 初始化飞机选择界面
    initPlaneSelect();
    
    // 显示开始界面
    showStartScreen();
}

// 初始化关卡
function initLevel(levelIndex) {
    if (levelIndex < 0 || levelIndex >= MAX_LEVELS) return;
    
    currentLevel = levelIndex;
    currentLevelData = levels[levelIndex];
    
    // 设置当前关卡的背景颜色
    backgroundColor1 = currentLevelData.bgColor1;
    backgroundColor2 = currentLevelData.bgColor2;
    
    // 获取选中的飞机属性
    const plane = planes[selectedPlane];
    
    // 创建玩家飞机
    player = {
        x: CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2,
        y: CANVAS_HEIGHT - PLAYER_HEIGHT - 50,
        width: PLAYER_WIDTH,
        height: PLAYER_HEIGHT,
        speed: plane.speed,
        maxLives: plane.maxLives,
        lives: plane.maxLives,
        attackPower: plane.attackPower,
        color: plane.color,
        shield: plane.shield,
        maxShield: plane.shield,
        bullets: []
    };
    
    // 清空数组
    enemies = [];
    bullets = [];
    enemyBullets = [];
    bossMissiles = [];
    bossCircleMissiles = [];
    bossRandomMissiles = [];
    bossLasers = [];
    bossHomingMissiles = [];
    boss2SpreadBullets = [];
    score = 0;
    lives = plane.maxLives;
    maxLives = plane.maxLives;
    enemySpawnTimer = 0;
    bossSpawnTimer = 0;
    boss = null;
    gameStartTime = Date.now();
    enemiesKilled = 0;
    bossShieldActive = false;
    bossShieldTimer = 0;
    bossShieldLastActivated = 0;
    lastBossDefeatedTime = 0;
    // 重置核弹
    nukes = 3;
    levelNukesUsed = 0;
    nukeActive = false;
    nukeRadius = 0;
    nukeStartTime = 0;
    
    // 重置关卡进度
    levelEnemiesKilled = 0;
    levelElitesKilled = 0;
    levelStartTime = Date.now();
    // 初始化剩余敌人数量
    remainingEnemies = currentLevelData.enemyCount;
    remainingElites = currentLevelData.eliteCount;
    
    // 重置等级系统
    level = 1;
    experience = 0;
    experienceToNextLevel = 10;
    
    // 更新UI
    document.getElementById('score').textContent = score;
    document.getElementById('level').textContent = level;
    document.getElementById('experience').textContent = experience;
    document.getElementById('experienceToNextLevel').textContent = experienceToNextLevel;
    document.getElementById('nukes').textContent = nukes;
    document.getElementById('nukeButton').disabled = nukes <= 0;
    
    // 更新生命值和护盾值显示
    updateHealthAndShieldUI();
    
    // 设置游戏状态为游戏中
    gameState = 'playing';
    gameRunning = true;
    
    // 开始游戏循环
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    animationId = requestAnimationFrame(gameLoop);
}

// 更新生命值和护盾值UI
function updateHealthAndShieldUI() {
    // 更新生命值显示
    document.getElementById('lives').textContent = player.lives;
    document.getElementById('maxLives').textContent = player.maxLives;
    
    // 更新护盾值显示
    document.getElementById('shield').textContent = player.shield;
    document.getElementById('maxShield').textContent = player.maxShield;
}

// 更新关卡信息UI
function updateLevelUI() {
    // 更新当前关卡
    document.getElementById('currentLevel').textContent = currentLevel + 1;
    
    // 更新剩余敌人数量，确保不会显示负数
    document.getElementById('remainingEnemies').textContent = Math.max(0, remainingEnemies);
    
    // 更新剩余精英敌人数量，确保不会显示负数
    document.getElementById('remainingElites').textContent = Math.max(0, remainingElites);
    
    // 更新关卡进度
    const totalEnemies = currentLevelData.enemyCount + currentLevelData.eliteCount;
    const defeatedEnemies = levelEnemiesKilled + levelElitesKilled;
    const progress = Math.round((defeatedEnemies / totalEnemies) * 100);
    document.getElementById('levelProgress').textContent = progress;
}

// 检查关卡是否完成
function checkLevelComplete() {
    // 只有当BOSS已经被击败（lastBossDefeatedTime > 0）且所有敌人都被清除时，关卡才会完成
    // 这样确保了玩家必须击败BOSS才能完成关卡，即使在BOSS生成前消灭了所有普通和精英敌人
    if (lastBossDefeatedTime > 0 && remainingEnemies <= 0 && remainingElites <= 0) {
        // 关卡完成
        completeLevel();
    }
}

// 完成关卡
function completeLevel() {
    // 结束游戏
    endGame();
}

// 显示开始界面
function showStartScreen() {
    document.getElementById('startScreen').style.display = 'flex';
    document.getElementById('levelSelectScreen').style.display = 'none';
    document.getElementById('planeSelectScreen').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('galleryScreen').style.display = 'none';
    document.getElementById('historyScreen').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'none';
    document.querySelector('.game-header').style.display = 'none';
    document.querySelector('.player-stats').style.display = 'none';
    
    // 重新初始化关卡选择界面，确保星星评价正确显示
    initLevelSelect();
}

// 显示关卡选择界面
function showLevelSelect() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('levelSelectScreen').style.display = 'block';
    document.getElementById('planeSelectScreen').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('galleryScreen').style.display = 'none';
    document.getElementById('historyScreen').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'none';
    document.querySelector('.game-header').style.display = 'none';
    document.querySelector('.player-stats').style.display = 'none';
    
    // 初始化关卡选择界面，确保选择飞机按钮正确显示
    initLevelSelect();
}

// 隐藏关卡选择界面
function hideLevelSelect() {
    document.getElementById('levelSelectScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'flex';
}

// 显示飞机选择界面
function showPlaneSelect() {
    document.getElementById('levelSelectScreen').style.display = 'none';
    document.getElementById('planeSelectScreen').style.display = 'block';
    
    // 初始化飞机选择界面，确保飞机选项正确显示
    initPlaneSelect();
}

// 隐藏飞机选择界面
function hidePlaneSelect() {
    document.getElementById('planeSelectScreen').style.display = 'none';
    document.getElementById('levelSelectScreen').style.display = 'block';
}

// 初始化关卡选择界面
function initLevelSelect() {
    const levelsContainer = document.getElementById('levels');
    levelsContainer.innerHTML = '';
    
    levels.forEach((level, index) => {
        const levelOption = document.createElement('div');
        levelOption.className = 'level-option';
        levelOption.innerHTML = `
            <h3>第${index + 1}关: ${level.name}</h3>
            <div class="description">${level.description}</div>
            <div class="stats">
                <div><span class="label">敌人数量:</span><span class="value">${level.enemyCount}</span></div>
                <div><span class="label">精英敌人:</span><span class="value">${level.eliteCount}</span></div>
                <div><span class="label">BOSS类型:</span><span class="value">${level.bossType === 1 ? '普通BOSS' : '扩散BOSS'}</span></div>
                <div><span class="label">难度系数:</span><span class="value">${Math.round(level.enemySpeedMultiplier * 100)}%</span></div>
            </div>
        `;
        
        levelOption.addEventListener('click', () => {
            // 移除其他关卡的选中状态
            document.querySelectorAll('.level-option').forEach(opt => opt.classList.remove('selected'));
            // 添加当前关卡的选中状态
            levelOption.classList.add('selected');
            // 保存选中的关卡
            selectedLevel = index;
        });
        
        levelsContainer.appendChild(levelOption);
    });
    
    // 确保button-group中只有一个选择飞机按钮
    const buttonGroup = document.querySelector('.level-select-screen .button-group');
    
    // 移除现有的选择飞机按钮（如果存在）
    const existingSelectPlaneButton = buttonGroup.querySelector('[data-action="select-plane"]');
    if (existingSelectPlaneButton) {
        existingSelectPlaneButton.remove();
    }
    
    // 创建选择飞机按钮
    const selectPlaneButton = document.createElement('button');
    selectPlaneButton.textContent = '选择飞机';
    selectPlaneButton.setAttribute('data-action', 'select-plane');
    selectPlaneButton.addEventListener('click', () => {
        if (selectedLevel !== undefined) {
            showPlaneSelect();
        } else {
            alert('请先选择一个关卡！');
        }
    });
    
    // 将选择飞机按钮添加到button-group中，放在返回主菜单按钮之前
    buttonGroup.insertBefore(selectPlaneButton, buttonGroup.firstChild);
}

// 初始化飞机选择界面
function initPlaneSelect() {
    const planesContainer = document.getElementById('planes');
    planesContainer.innerHTML = '';
    
    planes.forEach((plane, index) => {
        const planeOption = document.createElement('div');
        planeOption.className = 'plane-option';
        if (index === 0) {
            planeOption.classList.add('selected');
            selectedPlane = 0;
        }
        
        planeOption.innerHTML = `
            <h3>${plane.name}</h3>
            <div class="stats">
                <div>速度: ${plane.speed}</div>
                <div>生命值: ${plane.maxLives}</div>
                <div>攻击力: ${plane.attackPower}</div>
                <div>护盾: ${plane.shield}</div>
            </div>
        `;
        
        planeOption.addEventListener('click', () => {
            // 移除其他飞机的选中状态
            document.querySelectorAll('.plane-option').forEach(opt => opt.classList.remove('selected'));
            // 添加当前飞机的选中状态
            planeOption.classList.add('selected');
            // 保存选中的飞机
            selectedPlane = index;
        });
        
        planesContainer.appendChild(planeOption);
    });
}

// 玩家控制
let keys = {};
let touchX = null;

function handleKeyDown(e) {
    keys[e.key] = true;
    
    // R键发射核弹
    if (e.key === 'r' || e.key === 'R') {
        launchNuke();
    }
}

function handleKeyUp(e) {
    keys[e.key] = false;
}

function handleTouchStart(e) {
    e.preventDefault();
    touchX = e.touches[0].clientX - canvas.offsetLeft;
}

function handleTouchMove(e) {
    e.preventDefault();
    touchX = e.touches[0].clientX - canvas.offsetLeft;
}

// 初始化事件监听器
function initEventListeners() {
    // 监听键盘事件
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    
    // 监听触摸事件，确保canvas存在
    if (canvas) {
        // 先移除可能存在的事件监听器，避免重复添加
        canvas.removeEventListener('touchstart', handleTouchStart);
        canvas.removeEventListener('touchmove', handleTouchMove);
        
        // 添加触摸事件监听器
        canvas.addEventListener('touchstart', handleTouchStart);
        canvas.addEventListener('touchmove', handleTouchMove);
    }
}

// 更新玩家位置
function updatePlayer() {
    // 确保player存在
    if (!player) {
        return;
    }
    
    // 键盘控制
    if (keys['ArrowLeft'] || keys['a']) {
        player.x = Math.max(0, player.x - player.speed);
    }
    if (keys['ArrowRight'] || keys['d']) {
        player.x = Math.min(CANVAS_WIDTH - player.width, player.x + player.speed);
    }
    if (keys['ArrowUp'] || keys['w']) {
        player.y = Math.max(0, player.y - player.speed);
    }
    if (keys['ArrowDown'] || keys['s']) {
        player.y = Math.min(CANVAS_HEIGHT - player.height, player.y + player.speed);
    }
    
    // 触摸控制
    if (touchX !== null) {
        player.x = Math.max(0, Math.min(CANVAS_WIDTH - player.width, touchX - player.width / 2));
    }
}

// 生成敌人
function spawnEnemy() {
    // 检查是否已经生成了足够的敌人
    const currentEnemyCount = enemies.filter(e => !e.isElite && !e.isBoss).length;
    const currentEliteCount = enemies.filter(e => e.isElite && !e.isBoss).length;
    
    // 30%概率生成精英敌人
    const isElite = Math.random() < 0.3;
    
    // 检查是否可以生成敌人
    if ((isElite && currentEliteCount >= currentLevelData.eliteCount) || 
        (!isElite && currentEnemyCount >= currentLevelData.enemyCount)) {
        return;
    }
    
    const x = Math.random() * (CANVAS_WIDTH - ENEMY_WIDTH);
    
    // 为敌人生成随机颜色，包括子弹颜色
    const enemyHue = Math.random() * 360;
    const bulletHue = (enemyHue + 180) % 360; // 子弹颜色与敌人颜色相反
    
    // 生成5到250之间的随机生命值（原血量减半）
    const enemyLives = Math.floor(Math.random() * 246) + 5;
    
    const enemy = {
        x: x,
        y: -ENEMY_HEIGHT,
        width: isElite ? ENEMY_WIDTH * 1.5 : ENEMY_WIDTH,
        height: isElite ? ENEMY_HEIGHT * 1.5 : ENEMY_HEIGHT,
        speed: isElite ? (ENEMY_SPEED + Math.random() * 3) * currentLevelData.enemySpeedMultiplier : (ENEMY_SPEED + Math.random() * 2) * currentLevelData.enemySpeedMultiplier,
        color: isElite ? `hsl(${enemyHue}, 100%, 70%)` : `hsl(${enemyHue}, 100%, 50%)`,
        bulletColor: `hsl(${bulletHue}, 100%, 50%)`,
        lives: isElite ? enemyLives * 2 * currentLevelData.enemyHealthMultiplier : enemyLives * currentLevelData.enemyHealthMultiplier,
        maxLives: isElite ? enemyLives * 2 * currentLevelData.enemyHealthMultiplier : enemyLives * currentLevelData.enemyHealthMultiplier,
        isBoss: false,
        isElite: isElite,
        attackPower: isElite ? 20 : 10 // 精英敌人攻击力更高
    };
    
    enemies.push(enemy);
}

// 生成特殊大型飞机（Boss）
function spawnBoss() {
    if (boss) return; // 确保只有一个Boss
    
    // 根据当前关卡数据生成指定类型的Boss
    const bossType = currentLevelData.bossType;
    
    if (bossType === 1) {
        // 第一种Boss（原有的红色三角形Boss）
        boss = {
            x: CANVAS_WIDTH / 2 - BOSS_WIDTH / 2, // 初始位置在正前方中央
            y: 50, // 初始位置在屏幕上方
            width: BOSS_WIDTH,
            height: BOSS_HEIGHT,
            speed: BOSS_SPEED,
            direction: 1, // 不再使用，但保留以兼容现有代码
            color: "#ff0000",
            bulletColor: "#ffff00",
            lives: 500 * currentLevelData.enemyHealthMultiplier,
            maxLives: 500 * currentLevelData.enemyHealthMultiplier,
            isBoss: true,
            type: 1,
            smokeTimer: 0,
            shieldActive: false,
            shieldTimer: 0,
            lastShieldActivated: 0
        };
    } else {
        // 第二种Boss（新的蓝色圆形扩散Boss）
        boss = {
            x: CANVAS_WIDTH / 2 - BOSS2_WIDTH / 2, // 初始位置在正前方中央
            y: 50, // 初始位置在屏幕上方
            width: BOSS2_WIDTH,
            height: BOSS2_HEIGHT,
            speed: BOSS2_SPEED,
            direction: 1,
            color: "#0000ff",
            bulletColor: "#00ffff",
            lives: BOSS2_LIVES * currentLevelData.enemyHealthMultiplier,
            maxLives: BOSS2_LIVES * currentLevelData.enemyHealthMultiplier,
            isBoss: true,
            type: 2,
            rotation: 0,
            shieldActive: false,
            shieldTimer: 0,
            lastShieldActivated: 0
        };
    }
    
    // 重置盾牌相关变量
    bossShieldActive = false;
    bossShieldTimer = 0;
    bossShieldLastActivated = Date.now();
}

// 敌人发射子弹
function enemyShoot(enemy) {
    if (enemy.isBoss) {
        // BOSS有所有攻击方式且完全随机
        const shootType = Math.random();
        
        if (shootType < 0.5) {
            // 1. 普通直线子弹（50%概率）
            enemyBullets.push({
                x: enemy.x + enemy.width / 2 - ENEMY_BULLET_WIDTH / 2,
                y: enemy.y + enemy.height,
                width: ENEMY_BULLET_WIDTH,
                height: ENEMY_BULLET_HEIGHT,
                speed: ENEMY_BULLET_SPEED,
                color: enemy.bulletColor,
                attackPower: enemy.attackPower,
                type: 'normal'
            });
        } else if (shootType < 0.7) {
            // 2. 散射子弹（20%概率）
            const numBullets = 5;
            for (let i = 0; i < numBullets; i++) {
                const angle = (i - numBullets / 2) * 0.2;
                const vx = Math.sin(angle) * ENEMY_SCATTER_BULLET_SPEED;
                const vy = Math.cos(angle) * ENEMY_SCATTER_BULLET_SPEED;
                
                enemyBullets.push({
                    x: enemy.x + enemy.width / 2 - ENEMY_SCATTER_BULLET_WIDTH / 2,
                    y: enemy.y + enemy.height,
                    width: ENEMY_SCATTER_BULLET_WIDTH,
                    height: ENEMY_SCATTER_BULLET_HEIGHT,
                    speed: ENEMY_SCATTER_BULLET_SPEED,
                    vx: vx,
                    vy: vy,
                    color: enemy.bulletColor,
                    attackPower: enemy.attackPower * 0.7,
                    type: 'scatter'
                });
            }
        } else if (shootType < 0.85) {
            // 3. 追踪子弹（15%概率）
            enemyBullets.push({
                x: enemy.x + enemy.width / 2 - ENEMY_HOMING_BULLET_WIDTH / 2,
                y: enemy.y + enemy.height,
                width: ENEMY_HOMING_BULLET_WIDTH,
                height: ENEMY_HOMING_BULLET_HEIGHT,
                speed: ENEMY_HOMING_BULLET_SPEED,
                color: enemy.bulletColor,
                attackPower: enemy.attackPower * 1.2,
                type: 'homing',
                targetX: player.x + player.width / 2,
                targetY: player.y + player.height / 2
            });
        } else if (shootType < 0.95) {
            // 4. 圆圈扩散子弹（10%概率）
            const numBullets = 8;
            for (let i = 0; i < numBullets; i++) {
                const angle = (i / numBullets) * Math.PI * 2;
                const vx = Math.cos(angle) * ENEMY_CIRCLE_BULLET_SPEED;
                const vy = Math.sin(angle) * ENEMY_CIRCLE_BULLET_SPEED;
                
                enemyBullets.push({
                    x: enemy.x + enemy.width / 2 - ENEMY_CIRCLE_BULLET_WIDTH / 2,
                    y: enemy.y + enemy.height,
                    width: ENEMY_CIRCLE_BULLET_WIDTH,
                    height: ENEMY_CIRCLE_BULLET_HEIGHT,
                    speed: ENEMY_CIRCLE_BULLET_SPEED,
                    vx: vx,
                    vy: vy,
                    color: enemy.bulletColor,
                    attackPower: enemy.attackPower * 0.8,
                    type: 'circle'
                });
            }
        } else {
            // 5. 重型子弹（5%概率）
            enemyBullets.push({
                x: enemy.x + enemy.width / 2 - ENEMY_HEAVY_BULLET_WIDTH / 2,
                y: enemy.y + enemy.height,
                width: ENEMY_HEAVY_BULLET_WIDTH,
                height: ENEMY_HEAVY_BULLET_HEIGHT,
                speed: ENEMY_HEAVY_BULLET_SPEED,
                color: '#ff8800',
                attackPower: enemy.attackPower * 2,
                type: 'heavy'
            });
        }
    } else if (enemy.isElite) {
        // 精英会有更多攻击方式(不包括追踪)
        const shootType = Math.random();
        
        if (shootType < 0.6) {
            // 1. 普通直线子弹（60%概率）
            enemyBullets.push({
                x: enemy.x + enemy.width / 2 - ENEMY_BULLET_WIDTH / 2,
                y: enemy.y + enemy.height,
                width: ENEMY_BULLET_WIDTH,
                height: ENEMY_BULLET_HEIGHT,
                speed: ENEMY_BULLET_SPEED,
                color: enemy.bulletColor,
                attackPower: enemy.attackPower,
                type: 'normal'
            });
        } else if (shootType < 0.8) {
            // 2. 散射子弹（20%概率）
            const numBullets = 5;
            for (let i = 0; i < numBullets; i++) {
                const angle = (i - numBullets / 2) * 0.2;
                const vx = Math.sin(angle) * ENEMY_SCATTER_BULLET_SPEED;
                const vy = Math.cos(angle) * ENEMY_SCATTER_BULLET_SPEED;
                
                enemyBullets.push({
                    x: enemy.x + enemy.width / 2 - ENEMY_SCATTER_BULLET_WIDTH / 2,
                    y: enemy.y + enemy.height,
                    width: ENEMY_SCATTER_BULLET_WIDTH,
                    height: ENEMY_SCATTER_BULLET_HEIGHT,
                    speed: ENEMY_SCATTER_BULLET_SPEED,
                    vx: vx,
                    vy: vy,
                    color: enemy.bulletColor,
                    attackPower: enemy.attackPower * 0.7,
                    type: 'scatter'
                });
            }
        } else if (shootType < 0.9) {
            // 3. 圆圈扩散子弹（10%概率）
            const numBullets = 8;
            for (let i = 0; i < numBullets; i++) {
                const angle = (i / numBullets) * Math.PI * 2;
                const vx = Math.cos(angle) * ENEMY_CIRCLE_BULLET_SPEED;
                const vy = Math.sin(angle) * ENEMY_CIRCLE_BULLET_SPEED;
                
                enemyBullets.push({
                    x: enemy.x + enemy.width / 2 - ENEMY_CIRCLE_BULLET_WIDTH / 2,
                    y: enemy.y + enemy.height,
                    width: ENEMY_CIRCLE_BULLET_WIDTH,
                    height: ENEMY_CIRCLE_BULLET_HEIGHT,
                    speed: ENEMY_CIRCLE_BULLET_SPEED,
                    vx: vx,
                    vy: vy,
                    color: enemy.bulletColor,
                    attackPower: enemy.attackPower * 0.8,
                    type: 'circle'
                });
            }
        } else {
            // 4. 重型子弹（10%概率）
            enemyBullets.push({
                x: enemy.x + enemy.width / 2 - ENEMY_HEAVY_BULLET_WIDTH / 2,
                y: enemy.y + enemy.height,
                width: ENEMY_HEAVY_BULLET_WIDTH,
                height: ENEMY_HEAVY_BULLET_HEIGHT,
                speed: ENEMY_HEAVY_BULLET_SPEED,
                color: '#ff8800',
                attackPower: enemy.attackPower * 2,
                type: 'heavy'
            });
        }
    } else {
        // 普通飞机只有单一的发射子弹攻击
        enemyBullets.push({
            x: enemy.x + enemy.width / 2 - ENEMY_BULLET_WIDTH / 2,
            y: enemy.y + enemy.height,
            width: ENEMY_BULLET_WIDTH,
            height: ENEMY_BULLET_HEIGHT,
            speed: ENEMY_BULLET_SPEED,
            color: enemy.bulletColor,
            attackPower: enemy.attackPower,
            type: 'normal'
        });
    }
    const shootType = Math.random();
    
    if (shootType < 0.5) {
        // 1. 普通直线子弹（50%概率）
        enemyBullets.push({
            x: enemy.x + enemy.width / 2 - ENEMY_BULLET_WIDTH / 2,
            y: enemy.y + enemy.height,
            width: ENEMY_BULLET_WIDTH,
            height: ENEMY_BULLET_HEIGHT,
            speed: ENEMY_BULLET_SPEED,
            color: enemy.bulletColor,
            attackPower: enemy.attackPower,
            type: 'normal'
        });
    } else if (shootType < 0.7) {
        // 2. 散射子弹（20%概率）
        const numBullets = 5;
        for (let i = 0; i < numBullets; i++) {
            const angle = (i - numBullets / 2) * 0.2;
            const vx = Math.sin(angle) * ENEMY_SCATTER_BULLET_SPEED;
            const vy = Math.cos(angle) * ENEMY_SCATTER_BULLET_SPEED;
            
            enemyBullets.push({
                x: enemy.x + enemy.width / 2 - ENEMY_SCATTER_BULLET_WIDTH / 2,
                y: enemy.y + enemy.height,
                width: ENEMY_SCATTER_BULLET_WIDTH,
                height: ENEMY_SCATTER_BULLET_HEIGHT,
                speed: ENEMY_SCATTER_BULLET_SPEED,
                vx: vx,
                vy: vy,
                color: enemy.bulletColor,
                attackPower: enemy.attackPower * 0.7,
                type: 'scatter'
            });
        }
    } else if (shootType < 0.85) {
        // 3. 追踪子弹（15%概率）
        enemyBullets.push({
            x: enemy.x + enemy.width / 2 - ENEMY_HOMING_BULLET_WIDTH / 2,
            y: enemy.y + enemy.height,
            width: ENEMY_HOMING_BULLET_WIDTH,
            height: ENEMY_HOMING_BULLET_HEIGHT,
            speed: ENEMY_HOMING_BULLET_SPEED,
            color: enemy.bulletColor,
            attackPower: enemy.attackPower * 1.2,
            type: 'homing',
            targetX: player.x + player.width / 2,
            targetY: player.y + player.height / 2
        });
    } else if (shootType < 0.95) {
        // 4. 圆圈扩散子弹（10%概率）
        const numBullets = 8;
        for (let i = 0; i < numBullets; i++) {
            const angle = (i / numBullets) * Math.PI * 2;
            const vx = Math.cos(angle) * ENEMY_CIRCLE_BULLET_SPEED;
            const vy = Math.sin(angle) * ENEMY_CIRCLE_BULLET_SPEED;
            
            enemyBullets.push({
                x: enemy.x + enemy.width / 2 - ENEMY_CIRCLE_BULLET_WIDTH / 2,
                y: enemy.y + enemy.height,
                width: ENEMY_CIRCLE_BULLET_WIDTH,
                height: ENEMY_CIRCLE_BULLET_HEIGHT,
                speed: ENEMY_CIRCLE_BULLET_SPEED,
                vx: vx,
                vy: vy,
                color: enemy.bulletColor,
                attackPower: enemy.attackPower * 0.8,
                type: 'circle'
            });
        }
    } else {
        // 5. 重型子弹（5%概率）
        enemyBullets.push({
            x: enemy.x + enemy.width / 2 - ENEMY_HEAVY_BULLET_WIDTH / 2,
            y: enemy.y + enemy.height,
            width: ENEMY_HEAVY_BULLET_WIDTH,
            height: ENEMY_HEAVY_BULLET_HEIGHT,
            speed: ENEMY_HEAVY_BULLET_SPEED,
            color: '#ff8800',
            attackPower: enemy.attackPower * 2,
            type: 'heavy'
        });
    }
}

// Boss发射导弹
function bossShoot(boss) {
    // 发射多枚导弹
    for (let i = 0; i < 3; i++) {
        bossMissiles.push({
            x: boss.x + (i * BOSS_WIDTH / 4) + BOSS_WIDTH / 8 - BOSS_MISSILE_WIDTH / 2,
            y: boss.y + boss.height,
            width: BOSS_MISSILE_WIDTH,
            height: BOSS_MISSILE_HEIGHT,
            speed: BOSS_MISSILE_SPEED + Math.random() * 2,
            color: "#ff4500"
        });
    }
}

// Boss发射圆圈扩散导弹
function bossShootCircle(boss) {
    // 发射12枚导弹，呈圆形扩散
    const numMissiles = 12;
    const centerX = boss.x + boss.width / 2;
    const centerY = boss.y + boss.height / 2;
    
    for (let i = 0; i < numMissiles; i++) {
        const angle = (i / numMissiles) * Math.PI * 2;
        const vx = Math.cos(angle) * BOSS_CIRCLE_MISSILE_SPEED;
        const vy = Math.sin(angle) * BOSS_CIRCLE_MISSILE_SPEED;
        
        bossCircleMissiles.push({
            x: centerX - BOSS_CIRCLE_MISSILE_WIDTH / 2,
            y: centerY - BOSS_CIRCLE_MISSILE_HEIGHT / 2,
            width: BOSS_CIRCLE_MISSILE_WIDTH,
            height: BOSS_CIRCLE_MISSILE_HEIGHT,
            vx: vx,
            vy: vy,
            speed: BOSS_CIRCLE_MISSILE_SPEED,
            color: "#00ffff"
        });
    }
}

// Boss发射随机方向导弹
function bossShootRandom(boss) {
    // 发射8枚随机方向的导弹
    const numMissiles = 8;
    const centerX = boss.x + boss.width / 2;
    const centerY = boss.y + boss.height / 2;
    
    for (let i = 0; i < numMissiles; i++) {
        const angle = Math.random() * Math.PI * 2;
        const vx = Math.cos(angle) * BOSS_RANDOM_MISSILE_SPEED;
        const vy = Math.sin(angle) * BOSS_RANDOM_MISSILE_SPEED;
        
        bossRandomMissiles.push({
            x: centerX - BOSS_RANDOM_MISSILE_WIDTH / 2,
            y: centerY - BOSS_RANDOM_MISSILE_HEIGHT / 2,
            width: BOSS_RANDOM_MISSILE_WIDTH,
            height: BOSS_RANDOM_MISSILE_HEIGHT,
            vx: vx,
            vy: vy,
            speed: BOSS_RANDOM_MISSILE_SPEED,
            color: "#ff00ff"
        });
    }
}

// Boss发射激光
function bossShootLaser(boss) {
    // 发射激光束
    bossLasers.push({
        x: boss.x + boss.width / 2 - BOSS_LASER_WIDTH / 2,
        y: boss.y + boss.height,
        width: BOSS_LASER_WIDTH,
        height: BOSS_LASER_HEIGHT,
        speed: BOSS_LASER_SPEED,
        color: "#ff0000"
    });
}

// Boss发射追踪导弹
function bossShootHoming(boss) {
    // 发射追踪导弹
    bossHomingMissiles.push({
        x: boss.x + boss.width / 2 - BOSS_HOMING_MISSILE_WIDTH / 2,
        y: boss.y + boss.height,
        width: BOSS_HOMING_MISSILE_WIDTH,
        height: BOSS_HOMING_MISSILE_HEIGHT,
        speed: BOSS_HOMING_MISSILE_SPEED,
        color: "#00ff00",
        targetX: player.x + player.width / 2,
        targetY: player.y + player.height / 2,
        spawnTime: Date.now() // 添加生成时间，用于2秒后自动消失
    });
}

// 激活Boss巨型防御盾牌
function activateBossShield() {
    if (boss && !boss.shieldActive) {
        boss.shieldActive = true;
        boss.shieldTimer = Date.now();
        boss.lastShieldActivated = Date.now();
        bossShieldActive = true;
    }
}

// 更新敌人
function updateEnemies() {
    // 确保enemies数组存在
    if (!enemies) {
        enemies = [];
        return;
    }
    
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        enemy.y += enemy.speed;
        
        // 只有当敌人完全进入屏幕后才会发射子弹
        if (enemy.y > 0 && Math.random() < currentLevelData.enemyAttackRate) {
            enemyShoot(enemy);
        }
        
        // 敌人飞出屏幕
        if (enemy.y > CANVAS_HEIGHT) {
            enemies.splice(i, 1);
        }
    }
}

// 第二种Boss发射全屏幕扩散子弹
function boss2ShootSpread(boss) {
    const numBullets = BOSS2_NUM_SPREAD_BULLETS;
    const centerX = boss.x + boss.width / 2;
    const centerY = boss.y + boss.height / 2;
    
    for (let i = 0; i < numBullets; i++) {
        const angle = (i / numBullets) * Math.PI * 2;
        const vx = Math.cos(angle) * BOSS2_BULLET_SPEED;
        const vy = Math.sin(angle) * BOSS2_BULLET_SPEED;
        
        boss2SpreadBullets.push({
            x: centerX - BOSS2_BULLET_WIDTH / 2,
            y: centerY - BOSS2_BULLET_HEIGHT / 2,
            width: BOSS2_BULLET_WIDTH,
            height: BOSS2_BULLET_HEIGHT,
            vx: vx,
            vy: vy,
            speed: BOSS2_BULLET_SPEED,
            color: boss.bulletColor,
            attackPower: 25
        });
    }
}

// 更新Boss
function updateBoss() {
    if (!boss) return;
    
    // Boss悬停在正前方，不左右移动
    // 保持在屏幕中央
    boss.x = CANVAS_WIDTH / 2 - boss.width / 2;
    
    // 处理Boss盾牌
    const currentTime = Date.now();
    
    // 检查是否需要激活盾牌
    if (!boss.shieldActive && currentTime - boss.lastShieldActivated >= BOSS_SHIELD_INTERVAL) {
        activateBossShield();
    }
    
    // 检查盾牌是否需要关闭
    if (boss.shieldActive && currentTime - boss.shieldTimer >= BOSS_SHIELD_DURATION) {
        boss.shieldActive = false;
        bossShieldActive = false;
    }
    
    if (boss.type === 1) {
        // 第一种Boss的攻击方式
        // Boss缓慢发射导弹
        if (Math.random() < BOSS_SHOOT_RATE) {
            bossShoot(boss);
        }
        
        // Boss发射圆圈扩散导弹
        if (Math.random() < BOSS_CIRCLE_SHOOT_RATE) {
            bossShootCircle(boss);
        }
        
        // Boss发射随机方向导弹
        if (Math.random() < BOSS_RANDOM_SHOOT_RATE) {
            bossShootRandom(boss);
        }
        
        // Boss发射激光
        if (Math.random() < BOSS_LASER_SHOOT_RATE) {
            bossShootLaser(boss);
        }
        
        // Boss发射追踪导弹
        if (Math.random() < BOSS_HOMING_SHOOT_RATE) {
            bossShootHoming(boss);
        }
        
        // 更新冒烟计时器
        boss.smokeTimer++;
    } else if (boss.type === 2) {
        // 第二种Boss的攻击方式
        // Boss缓慢旋转
        boss.rotation += 0.01;
        
        // Boss发射全屏幕扩散子弹，频率较低
        if (Math.random() < BOSS2_SPREAD_SHOOT_RATE) {
            boss2ShootSpread(boss);
        }
    }
}

// 发射子弹
function shootBullet() {
    bullets.push({
        x: player.x + player.width / 2 - BULLET_WIDTH / 2,
        y: player.y,
        width: BULLET_WIDTH,
        height: BULLET_HEIGHT,
        speed: BULLET_SPEED
    });
    
    // 限制子弹数量
    if (bullets.length > 10) {
        bullets.shift();
    }
}

// 发射核弹
function launchNuke() {
    if (!gameRunning || nukes <= 0 || nukeActive) return;
    
    // 消耗一枚核弹
    nukes--;
    levelNukesUsed++;
    nukeActive = true;
    nukeRadius = 0;
    nukeStartTime = Date.now();
    
    // 更新UI
    document.getElementById('nukes').textContent = nukes;
    document.getElementById('nukeButton').disabled = nukes <= 0;
    
    // 播放核弹发射音效（如果有音效的话）
    // 这里可以添加音效播放逻辑
}

// 开始游戏
function startGame() {
    // 隐藏所有界面
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('levelSelectScreen').style.display = 'none';
    document.getElementById('planeSelectScreen').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('galleryScreen').style.display = 'none';
    document.getElementById('historyScreen').style.display = 'none';
    
    // 显示游戏界面
    document.getElementById('gameCanvas').style.display = 'block';
    document.querySelector('.game-header').style.display = 'flex';
    document.querySelector('.player-stats').style.display = 'flex';
    
    // 重新初始化事件监听器，确保canvas元素可见后再添加事件监听器
    initEventListeners();
    
    // 初始化选中的关卡
    initLevel(selectedLevel);
    
    // 添加关卡信息到UI
    updateLevelUI();
}

// 更新核弹爆炸效果
function updateNuke() {
    if (!nukeActive) return;
    
    // 计算核弹爆炸时间
    const elapsed = Date.now() - nukeStartTime;
    
    // 根据时间计算半径，确保在指定时间内达到最大半径
    nukeRadius = nukeMaxRadius * Math.min(elapsed / NUKE_EXPLOSION_TIME, 1);
    
    // 检查核弹爆炸是否结束
    if (elapsed >= NUKE_EXPLOSION_TIME) {
        // 核弹爆炸结束
        nukeActive = false;
        nukeRadius = 0;
        return;
    }
    
    // 核弹爆炸造成伤害
    // 伤害敌人
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        const dx = enemy.x + enemy.width / 2 - CANVAS_WIDTH / 2;
        const dy = enemy.y + enemy.height / 2 - CANVAS_HEIGHT / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance <= nukeRadius) {
            // 敌人受到核弹伤害
            enemy.lives -= nukeDamage;
            
            if (enemy.lives <= 0) {
                // 爆炸效果
                createExplosion(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2);
                
                // 移除敌人
                enemies.splice(i, 1);
                
                // 增加分数和击败敌人数量
                score += 10;
                enemiesKilled++;
                document.getElementById('score').textContent = score;
            }
        }
    }
    
    // 伤害Boss
    if (boss) {
        const dx = boss.x + boss.width / 2 - CANVAS_WIDTH / 2;
        const dy = boss.y + boss.height / 2 - CANVAS_HEIGHT / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance <= nukeRadius) {
            // Boss受到核弹伤害
            boss.lives -= nukeDamage;
            
            if (boss.lives <= 0) {
                // 爆炸效果
                createExplosion(boss.x + boss.width / 2, boss.y + boss.height / 2);
                
                // 移除Boss
                boss = null;
                
                // 记录Boss击败时间
                lastBossDefeatedTime = Date.now();
                
                // 增加分数和击败敌人数量（Boss算10个敌人）
                score += 100;
                enemiesKilled += 10;
                document.getElementById('score').textContent = score;
            }
        }
    }
}

// 绘制核弹爆炸效果
function drawNuke() {
    if (!nukeActive) return;
    
    // 绘制爆炸冲击波
    ctx.save();
    
    // 外层冲击波
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 50;
    
    ctx.beginPath();
    ctx.arc(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, nukeRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // 内层冲击波
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.arc(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, nukeRadius * 0.7, 0, Math.PI * 2);
    ctx.fill();
    
    // 中心爆炸点
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 30;
    ctx.beginPath();
    ctx.arc(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, nukeRadius * 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
}

// 添加经验值
function addExperience(amount) {
    if (level >= maxLevel) return; // 已达最高等级
    
    experience += amount;
    
    // 检查是否可以升级
    while (experience >= experienceToNextLevel && level < maxLevel) {
        // 升级
        level++;
        experience -= experienceToNextLevel;
        
        // 提升玩家属性
        player.speed += levelUpBonus;
        player.maxLives += levelUpBonus;
        player.attackPower += levelUpBonus;
        player.maxShield += levelUpBonus;
        
        // 更新玩家当前生命值和护盾值（升级后重置）
        player.lives = player.maxLives;
        player.shield = player.maxShield;
        
        // 更新全局生命值变量
        lives = player.maxLives;
        maxLives = player.maxLives;
        
        // 更新UI
        updateHealthAndShieldUI();
        
        // 经验值需求增加
        experienceToNextLevel = 10; // 保持每级10点经验
    }
    
    // 更新UI
    document.getElementById('level').textContent = level;
    document.getElementById('experience').textContent = experience;
    document.getElementById('experienceToNextLevel').textContent = experienceToNextLevel;
}

// 更新子弹
function updateBullets() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].y -= bullets[i].speed;
        
        // 子弹飞出屏幕
        if (bullets[i].y < -bullets[i].height) {
            bullets.splice(i, 1);
        }
    }
}

// 更新敌人子弹
function updateEnemyBullets() {
    // 确保enemyBullets数组存在
    if (!enemyBullets) {
        enemyBullets = [];
        return;
    }
    
    for (let i = enemyBullets.length - 1; i >= 0; i--) {
        const bullet = enemyBullets[i];
        
        if (bullet.type === 'normal' || bullet.type === 'heavy') {
            // 普通直线子弹和重型子弹
            bullet.y += bullet.speed;
        } else if (bullet.type === 'scatter' || bullet.type === 'circle') {
            // 散射子弹和圆圈扩散子弹
            bullet.x += bullet.vx;
            bullet.y += bullet.vy;
        } else if (bullet.type === 'homing') {
            // 追踪子弹
            // 更新目标位置
            bullet.targetX = player.x + player.width / 2;
            bullet.targetY = player.y + player.height / 2;
            
            // 计算子弹到目标的方向
            const dx = bullet.targetX - (bullet.x + bullet.width / 2);
            const dy = bullet.targetY - (bullet.y + bullet.height / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // 计算子弹移动方向
            const vx = (dx / distance) * bullet.speed;
            const vy = (dy / distance) * bullet.speed;
            
            // 更新子弹位置
            bullet.x += vx;
            bullet.y += vy;
        }
        
        // 子弹飞出屏幕
        if (bullet.y > CANVAS_HEIGHT || bullet.y < -bullet.height || 
            bullet.x < -bullet.width || bullet.x > CANVAS_WIDTH) {
            enemyBullets.splice(i, 1);
        }
    }
}

// 更新Boss导弹
function updateBossMissiles() {
    // 确保bossMissiles数组存在
    if (!bossMissiles) {
        bossMissiles = [];
        return;
    }
    
    for (let i = bossMissiles.length - 1; i >= 0; i--) {
        const missile = bossMissiles[i];
        missile.y += missile.speed;
        
        // 导弹飞出屏幕
        if (missile.y > CANVAS_HEIGHT) {
            bossMissiles.splice(i, 1);
        }
    }
}

// 更新Boss圆圈扩散导弹
function updateBossCircleMissiles() {
    // 确保bossCircleMissiles数组存在
    if (!bossCircleMissiles) {
        bossCircleMissiles = [];
        return;
    }
    
    for (let i = bossCircleMissiles.length - 1; i >= 0; i--) {
        const missile = bossCircleMissiles[i];
        missile.x += missile.vx;
        missile.y += missile.vy;
        
        // 导弹飞出屏幕
        if (missile.x < -missile.width || missile.x > CANVAS_WIDTH || 
            missile.y < -missile.height || missile.y > CANVAS_HEIGHT) {
            bossCircleMissiles.splice(i, 1);
        }
    }
}

// 更新Boss随机方向导弹
function updateBossRandomMissiles() {
    // 确保bossRandomMissiles数组存在
    if (!bossRandomMissiles) {
        bossRandomMissiles = [];
        return;
    }
    
    for (let i = bossRandomMissiles.length - 1; i >= 0; i--) {
        const missile = bossRandomMissiles[i];
        missile.x += missile.vx;
        missile.y += missile.vy;
        
        // 导弹飞出屏幕
        if (missile.x < -missile.width || missile.x > CANVAS_WIDTH || 
            missile.y < -missile.height || missile.y > CANVAS_HEIGHT) {
            bossRandomMissiles.splice(i, 1);
        }
    }
}

// 更新Boss激光
function updateBossLasers() {
    // 确保bossLasers数组存在
    if (!bossLasers) {
        bossLasers = [];
        return;
    }
    
    for (let i = bossLasers.length - 1; i >= 0; i--) {
        const laser = bossLasers[i];
        laser.y += laser.speed;
        
        // 激光飞出屏幕
        if (laser.y > CANVAS_HEIGHT) {
            bossLasers.splice(i, 1);
        }
    }
}

// 更新Boss追踪导弹
function updateBossHomingMissiles() {
    // 确保bossHomingMissiles数组存在
    if (!bossHomingMissiles) {
        bossHomingMissiles = [];
        return;
    }
    
    for (let i = bossHomingMissiles.length - 1; i >= 0; i--) {
        const missile = bossHomingMissiles[i];
        
        // 检查导弹是否存在超过2秒，是则自动消失
        if (Date.now() - missile.spawnTime > 2000) {
            bossHomingMissiles.splice(i, 1);
            continue;
        }
        
        // 更新目标位置
        missile.targetX = player.x + player.width / 2;
        missile.targetY = player.y + player.height / 2;
        
        // 计算导弹到目标的方向
        const dx = missile.targetX - (missile.x + missile.width / 2);
        const dy = missile.targetY - (missile.y + missile.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // 计算导弹移动方向
        const vx = (dx / distance) * missile.speed;
        const vy = (dy / distance) * missile.speed;
        
        // 更新导弹位置
        missile.x += vx;
        missile.y += vy;
        
        // 导弹飞出屏幕
        if (missile.x < -missile.width || missile.x > CANVAS_WIDTH || 
            missile.y < -missile.height || missile.y > CANVAS_HEIGHT) {
            bossHomingMissiles.splice(i, 1);
        }
    }
}

// 更新第二种Boss的扩散子弹
function updateBoss2SpreadBullets() {
    // 确保boss2SpreadBullets数组存在
    if (!boss2SpreadBullets) {
        boss2SpreadBullets = [];
        return;
    }
    
    for (let i = boss2SpreadBullets.length - 1; i >= 0; i--) {
        const bullet = boss2SpreadBullets[i];
        
        // 更新子弹位置
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;
        
        // 子弹飞出屏幕
        if (bullet.x < -bullet.width || bullet.x > CANVAS_WIDTH || 
            bullet.y < -bullet.height || bullet.y > CANVAS_HEIGHT) {
            boss2SpreadBullets.splice(i, 1);
        }
    }
}

// 碰撞检测
function checkCollisions() {
    // 遍历敌人数组，从后往前
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        let hit = false;
        
        // 检查子弹碰撞
        for (let j = bullets.length - 1; j >= 0; j--) {
            const bullet = bullets[j];
            if (isColliding(enemy, bullet)) {
                // 扣除敌人生命值
                enemy.lives -= player.attackPower;
                
                // 移除子弹
                bullets.splice(j, 1);
                
                // 如果敌人生命值为0，移除敌人并创建爆炸效果
                if (enemy.lives <= 0) {
                    // 爆炸效果
                    createExplosion(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2);
                    
                    // 移除敌人
                    enemies.splice(i, 1);
                    
                    // 更新关卡进度
                    if (enemy.isElite) {
                        levelElitesKilled++;
                        remainingElites = Math.max(0, remainingElites - 1); // 确保剩余精英数量不会为负数
                    } else {
                        levelEnemiesKilled++;
                        remainingEnemies = Math.max(0, remainingEnemies - 1); // 确保剩余敌人数量不会为负数
                    }
                    
                    // 增加分数和击败敌人数量
                    score += 10;
                    enemiesKilled++;
                    document.getElementById('score').textContent = score;
                    
                    // 获得经验值（1-3点随机）
                    const expGain = Math.floor(Math.random() * 3) + 1;
                    addExperience(expGain);
                    
                    hit = true;
                }
                break;
            }
        }
        
        // 如果已经被击中，跳过玩家碰撞检测
        if (hit) continue;
        
        // 玩家与敌人碰撞
        if (isColliding(player, enemy)) {
            createExplosion(player.x + player.width / 2, player.y + player.height / 2);
            enemies.splice(i, 1);
            
            const damage = 10;
            
            // 首先扣除护盾值
            if (player.shield > 0) {
                player.shield -= damage;
                if (player.shield < 0) {
                    // 护盾值不足，扣除剩余生命值
                    player.lives += player.shield;
                    player.shield = 0;
                }
            } else {
                // 没有护盾，直接扣除生命值
                player.lives -= damage;
            }
            
            // 确保生命值不会出现负数
            if (player.lives < 0) player.lives = 0;
            
            // 更新UI
            updateHealthAndShieldUI();
            
            if (player.lives <= 0) {
                endGame();
            }
        }
    }
    
    // 检查敌人子弹与玩家碰撞
    for (let i = enemyBullets.length - 1; i >= 0; i--) {
        const bullet = enemyBullets[i];
        if (isColliding(player, bullet)) {
            // 爆炸效果
            createExplosion(player.x + player.width / 2, player.y + player.height / 2);
            
            // 移除敌人子弹
            enemyBullets.splice(i, 1);
            
            const damage = bullet.attackPower || 5; // 使用子弹的攻击力，默认5
            
            // 首先扣除护盾值
            if (player.shield > 0) {
                player.shield -= damage;
                if (player.shield < 0) {
                    // 护盾值不足，扣除剩余生命值
                    player.lives += player.shield;
                    player.shield = 0;
                }
            } else {
                // 没有护盾，直接扣除生命值
                player.lives -= damage;
            }
            
            // 确保生命值不会出现负数
            if (player.lives < 0) player.lives = 0;
            
            // 更新UI
            updateHealthAndShieldUI();
            
            if (player.lives <= 0) {
                endGame();
            }
        }
    }
    
    // 检查Boss导弹与玩家碰撞
    for (let i = bossMissiles.length - 1; i >= 0; i--) {
        const missile = bossMissiles[i];
        if (isColliding(player, missile)) {
            // 爆炸效果
            createExplosion(player.x + player.width / 2, player.y + player.height / 2);
            
            // 移除导弹
            bossMissiles.splice(i, 1);
            
            const damage = 20;
            
            // 首先扣除护盾值
            if (player.shield > 0) {
                player.shield -= damage;
                if (player.shield < 0) {
                    // 护盾值不足，扣除剩余生命值
                    player.lives += player.shield;
                    player.shield = 0;
                }
            } else {
                // 没有护盾，直接扣除生命值
                player.lives -= damage;
            }
            
            // 确保生命值不会出现负数
            if (player.lives < 0) player.lives = 0;
            
            // 更新UI
            updateHealthAndShieldUI();
            
            if (player.lives <= 0) {
                endGame();
            }
        }
    }
    
    // 检查玩家子弹与Boss碰撞
    if (boss) {
        for (let j = bullets.length - 1; j >= 0; j--) {
            const bullet = bullets[j];
            if (isColliding(boss, bullet)) {
                // 检查Boss是否有激活的盾牌
                if (!boss.shieldActive) {
                    // 扣除Boss生命值
                    boss.lives -= player.attackPower;
                }
                
                // 移除子弹
                bullets.splice(j, 1);
                
                // 如果Boss生命值为0，移除Boss并创建爆炸效果
                if (boss.lives <= 0) {
                    // 爆炸效果
                    createExplosion(boss.x + boss.width / 2, boss.y + boss.height / 2);
                    
                    // 移除Boss
                    boss = null;
                    
                    // 记录Boss击败时间
                    lastBossDefeatedTime = Date.now();
                    
                    // 增加分数和击败敌人数量（Boss算10个敌人）
                    score += 100;
                    enemiesKilled += 10;
                    document.getElementById('score').textContent = score;
                    
                    // 击败Boss获得50点经验
                    addExperience(50);
                }
                break;
            }
        }
        
        // 玩家与Boss碰撞（只有当Boss存在时才检查）
        if (boss && isColliding(player, boss)) {
            createExplosion(player.x + player.width / 2, player.y + player.height / 2);
            
            const damage = 30;
            
            // 首先扣除护盾值
            if (player.shield > 0) {
                player.shield -= damage;
                if (player.shield < 0) {
                    // 护盾值不足，扣除剩余生命值
                    player.lives += player.shield;
                    player.shield = 0;
                }
            } else {
                // 没有护盾，直接扣除生命值
                player.lives -= damage;
            }
            
            // 确保生命值不会出现负数
            if (player.lives < 0) player.lives = 0;
            
            // 更新UI
            updateHealthAndShieldUI();
            
            if (player.lives <= 0) {
                endGame();
            }
        }
    }
    
    // 检查Boss圆圈扩散导弹与玩家碰撞
    for (let i = bossCircleMissiles.length - 1; i >= 0; i--) {
        const missile = bossCircleMissiles[i];
        if (isColliding(player, missile)) {
            // 爆炸效果
            createExplosion(player.x + player.width / 2, player.y + player.height / 2);
            
            // 移除导弹
            bossCircleMissiles.splice(i, 1);
            
            const damage = 15;
            
            // 首先扣除护盾值
            if (player.shield > 0) {
                player.shield -= damage;
                if (player.shield < 0) {
                    // 护盾值不足，扣除剩余生命值
                    player.lives += player.shield;
                    player.shield = 0;
                }
            } else {
                // 没有护盾，直接扣除生命值
                player.lives -= damage;
            }
            
            // 确保生命值不会出现负数
            if (player.lives < 0) player.lives = 0;
            
            // 更新UI
            updateHealthAndShieldUI();
            
            if (player.lives <= 0) {
                endGame();
            }
        }
    }
    
    // 检查Boss随机方向导弹与玩家碰撞
    for (let i = bossRandomMissiles.length - 1; i >= 0; i--) {
        const missile = bossRandomMissiles[i];
        if (isColliding(player, missile)) {
            // 爆炸效果
            createExplosion(player.x + player.width / 2, player.y + player.height / 2);
            
            // 移除导弹
            bossRandomMissiles.splice(i, 1);
            
            const damage = 20;
            
            // 首先扣除护盾值
            if (player.shield > 0) {
                player.shield -= damage;
                if (player.shield < 0) {
                    // 护盾值不足，扣除剩余生命值
                    player.lives += player.shield;
                    player.shield = 0;
                }
            } else {
                // 没有护盾，直接扣除生命值
                player.lives -= damage;
            }
            
            // 确保生命值不会出现负数
            if (player.lives < 0) player.lives = 0;
            
            // 更新UI
            updateHealthAndShieldUI();
            
            if (player.lives <= 0) {
                endGame();
            }
        }
    }
    
    // 检查Boss激光与玩家碰撞
    for (let i = bossLasers.length - 1; i >= 0; i--) {
        const laser = bossLasers[i];
        if (isColliding(player, laser)) {
            // 爆炸效果
            createExplosion(player.x + player.width / 2, player.y + player.height / 2);
            
            // 移除激光
            bossLasers.splice(i, 1);
            
            const damage = 25;
            
            // 首先扣除护盾值
            if (player.shield > 0) {
                player.shield -= damage;
                if (player.shield < 0) {
                    // 护盾值不足，扣除剩余生命值
                    player.lives += player.shield;
                    player.shield = 0;
                }
            } else {
                // 没有护盾，直接扣除生命值
                player.lives -= damage;
            }
            
            // 确保生命值不会出现负数
            if (player.lives < 0) player.lives = 0;
            
            // 更新UI
            updateHealthAndShieldUI();
            
            if (player.lives <= 0) {
                endGame();
            }
        }
    }
    
    // 检查Boss追踪导弹与玩家碰撞
    for (let i = bossHomingMissiles.length - 1; i >= 0; i--) {
        const missile = bossHomingMissiles[i];
        if (isColliding(player, missile)) {
            // 爆炸效果
            createExplosion(player.x + player.width / 2, player.y + player.height / 2);
            
            // 移除导弹
            bossHomingMissiles.splice(i, 1);
            
            const damage = 15;
            
            // 首先扣除护盾值
            if (player.shield > 0) {
                player.shield -= damage;
                if (player.shield < 0) {
                    // 护盾值不足，扣除剩余生命值
                    player.lives += player.shield;
                    player.shield = 0;
                }
            } else {
                // 没有护盾，直接扣除生命值
                player.lives -= damage;
            }
            
            // 确保生命值不会出现负数
            if (player.lives < 0) player.lives = 0;
            
            // 更新UI
            updateHealthAndShieldUI();
            
            if (player.lives <= 0) {
                endGame();
            }
        }
    }
    
    // 检查第二种Boss的扩散子弹与玩家碰撞
    for (let i = boss2SpreadBullets.length - 1; i >= 0; i--) {
        const bullet = boss2SpreadBullets[i];
        if (isColliding(player, bullet)) {
            // 爆炸效果
            createExplosion(player.x + player.width / 2, player.y + player.height / 2);
            
            // 移除子弹
            boss2SpreadBullets.splice(i, 1);
            
            const damage = bullet.attackPower || 25;
            
            // 首先扣除护盾值
            if (player.shield > 0) {
                player.shield -= damage;
                if (player.shield < 0) {
                    // 护盾值不足，扣除剩余生命值
                    player.lives += player.shield;
                    player.shield = 0;
                }
            } else {
                // 没有护盾，直接扣除生命值
                player.lives -= damage;
            }
            
            // 确保生命值不会出现负数
            if (player.lives < 0) player.lives = 0;
            
            // 更新UI
            updateHealthAndShieldUI();
            
            if (player.lives <= 0) {
                endGame();
            }
        }
    }
}

function isColliding(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

// 爆炸效果
function createExplosion(x, y) {
    // 创建爆炸元素
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    explosion.style.left = `${x - 25}px`;
    explosion.style.top = `${y - 25}px`;
    document.querySelector('.game-container').appendChild(explosion);
    
    // 移除爆炸元素
    setTimeout(() => {
        explosion.remove();
    }, 500);
}

// 绘制玩家
function drawPlayer() {
    ctx.save();
    
    // 绘制护盾（如果有）
    if (player.shield > 0) {
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 30;
        ctx.strokeStyle = `rgba(0, 255, 255, ${player.shield / player.maxShield})`;
        ctx.lineWidth = 3;
        
        // 绘制护盾圆环
        ctx.beginPath();
        ctx.arc(
            player.x + player.width / 2,
            player.y + player.height / 2,
            player.width / 2 + 15,
            0,
            Math.PI * 2
        );
        ctx.stroke();
        
        // 绘制护盾内部光晕
        ctx.fillStyle = `rgba(0, 255, 255, ${player.shield / player.maxShield * 0.2})`;
        ctx.beginPath();
        ctx.arc(
            player.x + player.width / 2,
            player.y + player.height / 2,
            player.width / 2 + 15,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }
    
    // 绘制飞机发光效果（整体光晕）
    ctx.shadowColor = player.color;
    ctx.shadowBlur = 20;
    
    // 绘制飞机主体 - 根据不同飞机类型绘制不同的科技感形状
    ctx.fillStyle = player.color;
    
    // 获取当前飞机类型
    const planeType = planes[selectedPlane].name;
    
    if (planeType === "闪电号") {
        // 闪电号：流线型，尖锐的机翼，蓝色主题
        ctx.beginPath();
        // 机头尖端
        ctx.moveTo(player.x + player.width / 2, player.y + 5);
        // 左机翼上缘（尖锐）
        ctx.lineTo(player.x + 5, player.y + player.height * 0.3);
        // 左机翼下缘
        ctx.lineTo(player.x + 10, player.y + player.height * 0.6);
        // 左机身
        ctx.lineTo(player.x + player.width * 0.3, player.y + player.height - 10);
        // 机尾
        ctx.lineTo(player.x + player.width / 2, player.y + player.height - 5);
        // 右机身
        ctx.lineTo(player.x + player.width * 0.7, player.y + player.height - 10);
        // 右机翼下缘
        ctx.lineTo(player.x + player.width - 10, player.y + player.height * 0.6);
        // 右机翼上缘（尖锐）
        ctx.lineTo(player.x + player.width - 5, player.y + player.height * 0.3);
        // 回到机头
        ctx.closePath();
        ctx.fill();
        
        // 闪电标志
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(player.x + player.width / 2, player.y + 15);
        ctx.lineTo(player.x + player.width / 2 - 10, player.y + 35);
        ctx.lineTo(player.x + player.width / 2 + 10, player.y + 35);
        ctx.closePath();
        ctx.fill();
    } else if (planeType === "雷霆号") {
        // 雷霆号：厚重的机身，双引擎，紫色主题
        // 主体机身
        ctx.beginPath();
        ctx.moveTo(player.x + player.width * 0.2, player.y + player.height * 0.2);
        ctx.lineTo(player.x + player.width * 0.1, player.y + player.height * 0.8);
        ctx.lineTo(player.x + player.width * 0.3, player.y + player.height);
        ctx.lineTo(player.x + player.width * 0.7, player.y + player.height);
        ctx.lineTo(player.x + player.width * 0.9, player.y + player.height * 0.8);
        ctx.lineTo(player.x + player.width * 0.8, player.y + player.height * 0.2);
        ctx.closePath();
        ctx.fill();
        
        // 双引擎设计
        ctx.fillStyle = '#800080';
        ctx.fillRect(player.x + player.width * 0.25, player.y + player.height - 15, 15, 15);
        ctx.fillRect(player.x + player.width * 0.6, player.y + player.height - 15, 15, 15);
    } else if (planeType === "飓风号") {
        // 飓风号：三角形机身，灵活的机翼，黄色主题
        // 三角形主体
        ctx.beginPath();
        ctx.moveTo(player.x + player.width / 2, player.y);
        ctx.lineTo(player.x, player.y + player.height);
        ctx.lineTo(player.x + player.width, player.y + player.height);
        ctx.closePath();
        ctx.fill();
        
        // 机翼延伸
        ctx.beginPath();
        ctx.moveTo(player.x + 10, player.y + player.height * 0.5);
        ctx.lineTo(player.x - 15, player.y + player.height * 0.3);
        ctx.lineTo(player.x + 5, player.y + player.height * 0.4);
        ctx.closePath();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(player.x + player.width - 10, player.y + player.height * 0.5);
        ctx.lineTo(player.x + player.width + 15, player.y + player.height * 0.3);
        ctx.lineTo(player.x + player.width - 5, player.y + player.height * 0.4);
        ctx.closePath();
        ctx.fill();
        
        // 飓风标志
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(player.x + player.width / 2, player.y + player.height * 0.6, 10, 0, Math.PI * 2);
        ctx.fill();
    } else if (planeType === "泰坦号") {
        // 泰坦号：大型机身，四引擎，橙色主题
        // 主体机身（矩形）
        ctx.fillRect(player.x + player.width * 0.2, player.y + player.height * 0.2, player.width * 0.6, player.height * 0.6);
        
        // 机头（三角形）
        ctx.beginPath();
        ctx.moveTo(player.x + player.width * 0.2, player.y + player.height * 0.2);
        ctx.lineTo(player.x + player.width / 2, player.y);
        ctx.lineTo(player.x + player.width * 0.8, player.y + player.height * 0.2);
        ctx.closePath();
        ctx.fill();
        
        // 四引擎设计
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(player.x + player.width * 0.25, player.y + player.height - 15, 12, 15);
        ctx.fillRect(player.x + player.width * 0.38, player.y + player.height - 15, 12, 15);
        ctx.fillRect(player.x + player.width * 0.5, player.y + player.height - 15, 12, 15);
        ctx.fillRect(player.x + player.width * 0.63, player.y + player.height - 15, 12, 15);
    }
    
    // 绘制飞机驾驶舱
    ctx.fillStyle = '#ffff00';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + 25, 8, 0, Math.PI * 2);
    ctx.fill();
    
    // 绘制飞机细节 - 机身条纹
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(player.x + player.width / 2, player.y + 15);
    ctx.lineTo(player.x + player.width / 2, player.y + player.height - 10);
    ctx.stroke();
    
    // 绘制机翼细节
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    // 左机翼条纹
    ctx.moveTo(player.x + 15, player.y + player.height - 15);
    ctx.lineTo(player.x + player.width / 3 - 5, player.y + player.height - 5);
    // 右机翼条纹
    ctx.moveTo(player.x + player.width - 15, player.y + player.height - 15);
    ctx.lineTo(player.x + player.width * 2 / 3 + 5, player.y + player.height - 5);
    ctx.stroke();
    
    // 绘制引擎火焰 - 更复杂的效果
    ctx.shadowBlur = 30;
    
    // 外火焰（黄色）
    ctx.fillStyle = '#ffff00';
    ctx.beginPath();
    ctx.moveTo(player.x + player.width / 2 - 8, player.y + player.height);
    ctx.lineTo(player.x + player.width / 2, player.y + player.height + 25);
    ctx.lineTo(player.x + player.width / 2 + 8, player.y + player.height);
    ctx.closePath();
    ctx.fill();
    
    // 内火焰（红色）
    ctx.fillStyle = '#ff4500';
    ctx.beginPath();
    ctx.moveTo(player.x + player.width / 2 - 4, player.y + player.height);
    ctx.lineTo(player.x + player.width / 2, player.y + player.height + 20);
    ctx.lineTo(player.x + player.width / 2 + 4, player.y + player.height);
    ctx.closePath();
    ctx.fill();
    
    // 火焰核心（白色）
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(player.x + player.width / 2 - 2, player.y + player.height + 5);
    ctx.lineTo(player.x + player.width / 2, player.y + player.height + 15);
    ctx.lineTo(player.x + player.width / 2 + 2, player.y + player.height + 5);
    ctx.closePath();
    ctx.fill();
    
    // 绘制飞机发光边框
    ctx.strokeStyle = player.color;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.moveTo(player.x + player.width / 2, player.y + 10);
    ctx.lineTo(player.x + 10, player.y + player.height - 10);
    ctx.lineTo(player.x + player.width / 3, player.y + player.height);
    ctx.lineTo(player.x + player.width / 2, player.y + player.height - 5);
    ctx.lineTo(player.x + player.width * 2 / 3, player.y + player.height);
    ctx.lineTo(player.x + player.width - 10, player.y + player.height - 10);
    ctx.closePath();
    ctx.stroke();
    
    ctx.restore();
}

// 绘制敌人
function drawEnemies() {
    enemies.forEach(enemy => {
        ctx.save();
        
        // 绘制敌人发光效果
        ctx.shadowColor = enemy.color;
        ctx.shadowBlur = 20;
        
        // 1. 绘制敌人主体 - 科技感形状
        ctx.fillStyle = enemy.color;
        
        if (enemy.isElite) {
            // 精英敌人：更复杂的科技感形状
            // 主体机身（菱形）
            ctx.beginPath();
            // 机头尖端
            ctx.moveTo(enemy.x + enemy.width / 2, enemy.y - 5);
            // 右侧机翼
            ctx.lineTo(enemy.x + enemy.width + 10, enemy.y + enemy.height * 0.4);
            // 右机身
            ctx.lineTo(enemy.x + enemy.width * 0.8, enemy.y + enemy.height);
            // 机尾
            ctx.lineTo(enemy.x + enemy.width / 2, enemy.y + enemy.height * 0.8);
            // 左机身
            ctx.lineTo(enemy.x + enemy.width * 0.2, enemy.y + enemy.height);
            // 左侧机翼
            ctx.lineTo(enemy.x - 10, enemy.y + enemy.height * 0.4);
            // 回到机头
            ctx.closePath();
            ctx.fill();
            
            // 精英敌人标志（中心菱形）
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.moveTo(enemy.x + enemy.width / 2, enemy.y + enemy.height * 0.3);
            ctx.lineTo(enemy.x + enemy.width * 0.6, enemy.y + enemy.height * 0.5);
            ctx.lineTo(enemy.x + enemy.width / 2, enemy.y + enemy.height * 0.7);
            ctx.lineTo(enemy.x + enemy.width * 0.4, enemy.y + enemy.height * 0.5);
            ctx.closePath();
            ctx.fill();
        } else {
            // 普通敌人：标准科技感形状
            // 主体机身
            ctx.beginPath();
            // 机尾底部
            ctx.moveTo(enemy.x + enemy.width / 2, enemy.y + enemy.height);
            // 左侧机身曲线
            ctx.bezierCurveTo(enemy.x + enemy.width * 0.2, enemy.y + enemy.height * 0.8, enemy.x + enemy.width * 0.15, enemy.y + enemy.height * 0.4, enemy.x + enemy.width * 0.25, enemy.y + enemy.height * 0.2);
            // 左机翼
            ctx.lineTo(enemy.x + 5, enemy.y + enemy.height * 0.3);
            // 左机翼尖端
            ctx.lineTo(enemy.x + 10, enemy.y + enemy.height * 0.15);
            // 机头尖端
            ctx.lineTo(enemy.x + enemy.width / 2, enemy.y - 5);
            // 右机翼尖端
            ctx.lineTo(enemy.x + enemy.width - 10, enemy.y + enemy.height * 0.15);
            // 右机翼
            ctx.lineTo(enemy.x + enemy.width - 5, enemy.y + enemy.height * 0.3);
            // 右侧机身曲线
            ctx.lineTo(enemy.x + enemy.width * 0.75, enemy.y + enemy.height * 0.2);
            ctx.bezierCurveTo(enemy.x + enemy.width * 0.85, enemy.y + enemy.height * 0.4, enemy.x + enemy.width * 0.8, enemy.y + enemy.height * 0.8, enemy.x + enemy.width / 2, enemy.y + enemy.height);
            ctx.closePath();
            ctx.fill();
        }
        
        // 2. 绘制敌人装甲板 - 科技感细节
        ctx.fillStyle = '#400000'; // 深色装甲
        
        // 顶部装甲
        ctx.beginPath();
        ctx.moveTo(enemy.x + enemy.width * 0.35, enemy.y + enemy.height * 0.25);
        ctx.lineTo(enemy.x + enemy.width / 2, enemy.y - 2);
        ctx.lineTo(enemy.x + enemy.width * 0.65, enemy.y + enemy.height * 0.25);
        ctx.closePath();
        ctx.fill();
        
        // 两侧装甲
        ctx.fillRect(enemy.x + enemy.width * 0.25, enemy.y + enemy.height * 0.35, enemy.width * 0.1, enemy.height * 0.3);
        ctx.fillRect(enemy.x + enemy.width * 0.65, enemy.y + enemy.height * 0.35, enemy.width * 0.1, enemy.height * 0.3);
        
        // 3. 绘制敌人驾驶舱 - 科技感设计
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(enemy.x + enemy.width / 2, enemy.y + 15, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // 驾驶舱玻璃反光
        ctx.fillStyle = 'rgba(0, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(enemy.x + enemy.width / 2 + 3, enemy.y + 12, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // 4. 绘制敌人武器系统 - 科技感武器
        ctx.fillStyle = '#ff4500';
        
        // 机翼导弹发射架
        ctx.fillRect(enemy.x + 10, enemy.y + 25, 6, 4);
        ctx.fillRect(enemy.x + enemy.width - 16, enemy.y + 25, 6, 4);
        
        // 导弹
        ctx.fillStyle = '#ff6600';
        ctx.fillRect(enemy.x + 11, enemy.y + 20, 4, 8);
        ctx.fillRect(enemy.x + enemy.width - 15, enemy.y + 20, 4, 8);
        
        // 5. 绘制敌人引擎 - 科技感推进器
        ctx.fillStyle = '#808080';
        // 左侧引擎
        ctx.fillRect(enemy.x + enemy.width * 0.3, enemy.y + enemy.height - 10, 8, 10);
        // 右侧引擎
        ctx.fillRect(enemy.x + enemy.width * 0.62, enemy.y + enemy.height - 10, 8, 10);
        
        // 引擎发光效果
        ctx.fillStyle = '#ff8800';
        ctx.beginPath();
        ctx.arc(enemy.x + enemy.width * 0.34, enemy.y + enemy.height, 4, 0, Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(enemy.x + enemy.width * 0.66, enemy.y + enemy.height, 4, 0, Math.PI);
        ctx.fill();
        
        // 6. 绘制敌人装饰条纹 - 科技感线条
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        
        // 机身中央条纹
        ctx.beginPath();
        ctx.moveTo(enemy.x + enemy.width / 2, enemy.y + 10);
        ctx.lineTo(enemy.x + enemy.width / 2, enemy.y + enemy.height - 5);
        ctx.stroke();
        
        // 机翼装饰条纹
        for (let i = 0; i < 2; i++) {
            const offset = i * 8;
            // 左机翼条纹
            ctx.beginPath();
            ctx.moveTo(enemy.x + 15, enemy.y + 20 + offset);
            ctx.lineTo(enemy.x + enemy.width * 0.3, enemy.y + enemy.height - 15 + offset / 2);
            ctx.stroke();
            // 右机翼条纹
            ctx.beginPath();
            ctx.moveTo(enemy.x + enemy.width - 15, enemy.y + 20 + offset);
            ctx.lineTo(enemy.x + enemy.width * 0.7, enemy.y + enemy.height - 15 + offset / 2);
            ctx.stroke();
        }
        
        // 7. 绘制敌人发光边框 - 增强科技感
        ctx.strokeStyle = enemy.color;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        // 主体边框
        ctx.moveTo(enemy.x + enemy.width / 2, enemy.y + enemy.height);
        ctx.bezierCurveTo(enemy.x + enemy.width * 0.2, enemy.y + enemy.height * 0.8, enemy.x + enemy.width * 0.15, enemy.y + enemy.height * 0.4, enemy.x + enemy.width * 0.25, enemy.y + enemy.height * 0.2);
        ctx.lineTo(enemy.x + 5, enemy.y + enemy.height * 0.3);
        ctx.lineTo(enemy.x + 10, enemy.y + enemy.height * 0.15);
        ctx.lineTo(enemy.x + enemy.width / 2, enemy.y - 5);
        ctx.lineTo(enemy.x + enemy.width - 10, enemy.y + enemy.height * 0.15);
        ctx.lineTo(enemy.x + enemy.width - 5, enemy.y + enemy.height * 0.3);
        ctx.lineTo(enemy.x + enemy.width * 0.75, enemy.y + enemy.height * 0.2);
        ctx.bezierCurveTo(enemy.x + enemy.width * 0.85, enemy.y + enemy.height * 0.4, enemy.x + enemy.width * 0.8, enemy.y + enemy.height * 0.8, enemy.x + enemy.width / 2, enemy.y + enemy.height);
        ctx.closePath();
        ctx.stroke();
        
        // 8. 绘制敌人警告灯
        const blink = Math.sin(Date.now() * 0.02) > 0;
        if (blink) {
            ctx.fillStyle = '#ff0000';
            ctx.shadowColor = '#ff0000';
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.arc(enemy.x + enemy.width / 2, enemy.y + enemy.height - 5, 3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    });
}

// 绘制子弹
function drawBullets() {
    ctx.save();
    ctx.shadowColor = '#ffff00';
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#ffff00';
    
    bullets.forEach(bullet => {
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        
        // 子弹拖尾效果
        ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
        ctx.fillRect(bullet.x, bullet.y + bullet.height, bullet.width, 10);
    });
    
    ctx.restore();
}

// 绘制敌人子弹
function drawEnemyBullets() {
    enemyBullets.forEach(bullet => {
        ctx.save();
        
        // 使用子弹自己的颜色
        ctx.shadowColor = bullet.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = bullet.color;
        
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        
        // 子弹拖尾效果
        ctx.fillStyle = bullet.color + '80'; // 添加透明度
        ctx.fillRect(bullet.x, bullet.y - 10, bullet.width, 10);
        
        ctx.restore();
    });
}

// 绘制Boss导弹
function drawBossMissiles() {
    bossMissiles.forEach(missile => {
        ctx.save();
        
        // 导弹发光效果
        ctx.shadowColor = missile.color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = missile.color;
        
        // 绘制导弹主体
        ctx.fillRect(missile.x, missile.y, missile.width, missile.height);
        
        // 导弹头部
        ctx.beginPath();
        ctx.moveTo(missile.x, missile.y + missile.height);
        ctx.lineTo(missile.x + missile.width / 2, missile.y + missile.height + 10);
        ctx.lineTo(missile.x + missile.width, missile.y + missile.height);
        ctx.closePath();
        ctx.fill();
        
        // 导弹拖尾效果
        ctx.fillStyle = missile.color + '80'; // 添加透明度
        ctx.fillRect(missile.x, missile.y - 15, missile.width, 15);
        
        ctx.restore();
    });
}

// 绘制Boss圆圈扩散导弹
function drawBossCircleMissiles() {
    bossCircleMissiles.forEach(missile => {
        ctx.save();
        
        // 圆圈导弹发光效果
        ctx.shadowColor = missile.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = missile.color;
        
        // 绘制圆形导弹
        ctx.beginPath();
        ctx.arc(missile.x + missile.width / 2, missile.y + missile.height / 2, missile.width / 2, 0, Math.PI * 2);
        ctx.fill();
        
        // 导弹核心
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(missile.x + missile.width / 2, missile.y + missile.height / 2, missile.width / 4, 0, Math.PI * 2);
        ctx.fill();
        
        // 拖尾效果
        const trailLength = 15;
        ctx.fillStyle = missile.color + '40'; // 半透明
        ctx.beginPath();
        ctx.moveTo(missile.x + missile.width / 2, missile.y + missile.height / 2);
        ctx.lineTo(
            missile.x + missile.width / 2 - missile.vx * trailLength,
            missile.y + missile.height / 2 - missile.vy * trailLength
        );
        ctx.arc(
            missile.x + missile.width / 2 - missile.vx * trailLength,
            missile.y + missile.height / 2 - missile.vy * trailLength,
            missile.width / 3,
            0,
            Math.PI * 2
        );
        ctx.fill();
        
        ctx.restore();
    });
}

// 绘制Boss随机方向导弹
function drawBossRandomMissiles() {
    bossRandomMissiles.forEach(missile => {
        ctx.save();
        
        // 随机导弹发光效果
        ctx.shadowColor = missile.color;
        ctx.shadowBlur = 25;
        ctx.fillStyle = missile.color;
        
        // 绘制菱形导弹
        ctx.translate(missile.x + missile.width / 2, missile.y + missile.height / 2);
        const angle = Math.atan2(missile.vy, missile.vx);
        ctx.rotate(angle);
        
        ctx.beginPath();
        ctx.moveTo(0, -missile.height / 2);
        ctx.lineTo(missile.width / 2, 0);
        ctx.lineTo(0, missile.height / 2);
        ctx.lineTo(-missile.width / 2, 0);
        ctx.closePath();
        ctx.fill();
        
        // 导弹核心
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, 0, missile.width / 4, 0, Math.PI * 2);
        ctx.fill();
        
        // 拖尾效果
        const trailLength = 15;
        ctx.fillStyle = missile.color + '60'; // 半透明
        ctx.fillRect(-missile.width / 2, missile.height / 2, missile.width, trailLength);
        
        ctx.restore();
    });
}

// 绘制Boss激光
function drawBossLasers() {
    bossLasers.forEach(laser => {
        ctx.save();
        
        // 激光发光效果
        ctx.shadowColor = laser.color;
        ctx.shadowBlur = 30;
        ctx.fillStyle = laser.color;
        
        // 绘制激光主体
        ctx.fillRect(laser.x, laser.y, laser.width, laser.height);
        
        // 激光头部
        ctx.beginPath();
        ctx.moveTo(laser.x, laser.y + laser.height);
        ctx.lineTo(laser.x + laser.width / 2, laser.y + laser.height + 15);
        ctx.lineTo(laser.x + laser.width, laser.y + laser.height);
        ctx.closePath();
        ctx.fill();
        
        // 激光拖尾效果
        ctx.fillStyle = laser.color + '80'; // 半透明
        ctx.fillRect(laser.x, laser.y - 20, laser.width, 20);
        
        ctx.restore();
    });
}

// 绘制Boss追踪导弹
function drawBossHomingMissiles() {
    bossHomingMissiles.forEach(missile => {
        ctx.save();
        
        // 追踪导弹发光效果
        ctx.shadowColor = missile.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = missile.color;
        
        // 绘制导弹主体
        ctx.translate(missile.x + missile.width / 2, missile.y + missile.height / 2);
        const angle = Math.atan2(missile.targetY - (missile.y + missile.height / 2), missile.targetX - (missile.x + missile.width / 2));
        ctx.rotate(angle);
        
        // 导弹主体
        ctx.fillRect(-missile.width / 2, -missile.height / 2, missile.width, missile.height);
        
        // 导弹头部
        ctx.beginPath();
        ctx.moveTo(-missile.width / 2, missile.height / 2);
        ctx.lineTo(0, missile.height / 2 + 10);
        ctx.lineTo(missile.width / 2, missile.height / 2);
        ctx.closePath();
        ctx.fill();
        
        // 导弹核心
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, 0, missile.width / 4, 0, Math.PI * 2);
        ctx.fill();
        
        // 追踪指示器
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, -missile.height / 2 - 5, 5, 0, Math.PI * 2);
        ctx.stroke();
        
        // 拖尾效果
        const trailLength = 15;
        ctx.fillStyle = missile.color + '60'; // 半透明
        ctx.fillRect(-missile.width / 2, missile.height / 2, missile.width, trailLength);
        
        ctx.restore();
    });
}

// 绘制第二种Boss的扩散子弹
function drawBoss2SpreadBullets() {
    boss2SpreadBullets.forEach(bullet => {
        ctx.save();
        
        // 扩散子弹发光效果
        ctx.shadowColor = bullet.color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = bullet.color;
        
        // 绘制圆形子弹
        ctx.beginPath();
        ctx.arc(bullet.x + bullet.width / 2, bullet.y + bullet.height / 2, bullet.width / 2, 0, Math.PI * 2);
        ctx.fill();
        
        // 子弹核心
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(bullet.x + bullet.width / 2, bullet.y + bullet.height / 2, bullet.width / 4, 0, Math.PI * 2);
        ctx.fill();
        
        // 拖尾效果
        const trailLength = 10;
        ctx.fillStyle = bullet.color + '60'; // 半透明
        ctx.beginPath();
        ctx.moveTo(bullet.x + bullet.width / 2, bullet.y + bullet.height / 2);
        ctx.lineTo(
            bullet.x + bullet.width / 2 - bullet.vx * trailLength,
            bullet.y + bullet.height / 2 - bullet.vy * trailLength
        );
        ctx.arc(
            bullet.x + bullet.width / 2 - bullet.vx * trailLength,
            bullet.y + bullet.height / 2 - bullet.vy * trailLength,
            bullet.width / 3,
            0,
            Math.PI * 2
        );
        ctx.fill();
        
        ctx.restore();
    });
}

// 绘制Boss
function drawBoss() {
    if (!boss) return;
    
    ctx.save();
    
    // 增强Boss发光效果，更有压迫感
    ctx.shadowColor = boss.color;
    ctx.shadowBlur = 50;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    // 0. 绘制Boss巨型防御盾牌（如果激活）
    if (boss.shieldActive) {
        ctx.save();
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 40;
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 5;
        
        // 绘制盾牌外圈
        ctx.beginPath();
        ctx.arc(boss.x + boss.width / 2, boss.y + boss.height / 2, boss.width * 0.6, 0, Math.PI * 2);
        ctx.stroke();
        
        // 绘制盾牌内圈
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.7)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(boss.x + boss.width / 2, boss.y + boss.height / 2, boss.width * 0.55, 0, Math.PI * 2);
        ctx.stroke();
        
        // 绘制盾牌能量波纹
        const shieldTime = Date.now() - boss.shieldTimer;
        const ripplePhase = (shieldTime / 1000) * Math.PI * 2;
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.5 + 0.5 * Math.sin(ripplePhase)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(boss.x + boss.width / 2, boss.y + boss.height / 2, boss.width * 0.58, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();
    }
    
    if (boss.type === 1) {
    
    // 1. 绘制Boss主体 - 参考图片设计
    // 主体机身 - 三角形为主的设计
    ctx.fillStyle = '#ff0000'; // 主色调红色
    
    // 主体机身
    ctx.beginPath();
    // 机头尖端
    ctx.moveTo(boss.x + boss.width / 2, boss.y);
    // 左侧机身
    ctx.lineTo(boss.x, boss.y + boss.height * 0.4);
    // 左机翼
    ctx.lineTo(boss.x + boss.width * 0.1, boss.y + boss.height * 0.6);
    // 左机翼末端
    ctx.lineTo(boss.x + boss.width * 0.2, boss.y + boss.height * 0.4);
    // 机身后部左侧
    ctx.lineTo(boss.x + boss.width * 0.3, boss.y + boss.height);
    // 机尾底部
    ctx.lineTo(boss.x + boss.width / 2, boss.y + boss.height * 0.8);
    // 机身后部右侧
    ctx.lineTo(boss.x + boss.width * 0.7, boss.y + boss.height);
    // 右机翼末端
    ctx.lineTo(boss.x + boss.width * 0.8, boss.y + boss.height * 0.4);
    // 右机翼
    ctx.lineTo(boss.x + boss.width * 0.9, boss.y + boss.height * 0.6);
    // 右侧机身
    ctx.lineTo(boss.x + boss.width, boss.y + boss.height * 0.4);
    // 回到机头尖端
    ctx.closePath();
    ctx.fill();
    
    // 2. 绘制Boss装甲板 - 增强层次感
    ctx.fillStyle = '#800000'; // 深红色装甲
    
    // 顶部装甲
    ctx.beginPath();
    ctx.moveTo(boss.x + boss.width * 0.3, boss.y + boss.height * 0.2);
    ctx.lineTo(boss.x + boss.width / 2, boss.y + boss.height * 0.05);
    ctx.lineTo(boss.x + boss.width * 0.7, boss.y + boss.height * 0.2);
    ctx.closePath();
    ctx.fill();
    
    // 两侧装甲
    ctx.fillRect(boss.x + boss.width * 0.2, boss.y + boss.height * 0.3, boss.width * 0.1, boss.height * 0.3);
    ctx.fillRect(boss.x + boss.width * 0.7, boss.y + boss.height * 0.3, boss.width * 0.1, boss.height * 0.3);
    
    // 机尾装甲
    ctx.fillRect(boss.x + boss.width * 0.4, boss.y + boss.height * 0.7, boss.width * 0.2, boss.height * 0.3);
    
    // 3. 绘制Boss驾驶舱 - 更精致的设计
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(boss.x + boss.width / 2, boss.y + 60, 30, 0, Math.PI * 2);
    ctx.fill();
    
    // 驾驶舱玻璃反光效果
    ctx.fillStyle = 'rgba(0, 255, 255, 0.4)';
    ctx.beginPath();
    ctx.arc(boss.x + boss.width / 2 + 12, boss.y + 55, 12, 0, Math.PI * 2);
    ctx.fill();
    
    // 驾驶舱边框
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(boss.x + boss.width / 2, boss.y + 60, 32, 0, Math.PI * 2);
    ctx.stroke();
    
    // 4. 绘制Boss武器系统 - 更复杂的武器形状
    
    // 主武器炮管（中间）
    ctx.fillStyle = '#ff4500';
    ctx.fillRect(boss.x + boss.width / 2 - 20, boss.y + boss.height - 40, 40, 50);
    
    // 炮管细节
    ctx.fillStyle = '#800000';
    ctx.fillRect(boss.x + boss.width / 2 - 15, boss.y + boss.height - 50, 30, 15);
    
    // 两侧导弹发射架
    ctx.fillStyle = '#808080';
    ctx.fillRect(boss.x + boss.width * 0.15, boss.y + boss.height - 20, 30, 40);
    ctx.fillRect(boss.x + boss.width * 0.55, boss.y + boss.height - 20, 30, 40);
    
    // 导弹发射架上的导弹
    ctx.fillStyle = '#ff6600';
    for (let i = 0; i < 2; i++) {
        // 左侧导弹
        ctx.fillRect(boss.x + boss.width * 0.17, boss.y + boss.height - 25 + i * 15, 25, 10);
        // 右侧导弹
        ctx.fillRect(boss.x + boss.width * 0.57, boss.y + boss.height - 25 + i * 15, 25, 10);
    }
    
    // 机翼上的激光炮
    ctx.fillStyle = '#00ffff';
    ctx.fillRect(boss.x + boss.width * 0.1, boss.y + boss.height * 0.55, 20, 10);
    ctx.fillRect(boss.x + boss.width * 0.7, boss.y + boss.height * 0.55, 20, 10);
    
    // 激光炮细节
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(boss.x + boss.width * 0.12, boss.y + boss.height * 0.56, 16, 8);
    ctx.fillRect(boss.x + boss.width * 0.72, boss.y + boss.height * 0.56, 16, 8);
    
    // 5. 绘制旋转的武器炮塔 - 动态效果
    const time = Date.now() * 0.005;
    for (let i = 0; i < 4; i++) {
        const angle = time + (i * Math.PI / 2);
        const radius = boss.width * 0.35;
        const turretX = boss.x + boss.width / 2 + Math.cos(angle) * radius;
        const turretY = boss.y + boss.height * 0.5 + Math.sin(angle) * radius;
        
        ctx.fillStyle = '#ff0000';
        ctx.beginPath();
        ctx.arc(turretX, turretY, 18, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(turretX, turretY, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // 炮塔炮管
        ctx.fillStyle = '#800000';
        ctx.save();
        ctx.translate(turretX, turretY);
        ctx.rotate(angle);
        ctx.fillRect(0, -5, 25, 10);
        ctx.restore();
    }
    
    // 6. 绘制闪烁的警告灯和装饰灯
    const blink = Math.sin(Date.now() * 0.01) > 0;
    if (blink) {
        ctx.fillStyle = '#ffff00';
        ctx.shadowColor = '#ffff00';
        ctx.shadowBlur = 20;
        
        // 顶部警告灯
        ctx.beginPath();
        ctx.arc(boss.x + boss.width / 2, boss.y + 20, 10, 0, Math.PI * 2);
        ctx.fill();
        
        // 两侧警告灯
        ctx.beginPath();
        ctx.arc(boss.x + boss.width * 0.25, boss.y + boss.height * 0.3, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(boss.x + boss.width * 0.75, boss.y + boss.height * 0.3, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // 机尾警告灯
        ctx.beginPath();
        ctx.arc(boss.x + boss.width / 2, boss.y + boss.height * 0.75, 8, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // 7. 绘制Boss引擎 - 增加推进器效果
    ctx.fillStyle = '#808080';
    // 左侧引擎
    ctx.fillRect(boss.x + boss.width * 0.35, boss.y + boss.height * 0.7, 20, 30);
    // 右侧引擎
    ctx.fillRect(boss.x + boss.width * 0.45, boss.y + boss.height * 0.7, 20, 30);
    
    // 引擎火焰效果
    ctx.fillStyle = '#ff8800';
    ctx.beginPath();
    ctx.moveTo(boss.x + boss.width * 0.35, boss.y + boss.height);
    ctx.lineTo(boss.x + boss.width * 0.3, boss.y + boss.height + 20);
    ctx.lineTo(boss.x + boss.width * 0.45, boss.y + boss.height);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(boss.x + boss.width * 0.45, boss.y + boss.height);
    ctx.lineTo(boss.x + boss.width * 0.5, boss.y + boss.height + 20);
    ctx.lineTo(boss.x + boss.width * 0.6, boss.y + boss.height);
    ctx.closePath();
    ctx.fill();
    
    // 8. 增强冒烟效果 - 更明显
    if (boss.smokeTimer % 5 === 0) {
        for (let i = 0; i < 3; i++) {
            const smokeX = boss.x + boss.width / 2 + (Math.random() - 0.5) * boss.width * 0.8;
            const smokeY = boss.y + boss.height + Math.random() * 20;
            const smokeSize = 15 + Math.random() * 25;
            
            ctx.fillStyle = `rgba(128, 128, 128, ${0.3 + Math.random() * 0.3})`;
            ctx.beginPath();
            ctx.arc(smokeX, smokeY, smokeSize, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // 9. 绘制Boss装饰条纹 - 增强细节
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    
    // 机身中央条纹
    ctx.beginPath();
    ctx.moveTo(boss.x + boss.width / 2, boss.y + 20);
    ctx.lineTo(boss.x + boss.width / 2, boss.y + boss.height - 20);
    ctx.stroke();
    
    // 机翼装饰条纹
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(boss.x + boss.width * 0.2, boss.y + boss.height * 0.4 + i * 15);
        ctx.lineTo(boss.x + boss.width * 0.1, boss.y + boss.height * 0.6 + i * 15);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(boss.x + boss.width * 0.8, boss.y + boss.height * 0.4 + i * 15);
        ctx.lineTo(boss.x + boss.width * 0.9, boss.y + boss.height * 0.6 + i * 15);
        ctx.stroke();
    }
    } else if (boss.type === 2) {
        // 第二种Boss（新的蓝色圆形扩散Boss）
        // 1. 绘制Boss主体 - 圆形设计
        ctx.fillStyle = '#0000ff'; // 主色调蓝色
        
        // 主体圆形
        ctx.beginPath();
        ctx.arc(boss.x + boss.width / 2, boss.y + boss.height / 2, boss.width / 2, 0, Math.PI * 2);
        ctx.fill();
        
        // 2. 绘制Boss旋转外环
        ctx.save();
        ctx.translate(boss.x + boss.width / 2, boss.y + boss.height / 2);
        ctx.rotate(boss.rotation);
        
        // 外环
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 5;
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 30;
        ctx.beginPath();
        ctx.arc(0, 0, boss.width / 2 + 10, 0, Math.PI * 2);
        ctx.stroke();
        
        // 旋转的武器臂
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const radius = boss.width / 2 + 20;
            const armX = Math.cos(angle) * radius;
            const armY = Math.sin(angle) * radius;
            
            // 武器臂
            ctx.fillStyle = '#00ffff';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(armX, armY);
            ctx.lineTo(armX + Math.cos(angle + Math.PI / 2) * 10, armY + Math.sin(angle + Math.PI / 2) * 10);
            ctx.lineTo(Math.cos(angle + Math.PI / 2) * 5, Math.sin(angle + Math.PI / 2) * 5);
            ctx.closePath();
            ctx.fill();
            
            // 武器臂末端的炮管
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(armX - 5, armY - 5, 10, 10);
        }
        
        ctx.restore();
        
        // 3. 绘制Boss核心
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(boss.x + boss.width / 2, boss.y + boss.height / 2, boss.width / 6, 0, Math.PI * 2);
        ctx.fill();
        
        // 核心发光效果
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(boss.x + boss.width / 2, boss.y + boss.height / 2, boss.width / 4, 0, Math.PI * 2);
        ctx.fill();
        
        // 4. 绘制Boss能量环
        const energyPhase = (Date.now() / 1000) * Math.PI * 2;
        for (let i = 0; i < 3; i++) {
            const ringRadius = boss.width / 2 + 30 + i * 15;
            const opacity = 0.3 + 0.3 * Math.sin(energyPhase + i);
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(boss.x + boss.width / 2, boss.y + boss.height / 2, ringRadius, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        // 5. 绘制闪烁的能量节点
        const blink = Math.sin(Date.now() * 0.008) > 0;
        if (blink) {
            ctx.fillStyle = '#00ffff';
            ctx.shadowColor = '#00ffff';
            ctx.shadowBlur = 20;
            
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                const nodeRadius = boss.width / 3;
                const nodeX = boss.x + boss.width / 2 + Math.cos(angle) * nodeRadius;
                const nodeY = boss.y + boss.height / 2 + Math.sin(angle) * nodeRadius;
                
                ctx.beginPath();
                ctx.arc(nodeX, nodeY, 8, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // 6. 绘制Boss推进器效果
        ctx.fillStyle = '#00ffff';
        ctx.beginPath();
        ctx.moveTo(boss.x + boss.width / 2 - 30, boss.y + boss.height);
        ctx.lineTo(boss.x + boss.width / 2, boss.y + boss.height + 40);
        ctx.lineTo(boss.x + boss.width / 2 + 30, boss.y + boss.height);
        ctx.closePath();
        ctx.fill();
        
        // 推进器核心
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(boss.x + boss.width / 2 - 15, boss.y + boss.height);
        ctx.lineTo(boss.x + boss.width / 2, boss.y + boss.height + 25);
        ctx.lineTo(boss.x + boss.width / 2 + 15, boss.y + boss.height);
        ctx.closePath();
        ctx.fill();
    }
    
    // 10. 绘制Boss生命值条，增强视觉效果
    const barWidth = boss.width;
    const barHeight = 20;
    const barX = boss.x;
    const barY = boss.y - barHeight - 20;
    
    // 血条背景发光效果
    ctx.shadowColor = '#000000';
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#000000';
    ctx.fillRect(barX - 5, barY - 5, barWidth + 10, barHeight + 10);
    
    // 血条背景
    ctx.fillStyle = '#333333';
    ctx.fillRect(barX, barY, barWidth, barHeight);
    
    // 血条填充
    const healthPercentage = boss.lives / boss.maxLives;
    ctx.fillStyle = boss.type === 1 ? '#ff0000' : '#0000ff';
    ctx.fillRect(barX, barY, barWidth * healthPercentage, barHeight);
    
    // 血条边框
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.strokeRect(barX, barY, barWidth, barHeight);
    
    // 血条文字
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`BOSS ${Math.ceil(boss.lives / boss.maxLives * 100)}%`, barX + barWidth / 2, barY + barHeight / 2);
    
    ctx.restore();
}

// 随机生成背景颜色
function getRandomBackgroundColor() {
    const colors = [
        '#000428', '#004e92', '#0f0f23', '#1a1a2e', '#16213e',
        '#001219', '#03045e', '#023047', '#219ebc', '#8ecae6',
        '#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7',
        '#22223b', '#4a4e69', '#9a8c98', '#c9ada7', '#f2e9e4'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 生成粒子
function generateParticle() {
    return {
        x: Math.random() * CANVAS_WIDTH,
        y: Math.random() * CANVAS_HEIGHT,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        size: Math.random() * 3 + 1,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        opacity: Math.random() * 0.8 + 0.2,
        glow: Math.random() * 5 + 2,
        life: Math.random() * 3000 + 2000,
        maxLife: Math.random() * 3000 + 2000
    };
}

// 更新粒子
function updateParticles() {
    // 生成新粒子，保持粒子数量
    while (particles.length < MAX_PARTICLES) {
        particles.push(generateParticle());
    }
    
    // 更新现有粒子
    for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // 更新位置
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // 更新生命周期
        particle.life--;
        
        // 更新透明度（根据生命周期）
        particle.opacity = particle.life / particle.maxLife;
        
        // 边界检测，循环粒子
        if (particle.x < 0) particle.x = CANVAS_WIDTH;
        if (particle.x > CANVAS_WIDTH) particle.x = 0;
        if (particle.y < 0) particle.y = CANVAS_HEIGHT;
        if (particle.y > CANVAS_HEIGHT) particle.y = 0;
        
        // 移除死亡粒子
        if (particle.life <= 0) {
            particles.splice(i, 1);
        }
    }
}

// 绘制粒子
function drawParticles() {
    particles.forEach(particle => {
        ctx.save();
        
        // 绘制粒子发光效果
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.glow;
        
        // 设置粒子颜色和透明度
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        
        // 绘制圆形粒子
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 绘制粒子核心亮点
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    });
}

// 绘制背景
function drawBackground() {
    // 使用随机背景图片
    if (backgroundLoaded && currentBackgroundImage) {
        // 绘制背景图片，覆盖整个画布
        ctx.drawImage(currentBackgroundImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    } else {
        // 加载过程中使用默认渐变背景
        const gradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
        gradient.addColorStop(0, backgroundColor1);
        gradient.addColorStop(1, backgroundColor2);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
    
    // 更新和绘制粒子（发光粒子效果）
    updateParticles();
    drawParticles();
}

// 绘制星云
function drawNebulae() {
    ctx.save();
    
    // 星云1
    const nebula1Gradient = ctx.createRadialGradient(200, 150, 0, 200, 150, 200);
    nebula1Gradient.addColorStop(0, 'rgba(100, 100, 255, 0.1)');
    nebula1Gradient.addColorStop(0.5, 'rgba(150, 100, 255, 0.05)');
    nebula1Gradient.addColorStop(1, 'rgba(200, 100, 255, 0)');
    ctx.fillStyle = nebula1Gradient;
    ctx.beginPath();
    ctx.arc(200, 150, 200, 0, Math.PI * 2);
    ctx.fill();
    
    // 星云2
    const nebula2Gradient = ctx.createRadialGradient(800, 550, 0, 800, 550, 250);
    nebula2Gradient.addColorStop(0, 'rgba(255, 100, 150, 0.1)');
    nebula2Gradient.addColorStop(0.5, 'rgba(255, 100, 200, 0.05)');
    nebula2Gradient.addColorStop(1, 'rgba(255, 100, 255, 0)');
    ctx.fillStyle = nebula2Gradient;
    ctx.beginPath();
    ctx.arc(800, 550, 250, 0, Math.PI * 2);
    ctx.fill();
    
    // 星云3
    const nebula3Gradient = ctx.createRadialGradient(500, 350, 0, 500, 350, 300);
    nebula3Gradient.addColorStop(0, 'rgba(100, 255, 200, 0.08)');
    nebula3Gradient.addColorStop(0.5, 'rgba(100, 255, 250, 0.03)');
    nebula3Gradient.addColorStop(1, 'rgba(100, 255, 255, 0)');
    ctx.fillStyle = nebula3Gradient;
    ctx.beginPath();
    ctx.arc(500, 350, 300, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
}

// 绘制行星
function drawPlanets() {
    ctx.save();
    
    // 行星1（蓝色）
    ctx.beginPath();
    ctx.arc(300, 200, 30, 0, Math.PI * 2);
    const planet1Gradient = ctx.createRadialGradient(290, 190, 0, 300, 200, 30);
    planet1Gradient.addColorStop(0, '#4a90e2');
    planet1Gradient.addColorStop(0.5, '#357abd');
    planet1Gradient.addColorStop(1, '#296292');
    ctx.fillStyle = planet1Gradient;
    ctx.fill();
    
    // 行星2（红色）
    ctx.beginPath();
    ctx.arc(700, 100, 40, 0, Math.PI * 2);
    const planet2Gradient = ctx.createRadialGradient(690, 90, 0, 700, 100, 40);
    planet2Gradient.addColorStop(0, '#e74c3c');
    planet2Gradient.addColorStop(0.5, '#c0392b');
    planet2Gradient.addColorStop(1, '#96281b');
    ctx.fillStyle = planet2Gradient;
    ctx.fill();
    
    // 行星3（绿色）
    ctx.beginPath();
    ctx.arc(900, 400, 25, 0, Math.PI * 2);
    const planet3Gradient = ctx.createRadialGradient(890, 390, 0, 900, 400, 25);
    planet3Gradient.addColorStop(0, '#2ecc71');
    planet3Gradient.addColorStop(0.5, '#27ae60');
    planet3Gradient.addColorStop(1, '#229954');
    ctx.fillStyle = planet3Gradient;
    ctx.fill();
    
    // 行星4（黄色）
    ctx.beginPath();
    ctx.arc(100, 500, 35, 0, Math.PI * 2);
    const planet4Gradient = ctx.createRadialGradient(90, 490, 0, 100, 500, 35);
    planet4Gradient.addColorStop(0, '#f1c40f');
    planet4Gradient.addColorStop(0.5, '#f39c12');
    planet4Gradient.addColorStop(1, '#e67e22');
    ctx.fillStyle = planet4Gradient;
    ctx.fill();
    
    ctx.restore();
}

// 绘制星星
function drawStars() {
    // 绘制不同大小的星星
    ctx.fillStyle = '#ffffff';
    
    // 小星星
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * CANVAS_WIDTH;
        const y = Math.random() * CANVAS_HEIGHT;
        const size = Math.random() * 1.5;
        ctx.fillRect(x, y, size, size);
    }
    
    // 中星星
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * CANVAS_WIDTH;
        const y = Math.random() * CANVAS_HEIGHT;
        const size = Math.random() * 2 + 1;
        ctx.fillRect(x, y, size, size);
    }
    
    // 大星星
    for (let i = 0; i < 20; i++) {
        const x = Math.random() * CANVAS_WIDTH;
        const y = Math.random() * CANVAS_HEIGHT;
        const size = Math.random() * 3 + 2;
        ctx.fillRect(x, y, size, size);
    }
    
    // 超亮星星
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * CANVAS_WIDTH;
        const y = Math.random() * CANVAS_HEIGHT;
        const size = Math.random() * 4 + 3;
        ctx.save();
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.fillRect(x, y, size, size);
        ctx.restore();
    }
}

// 绘制游戏UI
function drawUI() {
    // 这里可以添加UI绘制逻辑
}

// 游戏主循环
function gameLoop() {
    if (!gameRunning) return;
    
    // 清除画布
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // 检查是否需要改变背景图片（每30秒）
    const currentTime = Date.now();
    if (currentTime - lastColorChange > COLOR_CHANGE_INTERVAL) {
        // 随机选择一张新的背景图片
        selectRandomBackgroundImage();
        lastColorChange = currentTime;
    }
    
    // 绘制背景
    drawBackground();
    
    // 更新玩家
    updatePlayer();
    
    // 生成敌人
    if (Math.random() < 0.1) {
        spawnEnemy();
    }
    
    // 玩家自动射击（提高射击频率）
    if (Math.random() < 0.3) {
        shootBullet();
    }
    
    // 更新敌人
    updateEnemies();
    
    // 更新Boss
    updateBoss();
    
    // 更新子弹
    updateBullets();
    updateEnemyBullets();
    updateBossMissiles();
    updateBossCircleMissiles();
    updateBossRandomMissiles();
    updateBossLasers();
    updateBossHomingMissiles();
    updateBoss2SpreadBullets();
    
    // 更新核弹爆炸效果
    updateNuke();
    
    // 检查碰撞
    checkCollisions();
    
    // 绘制玩家
    drawPlayer();
    
    // 绘制敌人
    drawEnemies();
    
    // 绘制Boss
    drawBoss();
    
    // 绘制子弹
    drawBullets();
    drawEnemyBullets();
    drawBossMissiles();
    drawBossCircleMissiles();
    drawBossRandomMissiles();
    drawBossLasers();
    drawBossHomingMissiles();
    drawBoss2SpreadBullets();
    
    // 绘制核弹爆炸效果
    drawNuke();
    
    // 绘制UI
    drawUI();
    
    // 更新游戏时间
    updateGameTime();
    
    // 更新关卡信息UI
    updateLevelUI();
    
    // 检查关卡是否完成
    checkLevelComplete();
    
    // 请求下一帧
    animationId = requestAnimationFrame(gameLoop);
}

// 更新游戏时间
function updateGameTime() {
    if (!gameRunning) return;
    
    const elapsedSeconds = Math.floor((Date.now() - gameStartTime) / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('gameTime').textContent = formattedTime;
    
    // 检查是否需要生成Boss
    const currentTime = Date.now();
    const timeSinceGameStart = currentTime - gameStartTime;
    const timeSinceLastBoss = currentTime - lastBossDefeatedTime;
    const timeUntilBossSpawn = Math.max(0, BOSS_SPAWN_INTERVAL - timeSinceGameStart);
    
    // BOSS出现前5秒显示预警和倒计时
    const bossWarning = document.getElementById('bossWarning');
    if (!boss && timeUntilBossSpawn <= 5000 && timeUntilBossSpawn > 0) {
        const countdown = Math.ceil(timeUntilBossSpawn / 1000);
        bossWarning.textContent = `BOSS即将出现！${countdown}`;
        bossWarning.style.display = 'block';
    } else if (!boss && timeUntilBossSpawn <= 0) {
        // 生成Boss
        spawnBoss();
        bossWarning.style.display = 'none';
        bossWarning.textContent = '';
    } else {
        bossWarning.style.display = 'none';
        bossWarning.textContent = '';
    }
    
    // 检查是否需要生成Boss（已击败BOSS后60秒重新生成）
    if (!boss && timeSinceLastBoss > BOSS_SPAWN_INTERVAL && timeSinceGameStart > BOSS_SPAWN_INTERVAL) {
        spawnBoss();
    }
}



// 结束游戏
function endGame() {
    gameRunning = false;
    
    // 取消动画帧
    cancelAnimationFrame(animationId);
    
    // 显示游戏结束屏幕
    document.getElementById('finalScore').textContent = score;
    
    // 根据分数显示不同的游戏结束信息
    const gameOverTitle = document.querySelector('.game-over h2');
    if (score >= 100) {
        gameOverTitle.textContent = '完美通关！';
    } else {
        gameOverTitle.textContent = '游戏结束';
    }
    
    document.getElementById('gameOver').style.display = 'block';
    
    // 保存游戏记录
    saveGameHistory();
}

// 重新开始游戏
function restartGame() {
    // 显示开始屏幕，让玩家可以选择飞机类型
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

// 显示历史记录
function showHistory() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('galleryScreen').style.display = 'none';
    document.getElementById('historyScreen').style.display = 'block';
    
    // 加载历史记录
    loadGameHistory();
}

// 隐藏历史记录
function hideHistory() {
    document.getElementById('historyScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

// 显示图鉴
function showGallery() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('historyScreen').style.display = 'none';
    document.getElementById('galleryScreen').style.display = 'block';
    
    // 加载图鉴
    loadGallery();
}

// 隐藏图鉴
function hideGallery() {
    document.getElementById('galleryScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

// 清空历史记录
function clearHistory() {
    localStorage.removeItem('gameHistory');
    loadGameHistory();
}

// 保存游戏记录
function saveGameHistory() {
    const history = JSON.parse(localStorage.getItem('gameHistory') || '[]');
    const record = {
        score: score,
        time: Math.floor((Date.now() - gameStartTime) / 1000),
        plane: planes[selectedPlane].name,
        enemies: enemiesKilled,
        date: new Date().toISOString()
    };
    
    history.push(record);
    history.sort((a, b) => b.score - a.score);
    history.splice(10); // 只保留前10条记录
    
    localStorage.setItem('gameHistory', JSON.stringify(history));
}

// 加载游戏记录
function loadGameHistory() {
    const history = JSON.parse(localStorage.getItem('gameHistory') || '[]');
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    
    history.forEach((record, index) => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <div class="history-col rank">${index + 1}</div>
            <div class="history-col score">${record.score}</div>
            <div class="history-col time">${formatTime(record.time)}</div>
            <div class="history-col plane">${record.plane}</div>
            <div class="history-col enemies">${record.enemies}</div>
            <div class="history-col date">${new Date(record.date).toLocaleString()}</div>
        `;
        historyList.appendChild(item);
    });
}

// 加载图鉴
function loadGallery() {
    const galleryList = document.getElementById('galleryList');
    galleryList.innerHTML = '';
    
    // 这里可以添加图鉴数据
    const enemyTypes = [
        {
            name: "普通敌机",
            description: "最常见的敌机，速度较慢，攻击力弱",
            speed: "2-4",
            health: "10-500",
            attack: "10"
        },
        {
            name: "Boss敌机",
            description: "强大的Boss敌机，拥有多种攻击方式",
            speed: "1",
            health: "500",
            attack: "多种攻击方式"
        }
    ];
    
    enemyTypes.forEach(enemy => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <div class="enemy-name">${enemy.name}</div>
            <canvas class="enemy-canvas" width="100" height="100"></canvas>
            <div class="enemy-stats">
                <div><span class="label">描述:</span> <span class="value">${enemy.description}</span></div>
                <div><span class="label">速度:</span> <span class="value">${enemy.speed}</span></div>
                <div><span class="label">生命值:</span> <span class="value">${enemy.health}</span></div>
                <div><span class="label">攻击力:</span> <span class="value">${enemy.attack}</span></div>
            </div>
        `;
        galleryList.appendChild(item);
        
        // 绘制飞机图形
        const canvas = item.querySelector('.enemy-canvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            
            // 清空画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 设置画布背景
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // 绘制敌机图形
            if (enemy.name === "普通敌机") {
                // 绘制普通敌机
                ctx.save();
                ctx.translate(canvas.width / 2, canvas.height / 2);
                
                // 敌机主体
                ctx.fillStyle = '#ff0000';
                ctx.beginPath();
                ctx.moveTo(0, -20);
                ctx.lineTo(-15, 15);
                ctx.lineTo(15, 15);
                ctx.closePath();
                ctx.fill();
                
                // 敌机机翼
                ctx.fillStyle = '#ff4500';
                ctx.fillRect(-25, 0, 50, 5);
                
                // 敌机驾驶舱
                ctx.fillStyle = '#00ffff';
                ctx.beginPath();
                ctx.arc(0, -5, 5, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.restore();
            } else if (enemy.name === "Boss敌机") {
                // 绘制Boss敌机
                ctx.save();
                ctx.translate(canvas.width / 2, canvas.height / 2);
                
                // Boss主体
                ctx.fillStyle = '#ff0000';
                ctx.beginPath();
                ctx.moveTo(0, -30);
                ctx.lineTo(-30, 20);
                ctx.lineTo(30, 20);
                ctx.closePath();
                ctx.fill();
                
                // Boss机翼
                ctx.fillStyle = '#ff4500';
                ctx.fillRect(-40, 0, 80, 8);
                
                // Boss驾驶舱
                ctx.fillStyle = '#00ffff';
                ctx.beginPath();
                ctx.arc(0, -10, 10, 0, Math.PI * 2);
                ctx.fill();
                
                // Boss武器
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(-35, 15, 10, 10);
                ctx.fillRect(25, 15, 10, 10);
                
                ctx.restore();
            }
        }
    });
}

// 格式化时间
function formatTime(seconds) {
    return `${seconds}秒`;
}

// 初始化飞机选择
function initPlaneSelection() {
    const planesContainer = document.getElementById('planes');
    planesContainer.innerHTML = '';
    
    planes.forEach((plane, index) => {
        const planeOption = document.createElement('div');
        planeOption.className = 'plane-option';
        planeOption.innerHTML = `
            <h3>${plane.name}</h3>
            <div class="stats">
                <div>速度: ${plane.speed}</div>
                <div>生命值: ${plane.maxLives}</div>
                <div>攻击力: ${plane.attackPower}</div>
                <div>护盾: ${plane.shield}</div>
            </div>
        `;
        planeOption.addEventListener('click', () => {
            selectedPlane = index;
            document.querySelectorAll('.plane-option').forEach(option => {
                option.classList.remove('selected');
            });
            planeOption.classList.add('selected');
        });
        
        if (index === selectedPlane) {
            planeOption.classList.add('selected');
        }
        
        planesContainer.appendChild(planeOption);
    });
}

// 页面加载完成后初始化
window.addEventListener('load', () => {
    initGame();
    
    // 显示开始屏幕
    document.getElementById('startScreen').style.display = 'block';
});