// Cambridge Power Up 0-6 内置词库（嵌入式，无需导入）
// 词库来源：F:\English teaching material 教材\English Cambridge SSS\Cambridge Power Up SSS
// PU0/PU1/PU2：从教材词汇表（有中文意思）.pdf 提取
// PU3-6：闪卡词汇（标注 * 为补充词）

(function() {
  const BOOKS = [
        {
      "id": "pu0",
      "name": "Power Up 0 预备级",
      "level": 0,
      "ceq": "Pre-Starter",
      "units": 10,
      "words": [
        {
          "word": "bus",
          "meaning": "公共汽车"
        },
        {
          "word": "book",
          "meaning": "书"
        },
        {
          "word": "bird",
          "meaning": "鸟"
        },
        {
          "word": "cat",
          "meaning": "猫"
        },
        {
          "word": "boat",
          "meaning": "船"
        },
        {
          "word": "red",
          "meaning": "红色"
        },
        {
          "word": "yellow",
          "meaning": "黄色"
        },
        {
          "word": "green",
          "meaning": "绿色"
        },
        {
          "word": "blue",
          "meaning": "蓝色"
        },
        {
          "word": "orange",
          "meaning": "橙色"
        },
        {
          "word": "purple",
          "meaning": "紫色"
        },
        {
          "word": "brown",
          "meaning": "棕色"
        },
        {
          "word": "white",
          "meaning": "白色"
        },
        {
          "word": "black",
          "meaning": "黑色"
        },
        {
          "word": "pink",
          "meaning": "粉色"
        },
        {
          "word": "grey",
          "meaning": "灰色"
        },
        {
          "word": "one",
          "meaning": "一"
        },
        {
          "word": "two",
          "meaning": "二"
        },
        {
          "word": "three",
          "meaning": "三"
        },
        {
          "word": "four",
          "meaning": "四"
        },
        {
          "word": "five",
          "meaning": "五"
        },
        {
          "word": "six",
          "meaning": "六"
        },
        {
          "word": "family",
          "meaning": "家庭"
        },
        {
          "word": "boy",
          "meaning": "男孩"
        },
        {
          "word": "girl",
          "meaning": "女孩"
        },
        {
          "word": "man",
          "meaning": "男人"
        },
        {
          "word": "woman",
          "meaning": "女人"
        },
        {
          "word": "mum",
          "meaning": "妈妈"
        },
        {
          "word": "dad",
          "meaning": "爸爸"
        },
        {
          "word": "brother",
          "meaning": "兄弟"
        },
        {
          "word": "sister",
          "meaning": "姐妹"
        },
        {
          "word": "pet",
          "meaning": "宠物"
        },
        {
          "word": "bookcase",
          "meaning": "书架"
        },
        {
          "word": "chair",
          "meaning": "椅子"
        },
        {
          "word": "board",
          "meaning": "黑板"
        },
        {
          "word": "pencil",
          "meaning": "铅笔"
        },
        {
          "word": "playground",
          "meaning": "操场"
        },
        {
          "word": "bag",
          "meaning": "书包"
        },
        {
          "word": "classroom",
          "meaning": "教室"
        },
        {
          "word": "cupboard",
          "meaning": "橱柜"
        },
        {
          "word": "teacher",
          "meaning": "老师"
        },
        {
          "word": "table",
          "meaning": "桌子"
        },
        {
          "word": "egg",
          "meaning": "鸡蛋"
        },
        {
          "word": "grapes",
          "meaning": "葡萄"
        },
        {
          "word": "orange",
          "meaning": "橙子"
        },
        {
          "word": "banana",
          "meaning": "香蕉"
        },
        {
          "word": "watermelon",
          "meaning": "西瓜"
        },
        {
          "word": "hamburger",
          "meaning": "汉堡包"
        },
        {
          "word": "beans",
          "meaning": "豆子"
        },
        {
          "word": "carrot",
          "meaning": "胡萝卜"
        },
        {
          "word": "apple",
          "meaning": "苹果"
        },
        {
          "word": "rice",
          "meaning": "米饭"
        },
        {
          "word": "burger",
          "meaning": "汉堡"
        },
        {
          "word": "living room",
          "meaning": "客厅"
        },
        {
          "word": "kitchen",
          "meaning": "厨房"
        },
        {
          "word": "bathroom",
          "meaning": "浴室"
        },
        {
          "word": "computer",
          "meaning": "电脑"
        },
        {
          "word": "garden",
          "meaning": "花园"
        },
        {
          "word": "clock",
          "meaning": "钟"
        },
        {
          "word": "lamp",
          "meaning": "台灯"
        },
        {
          "word": "mirror",
          "meaning": "镜子"
        },
        {
          "word": "bed",
          "meaning": "床"
        },
        {
          "word": "bedroom",
          "meaning": "卧室"
        },
        {
          "word": "eye",
          "meaning": "眼睛"
        },
        {
          "word": "ear",
          "meaning": "耳朵"
        },
        {
          "word": "leg",
          "meaning": "腿"
        },
        {
          "word": "small",
          "meaning": "小的"
        },
        {
          "word": "big",
          "meaning": "大的"
        },
        {
          "word": "beautiful",
          "meaning": "美丽的"
        },
        {
          "word": "long",
          "meaning": "长的"
        },
        {
          "word": "short",
          "meaning": "短的"
        },
        {
          "word": "hair",
          "meaning": "头发"
        },
        {
          "word": "mouth",
          "meaning": "嘴巴"
        },
        {
          "word": "nose",
          "meaning": "鼻子"
        },
        {
          "word": "face",
          "meaning": "脸"
        },
        {
          "word": "board game",
          "meaning": "棋盘游戏"
        },
        {
          "word": "balloon",
          "meaning": "气球"
        },
        {
          "word": "bike",
          "meaning": "自行车"
        },
        {
          "word": "train",
          "meaning": "火车"
        },
        {
          "word": "doll",
          "meaning": "洋娃娃"
        },
        {
          "word": "teddy",
          "meaning": "泰迪熊"
        },
        {
          "word": "plane",
          "meaning": "飞机"
        },
        {
          "word": "car",
          "meaning": "汽车"
        },
        {
          "word": "ball",
          "meaning": "球"
        },
        {
          "word": "camera",
          "meaning": "照相机"
        },
        {
          "word": "play basketball",
          "meaning": "打篮球"
        },
        {
          "word": "play the piano",
          "meaning": "弹钢琴"
        },
        {
          "word": "catch a ball",
          "meaning": "接球"
        },
        {
          "word": "play football",
          "meaning": "踢足球"
        },
        {
          "word": "climb",
          "meaning": "爬"
        },
        {
          "word": "run",
          "meaning": "跑"
        },
        {
          "word": "swim",
          "meaning": "游泳"
        },
        {
          "word": "jump",
          "meaning": "跳"
        },
        {
          "word": "walk",
          "meaning": "走"
        },
        {
          "word": "fly a plane",
          "meaning": "开飞机"
        },
        {
          "word": "sleep",
          "meaning": "睡觉"
        },
        {
          "word": "take a photo",
          "meaning": "拍照"
        },
        {
          "word": "clean",
          "meaning": "打扫"
        },
        {
          "word": "drink",
          "meaning": "喝"
        },
        {
          "word": "tree",
          "meaning": "树"
        },
        {
          "word": "sun",
          "meaning": "太阳"
        },
        {
          "word": "sea",
          "meaning": "海"
        },
        {
          "word": "flower",
          "meaning": "花"
        },
        {
          "word": "beach",
          "meaning": "海滩"
        },
        {
          "word": "eat",
          "meaning": "吃"
        },
        {
          "word": "jacket",
          "meaning": "夹克"
        },
        {
          "word": "jeans",
          "meaning": "牛仔裤"
        },
        {
          "word": "shoes",
          "meaning": "鞋子"
        },
        {
          "word": "socks",
          "meaning": "袜子"
        },
        {
          "word": "sheep",
          "meaning": "绵羊"
        },
        {
          "word": "dog",
          "meaning": "狗"
        },
        {
          "word": "duck",
          "meaning": "鸭子"
        },
        {
          "word": "goat",
          "meaning": "山羊"
        },
        {
          "word": "horse",
          "meaning": "马"
        },
        {
          "word": "T-shirt",
          "meaning": "T恤衫"
        }
      ],
      "sentences": [
        {
          "en": "Hello.",
          "cn": "你好 2.I’m Jenny=My name is Jenny. 我叫 Jenny."
        },
        {
          "en": "What’s",
          "cn": "your name? 你的名字是什么？ 4.My name is Anna. 我叫 Anna。"
        },
        {
          "en": "Who's",
          "cn": "the girl ? 这个女孩是谁？"
        },
        {
          "en": "family",
          "cn": "tree 家庭树 2.a happy family 一个快乐的家庭"
        },
        {
          "en": "Who’s",
          "cn": "that woman? 那个女人是谁？"
        },
        {
          "en": "She’s",
          "cn": "your teacher. 她是你的老师。"
        },
        {
          "en": "They’re",
          "cn": "pencils. 它们是铅笔。"
        },
        {
          "en": "Where’s",
          "cn": "my ...? 我的...去哪里了？ 4. Is it under the book? 它在书下面吗？"
        },
        {
          "en": "green",
          "cn": "grapes 绿葡萄 4.red grapes 红葡萄"
        },
        {
          "en": "Where",
          "cn": "are they? 它们在哪？"
        },
        {
          "en": "They’re",
          "cn": "your favourite. 它们是你最爱的。"
        },
        {
          "en": "They’re",
          "cn": "under the green apples 它们在绿苹果下面。"
        },
        {
          "en": "--How",
          "cn": "many eggs are there? 有多少个鸡蛋？--There are three. 有 3 个。"
        },
        {
          "en": "--How",
          "cn": "many grapes are there? 有多少个葡萄？--There are a lot. 有许多。"
        },
        {
          "en": "--How",
          "cn": "many fish are there? 有多少条鱼？ --There are three fish. 有 3 条鱼。"
        },
        {
          "en": "--How",
          "cn": "many boys and girls are there? 有多少男孩和女孩？-- There are six. 有 6 个。"
        },
        {
          "en": "Apples",
          "cn": "come from plants. 苹果来自植物。 4.Milk come from cows. 牛奶来自奶牛。"
        },
        {
          "en": "Carrots",
          "cn": "are plants, too. 胡萝卜也是植物。 5.They come from plants. 它们来自植物。"
        },
        {
          "en": "We’ve",
          "cn": "got some rice. 我们有一些米。(we've got=we have got)"
        },
        {
          "en": "There",
          "cn": "are some green beans in the garden. 花园里有一些豆角。"
        },
        {
          "en": "We’ve",
          "cn": "got a lot of food. 我们有了许多食物。"
        },
        {
          "en": "Who’s",
          "cn": "this? 这是谁？ 2.He’s my dad. 他是我爸爸。"
        },
        {
          "en": "What’s",
          "cn": "your best friend’s name? 你最好的朋友的名字是什么？"
        },
        {
          "en": "Lucy’s",
          "cn": "a dog. Lucy 是一只狗狗。 5.She's my pet dog. 她是我的宠物狗。"
        },
        {
          "en": "touch",
          "cn": "the animal 摸小动物 6.keep clean 保持干净"
        },
        {
          "en": "Let's",
          "cn": "play. 让我们玩吧！"
        },
        {
          "en": "What's",
          "cn": "your favourite fruit? 你最喜欢的水果是什么？"
        },
        {
          "en": "Here's",
          "cn": "Teddy. 泰迪在这儿呢！ 12.I love Teddy. 我爱泰迪。"
        },
        {
          "en": "sports",
          "cn": "class 运动课 2.come on 加油"
        },
        {
          "en": "Don't",
          "cn": "stop.不要停。 4.It's your turn. 轮到你了。"
        },
        {
          "en": "Elephant",
          "cn": "is the king of the animals. 大象是动物中的国王。"
        },
        {
          "en": "Here’s",
          "cn": "a photo. 这有一张照片。"
        },
        {
          "en": "They’re",
          "cn": "sitting on the garden. 他们正坐在椅子上。"
        },
        {
          "en": "She’s",
          "cn": "eating watermelon. 她在吃西瓜。"
        },
        {
          "en": "--What’s",
          "cn": "she doing? 她在干什么？"
        },
        {
          "en": "--What’s",
          "cn": "he doing? 他在干什么？"
        },
        {
          "en": "--What",
          "cn": "are they doing? 他们在干什么？"
        },
        {
          "en": "--What's",
          "cn": "the bird doing? 这只鸟在干什么？"
        },
        {
          "en": "--What",
          "cn": "are you doing? 你在干什么。"
        },
        {
          "en": "Let's",
          "cn": "go and help. 让我们去帮忙吧。 6. Here you are. 给你。"
        },
        {
          "en": "Thank",
          "cn": "you, everyone. 谢谢大家。 8.Well done. 干的好。"
        },
        {
          "en": "What’s",
          "cn": "the weather like? 天气怎么样？"
        },
        {
          "en": "Let’s",
          "cn": "play a game. 让我们玩游戏吧。"
        },
        {
          "en": "Let's",
          "cn": "clean our bedroom. 让我们打扫我们的卧室吧。"
        },
        {
          "en": "Let's",
          "cn": "eat some watermelon. 让我们吃一些西瓜吧。"
        },
        {
          "en": "Let's",
          "cn": "drink some orange juice. 让我们喝一些橙汁吧。"
        },
        {
          "en": "Let’s",
          "cn": "put the goat in the flowers. 让我们把山羊放在花丛中吧。"
        },
        {
          "en": "Let's",
          "cn": "put the horse with the dog. 让我们把马和小狗放在一起吧。"
        },
        {
          "en": "Let's",
          "cn": "put the goat under the tree. 让我们把山羊放在树下吧。"
        },
        {
          "en": "Where",
          "cn": "‘s Duck? 鸭子去哪了？ 2.I don’t know. 我不知道。"
        },
        {
          "en": "Let's",
          "cn": "catch the duck. 让我们抓住这只鸭子。8.Come back. 回来。"
        },
        {
          "en": "Thank",
          "cn": "you very much. 非常谢谢你。"
        },
        {
          "en": "Let’s",
          "cn": "look at the farm. 让我们看看农场。2.Good idea. 好主意。"
        }
      ]
    },
    {
      id: 'pu1',
      name: 'Power Up 1',
      level: 1,
      ceq: 'Pre-A1 Starters',
      units: 20,
      words: [
        // Unit 1 (Characters)
        {word:'bag',meaning:'袋子'},{word:'book',meaning:'书'},{word:'chair',meaning:'椅子'},
        {word:'pencil',meaning:'铅笔'},{word:'case',meaning:'盒子'},{word:'pencil case',meaning:'铅笔盒'},
        {word:'classroom',meaning:'教室'},{word:'crayon',meaning:'蜡笔'},{word:'desk',meaning:'桌子'},
        {word:'pen',meaning:'笔'},
        // Unit 2
        {word:'rubber',meaning:'橡皮擦'},{word:'teacher',meaning:'老师'},{word:'board',meaning:'黑板'},
        {word:'bookcase',meaning:'书架'},{word:'cupboard',meaning:'柜子'},{word:'door',meaning:'门'},
        {word:'paper',meaning:'纸'},{word:'playground',meaning:'操场'},{word:'ruler',meaning:'尺子'},
        // Unit 3
        {word:'wall',meaning:'墙'},{word:'window',meaning:'窗户'},{word:'brother',meaning:'兄弟'},
        {word:'dad',meaning:'爸爸'},{word:'father',meaning:'父亲'},{word:'family',meaning:'家庭'},
        {word:'grandpa',meaning:'爷爷'},{word:'grandfather',meaning:'爷爷'},{word:'grandma',meaning:'奶奶'},
        {word:'grandmother',meaning:'奶奶'},{word:'mum',meaning:'妈妈'},{word:'mother',meaning:'母亲'},
        {word:'sister',meaning:'姐妹'},
        // Unit 4
        {word:'arm',meaning:'手臂'},{word:'body',meaning:'身体'},{word:'ear',meaning:'耳朵'},
        {word:'eye',meaning:'眼睛'},{word:'face',meaning:'脸'},{word:'foot',meaning:'脚'},
        {word:'feet',meaning:'脚'},{word:'hair',meaning:'头发'},{word:'hand',meaning:'手'},
        {word:'head',meaning:'头'},
        // Unit 5
        {word:'leg',meaning:'腿'},{word:'mouth',meaning:'嘴'},{word:'nose',meaning:'鼻子'},
        {word:'tail',meaning:'尾巴'},
        // Unit 6 (Animals)
        {word:'cat',meaning:'猫'},{word:'chicken',meaning:'鸡'},{word:'cow',meaning:'牛'},
        {word:'dog',meaning:'狗'},{word:'donkey',meaning:'驴'},{word:'duck',meaning:'鸭子'},
        {word:'goat',meaning:'山羊'},{word:'horse',meaning:'马'},{word:'sheep',meaning:'绵羊'},
        {word:'spider',meaning:'蜘蛛'},
        // Unit 7 (Adjectives)
        {word:'angry',meaning:'生气的'},{word:'beautiful',meaning:'美丽的'},{word:'funny',meaning:'有趣的'},
        {word:'happy',meaning:'开心的'},{word:'sad',meaning:'悲伤的'},{word:'ugly',meaning:'丑陋的'},
        // Unit 8 (Food & Drink)
        {word:'banana',meaning:'香蕉'},{word:'bread',meaning:'面包'},{word:'burger',meaning:'汉堡'},
        {word:'cake',meaning:'蛋糕'},{word:'chocolate',meaning:'巧克力'},{word:'lemonade',meaning:'柠檬水'},
        {word:'mango',meaning:'芒果'},{word:'salad',meaning:'沙拉'},{word:'water',meaning:'水'},
        // Unit 9
        {word:'apple',meaning:'苹果'},{word:'beans',meaning:'豆子'},{word:'fruit',meaning:'水果'},
        {word:'grapes',meaning:'葡萄'},{word:'juice',meaning:'果汁'},{word:'meat',meaning:'肉'},
        {word:'meatballs',meaning:'肉丸'},{word:'orange',meaning:'橙子'},{word:'sausage',meaning:'香肠'},
        // Unit 10
        {word:'ball',meaning:'球'},{word:'bike',meaning:'自行车'},{word:'car',meaning:'汽车'},
        {word:'doll',meaning:'娃娃'},{word:'house',meaning:'房子'},{word:'kite',meaning:'风筝'},
        {word:'plane',meaning:'飞机'},{word:'robot',meaning:'机器人'},{word:'balloon',meaning:'气球'},
        {word:'game',meaning:'游戏'},{word:'box',meaning:'盒子'},{word:'computer',meaning:'电脑'},
        {word:'helicopter',meaning:'直升机'},{word:'keyboard',meaning:'键盘'},{word:'mouse',meaning:'鼠标'},
        {word:'radio',meaning:'收音机'},{word:'ship',meaning:'船'},{word:'teddy',meaning:'泰迪熊'},
        // Unit 11 (Transport)
        {word:'bus',meaning:'公共汽车'},{word:'bus stop',meaning:'公共汽车站'},
        {word:'flower',meaning:'花'},{word:'garden',meaning:'花园'},{word:'lorry',meaning:'卡车'},
        {word:'motorbike',meaning:'摩托车'},{word:'park',meaning:'公园'},{word:'shop',meaning:'商店'},
        {word:'train',meaning:'火车'},{word:'tree',meaning:'树'},
        // Unit 12 (Animals)
        {word:'bear',meaning:'熊'},{word:'crocodile',meaning:'鳄鱼'},{word:'elephant',meaning:'大象'},
        {word:'giraffe',meaning:'长颈鹿'},{word:'hippo',meaning:'河马'},{word:'lizard',meaning:'蜥蜴'},
        {word:'monkey',meaning:'猴子'},{word:'polar bear',meaning:'北极熊'},{word:'snake',meaning:'蛇'},
        {word:'tiger',meaning:'老虎'},{word:'zebra',meaning:'斑马'},{word:'zoo',meaning:'动物园'},
        // Unit 13 (Activities)
        {word:'music',meaning:'音乐'},{word:'play basketball',meaning:'打篮球'},
        {word:'play football',meaning:'踢足球'},{word:'play tennis',meaning:'打网球'},
        {word:'play the guitar',meaning:'弹吉他'},{word:'play the piano',meaning:'弹钢琴'},
        {word:'ride a bike',meaning:'骑自行车'},{word:'sport',meaning:'运动'},
        {word:'swim',meaning:'游泳'},{word:'watch television',meaning:'看电视'},
        // Unit 14 (Sports)
        {word:'badminton',meaning:'羽毛球'},{word:'baseball',meaning:'棒球'},{word:'catch',meaning:'接住'},
        {word:'hit',meaning:'击打'},{word:'hockey',meaning:'曲棍球'},{word:'kick',meaning:'踢'},
        {word:'run',meaning:'跑'},{word:'skateboard',meaning:'滑板'},{word:'throw',meaning:'投掷'},
        // Unit 15 (Rooms)
        {word:'bath',meaning:'浴缸'},{word:'bathroom',meaning:'浴室'},{word:'bed',meaning:'床'},
        {word:'bedroom',meaning:'卧室'},{word:'dining room',meaning:'餐厅'},{word:'kitchen',meaning:'厨房'},
        {word:'living room',meaning:'客厅'},{word:'mirror',meaning:'镜子'},{word:'armchair',meaning:'扶手椅'},
        {word:'clock',meaning:'钟'},{word:'floor',meaning:'地板'},{word:'hall',meaning:'大厅'},
        {word:'lamp',meaning:'灯'},{word:'painting',meaning:'画'},{word:'phone',meaning:'电话'},
        {word:'rug',meaning:'地毯'},{word:'sofa',meaning:'沙发'},
        // Unit 16 (Clothes)
        {word:'boots',meaning:'靴子'},{word:'dress',meaning:'连衣裙'},{word:'hat',meaning:'帽子'},
        {word:'jacket',meaning:'夹克'},{word:'jeans',meaning:'牛仔裤'},{word:'shirt',meaning:'衬衫'},
        {word:'shoes',meaning:'鞋子'},{word:'shorts',meaning:'短裤'},{word:'skirt',meaning:'裙子'},
        {word:'sunglasses',meaning:'太阳镜'},{word:'trousers',meaning:'裤子'},{word:'T-shirt',meaning:'T恤衫'},
        // Unit 17 (Places)
        {word:'beach',meaning:'海滩'},{word:'boat',meaning:'船'},{word:'camera',meaning:'相机'},
        {word:'fish',meaning:'鱼'},{word:'fishing',meaning:'钓鱼'},{word:'jellyfish',meaning:'水母'}
      ]
    },
    {
      id: 'pu2',
      name: 'Power Up 2',
      level: 2,
      ceq: 'A1 Movers',
      units: 44,
      words: [
        // Units 1-6 (Environment & Daily Routine)
        {word:'field',meaning:'田地'},{word:'forest',meaning:'森林'},{word:'grass',meaning:'草地'},
        {word:'ground',meaning:'土地'},{word:'lake',meaning:'湖泊'},{word:'leaf',meaning:'树叶'},
        {word:'leaves',meaning:'树叶'},{word:'mountain',meaning:'山'},{word:'river',meaning:'河流'},
        {word:'rock',meaning:'岩石'},{word:'tractor',meaning:'拖拉机'},
        {word:'get dressed',meaning:'穿衣服'},{word:'get up',meaning:'起床'},
        {word:'take a shower',meaning:'洗澡'},{word:'have breakfast',meaning:'吃早饭'},
        {word:'toothbrush',meaning:'牙刷'},{word:'toothpaste',meaning:'牙膏'},{word:'towel',meaning:'毛巾'},
        {word:'wake up',meaning:'醒来'},
        {word:'Monday',meaning:'星期一'},{word:'Tuesday',meaning:'星期二'},
        {word:'Wednesday',meaning:'星期三'},{word:'Thursday',meaning:'星期四'},
        {word:'Friday',meaning:'星期五'},{word:'Saturday',meaning:'星期六'},{word:'Sunday',meaning:'星期日'},
        {word:'go shopping',meaning:'去购物'},{word:'go skating',meaning:'去滑冰'},
        {word:'listen to a CD',meaning:'听光盘'},{word:'listen to music',meaning:'听音乐'},
        {word:'read a comic',meaning:'读漫画'},{word:'comic book',meaning:'漫画书'},
        {word:'watch a DVD',meaning:'看数字影碟'},{word:'watch a film',meaning:'看电影'},
        {word:'movie',meaning:'看电影'},{word:'write an email',meaning:'写邮件'},
        // Units 7-12 (People & Jobs)
        {word:'clown',meaning:'小丑'},{word:'cook',meaning:'厨师'},{word:'dentist',meaning:'牙医'},
        {word:'doctor',meaning:'医生'},{word:'farmer',meaning:'农民'},
        {word:'film star',meaning:'电影明星'},{word:'movie star',meaning:'电影明星'},
        {word:'star',meaning:'电影明星'},{word:'nurse',meaning:'护士'},{word:'pirate',meaning:'海盗'},
        {word:'pop star',meaning:'歌星'},{word:'present',meaning:'礼物'},{word:'treasure',meaning:'珠宝'},
        {word:'beard',meaning:'胡须'},{word:'blonde',meaning:'金黄色头发'},{word:'blond',meaning:'金黄色头发'},
        {word:'curly',meaning:'卷发'},{word:'fair',meaning:'金黄色头发'},{word:'light',meaning:'灯'},
        {word:'fat',meaning:'胖的'},{word:'short',meaning:'矮的'},{word:'straight',meaning:'直发'},
        {word:'tall',meaning:'高的'},{word:'thin',meaning:'瘦的'},{word:'moustache',meaning:'胡子'},
        {word:'mustache',meaning:'胡子'},
        // Units 13-18 (Family & Home)
        {word:'aunt',meaning:'阿姨'},{word:'cousin',meaning:'表亲'},{word:'daughter',meaning:'女儿'},
        {word:'granddaughter',meaning:'孙女'},{word:'son',meaning:'儿子'},
        {word:'grandparents',meaning:'（外）祖父母'},{word:'grandson',meaning:'孙子'},
        {word:'parents',meaning:'父母'},{word:'uncle',meaning:'叔/伯'},
        {word:'balcony',meaning:'阳台'},{word:'basement',meaning:'地下室'},{word:'downstairs',meaning:'楼下'},
        {word:'ground floor',meaning:'英国的一楼'},{word:'first floor',meaning:'美国的一楼'},
        {word:'lift',meaning:'电梯'},{word:'elevator',meaning:'电梯'},{word:'outside',meaning:'户外'},
        {word:'roof',meaning:'楼顶'},{word:'stairs',meaning:'楼梯'},{word:'upstairs',meaning:'上楼梯'},
        // Units 19-24 (Animals & Weather)
        {word:'bat',meaning:'蝙蝠'},{word:'bear',meaning:'熊'},{word:'cage',meaning:'笼子'},
        {word:'dolphin',meaning:'海豚'},{word:'kangaroo',meaning:'袋鼠'},{word:'lion',meaning:'狮子'},
        {word:'panda',meaning:'熊猫'},{word:'parrot',meaning:'鹦鹉'},{word:'penguin',meaning:'企鹅'},
        {word:'rabbit',meaning:'兔子'},{word:'whale',meaning:'鲸鱼'},
        {word:'climb',meaning:'爬'},{word:'fall',meaning:'跌倒'},{word:'fly',meaning:'飞'},
        {word:'hide',meaning:'躲藏'},{word:'jump',meaning:'跳'},{word:'lose',meaning:'丢失'},
        {word:'move',meaning:'移动'},{word:'run',meaning:'跑'},{word:'walk',meaning:'走'},
        {word:'cloud',meaning:'多云'},{word:'cold',meaning:'冷'},{word:'hot',meaning:'热'},
        {word:'rain',meaning:'雨'},{word:'rainbow',meaning:'彩虹'},{word:'snow',meaning:'雪'},
        {word:'sunny',meaning:'晴天'},{word:'windy',meaning:'风'},
        {word:'boots',meaning:'靴子'},{word:'coat',meaning:'外套'},{word:'put on',meaning:'穿上'},
        {word:'scarf',meaning:'围巾'},{word:'shorts',meaning:'短裤'},{word:'sweater',meaning:'毛衣'},
        {word:'T-shirt',meaning:'T恤'},{word:'take off',meaning:'脱掉'},
        // Units 25-32 (Food & Places)
        {word:'bottle',meaning:'瓶子'},{word:'bowl',meaning:'碗'},{word:'cheese',meaning:'奶酪'},
        {word:'cup',meaning:'茶杯'},{word:'glass',meaning:'玻璃杯'},{word:'pasta',meaning:'意大利面'},
        {word:'plate',meaning:'盘子'},{word:'salad',meaning:'沙拉'},{word:'sandwich',meaning:'三明治'},
        {word:'soup',meaning:'汤'},{word:'vegetables',meaning:'蔬菜'},
        {word:'boil',meaning:'煮'},{word:'carry',meaning:'拿'},{word:'cook',meaning:'煮饭'},
        {word:'cry',meaning:'哭'},{word:'cut',meaning:'切'},{word:'drop',meaning:'掉'},
        {word:'fry',meaning:'炸'},{word:'wash',meaning:'洗'},
        {word:'car park',meaning:'停车场'},{word:'city centre',meaning:'市中心'},
        {word:'amusement park',meaning:'游乐园'},{word:'map',meaning:'地图'},{word:'ride',meaning:'摩天轮'},
        {word:'road',meaning:'道路'},{word:'station',meaning:'车站'},{word:'ticket',meaning:'车票'},
        {word:'trip',meaning:'旅行'},
        {word:'bus station',meaning:'公交站'},{word:'cafe',meaning:'咖啡店'},
        {word:'cinema',meaning:'电影院'},{word:'movie theater',meaning:'电影院'},
        {word:'hospital',meaning:'医院'},{word:'library',meaning:'图书馆'},{word:'market',meaning:'菜场'},
        {word:'shopping centre',meaning:'购物中心'},{word:'sports centre',meaning:'运动中心'},
        {word:'square',meaning:'广场'},{word:'supermarket',meaning:'超市'},
        {word:'swimming pool',meaning:'游泳池'},
        {word:'parking lot',meaning:'停车场'},{word:'city',meaning:'城市'},{word:'centre',meaning:'市中心'},
        {word:'funfair',meaning:'游乐园'},
        // Units 33-38 (Adjectives)
        {word:'afraid',meaning:'害怕'},{word:'boring',meaning:'无聊'},{word:'dangerous',meaning:'危险'},
        {word:'difficult',meaning:'困难'},{word:'easy',meaning:'容易'},{word:'exciting',meaning:'兴奋'},
        {word:'frightened',meaning:'惊吓'},{word:'hungry',meaning:'饥饿'},{word:'thirsty',meaning:'口渴'},
        {word:'tired',meaning:'累'},{word:'surprised',meaning:'惊喜'},
        {word:'adventure',meaning:'冒险'},{word:'busy',meaning:'忙碌'},
        {word:'email',meaning:'邮件'},{word:'around',meaning:'转圈'},{word:'round',meaning:'转圈'},
        {word:'text',meaning:'文档'},{word:'travel',meaning:'旅行'},{word:'world',meaning:'世界'}
      ]
    },
    {
      id: 'pu3',
      name: 'Power Up 3',
      level: 3,
      ceq: 'A1 Movers',
      units: 9,
      words: [
        // * 来自官方闪卡核心词汇（PU3闪卡提取 + 知识点整理）
        // Unit 1 Practice time
        {word:'practice',meaning:'练习'},{word:'time',meaning:'时间'},{word:'early',meaning:'早的'},
        {word:'late',meaning:'晚的'},{word:'half past',meaning:'半点'},{word:'quarter',meaning:'一刻钟'},
        {word:'o\'clock',meaning:'整点'},{word:'midday',meaning:'中午'},{word:'midnight',meaning:'午夜'},
        {word:'meals',meaning:'餐'},{word:'breakfast',meaning:'早餐'},{word:'lunch',meaning:'午餐'},
        {word:'dinner',meaning:'晚餐'},{word:'because',meaning:'因为'},{word:'children',meaning:'孩子们'},
        // Unit 2 Our world
        {word:'planet',meaning:'星球'},{word:'world',meaning:'世界'},{word:'continent',meaning:'大陆'},
        {word:'country',meaning:'国家'},{word:'city',meaning:'城市'},{word:'town',meaning:'城镇'},
        {word:'village',meaning:'村庄'},{word:'map',meaning:'地图'},{word:'river',meaning:'河流'},
        {word:'mountain',meaning:'山'},{word:'ocean',meaning:'海洋'},{word:'lake',meaning:'湖泊'},
        {word:'forest',meaning:'森林'},{word:'desert',meaning:'沙漠'},{word:'island',meaning:'岛屿'},
        // Unit 3 Brilliant bodies
        {word:'body',meaning:'身体'},{word:'strong',meaning:'强壮的'},{word:'weak',meaning:'虚弱的'},
        {word:'healthy',meaning:'健康的'},{word:'sick',meaning:'生病的'},{word:'tired',meaning:'累的'},
        {word:'energetic',meaning:'精力充沛的'},{word:'headache',meaning:'头痛'},
        {word:'stomachache',meaning:'胃痛'},{word:'toothache',meaning:'牙痛'},
        {word:'fever',meaning:'发烧'},{word:'cough',meaning:'咳嗽'},{word:'cold',meaning:'感冒'},
        // Unit 4 What a story!
        {word:'story',meaning:'故事'},{word:'character',meaning:'角色'},{word:'hero',meaning:'英雄'},
        {word:'villain',meaning:'坏人'},{word:'princess',meaning:'公主'},{word:'prince',meaning:'王子'},
        {word:'dragon',meaning:'龙'},{word:'castle',meaning:'城堡'},{word:'magic',meaning:'魔法'},
        {word:'adventure',meaning:'冒险'},{word:'exciting',meaning:'令人兴奋的'},{word:'scary',meaning:'可怕的'},
        // Unit 5 Time for school
        {word:'subject',meaning:'科目'},{word:'maths',meaning:'数学'},{word:'science',meaning:'科学'},
        {word:'history',meaning:'历史'},{word:'geography',meaning:'地理'},{word:'art',meaning:'美术'},
        {word:'music',meaning:'音乐'},{word:'PE',meaning:'体育'},{word:'homework',meaning:'作业'},
        {word:'test',meaning:'测试'},{word:'exam',meaning:'考试'},{word:'mark',meaning:'分数'},
        // Unit 6 Looking good
        {word:'clothes',meaning:'衣服'},{word:'wear',meaning:'穿'},{word:'uniform',meaning:'校服'},
        {word:'smart',meaning:'聪明的/整洁的'},{word:'casual',meaning:'休闲的'},{word:'fashion',meaning:'时尚'},
        {word:'trendy',meaning:'时髦的'},{word:'traditional',meaning:'传统的'},{word:'comfortable',meaning:'舒适的'},
        // Unit 7 The world of work
        {word:'job',meaning:'工作'},{word:'worker',meaning:'工人'},{word:'engineer',meaning:'工程师'},
        {word:'scientist',meaning:'科学家'},{word:'artist',meaning:'艺术家'},{word:'writer',meaning:'作家'},
        {word:'pilot',meaning:'飞行员'},{word:'astronaut',meaning:'宇航员'},{word:'chef',meaning:'厨师'},
        {word:'builder',meaning:'建筑工人'},{word:'driver',meaning:'司机'},
        // Unit 8 Let's celebrate!
        {word:'festival',meaning:'节日'},{word:'celebrate',meaning:'庆祝'},{word:'party',meaning:'派对'},
        {word:'present',meaning:'礼物'},{word:'cake',meaning:'蛋糕'},{word:'candle',meaning:'蜡烛'},
        {word:'balloon',meaning:'气球'},{word:'decoration',meaning:'装饰'},{word:'traditional',meaning:'传统的'},
        {word:'special',meaning:'特别的'},{word:'exciting',meaning:'令人兴奋的'},
        // Unit 9 Healthy body
        {word:'exercise',meaning:'锻炼'},{word:'sport',meaning:'运动'},{word:'run',meaning:'跑步'},
        {word:'walk',meaning:'走路'},{word:'swim',meaning:'游泳'},{word:'cycle',meaning:'骑车'},
        {word:'rest',meaning:'休息'},{word:'sleep',meaning:'睡觉'},{word:'water',meaning:'水'},
        {word:'fruit',meaning:'水果'},{word:'vegetable',meaning:'蔬菜'},{word:'important',meaning:'重要的'}
      ]
    },
    {
      id: 'pu4',
      name: 'Power Up 4',
      level: 4,
      ceq: 'A2 Flyers',
      units: 9,
      words: [
        // * 来自官方闪卡核心词汇
        // Unit 1 Our amazing world
        {word:'amazing',meaning:'令人惊叹的'},{word:'amazing',meaning:'令人惊叹的'},{word:'rainforest',meaning:'雨林'},
        {word:'jungle',meaning:'丛林'},{word:'volcano',meaning:'火山'},{word:'earthquake',meaning:'地震'},
        {word:'flood',meaning:'洪水'},{word:'weather',meaning:'天气'},{word:'climate',meaning:'气候'},
        {word:'temperature',meaning:'温度'},{word:'dangerous',meaning:'危险的'},{word:'extinct',meaning:'灭绝的'},
        // Unit 2 In the past
        {word:'past',meaning:'过去'},{word:'present',meaning:'现在'},{word:'future',meaning:'未来'},
        {word:'history',meaning:'历史'},{word:'ancient',meaning:'古代的'},{word:'modern',meaning:'现代的'},
        {word:'king',meaning:'国王'},{word:'queen',meaning:'王后'},{word:'soldier',meaning:'士兵'},
        {word:'knight',meaning:'骑士'},{word:'castle',meaning:'城堡'},{word:'tower',meaning:'塔'},
        // Unit 3 That's entertainment!
        {word:'entertainment',meaning:'娱乐'},{word:'film',meaning:'电影'},{word:'theatre',meaning:'剧院'},
        {word:'concert',meaning:'音乐会'},{word:'exhibition',meaning:'展览'},{word:'museum',meaning:'博物馆'},
        {word:'gallery',meaning:'画廊'},{word:'director',meaning:'导演'},{word:'actor',meaning:'演员'},
        {word:'audience',meaning:'观众'},{word:'performance',meaning:'表演'},{word:'stage',meaning:'舞台'},
        // Unit 4 Our fantastic planet
        {word:'fantastic',meaning:'极好的'},{word:'environment',meaning:'环境'},{word:'pollution',meaning:'污染'},
        {word:'recycle',meaning:'回收利用'},{word:'rubbish',meaning:'垃圾'},{word:'energy',meaning:'能源'},
        {word:'electricity',meaning:'电'},{word:'solar',meaning:'太阳的'},{word:'wind',meaning:'风'},
        {word:'protect',meaning:'保护'},{word:'nature',meaning:'自然'},{word:'wildlife',meaning:'野生动物'},
        // Unit 5 Growing up
        {word:'grow up',meaning:'成长'},{word:'baby',meaning:'婴儿'},{word:'child',meaning:'孩子'},
        {word:'teenager',meaning:'青少年'},{word:'adult',meaning:'成年人'},{word:'elderly',meaning:'年长的'},
        {word:'independent',meaning:'独立的'},{word:'responsible',meaning:'负责任的'},{word:'mature',meaning:'成熟的'},
        {word:'curious',meaning:'好奇的'},{word:'imagine',meaning:'想象'},{word:'experience',meaning:'经历'},
        // Unit 6 Let's go shopping!
        {word:'shopping',meaning:'购物'},{word:'price',meaning:'价格'},{word:'cheap',meaning:'便宜的'},
        {word:'expensive',meaning:'贵的'},{word:'bargain',meaning:'便宜货'},{word:'sale',meaning:'特价'},
        {word:'online',meaning:'在线的'},{word:'customer',meaning:'顾客'},{word:'shop assistant',meaning:'店员'},
        {word:'receipt',meaning:'收据'},{word:'money',meaning:'钱'},{word:'pocket money',meaning:'零花钱'},
        // Unit 7 Adventures around the world
        {word:'adventure',meaning:'冒险'},{word:'travel',meaning:'旅行'},{word:'journey',meaning:'旅程'},
        {word:'trip',meaning:'短途旅行'},{word:'holiday',meaning:'假期'},{word:'abroad',meaning:'在国外'},
        {word:'souvenir',meaning:'纪念品'},{word:'passport',meaning:'护照'},{word:'suitcase',meaning:'手提箱'},
        {word:'backpack',meaning:'背包'},{word:'compass',meaning:'指南针'},{word:'explorer',meaning:'探险家'},
        // Unit 8 Science and nature
        {word:'science',meaning:'科学'},{word:'experiment',meaning:'实验'},{word:'discover',meaning:'发现'},
        {word:'invent',meaning:'发明'},{word:'machine',meaning:'机器'},{word:'robot',meaning:'机器人'},
        {word:'technology',meaning:'科技'},{word:'computer',meaning:'电脑'},{word:'internet',meaning:'互联网'},
        {word:'planet',meaning:'星球'},{word:'space',meaning:'太空'},{word:'rocket',meaning:'火箭'},
        // Unit 9 Our daily lives
        {word:'daily life',meaning:'日常生活'},{word:'habit',meaning:'习惯'},{word:'schedule',meaning:'日程'},
        {word:'routine',meaning:'常规'},{word:'challenge',meaning:'挑战'},{word:'achieve',meaning:'实现'},
        {word:'goal',meaning:'目标'},{word:'improve',meaning:'改进'},{word:'skill',meaning:'技能'},
        {word:'talent',meaning:'才能'},{word:'practice',meaning:'练习'},{word:'努力',meaning:'hard work'}
      ]
    },
    {
      id: 'pu5',
      name: 'Power Up 5',
      level: 5,
      ceq: 'A2 Key',
      units: 9,
      words: [
        // * 词汇来源于PU5官方词汇表
        // Unit 1 Community and neighbourhood
        {word:'community',meaning:'社区'},{word:'neighbourhood',meaning:'社区'},{word:'resident',meaning:'居民'},
        {word:'neighbour',meaning:'邻居'},{word:'citizen',meaning:'公民'},{word:'volunteer',meaning:'志愿者'},
        {word:'charity',meaning:'慈善机构'},{word:'donate',meaning:'捐赠'},{word:'support',meaning:'支持'},
        {word:'help',meaning:'帮助'},{word:'care',meaning:'关心'},{word:'share',meaning:'分享'},
        // Unit 2 Media and communication
        {word:'media',meaning:'媒体'},{word:'communication',meaning:'交流'},{word:'news',meaning:'新闻'},
        {word:'newspaper',meaning:'报纸'},{word:'magazine',meaning:'杂志'},{word:'website',meaning:'网站'},
        {word:'article',meaning:'文章'},{word:'interview',meaning:'采访'},{word:'broadcast',meaning:'广播'},
        {word:'social media',meaning:'社交媒体'},{word:'message',meaning:'消息'},{word:'information',meaning:'信息'},
        // Unit 3 Culture and traditions
        {word:'culture',meaning:'文化'},{word:'tradition',meaning:'传统'},{word:'custom',meaning:'习俗'},
        {word:'festival',meaning:'节日'},{word:'ceremony',meaning:'仪式'},{word:'belief',meaning:'信仰'},
        {word:'religious',meaning:'宗教的'},{word:'national',meaning:'国家的'},{word:'international',meaning:'国际的'},
        {word:'heritage',meaning:'遗产'},{word:'symbol',meaning:'象征'},{word:'flag',meaning:'旗帜'},
        // Unit 4 Science and innovation
        {word:'innovation',meaning:'创新'},{word:'research',meaning:'研究'},{word:'develop',meaning:'开发'},
        {word:'design',meaning:'设计'},{word:'create',meaning:'创造'},{word:'technology',meaning:'科技'},
        {word:'digital',meaning:'数字的'},{word:'device',meaning:'设备'},{word:'software',meaning:'软件'},
        {word:'application',meaning:'应用程序'},{word:'artificial',meaning:'人造的'},{word:'intelligence',meaning:'智能'},
        // Unit 5 Travel and transport
        {word:'travel',meaning:'旅行'},{word:'transport',meaning:'交通'},{word:'journey',meaning:'旅程'},
        {word:'destination',meaning:'目的地'},{word:'accommodation',meaning:'住宿'},{word:'hotel',meaning:'酒店'},
        {word:'hostel',meaning:'旅社'},{word:'campsite',meaning:'营地'},{word:'ticket',meaning:'票'},
        {word:'schedule',meaning:'日程'},{word:'reservation',meaning:'预订'},{word:'boarding pass',meaning:'登机牌'},
        // Unit 6 Health and wellbeing
        {word:'health',meaning:'健康'},{word:'wellbeing',meaning:'幸福'},{word:'balanced',meaning:'平衡的'},
        {word:'diet',meaning:'饮食'},{word:'exercise',meaning:'锻炼'},{word:'relaxation',meaning:'放松'},
        {word:'stress',meaning:'压力'},{word:'mental',meaning:'精神的'},{word:'physical',meaning:'身体的'},
        {word:'emotional',meaning:'情感的'},{word:'fit',meaning:'健康的'},{word:'unwell',meaning:'不舒服的'},
        // Unit 7 Education and learning
        {word:'education',meaning:'教育'},{word:'learning',meaning:'学习'},{word:'knowledge',meaning:'知识'},
        {word:'skill',meaning:'技能'},{word:'qualification',meaning:'资格'},{word:'degree',meaning:'学位'},
        {word:'university',meaning:'大学'},{word:'college',meaning:'学院'},{word:'course',meaning:'课程'},
        {word:'module',meaning:'模块'},{word:'assignment',meaning:'作业'},{word:'presentation',meaning:'演示'},
        // Unit 8 Society and social issues
        {word:'society',meaning:'社会'},{word:'social',meaning:'社会的'},{word:'issue',meaning:'问题'},
        {word:'poverty',meaning:'贫困'},{word:'homeless',meaning:'无家可归的'},{word:'unemployment',meaning:'失业'},
        {word:'equality',meaning:'平等'},{word:'justice',meaning:'公正'},{word:'rights',meaning:'权利'},
        {word:'responsibility',meaning:'责任'},{word:'campaign',meaning:'运动'},{word:'protest',meaning:'抗议'},
        // Unit 9 Literature and arts
        {word:'literature',meaning:'文学'},{word:'poetry',meaning:'诗歌'},{word:'novel',meaning:'小说'},
        {word:'author',meaning:'作者'},{word:'poet',meaning:'诗人'},{word:'character',meaning:'角色'},
        {word:'plot',meaning:'情节'},{word:'theme',meaning:'主题'},{word:'genre',meaning:'类型'},
        {word:'art',meaning:'艺术'},{word:'painting',meaning:'画'},{word:'sculpture',meaning:'雕塑'}
      ]
    },
    {
      id: 'pu6',
      name: 'Power Up 6',
      level: 6,
      ceq: 'B1 Preliminary',
      units: 9,
      words: [
        // * 词汇来源于PU6官方词汇表
        // Unit 1 Future world
        {word:'future',meaning:'未来'},{word:'prediction',meaning:'预测'},{word:'forecast',meaning:'预报'},
        {word:'technology',meaning:'科技'},{word:'artificial',meaning:'人工智能'},{word:'intelligence',meaning:'智能'},
        {word:'robot',meaning:'机器人'},{word:'automation',meaning:'自动化'},{word:'virtual',meaning:'虚拟的'},
        {word:'reality',meaning:'现实'},{word:'replace',meaning:'取代'},{word:'replace',meaning:'取代'},
        // Unit 2 Communication and media
        {word:'communication',meaning:'交流'},{word:'platform',meaning:'平台'},{word:'network',meaning:'网络'},
        {word:'connection',meaning:'连接'},{word:'interaction',meaning:'互动'},{word:'influence',meaning:'影响'},
        {word:'opinion',meaning:'观点'},{word:'persuade',meaning:'说服'},{word:'debate',meaning:'辩论'},
        {word:'argument',meaning:'争论'},{word:'evidence',meaning:'证据'},{word:'source',meaning:'来源'},
        // Unit 3 Environment and sustainability
        {word:'environment',meaning:'环境'},{word:'sustainability',meaning:'可持续性'},{word:'sustainable',meaning:'可持续的'},
        {word:'climate change',meaning:'气候变化'},{word:'global warming',meaning:'全球变暖'},{word:'carbon',meaning:'碳'},
        {word:'footprint',meaning:'足迹'},{word:'green',meaning:'环保的'},{word:'renewable',meaning:'可再生的'},
        {word:'fossil',meaning:'化石的'},{word:'fuel',meaning:'燃料'},{word:'alternative',meaning:'替代的'},
        // Unit 4 Global issues
        {word:'global',meaning:'全球的'},{word:'issue',meaning:'问题'},{word:'poverty',meaning:'贫困'},
        {word:'inequality',meaning:'不平等'},{word:'conflict',meaning:'冲突'},{word:'war',meaning:'战争'},
        {word:'peace',meaning:'和平'},{word:'negotiate',meaning:'谈判'},{word:'solution',meaning:'解决方案'},
        {word:'crisis',meaning:'危机'},{word:'emergency',meaning:'紧急情况'},{word:'humanitarian',meaning:'人道主义的'},
        // Unit 5 Culture and identity
        {word:'identity',meaning:'身份'},{word:'cultural',meaning:'文化的'},{word:'heritage',meaning:'遗产'},
        {word:'diversity',meaning:'多样性'},{word:'tolerance',meaning:'宽容'},{word:'prejudice',meaning:'偏见'},
        {word:'discrimination',meaning:'歧视'},{word:'stereotype',meaning:'刻板印象'},{word:'belong',meaning:'属于'},
        {word:'community',meaning:'社区'},{word:'minority',meaning:'少数群体'},{word:'immigrant',meaning:'移民'},
        // Unit 6 Relationships and social life
        {word:'relationship',meaning:'关系'},{word:'friendship',meaning:'友谊'},{word:'romantic',meaning:'浪漫的'},
        {word:'professional',meaning:'职业的'},{word:'colleague',meaning:'同事'},{word:'acquaintance',meaning:'熟人'},
        {word:'social',meaning:'社会的'},{word:'interaction',meaning:'互动'},{word:'behaviour',meaning:'行为'},
        {word:'etiquette',meaning:'礼仪'},{word:'manners',meaning:'礼貌'},{word:'respect',meaning:'尊重'},
        // Unit 7 Personal development
        {word:'development',meaning:'发展'},{word:'personal',meaning:'个人的'},{word:'growth',meaning:'成长'},
        {word:'achievement',meaning:'成就'},{word:'ambition',meaning:'抱负'},{word:'motivation',meaning:'动力'},
        {word:'perseverance',meaning:'毅力'},{word:'determination',meaning:'决心'},{word:'confidence',meaning:'信心'},
        {word:'self-esteem',meaning:'自尊'},{word:'resilience',meaning:'适应力'},{word:'mindset',meaning:'心态'},
        // Unit 8 Literature and critical thinking
        {word:'critical thinking',meaning:'批判性思维'},{word:'analyse',meaning:'分析'},{word:'evaluate',meaning:'评估'},
        {word:'argument',meaning:'论点'},{word:'conclusion',meaning:'结论'},{word:'perspective',meaning:'观点'},
        {word:'bias',meaning:'偏见'},{word:'assumption',meaning:'假设'},{word:'theory',meaning:'理论'},
        {word:'fiction',meaning:'小说'},{word:'non-fiction',meaning:'非虚构'},{word:'biography',meaning:'传记'},
        // Unit 9 Global citizenship
        {word:'citizenship',meaning:'公民身份'},{word:'global citizen',meaning:'全球公民'},{word:'responsibility',meaning:'责任'},
        {word:'active',meaning:'积极的'},{word:'participate',meaning:'参与'},{word:'campaign',meaning:'运动'},
        {word:'advocate',meaning:'倡导'},{word:'raise awareness',meaning:'提高意识'},{word:'contribution',meaning:'贡献'},
        {word:'positive change',meaning:'积极改变'},{word:'empower',meaning:'授权'},{word:'collaboration',meaning:'合作'}
      ]
    }
  ];

  // 暴露到全局
  window.BUILT_IN_BOOKS = BOOKS;
})();
