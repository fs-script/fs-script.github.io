---
title: Git / SVN
description: Git / SVN
editLink: false
lastUpdated: false
contributors: false
prev:
  text: Icon
  link: /d-tools/d-icon.md
next:
  text: Use
  link: /d-tools/b-use.md
---

## 一、Git

> Git 是分布式版本管理系统，为了更好的管理 Linux 内核开发而创立的。

- 工作区（写代码）-> `git add` ->暂存区（临时存储）-> `git commit` -> 本地库（记录历史版本）-> `git push` -> 远程库
- 代码托管中心是基于网络服务器的远程代码仓库，简称远程库。有互联网类的，例如 GitHub、Gitee；有局域网类的，例如 GitLab

### 01 - 常用命令

| 命令 | 描述 |
| --- | --- |
| git --version | 查看 git 版本 |
| git config --global user.name 用户名 | 设置用户签名 |
| git config --global user.email 邮箱地址 | 设置邮箱地址 |
|  |  |
| git init | 初始化本地库 |
| git status | 查看状态 |
| git add 文件名 | 追加到暂存区 |
| git rm --cached 文件名 | 删除暂存区文件 |
| git commit -m "日志信息" 文件名 | 提交到本地库 |
| git reflog | 查看版本 |
| git log | 查看版本详细信息 |
|  |  |
| git push 别名或链接 分支 | 推送 |
| git pull 别名或链接 分支 | 拉取 |
| git clone 链接 | 克隆 |
| git clone 链接 . | 仅克隆文件内容不带根目录 |

### 02 - 版本穿梭

| 命令 | 描述 |
| --- | --- |
| git reset --hard 版本号 | 穿梭至指定的版本 |

### 03 - 分支操作

- 分支可以并行推进多个功能的开发，提高开发效率，分支开发失败不会影响主分支或其他分支。

| 命令 | 描述 |
| --- | --- |
| git branch 分支名 | 创建分支 |
| git branch -v | 查看分支 |
| git checkout 分支名 | 切换分支 |
| git merge 分支名 | 把指定的分支合并到当前分支上 |

- 冲突合并：手动修改文件，提交时不加文件名。

### 04 - 团队协作机制

- 团队内协作
- 跨团队协作 fork、pull request、审核、merge

## 二、SVN

> 集中式版本控制的典型代表 SVN

- 目录级权限控制，按目录划分权限
- TortoiseSVN 本地客户端
- SVNBucket 远程仓库

### 01 - 检出

### 02 - 新增

### 03 - 提交

### 04 - 更新

### 05 - 历史记录

### 06 - 撤销本地修改

### 07 - 撤销已提交内容

### 08 - 恢复到指定版本

### 09 - 忽略文件与文件夹

### 10 - 解决冲突

### 11 - 分支

- 经典目录结构 trunk（主干）、branches（分支）、tags（标签）

### 12 - 代码暂存

### 13 - 代码合并

## 三、GitHub

- 创建远程库地址别名：

| 命令 | 描述 |
| --- | --- |
| git remote -v | 查看当前已有别名 |
| git remote add 别名 地址 | 创建别名 |

- push 需要加入团队远程库的账号
- SSH 免密登录，需要生成一个密钥对

```
ssh-keygen -t rsa -C pygoogle@163.com
```

- 将生成的公钥添加到远程库的账号

## 四、GitLab
