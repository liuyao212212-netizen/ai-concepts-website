## Marketing agents to win in

**背景色**: `transparent`
**整体布局**: ``

### 结构骨架

> 骨架中 `[...]` 内的是关键布局信息，必须遵循：
> - `bg:#xxx` = 背景色，用 `style={{ backgroundColor: '#xxx' }}`
> - `flex-row` = 横向排列（左右分栏），用 `className="flex flex-row"`
> - `flex-col` = 纵向排列（上下堆叠），用 `className="flex flex-col"`
> - `grid-N` = N列网格，用 `className="grid grid-cols-N"`
> - `text-light` = 浅色文字，用 `className="text-white"` 或 `text-gray-xxx`
> - `text-dark` = 深色文字，用 `className="text-gray-900"` 或 `text-black`

```
div.relative [text-light]
├─ div.-mb-12 [text-light]
│  └─ div.new-container [text-light]
│     └─ a.group [flex-row, text-light] → "Announcing Zero Click NY on June 11Reque"
│        ├─ span.small [bg:#08379b] → "Announcing Zero Click NY on June 11"
│        ├─ p.small [text-light] → "Request your spot today"
│        └─ svg.lucide [text-light] → [icon]
├─ div.new-container [grid-4, text-light]
│  ├─ div.h-full [text-light]
│  └─ div.h-full [text-light]
├─ section.border-b [text-light]
│  ├─ section.relative-z-5 [text-light]
│  │  └─ div.new-container [text-light]
│  │     └─ div.relative [text-light]
│  │        ├─ h1.h1-mobile [text-light] → "Marketing agents to win in"
│  │        ├─ div.md:!h-16 [text-light]
│  │        │  ├─ div.absolute [flex-row, text-light]
│  │        │  │  ├─ div.w-min [text-light]
│  │        │  │  │  └─ svg.h-10 [text-light] → [icon]
│  │        │  │  └─ span.h1-mobile [text-light] → "Gemini"
│  │        │  └─ div.absolute [flex-row, text-light]
│  │        │     ├─ div.w-min [text-light]
│  │        │     │  └─ svg.h-10 [text-light] → [icon]
│  │        │     └─ span.h1-mobile [text-light] → "Grok"
│  │        ├─ p.paragraph-large-mobile → "Reach millions of consumers who are using AI to..."
│  │        └─ div.flex [flex-row, text-light]
│  │           ├─ div.relative [text-light]
│  │           │  └─ a.relative [bg:#ffffff, flex-row, text-dark] → "Get a Demo"
│  │           │     └─ div.relative [text-dark]
│  │           └─ div.relative [text-light]
│  │              └─ a.relative [bg:#333333, flex-row, text-light] → "Get Started"
│  │                 └─ div.relative [text-light]
│  └─ div.new-container [text-light]
│     └─ div.invisible [text-light]
│        └─ div.relative-z-5 [text-light]
│           └─ div.aspect-video [text-light]
│              └─ div.relative-z-5 [flex-col, text-light]
│                 ├─ div.flex [flex-row, text-light]
│                 │  ├─ div.flex [flex-row, text-light]
│                 │  │  ├─ ... (深层省略)
│                 │  │  └─ ... (深层省略)
│                 │  └─ div.flex [flex-row, text-light]
│                 │     ├─ ... (深层省略)
│                 │     └─ ... (深层省略)
│                 └─ div.flex [flex-row, text-light]
│                    ├─ div.w-[240px] [text-light]
│                    │  └─ ... (深层省略)
│                    ├─ div.relative [flex-col, text-light]
│                    │  └─ ... (深层省略)
│                    ├─ div.w-[288px] [text-light]
│                    │  └─ ... (深层省略)
│                    └─ svg.pointer-events-none [text-light] → [icon]
├─ section.relative-z-5 [text-light]
│  ├─ div.new-container [text-light]
│  │  └─ div.px-3 [text-light]
│  │     └─ p.paragraph-large-desktop → "Used by the best marketers in the world"
│  └─ div.relative [text-light]
│     └─ section.relative [text-light]
│        └─ div.new-container [text-light]
│           └─ div [text-light]
│              ├─ div.grid [grid-6, text-light]
│              │  ├─ div.flex [flex-row, text-light]
│              │  │  └─ div.flex [flex-row, text-light]
│              │  │     └─ ... (深层省略)
│              │  ├─ div.flex [flex-row, text-light]
│              │  │  └─ div.flex [flex-row, text-light]
│              │  │     └─ ... (深层省略)
│              │  ├─ div.flex [flex-row, text-light]
│              │  │  └─ div.flex [flex-row, text-light]
│              │  │     └─ ... (深层省略)
│              │  └─ ... (3 more div)
│              ├─ div.grid [grid-6, text-light]
│              │  ├─ div.flex [flex-row, text-light]
│              │  │  └─ div.flex [flex-row, text-light]
│              │  │     └─ ... (深层省略)
│              │  ├─ div.flex [flex-row, text-light]
│              │  │  └─ div.flex [flex-row, text-light]
│              │  │     └─ ... (深层省略)
│              │  ├─ div.flex [flex-row, text-light]
│              │  │  └─ div.flex [flex-row, text-light]
│              │  │     └─ ... (深层省略)
│              │  └─ ... (3 more div)
│              └─ div.grid [grid-6, text-light]
│                 ├─ div.flex [flex-row, text-light]
│                 │  └─ div.flex [flex-row, text-light]
│                 │     └─ ... (深层省略)
│                 ├─ div.flex [flex-row, text-light]
│                 │  └─ div.flex [flex-row, text-light]
│                 │     └─ ... (深层省略)
│                 ├─ div.flex [flex-row, text-light]
│                 │  └─ div.flex [flex-row, text-light]
│                 │     └─ ... (深层省略)
│                 └─ ... (3 more div)
├─ section.relative-z-5 [text-light]
│  └─ div.new-container [text-light]
│     └─ div.flex [flex-row, text-light]
│        └─ div.px-3 [text-light]
│           └─ div.mx-auto [flex-col, text-light]
│              ├─ p.h3-desktop [text-light] → "Over 100 million people search with AI every da..."
│              │  ├─ div [text-light]
│              │  ├─ div [text-light]
│              │  ├─ div [text-light]
│              │  └─ ... (13 more div)
│              └─ p.h3-desktop [text-light] → "Profound ensures yours isn't one of them."
│                 ├─ div
│                 ├─ div
│                 ├─ div
│                 └─ ... (4 more div)
├─ ... (1 more section)
├─ div.border-b [text-light]
│  └─ section.relative-z-5 [text-light]
│     └─ div.new-container [text-light]
│        └─ div.grid [grid-2, text-light]
│           ├─ div.relative [flex-row, text-light]
│           │  └─ div.select-none [text-light]
│           │     └─ div.relative [text-light]
│           │        ├─ div.relative [text-light]
│           │        │  └─ ... (深层省略)
│           │        ├─ div.relative [text-light]
│           │        │  └─ ... (深层省略)
│           │        ├─ div.relative [text-light]
│           │        │  └─ ... (深层省略)
│           │        └─ ... (1 more div)
│           └─ div.flex [flex-col, text-light]
│              ├─ div.flex [flex-row, text-light]
│              │  ├─ svg.h-[22px] [text-light] → [icon]
│              │  └─ div.relative [text-light]
│              │     └─ a.relative [flex-row, text-light] → "Read case study"
│              │        └─ ... (深层省略)
│              └─ figure.flex [flex-col, text-light]
│                 ├─ blockquote.h4-mobile [text-light]
│                 └─ figcaption [text-light]
│                    └─ a.opacify-link [flex-row, text-light] → "George Bonaci, VP of Growth & Demand"
│                       ├─ ... (深层省略)
│                       └─ ... (深层省略)
├─ section.py-[60px] [text-light]
│  └─ div.new-container [flex-col, text-light]
│     ├─ div.px-3 [grid-2, text-light]
│     │  └─ h2.h2-mobile [text-light] → "Agents for every marketing channel"
│     └─ div.z-10 [grid-3, text-light]
│        ├─ div.flex [flex-col, text-light]
│        │  ├─ div.flex [flex-col, text-light]
│        │  │  ├─ p.paragraph-large-mobile [text-light] → "AEO & SEO"
│        │  │  ├─ p.mt-2 → "Increase AI Search visibility"
│        │  │  └─ div.relative [text-light]
│        │  │     └─ a.relative [bg:#333333, flex-row, text-light] → "Learn more"
│        │  │        └─ div.relative [text-light]
│        │  └─ div.min-h-[260px] [text-light]
│        │     └─ img → alt:"AEO & SEO"
│        ├─ div.flex [flex-col, text-light]
│        │  ├─ div.flex [flex-col, text-light]
│        │  │  ├─ p.paragraph-large-mobile [text-light] → "Content & Demand"
│        │  │  ├─ p.mt-2 → "Drive human and bot traffic"
│        │  │  └─ div.relative [text-light]
│        │  │     └─ a.relative [bg:#333333, flex-row, text-light] → "Learn more"
│        │  │        └─ div.relative [text-light]
│        │  └─ div.min-h-[260px] [text-light]
│        │     └─ img → alt:"Content & Demand"
│        └─ div.flex [flex-col, text-light]
│           ├─ div.flex [flex-col, text-light]
│           │  ├─ p.paragraph-large-mobile [text-light] → "PR & Communications"
│           │  ├─ p.mt-2 → "Shape AI conversations"
│           │  └─ div.relative [text-light]
│           │     └─ a.relative [bg:#333333, flex-row, text-light] → "Learn more"
│           │        └─ div.relative [text-light]
│           └─ div.min-h-[260px] [text-light]
│              └─ img → alt:"PR & Communications"
├─ section [text-light]
│  └─ div.new-container [text-light]
│     └─ div.grid [grid-2, text-light]
│        ├─ div.flex [flex-col, text-light]
│        │  ├─ div.flex [flex-col, text-light]
│        │  │  ├─ div.flex [flex-col, text-light]
│        │  │  │  ├─ p.h4-mobile [text-light] → "Get a free AEO report"
│        │  │  │  └─ p.paragraph-mobile [text-light] → "Deep visibility analysis and clear recommendations"
│        │  │  └─ form.flex [flex-row, text-light]
│        │  │     ├─ input.paragraph-small-desktop [flex-row, text-light] → [url] "Enter your website U"
│        │  │     └─ div.relative [text-light]
│        │  │        └─ button.relative [bg:#ffffff, flex-row, text-dark] → "Analyze my brand"
│        │  │           └─ ... (深层省略)
│        │  └─ div.relative [text-light]
│        │     └─ img.relative → alt:"Ramp AEO Report"
│        └─ div.flex [flex-col, text-light]
│           ├─ div.flex [flex-col, text-light]
│           │  ├─ div.flex [flex-col, text-light]
│           │  │  ├─ p.h4-mobile [text-light] → "Try a Profound Agent"
│           │  │  └─ p.paragraph-mobile [text-light] → "Access our most popular Agent at no cost"
│           │  └─ form.flex [flex-row, text-light]
│           │     ├─ input.paragraph-small-desktop [flex-row, text-light] → [email] "Enter your email"
│           │     └─ div.relative [text-light]
│           │        └─ button.relative [bg:#ffffff, flex-row, text-dark] → "Try an Agent"
│           │           └─ ... (深层省略)
│           └─ div.relative [text-light]
│              ├─ div.absolute [flex-row, text-light]
│              │  ├─ svg.-left-[18px] [text-light] → [icon]
│              │  └─ div.before:content-[''] [bg:#0a0a0a, flex-row, text-light]
│              │     ├─ svg [text-light] → [icon]
│              │     └─ p.font-medium [text-light] → "Demand Gen Agent"
│              ├─ div.absolute [flex-row, text-light]
│              │  ├─ svg.-left-[18px] [text-light] → [icon]
│              │  └─ div.before:content-[''] [bg:#0a0a0a, flex-row, text-light]
│              │     ├─ svg [text-light] → [icon]
│              │     └─ p.font-medium [text-light] → "Brand Agent"
│              └─ div.absolute [flex-row, text-light]
│                 ├─ svg.-left-[18px] [text-light] → [icon]
│                 └─ div.before:content-[''] [bg:#0a0a0a, flex-row, text-light]
│                    ├─ svg [text-light] → [icon]
│                    └─ p.font-medium [text-light] → "Content Agent"
├─ section.py-12 [text-light]
│  └─ div.new-container [flex-col, text-light]
│     ├─ div.px-3 [flex-col, text-light]
│     │  ├─ div.invisible [flex-row, text-light]
│     │  │  ├─ div.flex [flex-row, text-light]
│     │  │  │  ├─ span.h3-mobile [text-light] → "Zero Click"
│     │  │  │  │  ├─ div [text-light]
│     │  │  │  │  ├─ div [text-light]
│     │  │  │  │  ├─ div [text-light]
│     │  │  │  │  └─ ... (6 more div)
│     │  │  │  ├─ h1.sr-only [text-light] → "Zero Click"
│     │  │  │  └─ div.relative [text-light]
│     │  │  └─ div.pointer-events-none [flex-row, text-light]
│     │  │     ├─ div.invisible [text-light]
│     │  │     └─ span.inline-flex [flex-row, text-light] → "26"
│     │  └─ p.paragraph-large-mobile → "Join us at Zero Click 2026, the conference for ..."
│     └─ div.grid [grid-2, text-light]
│        ├─ a.relative [flex-col, text-light] → "San FranciscoSFApril 8, 2026View Details"
│        │  ├─ header.relative-z-5 [flex-col, text-light]
│        │  │  ├─ div.flex [flex-row, text-light]
│        │  │  │  ├─ h4.h4-mobile [text-light] → "San Francisco"
│        │  │  │  └─ span.small-spaced → "SF"
│        │  │  ├─ p.paragraph-small-mobile → "April 8, 2026"
│        │  │  └─ div.relative [text-light]
│        │  │     └─ button.relative [flex-row, text-light] → "View Details"
│        │  │        └─ div.relative [text-light]
│        │  └─ div.absolute [text-light]
│        │     └─ img.-bottom-10 → alt:"Zero Click location image"
│        └─ a.relative [flex-col, text-light] → "New York CityNYJune 11, 2026View Details"
│           ├─ header.relative-z-5 [flex-col, text-light]
│           │  ├─ div.flex [flex-row, text-light]
│           │  │  ├─ h4.h4-mobile [text-light] → "New York City"
│           │  │  └─ span.small-spaced → "NY"
│           │  ├─ p.paragraph-small-mobile → "June 11, 2026"
│           │  └─ div.relative [text-light]
│           │     └─ button.relative [flex-row, text-light] → "View Details"
│           │        └─ div.relative [text-light]
│           └─ div.absolute [text-light]
│              └─ img.-bottom-10 → alt:"Zero Click location image"
└─ ... (1 more section)
```

### 文案清单

- h1: "Marketing agents to win in"
- h2: "Scale your presence, not your workload"
- h2: "Prompt Volumes"
- h2: "Answer Engine Insights"
- h2: "Agents"
- h2: "Agent Analytics"
- h2: "Agents for every marketing channel"
- h1: "Zero Click"
- h4: "San Francisco"
- h4: "New York City"
- p: "Request your spot today"
- p: "Announcing Zero Click NY on June 11"
- p: "Reach millions of consumers who are using AI to discover new products and brands"
- p: "AEO-Optimized FAQ Generator"
- p: "Web Page Scrape"
- p: "Determine Core Search Query"
- p: "Perplexity FAQ Research"
- p: "Used by the best marketers in the world"
- p: "Over 100 million people search with AI every day. Brands that aren't recommended get left behind."
- p: "Profound ensures yours isn't one of them."
- p: "Profound is the full stack marketing platform for the marketer of the future. Understand, analyze, build, and measure with the Profound platform."
- p: "See what millions of people ask AI, and align strategy with demand."
- p: "See how AI represents your brand in every conversation."
- p: "Autonomous workers for every function of your marketing team."
- p: "Track how your site is interpreted and crawled by ChatGPT, Gemini, Claude, Perplexity, and more."
- p: "George Bonaci, VP of Growth & Demand"
- p: "Increase AI Search visibility"
- p: "Content & Demand"
- p: "Drive human and bot traffic"
- p: "PR & Communications"
- p: "Shape AI conversations"
- p: "Get a free AEO report"
- p: "Deep visibility analysis and clear recommendations"
- p: "Try a Profound Agent"
- p: "Access our most popular Agent at no cost"
- p: "Demand Gen Agent"
- p: "Brand Agent"
- p: "Content Agent"
- p: "Join us at Zero Click 2026, the conference for marketers building the future. Request your spot today."
- p: "April 8, 2026"
- p: "June 11, 2026"
- p: "Get your brand mentioned by"
- p: "Reach millions of consumers who are using AI to discover new products and brands"
- button: "Publish" (#ffffff)
- button: "Running..." (#292929)
- button: "Analyze my brand" (#ffffff)
- button: "Try an Agent" (#ffffff)
- button: "View Details"
- a: "Get a Demo"
- a: "Get Started"
- a: "Learn more"
- a: "Read case study"

### 图片
- images/img_629fa1b20b0c.jpg (alt: Items Sidebar)
- images/img_b3d398a0ba09.jpg (alt: Details Sidebar)
- images/img_f5c861013e76.jpg (alt: Discover what millions of people ask AI)
- images/img_418af35af487.jpg (alt: Profound provides proven templates to generate content)
- images/img_e74d6bb6e9f2.jpg (alt: Profound provides proven templates to generate content)

### 交互组件

- **Carousel 轮播**: 带箭头的轮播
  - 实现: `const [currentIndex, setCurrentIndex] = useState(0)`
  - 样式: 当前选中项高亮边框/背景
  - 注意: 若有头像选择器，点击头像切换内容

- **Dropdown 下拉**: 46 个选择器
  - 实现: `const [selected, setSelected] = useState('')`
  - 样式: 点击展开选项列表
