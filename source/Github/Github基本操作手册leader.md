# GitHub 基本操作手册（leader）

> 适用对象：
>
> + 项目负责人
> + 技术负责人 / Maintainer
> + 拥有仓库 Admin / Maintain 权限的成员
>

---

## 一、管理员职责
管理员 ≠ 写更多代码，而是保证：

1. **代码安全**（不被误删、不被误合）
2. **协作有序**（流程统一、责任明确）
3. **项目可控**（可追溯、可回滚、可交接）
4. **成员低成本参与**（减少“不会用 GitHub”的阻力）

---

## 二、仓库初始化
### 1️⃣ 创建 Private 仓库
+ Visibility：**Private**
+ 勾选：
    - ✅ Add a README
    - ✅ Add .gitignore（按技术栈）
    - （可选）Add LICENSE（内部项目可不加）

---

### 2️⃣ 设置默认分支
+ 推荐：`main`
+ Settings → Branches → Default branch

---

### 3️⃣ 添加成员 & 权限建议
| 角色 | 权限 | 建议 |
| --- | --- | --- |
| 项目负责人 | Admin | 1–2 人 |
| 核心开发 | Maintain / Write | 可 Review |
| 普通成员 | Write | 不可合并 main |
| 实习/外包 | Read / Write | 严格限制 |


📌 **原则：最小权限**

---

## 三、分支策略
### 推荐分支结构
+ `main`：稳定可发布版本
+ `develop`（可选）：集成分支
+ `feature/*`：功能分支
+ `fix/*`：问题修复

---

### 禁止行为
❌ 任何人直接 push `main`  
❌ 使用 `--force` 修改公共分支

---

## 四、Branch Protection
### 设置路径
`Settings → Branches → Add branch protection rule`



<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/27223229/1768097541286-247464e9-20a3-49ac-87f4-1bbc05ed8841.png)

---

## 五、Pull Request 管理规范
### 1️⃣ PR 何时允许合并
+ 功能完整
+ 编译 / 运行通过
+ Review 意见已处理
+ PR 描述清晰

---

### 2️⃣ 管理员 Review 重点
+ 是否破坏已有功能
+ 是否引入敏感信息
+ 是否过度改动无关代码
+ 是否符合分支 / Commit 规范

---

## 六、Issue
### Issue 使用规范
<details class="lake-collapse"><summary id="uf8469f09"><span class="ne-text">🐞</span><span class="ne-text"> Bug 报告</span></summary><h3 id="zK8sd"><span class="ne-text">一、系统环境（System Environment）</span></h3><p id="u94e42001" class="ne-p"><span class="ne-text">请尽可能详细填写你的运行环境信息：</span></p><ul class="ne-ul"><li id="ubb839a8b" data-lake-index-type="0"><span class="ne-text">操作系统（OS）：  </span></li><li id="ue8aeeb5e" data-lake-index-type="0"><span class="ne-text">Python / 编程语言版本：  </span></li><li id="ue1e29819" data-lake-index-type="0"><span class="ne-text">相关依赖及版本（如有）：</span></li></ul><hr id="z7Bms" class="ne-hr"><h3 id="ChOhz"><span class="ne-text">二、问题描述（Problem Description）</span></h3><p id="ubcf7a93a" class="ne-p"><span class="ne-text">请清晰、简要地描述你遇到的问题：</span></p><ul class="ne-ul"><li id="ucedaa069" data-lake-index-type="0"><span class="ne-text">执行了什么操作？</span></li><li id="uff41edea" data-lake-index-type="0"><span class="ne-text">出现了什么异常或错误？</span></li><li id="u31f123ca" data-lake-index-type="0"><span class="ne-text">问题发生的具体场景是什么？</span></li></ul><hr id="WT5hE" class="ne-hr"><h3 id="h961J"><span class="ne-text">三、复现步骤（Steps to Reproduce）</span></h3><div class="ne-quote"><p id="ub8b6f054" class="ne-p"><span class="ne-text">若问题可稳定复现，请提供最小复现步骤。</span></p></div><p id="ue0583c39" class="ne-p"><span class="ne-text">1. <br /></span><span class="ne-text">2. <br /></span><span class="ne-text">3. </span></p><hr id="FrZxJ" class="ne-hr"><h3 id="q87YD"><span class="ne-text">四、日志与报错信息（Logs / Error Messages）</span></h3><p id="u21189db7" class="ne-p"><span class="ne-text">请粘贴完整的报错信息、日志或命令行输出（</span><strong><span class="ne-text">不要使用截图</span></strong><span class="ne-text">）：</span></p><pre data-language="latex" id="ojr06" class="ne-codeblock language-latex"><code>在此粘贴错误信息或日志</code></pre><p id="u0b30e621" class="ne-p"><span class="ne-text"></span></p><h3 id="g6p1a"><span class="ne-text">五、当前结果与期望结果（Actual vs Expected Result）</span></h3><p id="u6e591dd1" class="ne-p"><span class="ne-text">• 当前结果（Actual Result）：</span></p><p id="u2972d1bf" class="ne-p"><span class="ne-text">• 期望结果（Expected Result）：</span></p><h3 id="WKtBp"><span class="ne-text">六、问题分析或猜测（Possible Cause / Analysis）</span></h3><p id="u2bd4f407" class="ne-p"><span class="ne-text">如对问题原因有初步判断，请在此说明（可选）：</span></p><p id="u2fadca09" class="ne-p"><span class="ne-text">• 是否与环境或版本有关？</span></p><p id="u4cb6ddb7" class="ne-p"><span class="ne-text">• 是否尝试过其他解决方法？</span></p><h3 id="NEo5s"><span class="ne-text">七、联系方式（Contact Information）</span></h3><p id="u88a4e54f" class="ne-p"><span class="ne-text">如需进一步沟通，可提供以下信息（可选）：</span></p><p id="u81571acf" class="ne-p"><span class="ne-text">• GitHub ID / Email：</span></p><h3 id="vh1qB"><span class="ne-text">八、补充信息（Additional Information）</span></h3><p id="uaa962fa7" class="ne-p"><span class="ne-text">补充任何有助于定位问题的其他信息</span></p></details>
---

### Labels
+ `bug`
+ `feature`
+ `urgent`
+ `discussion`
+ `help wanted`

---

### Projects
+ 使用 GitHub Projects 看板：
    - Todo → In Progress → Review → Done

---

## 七、安全风险控制
### 1️⃣ 敏感信息防护
+ 检查 `.gitignore`
+ 禁止提交：
    - `.env`
    - Token / 密钥

---

### 2️⃣ 开启安全功能
Settings → Security

+ ✅ Dependabot（如适用）
+ ✅ Secret scanning（GitHub 会自动扫描）

---

