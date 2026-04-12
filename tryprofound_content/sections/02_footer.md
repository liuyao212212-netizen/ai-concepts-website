## footer

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
footer [text-light]
├─ div.new-container [text-light]
│  └─ div.grid [grid-4, text-light]
│     ├─ div.px-3 [text-light]
│     │  └─ a.flex [flex-row, text-light]
│     │     └─ svg.mt-1 [text-light] → [icon]
│     ├─ div.px-3 [text-light]
│     │  ├─ p.paragraph-small-desktop [text-light] → "Platform"
│     │  └─ div.flex [flex-col, text-light]
│     │     ├─ a.paragraph-small-desktop [flex-row] → "Agents"
│     │     ├─ a.paragraph-small-desktop [flex-row] → "Prompt Volumes"
│     │     ├─ a.paragraph-small-desktop [flex-row] → "Agent Analytics"
│     │     └─ ... (3 more a)
│     ├─ div.px-3 [text-light]
│     │  ├─ p.paragraph-small-desktop [text-light] → "Resources"
│     │  └─ div.flex [flex-col, text-light]
│     │     ├─ a.paragraph-small-desktop [flex-row] → "Resource Center"
│     │     ├─ a.paragraph-small-desktop [flex-row] → "Help Center"
│     │     ├─ a.paragraph-small-desktop [flex-row] → "Customers"
│     │     └─ ... (5 more a)
│     └─ ... (5 more div)
└─ div.new-container [text-light]
   └─ div.px-3 [text-light]
      └─ div.flex [flex-row, text-light]
         ├─ p.paragraph-small-desktop → "© 2026 Profound"
         └─ p.paragraph-small-desktop → "All rights reserved."
```

### 文案清单

- p: "© 2026 Profound"
- p: "All rights reserved."
- button: "Legal"
- a: "Agents"
- a: "Prompt Volumes"
- a: "Agent Analytics"
- a: "Answer Engine Insights"
- a: "Shopping"
- a: "Guides"
- a: "Resource Center"
- a: "Help Center"
- a: "Customers"
- a: "Blog"
