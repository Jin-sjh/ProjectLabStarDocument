# GitHub 基本使用手册（组员）

## 一、GitHub 协作规范
+ **GitHub**：代码托管 + 协作平台
+ **团队基本协作模式**：
    1. 代码统一放在 GitHub 仓库（Repository）
    2. 每个成员在自己的分支（Branch）上开发
    3. 通过 Pull Request（PR）合并到主分支
    4. 不直接向 `main/master` 推代码

---

## 二、准备工作
### 1. 注册 & 登录
+ 注册 GitHub 账号：[https://github.com](https://github.com)

### 2. 安装工具
+ **Git**
    - Windows / macOS / Linux：[https://git-scm.com](https://git-scm.com)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/27223229/1768094606879-ca811224-21a3-4c8a-ba25-f503d57acd27.png)

### 3. 配置 Git
```bash
git config --global user.name "你的名字"
git config --global user.email "你的GitHub邮箱"
```

---

## 三、加入团队项目
### 1. 接受仓库邀请
+ 在 GitHub 邮箱或通知中点击 **Accept invitation**

### 2. 克隆项目到本地
```bash
git clone 仓库地址
```

示例：

```bash
git clone https://github.com/组织名/项目名.git
```

进入项目目录：

```bash
cd 项目名
```

---

## 四、日常开发标准流程
> **每次写代码都按以下流程**
>

### Step 1：同步最新代码
```bash
git pull
```

---

### Step 2：创建自己的分支
> ❌ 不要在 main/master 分支直接开发
>

```bash
git checkout -b feature/你的功能名
```

示例：

```bash
git checkout -b feature/login-page
```

---

### Step 3：编写/修改代码
+ 使用编辑器正常写代码
+ 注意代码规范 & 注释

---

### Step 4：查看修改内容
```bash
git status
git diff
```

---

### Step 5：提交代码到本地
```bash
git add .
git commit -m "简要说明本次修改"
```

**Commit 信息规范**

:::warning
git commit -m "tag: message"

:::

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/27223229/1768095050161-94ac68ea-29b5-4c5c-9e7b-d0797cd1ae2d.png)

| Type | 说明（Description） | 使用情景 |
| :---: | --- | --- |
| **feat** | a new feature is introduced with the changes | 新增功能，对用户或系统可感知的能力提升 |
| **fix** | a bug fix has occurred | 修复已有功能中的缺陷或错误 |
| **perf** | an existing feature improved | 在不改变功能的前提下进行性能优化 |
| **docs** | changes to the documentation | 仅修改文档内容，不涉及代码逻辑 |
| **style** | code formatting | 代码格式调整（缩进、空格、换行等） |
| **refactor** | refactoring production code | 重构生产代码，不新增功能、不修复 bug |
| **revert** | version reversion | 回滚之前的提交或功能变更 |
| **chore** | changes to development or auxiliary tools | 与业务无关的杂项修改，如依赖、配置、工具 |
| **test** | adding missing tests, refactoring tests | 新增或修改测试代码 |
| **build** | package the codebase | 构建系统或打包流程相关修改 |
| **ci** | continuous integration | CI/CD 流程或配置相关修改 |
| **BREAKING CHANGE** | a breaking API change | 不向下兼容的重大变更 |


---

### Step 6：推送分支到 GitHub
```bash
git push origin 分支名
```

---

## 五、发起 Pull Request（PR）
### 1. 在 GitHub 页面操作
1. 打开项目仓库
2. 点击 **Pull requests**
3. 点击 **New pull request**
4. 选择：
    - base：`main/master`
    - compare：你的分支
5. 填写说明，点击 **Create pull request**

### 2. PR 描述建议包含
+ 本次做了什么
+ 是否影响其他模块
+ 是否需要特别注意的地方

---

## 六、代码评审 & 合并
+ PR 创建后：
    - 等待队友 / 负责人 Review
    - 根据评论修改代码
    - 合并

---

## 七、常见操作速查
### 1. 切换分支
```bash
git checkout 分支名
```

### 2. 查看所有分支
```bash
git branch
```

### 3. 删除本地分支（合并后）
```bash
git branch -d 分支名
```

---

## 八、注意事项
❌ **不要直接在 main/master 分支写代码**  
❌ **不要提交无法运行/明显报错的代码**  
❌ **不要随意 force push（除非明确被允许）**

✅ **每天开始工作先 **`git pull`  
✅ **小功能小提交，方便回滚和 Review**  
✅ **遇到冲突及时沟通**

---

## 九、冲突解决
当出现提示：

```plain
CONFLICT (content): Merge conflict
```

处理步骤：

1. 打开冲突文件
2. 手动选择保留哪部分代码
3. 删除 `<<<<<<< ======= >>>>>>>`
4. 保存文件
5. 重新提交：

```bash
git add .
git commit -m "解决合并冲突"
```

---





