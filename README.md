# 新晟教育 植词 — 英语智能复习

> Cambridge Power Up 0-6 配套背单词 PWA，基于 SM-2 间隔重复算法，纯前端单文件、离线可用。

**迁移日期**：2026-08-17
**来源**：QClaw `workspace-agent-610b48ca/其乐嵘戎 植词`（原始文件保留未动）
**在线地址**：https://leon-rong.github.io/Qile-rongrong-zhici/
**GitHub 仓库**：https://github.com/Leon-rong/Qile-rongrong-zhici

---

## 项目结构

```
新晟教育 植词/
├── index.html                        # 主程序（131 KB / 3818 行，内联 JS 67 KB）
├── manifest.json                     # PWA 清单（standalone，暖金主题 #d4a574）
├── books/
│   └── power-up-vocabulary.js        # 内置词库（48.9 KB，7 册 904 词 + 53 句型）
├── README.md                         # 本文件
└── docs/
    ├── 开发历程.md                    # 从 2026-07-30 到 08-06 的完整开发史与踩坑记录
    ├── 技术规范-pwa-wordcard.md        # PWA 单词卡开发规范（原 skills/pwa-wordcard）
    └── 原始开发日志/                   # QClaw 原始会话日志 6 份
```

---

## 词库清单（自检实测）

| 词书 ID | 名称 | CEFR | 单元 | 词条 | 句型 |
|---------|------|------|------|------|------|
| pu0 | Power Up 0 预备级 | Pre-Starter | 10 | 115 | 53 |
| pu1 | Power Up 1 | — | — | 174 | 0 |
| pu2 | Power Up 2 | — | — | 181 | 0 |
| pu3 | Power Up 3 | — | — | 110 | 0 |
| pu4 | Power Up 4 | — | — | 108 | 0 |
| pu5 | Power Up 5 | — | — | 108 | 0 |
| pu6 | Power Up 6 | — | — | 108 | 0 |
| **合计** | **7 册** | | | **904** | **53** |

词库来源：Cambridge Power Up SSS 教材。PU0/PU1/PU2 从「教材词汇表（有中文意思）.pdf」提取；PU3-6 为闪卡词汇（`*` 标注为补充词）。

---

## 功能清单

### 学习核心
- **SM-2 间隔重复算法**：四档反馈（重来/模糊/记住/太简单），字段 `ease`/`interval`/`due`；答错当天重现，答对间隔按 easeFactor 递增
- **4 种学习模式**：拼写 / 看英选义 / 看义选英 / 听音选义
- **超慢速自动完成**：`speakWait()` 等发音读完 → 拼写逐字母 700ms/字母（或选择模式绿框高亮 1.5s）→ 停顿提交 → 五彩纸屑庆祝 → 自动点「太简单」→ 下一词，全程零干预
- **队列调度**：`buildQueue` 按 `currentBookId` 过滤，避免串书

### 数据与离线
- **IndexedDB 主存 + localStorage 双保险回退**（防失忆）
- `openDB` 带 3s 超时保护，防 Promise 永不 resolve 卡死页面
- 首次启动自动初始化 7 本内置词库
- 学习记录、设置、连击、日历统计全部本地持久化

### 交互与视觉
- **双主题**：深色暖金（#0d0d0d + #d4a574）/ 浅色湖蓝，`data-theme` 属性切换 + localStorage 记忆 + 启动前应用防闪烁
- **SM-2 四色高对比按钮**：重来 #ff5a5a / 模糊 #ffa94d / 记住 #4dabf7 / 太简单 #51cf66（彩色边框 + 淡底 + 彩色文字）
- **连击系统**：×5/10/15 中央火焰 Toast + vibrate(20)
- **Web Audio API 音效**：键盘音（820Hz 方波）、正确音（C5/E5/G5 正弦三连）、错误音（锯齿下滑）
- **纯 CSS 蜡笔小新角色**：右下角浮窗，float 漂浮 + blink 眨眼 + 点击触发彩带
- **五彩纸屑**：`fireConfetti(60/80/30)`
- **顶部 sticky 进度条** + 底部 6 键快捷键条（Tab/⇧+Space/~/Space/Ctrl+P/Ctrl+↓）
- **Web Speech API TTS**：英文 en-US/en-GB 优先，单例队列 + cancel() 防重叠，不支持时静默降级
- **PC 全屏 + 移动优先响应式**：基础 `max-width:none; width:100%`，限宽仅在 `@media (max-width:480px)`

---

## 本地运行

Service Worker **刻意未启用**（避免缓存旧版本导致用户看不到更新），因此可直接双击 `index.html` 打开使用。

若需完整 PWA 体验（安装到桌面），需在 HTTPS 或 localhost 下访问：

```bash
# 任选其一
npx serve .
python -m http.server 8765
```

---

## 部署要点

1. 全部使用相对路径，GitHub Pages 直接兼容
2. `manifest.json` 的品牌名、主题色、`start_url` 需与实际一致
3. 首次 commit 前必须配置 `git user.name` / `user.email`
4. GitHub Pages 启用路径：Settings → Pages → main 分支 / (root)，1-2 分钟生效
5. 当前 `<title>` 仍为「其乐嵘戎 — 英语智能复习」，`manifest.json` 已为「其乐嵘戎 植词」——如需统一为「新晟教育 植词」品牌，需同步改这两处

---

## 已知待办

| 项目 | 状态 | 说明 |
|------|------|------|
| PU1-6 句型提取 | ⚠️ 待办 | 目前仅 PU0 有 53 条句型，其余 6 册句型为空 |
| PU1-6 单元/CEFR 元数据 | ⚠️ 缺失 | 仅 pu0 填了 `ceq`/`units` 字段 |
| Service Worker | 🔶 有意未加 | 等版本稳定后再引入，需配套缓存版本号 + skipWaiting |
| 品牌名统一 | 🔶 待定 | title / manifest / 页面 Logo 三处品牌名不完全一致 |
| 音标字段 | ⚠️ 缺失 | 词库仅 word + meaning，无 phonetic/example |

---

## 验证记录（2026-08-17 迁移时实测）

- ✅ MD5 三文件与源文件完全一致
- ✅ `power-up-vocabulary.js` — `node --check` exit=0
- ✅ `index.html` 内联 script（67,249 字节）— `node --check` exit=0
- ✅ 词库运行时自检：7 册 / 904 词 / 53 句型，与历史记录吻合
