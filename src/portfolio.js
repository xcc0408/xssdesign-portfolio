const AIGC_BANNERS = [
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/半亩花田品牌banner_17.jpg",
    title: "半亩花田品牌 Banner",
    alt: "半亩花田护肤品牌 AIGC banner",
    desc: "这张 banner 以半亩花田的自然护肤调性为核心，使用明亮天空、花田、玫瑰与柔和产品陈列构建轻盈的品牌氛围。画面重点不是单纯展示商品，而是把香氛、自然、温和护理这些关键词转化为可感知的场景，让用户在第一眼看到产品时就能联想到清洁、柔软、舒缓和日常护理的情绪价值。整体色彩偏浅、留白充足，适合女性护理或身体护理类目作为品牌专区头图使用。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/炊大皇品牌banner_18.jpg",
    title: "炊大皇品牌 Banner",
    alt: "炊大皇厨具品牌 AIGC banner",
    desc: "这张图以黑金配色和暗调厨房场景塑造炊大皇的专业感，锅具被放置在真实烹饪环境中，强调材质、耐用、火候和高端厨房体验。左侧大标题与功能图标建立品牌识别，右侧通过产品组合与菜品氛围增强使用想象。画面整体更接近高端电器或厨具品牌广告，适合承接品牌馆、企业采购专区或家厨类目活动页，让用户快速建立品质与专业的判断。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/得力品牌banner_19.jpg",
    title: "得力品牌 Banner",
    alt: "得力办公用品 AIGC banner",
    desc: "得力 banner 以干净的办公桌面和白灰色空间作为背景，突出打印机、文件夹、订书机、笔记本等办公场景商品。画面通过大面积留白、清晰品牌标识和简洁图标建立稳定可靠的办公感，适合企业采购、办公用品专区和品牌推荐位使用。它的重点在于把商品从零散 SKU 变成一组完整办公解决方案，让用户感受到高效、品质和服务保障。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/电商Banner-满减优惠_20.jpg",
    title: "满减优惠活动 Banner",
    alt: "电商满减优惠 AIGC banner",
    desc: "这张满减活动 banner 采用高饱和粉红与黄色构建强促销氛围，通过夸张立体字、优惠券、购物车和人物插画快速传达活动力度。画面信息层级明确，主标题负责吸引注意，券面区域承载优惠机制，底部权益条补充正品、发货等信任信息。整体适合大促首页、频道页头图或移动端运营位，用更热闹的视觉语言刺激点击和领券行为。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/华为品牌banner_21.jpg",
    title: "华为品牌 Banner",
    alt: "华为智能设备 AIGC banner",
    desc: "华为 banner 使用深色科技场景、城市光轨和星球弧线强化智能互联的品牌语境，手机、手表、笔记本组合呈现多设备生态。画面左侧保留清晰品牌信息和价值主张，右侧以产品阵列建立高端科技感。整体适合数码品牌馆或智能设备专区，能够把单品销售升级为生态体验表达，让用户感知创新、互联、可靠和未来感。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/蕉下品牌banner_22.jpg",
    title: "蕉下品牌 Banner",
    alt: "蕉下户外防晒 AIGC banner",
    desc: "蕉下 banner 采用黑白灰的克制配色与户外山湖场景，突出品牌的轻量化、防晒和科技户外定位。左侧用大字和图标建立品牌识别，右侧集中展示伞、帽子、防晒衣、墨镜等核心品类，让用户快速理解使用场景。整体视觉更偏高级、冷静、功能化，适合户外防晒类目或夏季专题页，强调专业性能而不是单纯促销感。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/名创优品品牌banner_23.jpg",
    title: "名创优品品牌 Banner",
    alt: "名创优品生活百货 AIGC banner",
    desc: "名创优品 banner 以红白品牌色为主，结合玩具、文具、美妆工具、小家电和零食等商品组合，传达年轻、可爱、平价和生活方式感。左侧大标题保证品牌识别，右侧通过密集但有序的产品陈列展示品类丰富度。画面适合品牌专区、生活百货入口或活动推荐位，让用户快速感受到“优质生活、优价享受”的购物氛围。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/摩飞品牌banner_24.jpg",
    title: "摩飞品牌 Banner",
    alt: "摩飞小家电 AIGC banner",
    desc: "摩飞 banner 使用柔和家居空间、奶油色墙面和厨房电器组合，营造英伦小家电的精致生活感。画面通过早餐、饮品、餐具和产品陈列建立真实使用场景，左侧大标题与品质图标突出品牌调性。它不是强促销视觉，而是偏生活方式种草图，适合小家电品牌馆、品质生活频道或首页推荐位，用温和画面提升用户停留和品牌好感。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/农夫山泉品牌banner 1_25.jpg",
    title: "农夫山泉品牌 Banner",
    alt: "农夫山泉饮品 AIGC banner",
    desc: "农夫山泉 banner 用雪山、溪流、森林和清澈水源营造天然感，把饮用水、茶饮和果汁放在同一自然场景中，强化品牌与大自然的关系。左侧文案承接“天然搬运工”的认知，右侧产品陈列补充品类丰富度。整体适合饮品专区、品牌馆和夏季补水专题，用清爽、真实、自然的画面语言提升用户对品质和产地的信任。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/十月稻田品牌banner_26.jpg",
    title: "十月稻田品牌 Banner",
    alt: "十月稻田粮油米面 AIGC banner",
    desc: "十月稻田 banner 以金色稻田、夕阳、农人和米粮礼盒塑造丰收氛围，突出好米产地、自然种植和家庭餐桌的温暖联想。画面将大米、粥米、杂粮礼盒等商品组合在前景，建立品牌与主食消费的关联。整体适合粮油米面专区、节日礼盒或品牌馆头图，既有农产品的可信感，也有礼赠与家庭囤货的场景价值。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/天猫超市Banner-进口好物_28.jpg",
    title: "天猫超市进口好物 Banner",
    alt: "天猫超市进口好物 AIGC banner",
    desc: "进口好物 banner 以紫色梦幻背景、地球、国家标识和进口商品围绕构图，强调全球精选与品质生活。画面把巧克力、护肤品、奶粉、矿泉水等跨境品类集中展示，形成“世界好物精选”的平台心智。整体适合进口频道、会员日或全球购专题，用更有仪式感的视觉表达正品保障、全球直采和保税直发等服务价值。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/天猫超市Banner-粮油米面_29.jpg",
    title: "天猫超市粮油米面 Banner",
    alt: "天猫超市粮油米面 AIGC banner",
    desc: "粮油米面 banner 采用暖米色背景和厨房台面构图，集中展示大米、面粉、食用油、调味品和方便速食等刚需商品。左侧大标题传达一站购齐，右侧产品阵列强化家庭囤货场景。整体适合天猫超市民生类目、企业福利采购或家庭日常补货入口，视觉重点是可靠、省心和生活必需品的完整覆盖。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/Image 1_14_11zon.jpg",
    title: "米家智能生活 Banner",
    alt: "米家智能生活 AIGC banner",
    desc: "米家 banner 使用极简白色空间和智能家居产品组合，突出扫地机、摄像头、空气净化器、智能屏等设备之间的生活联动。画面保留大量留白，让品牌标识和功能图标更清晰，整体呈现简洁、可靠、环保和可掌控的智能生活感。它适合智能家居专区或品牌馆入口，强调产品生态而不是单件商品销售。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/Image 2_15_11zon.jpg",
    title: "宜家家居 Banner",
    alt: "宜家家居 AIGC banner",
    desc: "宜家 banner 以温暖家居空间、黄色单椅和木质收纳组成轻松生活场景，左侧大标题强化品牌识别，底部图标传达品质、配送、设计和服务。画面整体明亮、亲和、适合家庭消费语境，能够把家具从单品展示转化为日常生活想象。它适合家居品牌专区、软装推荐页和品质生活频道使用。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/Image_16_11zon.jpg",
    title: "新人入职礼包 Banner",
    alt: "新人入职礼包 AIGC banner",
    desc: "新人入职礼包 banner 采用明亮蓝色、卡通插画和欢迎物料组合，营造轻松、积极、年轻的入职氛围。画面把工作手册、保温杯、笔记本、气球和礼盒等元素组织成一套员工关怀方案，适合企业福利、员工入职礼包或行政采购场景。整体视觉亲和度高，能够让标准化采购内容带上更强的情感表达。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/image 125_30_11zon.jpg",
    title: "天猫超市生活小事 Banner",
    alt: "天猫超市生活小事 AIGC banner",
    desc: "这张天猫超市 banner 用卡通化街区、购物车、猫超形象和日常商品组合，表达“生活小事，随时天猫超市”的即时消费心智。画面通过绿色品牌色、丰富商品和服务权益卡片强化一站购齐、极速送达、品质保障和售后无忧。它适合平台首页、品牌认知广告或服务能力传播，情绪上更轻松、更贴近日常生活。",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/aigc-banners/image 126_31_11zon.jpg",
    title: "良品铺子品牌 Banner",
    alt: "良品铺子休闲零食 AIGC banner",
    desc: "良品铺子 banner 使用柔和橙色和零食产品组合，突出每日坚果、果干等休闲食品，整体氛围轻松、温暖、适合旅行和日常分享。左侧大标题建立品牌记忆，底部图标传达原料、品质、品类和口味优势。它适合零食专区、品牌馆或下午茶场景推荐位，用低压、亲和的视觉语气促进用户产生购买欲望。",
  },
];

const HAND_DRAWINGS = [
  { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/hand-drawings/IMG_0012_2_11zon.jpg", title: "手绘向日葵", alt: "手绘向日葵作品" },
  { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/hand-drawings/IMG_0016_3_11zon.jpg", title: "手绘鸭子", alt: "手绘鸭子素描作品" },
  { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/hand-drawings/IMG_0017_4_11zon.jpg", title: "手绘小狗头像", alt: "手绘小狗头像素描作品" },
  { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/hand-drawings/IMG_0018_5_11zon.jpg", title: "手绘猩猩头像", alt: "手绘猩猩头像素描作品" },
  { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/hand-drawings/IMG_0019_6_11zon.jpg", title: "手绘兔子", alt: "手绘兔子素描作品" },
  { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/hand-drawings/IMG_0020_7_11zon.jpg", title: "手绘巴哥犬", alt: "手绘巴哥犬头像素描作品" },
  { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/hand-drawings/IMG_0021_8_11zon.jpg", title: "手绘海豹", alt: "手绘海豹素描作品" },
  { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/hand-drawings/IMG_0022_9_11zon.jpg", title: "手绘小鸟", alt: "手绘小鸟素描作品" },
  { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/hand-drawings/IMG_0031_10_11zon.jpg", title: "手绘松鼠", alt: "手绘松鼠素描作品" },
  { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/hand-drawings/IMG_0032_11_11zon.jpg", title: "手绘仓鼠", alt: "手绘仓鼠素描作品" },
  { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/hand-drawings/IMG_0927_1_11zon.jpg", title: "手绘小狗与网球", alt: "手绘小狗与网球作品" },
];

const PROJECTS = {
  "mobile-commerce": {
    title: "88buys 企业采购移动端设计",
    type: "desktop",
    images: [
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/mobile-commerce/88buys-mobile-overview.png", title: "移动端项目总览", alt: "88buys 企业采购移动端项目总览", desc: "项目总览页明确 88buys 企业购的移动端定位：整合天猫超市、1688、盒马等商品资源，连接集采代发、品牌供应链、企业商城和智能工具，让采购服务商可以在移动端完成找货、推荐、下单与履约协同。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/mobile-commerce/88buys-project-analysis.png", title: "产品分析", alt: "88buys 产品分析展示页", desc: "产品分析页梳理项目背景与产品目标，聚焦传统采购模式中供应链分散、采购效率低、价格透明度不足和服务商运营成本高等问题，并将平台目标收束到统一入口、资源整合和高效业务协同上。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/mobile-commerce/88buys-home-design.png", title: "首页设计", alt: "88buys 首页设计展示页", desc: "首页设计页展示移动端商城首屏的信息组织方式，通过轮播 Banner、金刚区入口、快捷入口、热门活动和商品列表建立从运营曝光到交易转化的首页路径，提升采购用户对商品与活动的发现效率。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/mobile-commerce/88buys-product-list.png", title: "商品列表", alt: "88buys 商品列表展示页", desc: "商品列表页展示从频道商品浏览、商品详情到规格弹层的选购流程，通过价格、标签、履约方式、服务保障和规格选择来支持用户完成商品判断，并把浏览行为顺畅推进到加入购物车或立即购买。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/mobile-commerce/88buys-shopping-cart.png", title: "购物车与结算", alt: "88buys 购物车与结算展示页", desc: "购物车与结算页重点呈现下单流程，支持多商品集中管理、价格汇总、地址确认、优惠计算、支付方式选择和提交支付，减少用户逐个下单与重复核算的操作成本。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/mobile-commerce/88buys-operation-design.png", title: "运营设计", alt: "88buys 运营设计展示页", desc: "运营设计页展示专题 Banner、活动弹窗和首页活动位的视觉策略，通过大促、品牌专场、限时特惠和品类主题提升运营曝光效率，使商城具备持续拉新、促活和转化的内容运营能力。" },
    ],
  },
  "qu-campus": {
    title: "趣校园 App 设计",
    type: "mobile",
    images: [
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/home.jpg", title: "校园首页", alt: "趣校园首页", desc: "校园首页承担学生日常打开后的第一层分发，把校园服务、课程提醒、资讯内容、活动入口和社区动态集中呈现。设计重点是让高频功能可快速触达，同时保留内容浏览的轻松感。通过模块化入口和信息卡片，用户可以在学习、生活、社交场景之间快速切换，减少寻找功能的时间。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/discover.jpg", title: "发现信息流", alt: "趣校园发现页", desc: "发现页以校园动态为核心，承载图文内容、关注关系、点赞、评论和话题标签，帮助学生看到同校或兴趣相关的信息。设计上强调内容卡片的阅读节奏和互动入口的可见性，让用户在浏览过程中自然产生参与动作。它更像校园社区的公共广场，连接内容消费与社交反馈。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/following.jpg", title: "关注动态", alt: "趣校园关注页", desc: "关注页承接用户已建立关系后的内容消费，把关注对象、大家在聊、兴趣推荐和关注用户动态整合在同一页面。页面既保留信息流的连续浏览，也穿插用户推荐与话题入口，帮助用户从被动阅读进入主动关注。设计重点是让关系链、兴趣内容和社区活跃度形成自然衔接。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/topic-feed.jpg", title: "话题信息流", alt: "趣校园话题信息流页", desc: "话题信息流围绕热门话题组织社区内容，让用户在浏览时快速理解大家正在讨论什么。页面顶部用榜单和话题卡片形成入口，下方继续承载动态内容、评论摘要和互动数据。设计上需要平衡话题热度与单条内容的阅读体验，让用户既能发现主题，也能直接参与讨论。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/messages.jpg", title: "消息中心", alt: "趣校园消息页", desc: "消息中心将点赞、评论、访客、私信等反馈分类呈现，避免所有通知混在一起造成干扰。页面通过清晰的图标、未读状态和列表层级帮助用户快速判断优先级，及时处理与自己相关的互动。设计目标是让通知不只是提醒，而是成为用户回到社区继续互动的入口。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/profile.jpg", title: "个人中心", alt: "趣校园我的页", desc: "个人中心围绕身份展示、校园认证、会员权益、内容资产和常用功能组织信息，兼顾可信度与个性表达。页面既要让用户快速找到设置、订单、收藏等工具入口，也要承载个人主页的社交属性。设计上通过头像区域、数据展示和功能分组，让自我展示与日常管理保持清晰边界。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/user-profile.jpg", title: "他人主页", alt: "趣校园他人主页动态页", desc: "他人主页承担用户关系建立前的判断场景，通过头像、背景、学校认证、关注粉丝数据和动态内容展示对方身份。页面把个人形象与内容资产放在同一视图里，用户可以浏览历史动态、判断兴趣匹配，并完成关注或私信。设计重点是让社交可信度和内容吸引力同时成立。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/user-card.jpg", title: "他人主页资料卡", alt: "趣校园他人主页资料卡页", desc: "资料卡页将家乡、学校、学院、专业、年级和兴趣标签结构化展示，帮助用户更快理解对方的校园身份与兴趣偏好。相比动态页，它更偏资料核验和关系判断，适合在关注、私信或社交匹配前查看。设计上通过清晰字段和标签色块，让信息可读、可信、便于快速扫视。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/topics.jpg", title: "话题广场", alt: "趣校园话题广场", desc: "话题广场通过热榜、话题卡片、参与人数和内容入口组织校园讨论，让用户更容易找到正在发生的公共话题。设计上强调话题热度和参与路径，避免信息流过于分散。它为校园社区提供了一个可持续运营的内容中心，帮助新用户快速理解平台氛围并加入讨论。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/topic-ranking.jpg", title: "话题排行", alt: "趣校园话题排行页", desc: "话题排行页以列表形式沉淀热门讨论，帮助用户从多个校园议题中快速筛选感兴趣的话题。顶部保留氛围化话题背景，下方按热度、动态数量和最新发布内容排列，降低用户寻找热点的成本。它适合承接搜索、话题入口和运营推荐，增强社区内容的可发现性。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/news-detail.jpg", title: "资讯详情", alt: "趣校园资讯详情页", desc: "资讯详情页用于承载校园活动、社团公告和赛事内容，页面重点是标题、发布时间、浏览量、正文图片、报名信息和评论互动。设计需要让长文本阅读保持清晰，同时把发布组织和评论区衔接起来。它让校园资讯不只是通知，也能成为社团传播和同学讨论的内容节点。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/clubs.jpg", title: "校园社团", alt: "趣校园社团页", desc: "校园社团页面聚合组织介绍、活动信息、动态列表和加入入口，帮助学生了解社团风格、活动频率和成员氛围。设计重点是降低发现兴趣组织的门槛，让社团不只是名称列表，而是可被感知的校园关系网络。通过图文内容和清晰 CTA，用户更容易完成关注或加入动作。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/market.jpg", title: "跳蚤市场", alt: "趣校园跳蚤市场", desc: "跳蚤市场承接校园二手交易需求，通过类目入口、商品卡片、价格信息和联系路径，让闲置发布、浏览筛选与后续沟通更轻量。设计上需要兼顾商品信息完整度和移动端浏览效率，减少用户在低价高频场景中的决策压力。整体更适合学生之间快速转让、咨询和成交。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/jobs.jpg", title: "校园兼职", alt: "趣校园校园兼职列表页", desc: "校园兼职页聚合附近工作、最新发布、热门兼职和校招专区等入口，并用列表展示岗位名称、地点、发布方、薪资和报名按钮。页面需要让学生快速判断岗位是否值得点开，同时保留按类型浏览的路径。设计重点是突出薪资与可信发布方，降低兼职筛选成本。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/job-detail.jpg", title: "兼职详情", alt: "趣校园兼职详情", desc: "兼职详情页突出薪资、地点、岗位要求、结算方式、工作时间和报名入口，帮助学生快速判断岗位是否适合自己。页面把雇主信息、岗位亮点和报名动作放在清晰动线上，减少用户在安全性、距离和收益之间反复比较的成本。设计目标是让报名判断更直接，也让信息呈现更可信。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/qu-campus/product-detail.jpg", title: "商品详情", alt: "趣校园跳蚤市场商品详情页", desc: "商品详情页服务校园二手交易场景，突出卖家信息、价格、商品描述、参数、图片、问询入口和购买意向按钮。页面把商品可信度与沟通路径放在一起，让用户能在查看商品细节后快速发起咨询。设计上需要兼顾闲置商品的真实感、信息完整度和轻量交易转化。" },
    ],
  },
  "caimi-app": {
    title: "采蜜 APP 儿童阅读成长平台",
    type: "mobile",
    images: [
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/caimi-app/home.png", title: "首页", alt: "采蜜 APP 首页", desc: "首页面向儿童和家长的日常打开场景，将问候语、搜索、活动 Banner、核心功能入口、上次浏览和绘本推荐组织在同一条阅读路径里。页面用明亮柔和的黄色调和蜜蜂角色建立亲和感，让孩子能快速进入听故事、绘本馆、口语表达和书架，同时让家长看到清晰的继续阅读入口。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/caimi-app/library.png", title: "绘本馆", alt: "采蜜 APP 绘本馆", desc: "绘本馆承担内容浏览与选书任务，通过推荐、生活习惯、科普百科、经典童话等分类组织绘本资源。卡片以封面为主、标题为辅，并用 VIP、限免等角标补充权益信息，让孩子和家长可以在轻松的视觉节奏中发现适合当前阶段的阅读内容。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/caimi-app/explore.png", title: "探索地图", alt: "采蜜 APP 探索页", desc: "探索页把阅读任务转化成地图式冒险，用路径、关卡、星星奖励和锁定状态引导孩子持续前进。左侧快捷入口承接任务、排行榜、活动和勋章，底部目标卡展示今日星星进度和小树苗成长状态，让阅读目标被游戏化地呈现出来。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/caimi-app/growth.png", title: "成长体系", alt: "采蜜 APP 成长页", desc: "成长页集中展示孩子的阅读等级、经验值、成长阶段、阅读数据和能力雷达。页面把抽象的阅读积累转换为小树苗成长、徽章、星星任务和能力评分，让家长能看到阶段性成果，也让孩子获得持续阅读的正反馈。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/caimi-app/reading-detail.png", title: "阅读详情", alt: "采蜜 APP 阅读详情页", layout: "wide", desc: "阅读详情页采用沉浸式绘本画面，把正文、角色对话、页码进度、朗读、跟读、识字卡和目录入口叠加在阅读场景中。界面需要同时照顾孩子的故事沉浸和家长的辅助功能，因此把操作区集中在边缘和底部，避免打断主体画面。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/caimi-app/reading-complete.png", title: "阅读完成", alt: "采蜜 APP 阅读完成弹窗", layout: "wide", desc: "阅读完成弹窗在故事结束后给出即时奖励反馈，展示阅读星星、阅读经验和蜂蜜币收益，并提供再读一遍和选择新书两个后续动作。它把完成感、奖励感和下一步阅读连接起来，帮助孩子形成持续阅读的闭环。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/caimi-app/profile.png", title: "我的", alt: "采蜜 APP 我的页面", desc: "我的页面面向家长和孩子的个人管理场景，整合书架、收藏、下载、阅读笔记、家长中心、阅读报告、成长记录、内容偏好和会员服务。页面用卡片分组降低功能密度，让阅读资产、家长管理和账号服务各自保持清晰。" },
    ],
  },
  "cardhub-app": {
    title: "CardVault TCG Marketplace",
    type: "mobile",
    frame: "edge-mobile",
    frameRatio: "853 / 1844",
    images: [
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/cardhub-app/home.png", title: "首页", alt: "CardVault 首页", desc: "首页定位为海外 TCG 玩家进入平台后的行情与发现中枢，将新卡组发布、市场指数、交易量、活跃挂牌、趋势卡牌和收藏进度整合在同一视野中。设计以深色高对比界面承接卡牌稀有度与资产感，帮助用户在浏览内容的同时快速感知市场热度、价格变化和可收藏目标。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/cardhub-app/search.png", title: "搜索列表", alt: "CardVault 搜索列表", desc: "搜索列表服务于高意图找卡与跨卖家比价场景，通过关键词、品相、价格筛选和涨跌幅信息帮助用户快速锁定目标卡牌。界面强化卡面识别、版本信息、卖家来源与价格层级，让收藏者能在较短路径内完成可买性判断。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/cardhub-app/detail.png", title: "卡牌详情", alt: "CardVault 卡牌详情", desc: "卡牌详情页围绕收藏决策展开，将高清卡面、稀有度、市场价、在售数量、价格走势、成交区间和收藏操作组织成一套资产化信息结构。它的核心目标是让用户既能理解卡牌本身的收藏价值，也能判断当前入手价格是否合理。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/cardhub-app/cart.png", title: "购物车", alt: "CardVault 购物车", desc: "购物车承接从详情到交易的关键转化，将卡牌品相、卖家评分、配送方式、保护服务和订单金额集中确认。页面强调高价值单品交易中的信任信息，把卖家可信度、费用构成与购买动作保持在同一决策区间内。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/cardhub-app/checkout.png", title: "确认订单", alt: "CardVault 确认订单", desc: "确认订单页用于完成海外 TCG 交易的最终核对，按商品、地址、配送、支付、买家保护和费用汇总的顺序组织信息。设计重点是降低跨区域交易中的不确定感，让用户在提交前清楚理解费用、保障和履约条件。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/cardhub-app/payment-success.png", title: "支付成功", alt: "CardVault 支付成功", desc: "支付成功页提供清晰的交易完成反馈，并将订单编号、购买卡牌、预计送达和履约节点前置呈现。页面保留追踪订单与返回市场两个后续动作，让交易完成后能够自然衔接物流跟踪或继续发现新卡。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/cardhub-app/market.png", title: "市场", alt: "CardVault 市场页", desc: "市场页定位为卡牌交易行情面板，聚合市场总值、均价、热门波动、最新挂牌和买卖筛选。用户可以从价格走势、成交活跃度和挂牌更新中发现交易机会，使平台不只是购买入口，也具备持续观察市场的工具属性。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/cardhub-app/discover.png", title: "发现", alt: "CardVault 发现页", desc: "发现页围绕系列、题材和全量卡牌图鉴组织内容，让用户从探索卡组进入长期收藏路径。分类、进度条和卡牌网格共同构成低门槛浏览体验，适合承接新系列曝光、主题推荐和收藏缺口补全。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/cardhub-app/collection.png", title: "收藏", alt: "CardVault 收藏页", desc: "收藏页用于管理个人卡牌资产，集中展示总估值、涨跌趋势、卡牌数量、系列进度、最近新增和关注卡牌。页面将收藏成果与市场价值连接起来，帮助用户理解自己的资产组合、系列完整度和下一步收集方向。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/cardhub-app/profile.png", title: "我的", alt: "CardVault 我的页面", desc: "我的页面整合用户身份、信誉评分、交易入口、订单、出价、拍卖活动、心愿单、收藏洞察和账号支持。信息架构以交易、收藏和服务分组，保证海外交易类产品所需的信任、管理和售后入口都保持清晰可达。" },
    ],
  },
  "88buys-workbench": {
    title: "88buys 采购服务商 B2B 选品工作台",
    type: "desktop",
    images: [
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/88buys-workbench/home.jpg", title: "选品首页", alt: "88buys 工作台首页", desc: "选品首页面向采购服务商的日常找货任务，将搜索、类目、品牌专区、工作台入口和商品卡片组合在同一入口页。用户可以从关键词、品类或运营推荐快速进入选品流程。设计重点是降低首次进入的理解成本，并把高频操作前置，让服务商能更快找到可推荐、可组合、可分享的商品。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/88buys-workbench/products.jpg", title: "全部商品", alt: "88buys 全部商品页", desc: "全部商品页服务于高频、重复、批量的选品工作，因此提供多维筛选、模板保存、视图切换和商品列表信息。页面需要同时满足快速浏览和精准筛选，两者之间通过清晰的筛选栏、商品卡片和排序机制连接。设计目标是让服务商在大量 SKU 中稳定、高效地找到合适商品。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/88buys-workbench/detail.jpg", title: "商品详情", alt: "88buys 商品详情页", desc: "商品详情页集中展示集采价、电商比价、推荐理由、推广素材、商品参数和服务信息，帮助服务商判断商品是否适合推荐给客户。页面不仅承担商品说明，也承担采购决策和销售沟通准备。设计上将价格、卖点、素材与行动按钮放在同一节奏中，让信息从理解到分享更顺畅。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/88buys-workbench/share.jpg", title: "分享方案", alt: "88buys 分享方案弹窗", desc: "分享方案弹窗将商品卖点、阶梯价格、推荐理由、二维码和客户沟通素材组织成可传播内容，帮助服务商快速生成对外推荐方案。弹窗设计需要在有限空间里完成预览、确认和分享动作，因此信息层级必须清楚。它把复杂商品信息转化为客户更容易理解的购买理由，提高服务商触达效率。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/88buys-workbench/ai-plan.jpg", title: "AI 生成方案", alt: "88buys AI 集采生成方案页", desc: "AI 生成方案页从采购需求输入到选品结果输出形成完整链路，帮助服务商把模糊需求转化为可执行的集采方案。页面设计强调输入引导、结果可读性和方案调整能力，让用户理解 AI 并不是黑盒，而是辅助筛选与组织商品的工具。整体目标是降低人工选品成本，提高方案生成速度。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/88buys-workbench/pool.jpg", title: "方案池", alt: "88buys 方案池侧栏", desc: "方案池作为选品过程中的中间暂存区，支持商品收集、批量移除、数量调整和生成方案等动作。它让服务商可以边浏览边沉淀候选商品，而不必频繁跳转页面。设计上采用侧栏形态，既保留当前选品上下文，又让用户随时查看方案内容，适合复杂采购流程中的临时管理和最终确认。" },
    ],
  },
  "xiaolian-crm": {
    title: "校联 CRM 客户管理系统",
    type: "desktop",
    images: [
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/xiaolian-crm/login.jpg", title: "登录页", alt: "校联 CRM 登录页", desc: "登录页作为校区老师进入系统的第一站，需要把品牌识别、账号入口与安全感同时建立起来。页面采用左右分区结构，左侧呈现校联品牌与教育科技感视觉，右侧聚焦验证码和密码两种登录方式，减少干扰，让用户可以快速完成身份验证并进入工作台。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/xiaolian-crm/dashboard.jpg", title: "数据工作台", alt: "校联 CRM 工作台数据看板", desc: "数据工作台面向校区管理者，聚合招生线索、试听预约、成交金额、目标完成率和渠道数据，帮助用户快速判断经营状态。页面通过指标卡、图表和待处理事项形成管理视角，让复杂业务数据变得可扫描、可比较、可追踪。设计重点是让管理者在打开首页时就能发现问题和机会。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/xiaolian-crm/classes.jpg", title: "班级管理", alt: "校联 CRM 班级管理列表", desc: "班级管理页通过筛选、表格、分页、创建和操作入口承载大量班级数据，服务教务人员的日常维护工作。页面需要让班级状态、课程信息、人数和操作按钮保持清晰，避免高密度表格造成阅读负担。设计上用明确的查询区和列表结构提升管理效率，让用户可以快速定位、编辑和跟进班级信息。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/xiaolian-crm/create-class.jpg", title: "创建班级", alt: "校联 CRM 创建班级表单", desc: "创建班级页承接班级从无到有的录入流程，包含基础信息、教学安排、教学团队和招生设置等关键内容。表单以分段标题和步骤编号组织字段，帮助教务人员按业务顺序填写，减少遗漏。页面重点是让复杂配置保持清楚、稳定，并在提交前完成班级管理所需的核心信息沉淀。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/xiaolian-crm/students.jpg", title: "学员管理", alt: "校联 CRM 学员管理列表", desc: "学员管理页强化学员状态、所属班级、家长信息、报名时间和跟进记录，便于教务在高密度表格中快速定位关键对象。页面设计需要兼顾查询效率与信息完整度，因此通过筛选条件、字段分组和操作入口建立稳定的管理节奏。它适合日常维护、续费跟进和学员信息核对等高频场景。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/xiaolian-crm/student-entry.jpg", title: "录入学员", alt: "校联 CRM 录入学员信息表单", desc: "录入学员页覆盖学员基础资料、家长信息、教育信息和其他状态设置，适合前台或教务在报名后快速建档。页面通过步骤条和分区表单降低填写压力，让必填项、选择项和备注内容各归其位。设计目标是在保证信息完整的同时，让录入流程可持续、可复核、便于后续运营跟进。" },
    ],
  },
  "88buys-website": {
    title: "88buys 官网视觉设计",
    type: "desktop",
    images: [
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/website/88buys-home.jpg", title: "88buys 新官网", alt: "88buys 官网首页视觉设计", desc: "随着企业逐步整合更多阿里资源，供应链从天猫超市扩展到天猫优品、支付宝企业购等板块，官网升级为 88buys。新官网需要强调更完整的企业采购服务平台定位，不只是商品展示，而是把 AI 选品、供应链资源、客户合作和服务能力串成完整叙事，帮助用户理解品牌升级后的业务边界。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/website/tmall-business-home.jpg", title: "天猫超市企业购官网", alt: "天猫超市企业购官网首页视觉设计", desc: "天猫超市企业购官网是 88buys 的前身阶段，重点表达天猫超市商品供给、企业采购场景、商家服务能力和线上线下一体化解决方案。页面通过首屏场景图、数据背书、品牌案例、供应链能力和商家服务模块建立可信度，让企业用户理解平台能够提供稳定、丰富、适合福利和采购的商品资源。" },
    ],
  },
  "harley-website": {
    title: "哈雷戴维森品牌官网设计",
    type: "desktop",
    images: [
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/harley-website/home.jpg", title: "官网首页", alt: "哈雷官网首页车型展示", desc: "首页通过大幅车型视觉、黑橙品牌色和多层内容模块建立哈雷戴维森的品牌气势。页面从首屏车型推荐进入车系分类、视频体验、顾客体验和学习专区，让用户先被品牌氛围吸引，再继续浏览具体车型和体验内容。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/harley-website/detail.jpg", title: "车型详情", alt: "哈雷官网车型详情页", desc: "详情页围绕车型售价、预约试驾、360 度车型展示、颜色选择、车型规格、产品特点、声浪体验和装备搭配展开。页面用沉浸式黑底和橙色高亮承接购买决策链路，让产品性能、配置和行动入口保持清晰。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/harley-website/about.jpg", title: "关于我们", alt: "哈雷官网关于我们时间线", desc: "关于我们页面使用深色背景、年份大字、路径动线和节点叙事讲述品牌发展历史。它把 1901、1939、1950、1988、2002 等关键节点组织成一条品牌时间线，强化哈雷的历史沉淀和精神传承。" },
      { src: "https://cdn.jsdelivr.net/gh/xcc0408/xssdesign-portfolio@main/public/assets-fast/harley-website/events.jpg", title: "赛事活动", alt: "哈雷官网赛事活动页", desc: "赛事活动页围绕摩托车活动、骑手风采和赛事内容展开，通过图文交错的版式呈现 Daytona 摩托周、斯特吉斯、欧洲摩托车周等活动信息。页面延续暗色品牌调性，用高对比画面和橙色动作入口强化探索感。" },
    ],
  },
  "aigc-banners": {
    title: "电商 Banner 落地设计",
    type: "banner",
    images: AIGC_BANNERS.map(({ desc, ...item }) => item),
  },
  "hand-drawings": {
    title: "手绘作品",
    type: "banner",
    images: HAND_DRAWINGS,
  },
};

const modal = document.querySelector("#portfolio-modal");
const panel = document.querySelector(".modal-panel");
const title = document.querySelector("#modal-title");
const count = document.querySelector("#modal-count");
const thumbs = document.querySelector("#modal-thumbs");
const shell = document.querySelector("#mockup-shell");
const screen = document.querySelector("#mockup-screen");
const image = document.querySelector("#modal-image");
const imageTitle = document.querySelector("#modal-image-title");
const imageDesc = document.querySelector("#modal-image-desc");
const modalDescription = document.querySelector(".modal-description");
const imageOpenButton = document.querySelector("[data-image-open]");
const imageViewer = document.querySelector("#image-viewer");
const imageViewerPanel = document.querySelector(".image-viewer-panel");
const imageViewerImage = document.querySelector("#image-viewer-img");
const imageViewerTitle = document.querySelector("#image-viewer-title");
const bannerTrack = document.querySelector("#banner-track");
const drawingTrack = document.querySelector("#drawing-track");
const drawingNavButtons = document.querySelectorAll("[data-gallery-nav]");
const heroParticles = document.querySelector("#hero-particles");
const contactModal = document.querySelector("#contact-modal");
const contactPanel = document.querySelector(".contact-panel");

let activeProject = null;
let activeIndex = 0;
let panFrame = 0;
let panDone = false;
let panStartTime = 0;
let panStartScroll = 0;
let panTarget = 0;
let panDuration = 0;
let panDelayTimer = 0;
let panAnimation = null;
let drawingGalleryIndex = 0;

function trackImageLoad(img) {
  if (!img) return;
  const shellNode = img.closest(".image-shell");
  if (!shellNode) return;

  shellNode.classList.remove("is-error");
  if (img.complete && img.naturalWidth > 0) {
    shellNode.classList.add("is-loaded");
    return;
  }

  shellNode.classList.remove("is-loaded");
  img.addEventListener("load", () => shellNode.classList.add("is-loaded"), { once: true });
  img.addEventListener("error", () => shellNode.classList.add("is-error"), { once: true });
}

function wrapImage(img) {
  if (!img || img.closest(".image-shell")) {
    trackImageLoad(img);
    return;
  }

  const shellNode = document.createElement("span");
  shellNode.className = "image-shell";
  if (img.classList.contains("hero-portrait")) shellNode.classList.add("hero-portrait-shell");
  img.before(shellNode);
  shellNode.append(img);
  trackImageLoad(img);
}

function hydrateImageSkeletons(root = document) {
  root.querySelectorAll("img").forEach(wrapImage);
}

function stopPan() {
  clearTimeout(panDelayTimer);
  panDelayTimer = 0;
  if (panAnimation) {
    const progress = panDuration ? Math.min(panAnimation.currentTime / panDuration, 1) : 0;
    panAnimation.cancel();
    panAnimation = null;
    screen.scrollTop = Math.max(screen.scrollTop, panTarget * progress);
  }
  cancelAnimationFrame(panFrame);
  panFrame = 0;
}

function resetPan() {
  stopPan();
  panDone = false;
  screen.scrollTop = 0;
}

function animatePan(time) {
  if (!panStartTime) panStartTime = time;
  const progress = Math.min((time - panStartTime) / panDuration, 1);
  screen.scrollTop = panStartScroll + (panTarget - panStartScroll) * progress;
  if (progress < 1) {
    panFrame = requestAnimationFrame(animatePan);
  } else {
    panDone = true;
    panFrame = 0;
  }
}

function startPan() {
  stopPan();
  const panSubject = image.closest(".image-shell") || image;
  const subjectHeight = panSubject.getBoundingClientRect().height;
  panTarget = Math.max(0, subjectHeight - screen.clientHeight);
  if (panTarget <= 40 || panDone) return;
  screen.scrollTop = 0;
  panDuration = Math.max(7000, Math.min(28000, panTarget * 18));
  panAnimation = panSubject.animate(
    [
      { transform: "translate3d(0, 0, 0)" },
      { transform: `translate3d(0, -${panTarget}px, 0)` },
    ],
    {
      duration: panDuration,
      easing: "cubic-bezier(0.33, 0, 0.18, 1)",
      fill: "forwards",
    },
  );
  panAnimation.onfinish = () => {
    const finishedAnimation = panAnimation;
    panAnimation = null;
    screen.scrollTop = panTarget;
    finishedAnimation?.cancel();
    panDone = true;
  };
}

function schedulePan() {
  stopPan();
  if (activeProject?.type === "banner") return;
  panDelayTimer = window.setTimeout(() => {
    panDelayTimer = 0;
    startPan();
  }, 1000);
}

function fitMockupToImage() {
  shell.style.width = "";
  shell.style.height = "";
  if (!activeProject || shell.classList.contains("is-mobile") || !image.naturalWidth) return;
  const toolbarHeight = 34;
  const maxShellHeight = Math.min(window.innerHeight * 0.78, activeProject.type === "banner" ? 720 : 680);
  const maxShellWidth = Math.min(window.innerWidth * 0.68, activeProject.type === "banner" ? 1180 : 980);

  if (activeProject.type === "banner") {
    const availableImageHeight = maxShellHeight - toolbarHeight;
    const imageRatio = image.naturalWidth / image.naturalHeight;
    const fittedWidth = Math.min(maxShellWidth, availableImageHeight * imageRatio);
    const fittedHeight = Math.min(maxShellHeight, fittedWidth / imageRatio + toolbarHeight);
    shell.style.width = `${Math.max(260, fittedWidth)}px`;
    shell.style.height = `${Math.max(260, fittedHeight)}px`;
    return;
  }

  const imageHeight = (screen.clientWidth * image.naturalHeight) / image.naturalWidth;
  const nextHeight = Math.min(maxShellHeight, imageHeight + toolbarHeight);
  shell.style.height = `${Math.max(240, nextHeight)}px`;
}

function setImage(index) {
  activeIndex = index;
  const item = activeProject.images[index];
  const isBanner = activeProject.type === "banner";
  const isMobileFrame = activeProject.type === "mobile" && item.layout !== "wide";
  const frameRatio = item.frameRatio || activeProject.frameRatio;
  resetPan();
  shell.classList.toggle("is-mobile", isMobileFrame);
  if (isMobileFrame && frameRatio) {
    shell.style.setProperty("--mockup-ratio", frameRatio);
  } else {
    shell.style.removeProperty("--mockup-ratio");
  }
  image.closest(".image-shell")?.classList.remove("is-loaded", "is-error");
  image.src = item.src;
  image.alt = item.alt;
  imageOpenButton?.setAttribute("aria-label", `查看大图：${item.title}`);
  trackImageLoad(image);
  imageTitle.textContent = item.title;
  imageDesc.textContent = isBanner ? "" : `${item.desc} 整体兼顾信息层级、业务目标和视觉节奏。`;
  count.textContent = `${index + 1} / ${activeProject.images.length}`;
  modalDescription.hidden = isBanner;
  [...thumbs.children].forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
  });
  if (image.complete) {
    requestAnimationFrame(() => {
      fitMockupToImage();
      schedulePan();
    });
  }
}

function openImageViewer() {
  if (!activeProject) return;
  const item = activeProject.images[activeIndex];
  if (!item) return;
  stopPan();
  imageViewerImage.closest(".image-shell")?.classList.remove("is-loaded", "is-error", "is-wide");
  imageViewerImage.src = item.src;
  imageViewerImage.alt = item.alt;
  imageViewerImage.classList.toggle("is-wide", item.layout === "wide" || activeProject.type !== "mobile");
  imageViewerImage.closest(".image-shell")?.classList.toggle("is-wide", item.layout === "wide" || activeProject.type !== "mobile");
  imageViewerTitle.textContent = `${activeProject.title} - ${item.title}`;
  trackImageLoad(imageViewerImage);
  imageViewer.classList.add("is-open");
  imageViewer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  imageViewerPanel.focus();
}

function closeImageViewer() {
  if (!imageViewer.classList.contains("is-open")) return;
  imageViewer.classList.remove("is-open");
  imageViewer.setAttribute("aria-hidden", "true");
  if (!modal.classList.contains("is-open")) {
    document.body.style.overflow = "";
  }
  panel.focus();
}

function renderThumbs() {
  thumbs.innerHTML = "";
  activeProject.images.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "thumb-button";
    button.setAttribute("aria-label", `查看第 ${index + 1} 张：${item.title}`);
    button.innerHTML = `<span class="image-shell"><img src="${item.src}" alt="" loading="lazy" /></span><span>${item.title}</span>`;
    hydrateImageSkeletons(button);
    button.addEventListener("click", () => setImage(index));
    thumbs.append(button);
  });
}

function openModal(projectKey) {
  activeProject = PROJECTS[projectKey];
  if (!activeProject) return;
  title.textContent = activeProject.title;
  modal.classList.toggle("is-banner-modal", activeProject.type === "banner");
  modal.classList.toggle("is-edge-mobile", activeProject.frame === "edge-mobile");
  renderThumbs();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setImage(0);
  panel.focus();
}

function openModalAt(projectKey, index) {
  openModal(projectKey);
  setImage(index);
}

function closeModal() {
  stopPan();
  closeImageViewer();
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".case-more").forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.case));
});

document.querySelectorAll(".project-showcase[data-case]").forEach((showcase) => {
  const open = () => openModal(showcase.dataset.case);
  showcase.addEventListener("click", open);
  showcase.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
});

const showcaseObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-in-view", entry.isIntersecting);
        });
      },
      { rootMargin: "120px 0px", threshold: 0.12 },
    )
  : null;

document.querySelectorAll(".project-showcase").forEach((showcase) => {
  showcase.classList.add("is-in-view");
  if (showcaseObserver) {
    showcaseObserver.observe(showcase);
  }
});

function renderScrollingGallery(track, items, projectKey, cardClass = "") {
  if (!track) return;
  const galleryItems = [...items, ...items];
  track.innerHTML = galleryItems
    .map((item, index) => `
      <button class="banner-card ${cardClass}" type="button" data-gallery-index="${index % items.length}" aria-label="查看${item.title}">
        <span class="image-shell"><img src="${item.src}" alt="${item.alt}" loading="lazy" /></span>
      </button>
    `)
    .join("");

  hydrateImageSkeletons(track);

  track.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => openModalAt(projectKey, Number(button.dataset.galleryIndex)));
  });
}

renderScrollingGallery(bannerTrack, AIGC_BANNERS, "aigc-banners");
renderScrollingGallery(drawingTrack, HAND_DRAWINGS, "hand-drawings", "drawing-card");
hydrateImageSkeletons();

function moveDrawingGallery(direction) {
  if (!drawingTrack) return;
  const firstCard = drawingTrack.querySelector(".banner-card");
  if (!firstCard) return;
  const gap = Number.parseFloat(getComputedStyle(drawingTrack).gap) || 0;
  const step = firstCard.getBoundingClientRect().width + gap;
  drawingGalleryIndex = (drawingGalleryIndex + direction + HAND_DRAWINGS.length) % HAND_DRAWINGS.length;
  drawingTrack.classList.add("is-manual");
  drawingTrack.style.transform = `translate3d(${-drawingGalleryIndex * step}px, 0, 0)`;
}

drawingNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    moveDrawingGallery(button.dataset.galleryNav === "next" ? 1 : -1);
  });
});

if (heroParticles) {
  const context = heroParticles.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let particleFrame = 0;
  const particles = Array.from({ length: 68 }, () => ({
    x: Math.random(),
    y: Math.random(),
    radius: 0.8 + Math.random() * 2.4,
    speed: 0.00035 + Math.random() * 0.0007,
    drift: -0.00025 + Math.random() * 0.0005,
    alpha: 0.18 + Math.random() * 0.42,
  }));

  function sizeParticles() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const rect = heroParticles.getBoundingClientRect();
    heroParticles.width = Math.max(1, Math.floor(rect.width * ratio));
    heroParticles.height = Math.max(1, Math.floor(rect.height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function drawParticles() {
    const width = heroParticles.clientWidth;
    const height = heroParticles.clientHeight;
    context.clearRect(0, 0, width, height);

    const gradient = context.createRadialGradient(width * 0.58, height * 0.42, 20, width * 0.58, height * 0.42, width * 0.6);
    gradient.addColorStop(0, "rgba(216, 255, 69, 0.18)");
    gradient.addColorStop(0.45, "rgba(114, 244, 255, 0.08)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    particles.forEach((particle) => {
      if (!reduceMotion) {
        particle.y -= particle.speed;
        particle.x += particle.drift;
        if (particle.y < -0.04) particle.y = 1.04;
        if (particle.x < -0.04) particle.x = 1.04;
        if (particle.x > 1.04) particle.x = -0.04;
      }
      context.beginPath();
      context.arc(particle.x * width, particle.y * height, particle.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(232, 255, 178, ${particle.alpha})`;
      context.fill();
    });

    if (!reduceMotion) particleFrame = requestAnimationFrame(drawParticles);
  }

  sizeParticles();
  drawParticles();
  window.addEventListener("resize", () => {
    sizeParticles();
    cancelAnimationFrame(particleFrame);
    drawParticles();
  });
}

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

imageOpenButton?.addEventListener("click", openImageViewer);

document.querySelectorAll("[data-image-close]").forEach((button) => {
  button.addEventListener("click", closeImageViewer);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageViewer.classList.contains("is-open")) {
    closeImageViewer();
    return;
  }
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  if (event.key === "Escape" && contactModal?.classList.contains("is-open")) closeContactModal();
});

function openContactModal() {
  if (!contactModal) return;
  contactModal.classList.add("is-open");
  contactModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  contactPanel?.focus();
}

function closeContactModal() {
  if (!contactModal) return;
  contactModal.classList.remove("is-open");
  contactModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-contact-open]").forEach((button) => {
  button.addEventListener("click", openContactModal);
});

document.querySelectorAll("[data-contact-close]").forEach((button) => {
  button.addEventListener("click", closeContactModal);
});

image.addEventListener("load", () => {
  screen.scrollTop = 0;
  requestAnimationFrame(() => {
    fitMockupToImage();
    schedulePan();
  });
});

screen.addEventListener("mouseenter", stopPan);
screen.addEventListener("mouseleave", schedulePan);
screen.addEventListener("wheel", stopPan, { passive: true });
window.addEventListener("resize", fitMockupToImage);
