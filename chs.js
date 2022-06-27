/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Board": "游戏板",
    "Buy": "购买",
    "Buy amount:": "购买数量：",
    "Cells": "单元格",
    "for": "",
    "Help": "帮助",
    "Hi! Welcome to progressive mine sweeper.": "你好！ 欢迎来到渐进式扫雷游戏。",
    "Hint": "提示",
    "MAX": "最大",
    "Minefield": "雷区",
    "Mines": "地雷",
    "next >": "下一个 >",
    "Progress": "进度",
    "Progressive Mine Sweep": "渐进式扫雷",
    "Reset": "重置",
    "Revealing": "揭示",
    "skip >>>": "跳过 >>>",
    "Tap mode:": "点按模式：",
    "The first part of this tutorial will walk you through how to play minesweeper. At any point in tutorial you can move to the next or previous pages. Feel free to skip to the next chapter if you already know how to play!": "本教程的第一部分将引导您了解如何玩扫雷。 在教程的任何时候，您都可以移至下一页或上一页。 如果您已经知道如何玩，请随意跳到下一章！",
    "the Game": "游戏",
    "This is my special take on the classic minesweeper game with progressive / incremental aspects built into it.": "这是我对经典扫雷游戏的特别看法，其中内置了渐进/增量方面。",
    "Win": "赢",
    "Wins": "获胜",
    "The game board consists of a playing field shaped like a grid of squares. There are a certain number of mines buried under this field. The objective of each game is to successfully clear all the empty cells, and flag the cells containing mines without triggering (exploding) them.": "游戏板由一个形状像方格的运动场组成。 这块地底下埋有一定数量的地雷。 每个游戏的目标是成功清除所有空单元格，并标记包含地雷的单元格而不触发（爆炸）它们。",
    "Clicking or tapping on an empty square will reveal its contents. The contents of a square is either clear or a mine. When revealing a clear square, you are given a clue to the number of mines surrounding it — in all directions, including diagonals. Revealing a mine, however, would trigger it and explode!": "单击或点击空白方块将显示其内容。 方块的内容要么是透明的，要么是地雷。 当显示一个清晰的正方形时，你会得到一个关于它周围的地雷数量的线索——在所有方向上，包括对角线。 然而，暴露地雷会触发它并爆炸！",
    "< back": "<返回",
    "Be careful with this one. Right (or meta) click on the square to flag it, or simply toggle the tapping mode to flag squares instead of revealing:": "小心这个。右键（或元）单击方块以标记它，或者简单地将点击模式切换为标记方块而不是显示：",
    "Flagging squares": "标记方块",
    "However, we know from the other 2 squares we just revealed that there are no mines in the 2 squares immediately surrounding those places.": "但是，我们从刚刚透露的其他 2 个方格中得知，紧邻这些地方的 2 个方格中没有地雷。",
    "In either case, you will be presented with an option to reset the board and receive a brand new game to play. We can upgrade this box and its functions later on.": "在任何一种情况下，您都会看到一个选项来重置棋盘并获得一个全新的游戏来玩。我们可以稍后升级这个盒子和它的功能。",
    "No sweat if you accidentally set off the mine in the previous step.": "如果您在上一步中不小心引爆了地雷，也不会出汗。",
    "Once you reveal all the squares and flag all the mines correctly, you win the playing field, and the game announces it to you.": "一旦你展示了所有的方块并正确地标记了所有的地雷，你就赢得了比赛场地，游戏会向你宣布。",
    "Reasoning about squares": "关于正方形的推理",
    "Revealing a square": "显示一个正方形",
    "Revealing squares": "显示方块",
    "Sample 3x3 board:": "样品 3x3 板：",
    "Similarly, if you set off a mine, you lose the playing field and need to reset the board.": "同样，如果您引爆了地雷，您将失去竞争环境并且需要重置棋盘。",
    "The revealed contents of  ": "揭露的内容",
    "This brings us to the final square in the corner which is obviously a mine! You won't want to set this off!": "这将我们带到角落的最后一个广场，这显然是一个地雷！你不会想要关闭它！",
    "Try clicking (or tapping) the hinted square below:": "尝试单击（或点击）下面的提示方块：",
    "Try clicking (or tapping) the hinted squares below:": "尝试单击（或点击）下面的提示方块：",
    "Uh oh! The  ": "哦哦！这",
    "What is minesweeper": "什么是扫雷",
    "Winning a game": "赢得一场比赛",
    "Cell": "单元格",
    "Game over!": "游戏结束！",
    "Rave ruined": "狂欢结束了",
    "You may reset the board to receive a brand new game to play:": "您可以重置游戏板以接收一个全新的游戏来玩：",
    "lost": "输了",
    "Flagging": "标记",
    "Scores are awarded to the player based on how many cells have been successfully marked and how many playing fields have been cleared. These rewards can be used to purchase upgrades to the game to make it more engaging or challenging.": "根据成功标记的单元格数和已清除的比赛场地数，将分数授予玩家。 这些奖励可用于购买游戏升级，使其更具吸引力或更具挑战性。",
    "#fail": "#失败",
    "Scoring": "计分",
    "Shows how many cells you have cleared without exploding": "显示您在没有爆炸的情况下清除了多少单元格",
    "Shows how many fields you have successfully cleared": "显示您已成功清除的字段数",
    "Un-de-mining the playing field": "清除运动场的地雷",
    "Upgrades": "升级",
    "Wasting time for no reason": "无缘无故浪费时间",
    "Active Time": "活动时间",
    "Auto": "自动",
    "Automation": "自动化",
    "Board Info": "游戏板信息",
    "CAUTION: it might trigger a mine if they have not been properly flagged!": "注意：如果没有正确标记，可能会触发地雷！",
    "Cell Info": "单元格信息",
    "Clicks": "点击次数",
    "Col": "列",
    "Cols": "列",
    "Current": "当前",
    "Decrease": "减少",
    "Difficulty": "困难",
    "Double": "双倍",
    "Expand": "扩张",
    "Explosion": "爆炸",
    "Flags": "标记",
    "Game Difficulty:": "游戏难度：",
    "Game Height:": "游戏高度：",
    "Game Info": "游戏信息",
    "Game Upgrades": "游戏升级",
    "Game Width:": "游戏宽度：",
    "Head over to this tab to check out the different upgrade options available.": "前往此选项卡查看可用的不同升级选项。",
    "Hidden": "隐",
    "Hint Quality": "提示质量",
    "Hint Quality:": "提示质量：",
    "Improve": "提升",
    "Increase": "增加",
    "Left": "左",
    "Longest Streak": "最长连胜",
    "Lose": "输了",
    "Manual": "手动",
    "Max": "最大",
    "Nothing happens": "什么都没发生",
    "Number of hints on purchase:": "购买提示数：",
    "Offline Time": "离线时间",
    "on double-tap": "双击",
    "Other scores": "其他分数",
    "Quality Upgrades": "质量升级",
    "Remaining Time": "剩余时间",
    "Reset Speed": "重置速度",
    "Reset Speed:": "重置速度：",
    "Resets": "重置",
    "Reveal Neighbors": "揭示邻居",
    "Reveals random (hidden) neighbors of the square being tapped on.": "显示被点击的正方形的随机（隐藏）邻居。",
    "Right": "右",
    "Row": "行",
    "Rows": "行",
    "Score Multiplier:": "分数乘数：",
    "Side note: this is what makes the game progressive — sometimes also called incremenetal.": "旁注：这就是使游戏渐进的原因——有时也称为渐进式。",
    "Speed up": "加速",
    "Streak": "条纹",
    "The UPGRADES tab allows you to upgrade various aspects of the game to make it more interesting.": "升级选项卡允许您升级游戏的各个方面，使其更有趣。",
    "There are many other scores and resources tracked in the game that you can access via the STATISTICS tab above.": "您可以通过上面的统计标签访问游戏中跟踪的许多其他分数和资源。",
    "Time Info": "时间信息",
    "Total": "总计",
    "Total Time": "总时间",
    "Unflags": "取消标记",
    "Unlock": "解锁",
    "Useless": "无用",
    "Head over to this tab to check out the different automation options available.": "前往此选项卡以查看可用的不同自动化选项。",
    "PRO TIP: There is a lot more to the game than these upgrades. Use them for a while and a whole lot of new features may open up as you go!": "专业提示：除了这些升级之外，游戏还有更多内容。 使用它们一段时间，随着你的使用，许多新功能可能会打开！",
    "The AUTOMATION tab provides new game mechanics to automatically perform some repetitive actions in the game, such as reseting the board or revealing neighboring squares!": "自动化 选项卡提供了新的游戏机制来自动执行游戏中的一些重复操作，例如重置棋盘或显示相邻的方格！",
    "The revealed contents of  ": "揭露的内容",
    "There are many other upgrades in this tab that improve the quality and various aspects of the game. Such as getting hints or revealing neighboring cells on double-tap!": "此选项卡中还有许多其他升级可以提高游戏的质量和各个方面。 例如在双击时获得提示或显示相邻的单元格！",
    "Try them all and make the game more enjoyable.": "尝试所有这些，让游戏更有趣。",
    "Uh oh! The  ": "哦哦！ 这",
    "You can increase the playing field size and difficulty of the game in Upgrades section. The cost of these upgrades increases over time, but you will eventually gain enough scores to upgrade them all!": "您可以在升级部分增加游戏的场地大小和难度。 这些升级的成本会随着时间的推移而增加，但您最终将获得足够的分数来升级它们！",
    "Advanced Settings": "高级设置",
    "Change how often the game is saved in the background. More frequent saving leads to faster backups, but increases CPU and I/O usage": "更改游戏在后台保存的频率。 更频繁的保存会导致更快的备份，但会增加 CPU 和 I/O 使用率",
    "Chocolate": "巧克力",
    "Current theme is:": "当前主题是：",
    "Cute": "可爱",
    "Dark Mode": "黑暗模式",
    "Game Data": "游戏数据",
    "Game Reset": "游戏重置",
    "Game was last saved": "游戏上次保存",
    "Gold": "金色",
    "I understand what this means and still want to reset the game": "我明白这意味着什么，但仍想重置游戏",
    "If you are having performance issues, increase the time between updates. Faster updating frequncies lead to better game experience but might use a lot of CPU.": "如果您遇到性能问题，请增加更新之间的时间。 更快的更新频率会带来更好的游戏体验，但可能会占用大量 CPU。",
    "Jumbo Dark": "巨型黑暗",
    "Jumbo Light": "巨型灯",
    "Light Mode": "浅色模式",
    "ms": "毫秒",
    "Murder": "谋杀",
    "Ocean": "海洋",
    "Rendering frequency:": "渲染频率：",
    "Saving frequency:": "保存频率：",
    "The revealed contents of  ": "揭露的内容",
    "Theme Options": "主题选项",
    "This session started": "本次会议开始",
    "Tomato": "番茄",
    "Uh oh! The  ": "哦哦！ 这",
    "Updating frequency:": "更新频率：",
    "WARNING: this will completely reset your game and delete all saved progress and setting. Only use this if you want to restart the game from beginning, or if something in the settings is so messed up that the game is now unplayable.": "警告：这将完全重置您的游戏并删除所有已保存的进度和设置。 仅当您想从头开始重新启动游戏，或者设置中的某些内容如此混乱以至于游戏现在无法玩时，才使用此选项。",
    "You started this game": "你开始玩这个游戏",
    "now": "现在",
    "Reconfoobling energymotron": "重组能量马达",
    "Proving P=NP": "证明 P=NP",
    "Adjusting the dilithium crystal converter assembly": "调整二锂晶体转换器组件",
    "What a tragedy...": "多悲剧啊……",
    "#winning": "#胜利",
    "Swapping time and space": "交换时间和空间",
    "Un-defusing the mines": "取消拆除地雷",
    "Game in progress...": "游戏进行中...",
    "Game lost!": "你输了！",
    "Twiddling thumbs": "摆弄拇指",
    "Contemplating modern warfare": "对现代战争的思考",
    "Initializing the initializer": "初始化初始化器",
    "Rupturing the subspace barrier": "破坏子空间屏障",
    "Calling technical support": "致电技术支持",
    "Bulldozing the ground": "铲平地面",
    "Reversing the shield polarity": "反转屏蔽极性",
    "You lost this one :(": "你输掉了这局 :(",
    "Calculating total land area": "计算总土地面积",
    "TOTAL CATASTROPHIC LOSS OF EVERYTHING!!!!": "一切的灾难性损失！！！！",
    "Pushing pixels": "推送像素",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "in the middle means there's one mine hidden under one of the remaining squares around the centerpiece! Better be careful with this one...": "在中间意味着有一个地雷隐藏在围绕中心的剩余方块之一下！最好小心这个...",
    "tells us there are no mines in the squares surrounding it, so it's safe to go ahead and reveal the 3 surrounding squares as well!": "  告诉我们在它周围的方格中没有地雷，所以继续并显示周围的 3 个方格是安全的！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^([\d\.]+)\%$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) seconds ago$/, '$1秒前'],
    [/^([\d\.]+) second ago$/, '$1秒前'],
    [/^([\d\.]+) minute$/, '$1 分钟'],
    [/^([\d\.]+) minutes$/, '$1 分钟'],
    [/^([\d\.]+) minutes, ([\d\.]+) seconds ago$/, '$1 分钟，$2秒前'],
    [/^([\d\.]+) hour, ([\d\.]+) minutes, ([\d\.]+) seconds ago$/, '$1 小时，$2分钟, $3秒前'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);