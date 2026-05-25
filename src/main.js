const projects = [
  {
    key: "mobile-commerce",
    title: "企业电商采购移动端设计",
    type: "Mobile / E-commerce / Mini Program",
    summary: "围绕企业采购场景设计移动端电商体验，覆盖首页促销、商品详情、规格选择、订单管理与售后寄回等完整交易链路。",
    tags: ["移动端", "电商采购", "小程序", "交易链路"],
    mode: "mobile",
    cover: "./public/assets-fast/mobile-commerce/home.jpg",
    shots: [
      ["./public/assets-fast/mobile-commerce/home.jpg", "商城首页", "首页通过顶部搜索、运营 banner、快捷入口和限时秒杀组织高频采购路径。"],
      ["./public/assets-fast/mobile-commerce/detail.jpg", "商品详情", "详情页突出券后价、优惠、商品属性和服务承诺，让用户快速判断。"],
      ["./public/assets-fast/mobile-commerce/spec.jpg", "规格选择", "规格弹层聚合套餐、数量和价格反馈，减少复杂 SKU 选择成本。"],
    ],
  },
  {
    key: "qu-campus",
    title: "趣校园 App 设计",
    type: "Mobile / Campus / Community",
    summary: "面向大学生校园生活场景，覆盖校园首页、动态社区、话题广场、消息、个人主页、社团活动、跳蚤市场和兼职招聘。",
    tags: ["移动端", "校园社区", "内容信息流", "生活服务"],
    mode: "mobile",
    cover: "./public/assets-fast/qu-campus/home.jpg",
    shots: [
      ["./public/assets-fast/qu-campus/home.jpg", "校园首页", "首页整合校园服务入口、课程提醒、资讯列表和活动触达。"],
      ["./public/assets-fast/qu-campus/discover.jpg", "发现信息流", "发现页承载校园动态，通过关注、点赞、评论和话题提升互动效率。"],
      ["./public/assets-fast/qu-campus/messages.jpg", "消息中心", "消息中心区分点赞、评论、访客和私信通知。"],
      ["./public/assets-fast/qu-campus/profile.jpg", "个人中心", "个人页强调身份展示、会员权益和功能入口。"],
      ["./public/assets-fast/qu-campus/topics.jpg", "话题广场", "话题广场以热榜和话题卡片组织校园讨论。"],
      ["./public/assets-fast/qu-campus/clubs.jpg", "校园社团", "社团页面聚合社团介绍、活动和动态列表。"],
      ["./public/assets-fast/qu-campus/market.jpg", "跳蚤市场", "二手交易模块通过类目入口和商品卡片降低浏览成本。"],
      ["./public/assets-fast/qu-campus/job-detail.jpg", "兼职详情", "兼职详情页强化薪资、地点、要求和报名入口。"],
    ],
  },
  {
    key: "88buys-workbench",
    title: "88buys 采购服务商 B2B 选品工作台",
    type: "Desktop / B2B / AI Workbench",
    summary: "为采购服务商设计 B2B 选品页，覆盖商品搜索、类目筛选、商品详情、素材分享、AI 集采推荐与方案池管理。",
    tags: ["Web 端", "B2B", "AI 选品", "工作台"],
    mode: "desktop",
    cover: "./public/assets-fast/88buys-workbench/home.jpg",
    shots: [
      ["./public/assets-fast/88buys-workbench/home.jpg", "选品首页", "首页集合搜索、类目、品牌专区、工作台入口和商品卡片。"],
      ["./public/assets-fast/88buys-workbench/products.jpg", "全部商品", "全部商品页提供多维筛选、模板保存和视图切换。"],
      ["./public/assets-fast/88buys-workbench/detail.jpg", "商品详情", "详情页集中展示集采价、电商比价、推荐理由和商品参数。"],
      ["./public/assets-fast/88buys-workbench/share.jpg", "分享方案", "分享弹窗将商品卖点、阶梯价格和二维码组合成可传播方案。"],
      ["./public/assets-fast/88buys-workbench/ai-plan.jpg", "AI 生成方案", "AI 选品页从需求输入到选品结果形成链路。"],
      ["./public/assets-fast/88buys-workbench/pool.jpg", "方案池", "方案池侧栏支持商品暂存、批量移除和生成方案。"],
    ],
  },
  {
    key: "xiaolian-crm",
    title: "校联 CRM 客户管理系统",
    type: "Desktop / CRM / Education",
    summary: "面向校外培训机构的 B 端 CRM 系统，覆盖工作台数据看板、班级管理、学员管理与信息录入流程。",
    tags: ["Web 端", "CRM", "教育行业", "后台系统"],
    mode: "desktop",
    cover: "./public/assets-fast/xiaolian-crm/dashboard.jpg",
    shots: [
      ["./public/assets-fast/xiaolian-crm/dashboard.jpg", "数据工作台", "工作台聚合招生、成交、目标完成率和渠道数据。"],
      ["./public/assets-fast/xiaolian-crm/classes.jpg", "班级管理", "班级列表通过筛选、表格、分页和操作入口支撑日常管理。"],
      ["./public/assets-fast/xiaolian-crm/students.jpg", "学员管理", "学员管理页强化学员状态、所属班级、家长信息和报名时间。"],
    ],
  },
  {
    key: "88buys-website",
    title: "88buys 官网视觉设计",
    type: "Website / Brand / Procurement",
    summary: "围绕 AI 驱动的企业采购服务平台定位展开，包含首屏转化、能力介绍、资源矩阵、客户背书和合作表单。",
    tags: ["Web 端", "官网", "企业服务", "品牌视觉"],
    mode: "desktop",
    cover: "./public/assets-fast/website/88buys-home.jpg",
    shots: [["./public/assets-fast/website/88buys-home.jpg", "官网首页", "官网首页围绕企业采购服务平台定位展开品牌表达和合作转化。"]],
  },
  {
    key: "harley-website",
    title: "哈雷戴维森品牌官网设计",
    type: "Website / Brand / Product",
    summary: "以黑橙品牌基调、摩托车大图和沉浸式内容区塑造强烈品牌氛围，覆盖车型展示、产品详情、品牌历史时间线和赛事活动页面。",
    tags: ["Web 端", "品牌官网", "产品体验", "暗色视觉"],
    mode: "desktop",
    cover: "./public/assets-fast/harley-website/home.jpg",
    shots: [
      ["./public/assets-fast/harley-website/home.jpg", "官网首页", "首页通过大幅车型视觉、黑橙品牌色和多层内容模块建立品牌气势。"],
      ["./public/assets-fast/harley-website/detail.jpg", "车型详情", "详情页围绕售价、预约试驾、车型规格、声浪体验和装备搭配展开。"],
      ["./public/assets-fast/harley-website/about.jpg", "关于我们", "关于页面使用深色时间线讲述品牌历史与精神传承。"],
      ["./public/assets-fast/harley-website/events.jpg", "赛事活动", "赛事活动页以图文交错版式呈现摩托车活动与骑手风采。"],
    ],
  },
];

const list = document.querySelector("#project-list");
const modal = document.querySelector("#modal");
const panel = document.querySelector(".modal-panel");
const shell = document.querySelector("#screen-shell");
const screen = document.querySelector("#screen");
const modalTitle = document.querySelector("#modal-title");
const modalCount = document.querySelector("#modal-count");
const image = document.querySelector("#modal-image");
const imageTitle = document.querySelector("#image-title");
const imageDesc = document.querySelector("#image-desc");
const thumbs = document.querySelector("#thumbs");

let activeProject = projects[0];
let activeIndex = 0;

function renderProjects() {
  list.innerHTML = projects
    .map((project, index) => {
      const preview = project.shots.slice(0, 2);
      return `
        <article class="project-card ${project.mode}" style="--accent-index:${index}">
          <div class="project-copy">
            <p class="project-number">${String(index + 1).padStart(2, "0")}</p>
            <span>${project.type}</span>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="tags">${project.tags.map((tag) => `<em>${tag}</em>`).join("")}</div>
            <button class="case-button" type="button" data-project="${project.key}">查看案例</button>
          </div>
          <button class="project-preview" type="button" data-project="${project.key}" aria-label="查看${project.title}">
            ${preview.map(([src, title]) => `<figure><img src="${src}" alt="${title}" loading="lazy" /></figure>`).join("")}
          </button>
        </article>
      `;
    })
    .join("");
}

function setActiveImage(index) {
  activeIndex = index;
  const [src, title, desc] = activeProject.shots[index];
  image.src = src;
  image.alt = `${activeProject.title} - ${title}`;
  imageTitle.textContent = title;
  imageDesc.textContent = desc;
  modalCount.textContent = `${index + 1} / ${activeProject.shots.length}`;
  screen.scrollTop = 0;
  [...thumbs.children].forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
  });
}

function openProject(key) {
  const nextProject = projects.find((project) => project.key === key);
  if (!nextProject) return;
  activeProject = nextProject;
  modalTitle.textContent = activeProject.title;
  shell.classList.toggle("is-mobile", activeProject.mode === "mobile");
  thumbs.innerHTML = activeProject.shots
    .map(([src, title], index) => `<button type="button" data-shot="${index}"><img src="${src}" alt="" loading="lazy" /><span>${title}</span></button>`)
    .join("");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  setActiveImage(0);
  panel.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

renderProjects();

document.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-project]");
  const shotButton = event.target.closest("[data-shot]");
  if (openButton) openProject(openButton.dataset.project);
  if (shotButton) setActiveImage(Number(shotButton.dataset.shot));
  if (event.target.closest("[data-close]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  if (!modal.classList.contains("is-open")) return;
  if (event.key === "ArrowRight") setActiveImage((activeIndex + 1) % activeProject.shots.length);
  if (event.key === "ArrowLeft") setActiveImage((activeIndex - 1 + activeProject.shots.length) % activeProject.shots.length);
});
