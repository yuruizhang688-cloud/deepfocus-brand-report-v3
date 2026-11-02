# deepfocus-brand-report-v3

DeepFocus 品牌报告 v3 的已发布静态产物。

## 内容与本地预览

`index.html`、`assets/`、`codex-site-version.json`。

这是静态发布仓。在仓库根目录运行 `python3 -m http.server 8080 --bind 127.0.0.1`，访问 `http://127.0.0.1:8080/`。

<!-- repository-maintenance:begin -->
## 维护与发布

本仓是 v3 已审核静态发布产物；assets 中保留报告 Markdown 和字体许可。v2 源稿与生成器另存于 deepfocus-brand-report-v2，不能将其生成结果当作 v3 的可复现构建。修改报告须保留对应源稿和校验后的发布文件。

公开入口：https://yuruizhang688-cloud.github.io/deepfocus-brand-report-v3/ 。Pages 源目录为 `main/`。

日常变更先在分支提交，通过本仓验证后使用 Pull Request 合入 main。仓库保护以 GitHub 实际设置为准；个人私有仓的保护规则可能受套餐限制。Issue 用于记录缺陷与待办，缺少 Issue 不代表没有工作。

维护快照使用 `maintenance-YYYYMMDD.N` 标签与 GitHub Release 记录源码版本；它不自动代表生产部署、真实平台验收或桌面安装包发布。Tag 发布后保持不可变，修正使用新版本。

许可范围见根目录 LICENSE；第三方代码、字体和素材保留各自许可证。不要提交 .env、Cookie、访问令牌、浏览器资料或运行数据库。
<!-- repository-maintenance:end -->
