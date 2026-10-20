# 素材与改编说明

- 模板检索：HTMLrev，https://htmlrev.com/free-html-templates.html 。
- 原模板：Augustine 1.0.0，StyleShout，https://styleshout.com/free-templates/augustine/ 。
- 实际下载：https://styleshout.com/download/augustine/ ，2026-10-17。
- 许可：见 LICENSE-template.txt；允许个人、商业使用和修改，必须保留 StyleShout 可见署名链接。不是 CC BY 3.0。此作业不声称布局完全原创。
- 改编：保留模板核心 CSS、供应商 JS、首屏叠字、主导航、双栏时间线、作品与页脚布局；替换姓名、文案、影像和链接，将商业简历内容调整为学习方向与课程实践；新增中文回退字体、键盘菜单、演示页与打印适配。
- 字体：原模板的 Castoro / Inter 来自 Google Fonts，改为本地存放。授权分别见 fonts/OFL-Castoro.txt、fonts/OFL-Inter.txt。
- 早期版本影像：NASA / USGS，Lena Delta, Russia（Landsat 7，2000-07-27）；https://science.nasa.gov/resource/lena-delta-russia/ 。文件保留于 images/lena-delta.jpg；当前首页已改用下方注明的 AI 概念插画。
- scene.svg、labels.svg、after.svg：借助生成式 AI 编写的几何合成示意图；不代表实测数据或模型输出。
- favicon.svg：此前课程网页中制作的简单矢量图标。
- 个人内容：赵玉溪，计算机技术专业研究生；研究兴趣与学习计划不作为已取得成果。联系邮箱：2251358426@qq.com；GitHub 账号：zyxx7。

## 个人内容与项目配图
教育背景、三项项目及获奖经历根据赵玉溪提供的中文简历整理；深圳大学计算机技术硕士研究生身份与遥感兴趣来自本人说明。未补写论文、精度或其他未提供的成果。当前项目封面采用 AI 概念插画，先前的 SVG 流程示意保留在源码中；两者均非项目运行截图。未将简历中的电话、年龄及具体部队信息放到公开页面。

## 土地覆盖变化研究图（2026-10-20）

以下三图由用户提供的本地研究材料原样复制，未裁切、重绘或生成新数据。这里只介绍图面内容与分析思路，不据此推定本人科研分工、发表情况或实验结论。原图与网页文件的 SHA256 已核对一致。

- `images/research/china-lulc-2020.png`：4200×3200；来源 `D:/codex-work/科研/GEE土地覆盖变化论文/研究核心区/03_图表/SVG底图素材/ALCC图/成图/China_ALCCv2_LULC_2020_Composite_Preview.png`。2020 年全国土地覆盖图，保留指北针及南海附图。
- `images/research/land-cover-workflow.png`：1590×1121；来源用户粘贴图 `C:/Users/zyx/AppData/Local/Temp/codex-clipboard-b97c0425-e29d-4878-855e-16cd59a0c0d8.png`。已保存正式副本，网页不依赖该临时路径。
- `images/research/c01-transitions.png`：2102×2102；来源 `D:/codex-work/科研/GEE土地覆盖变化论文/研究核心区/03_图表/SVG底图素材/簇弦图/Figure_C01_directional_chord.png`。仅描述 C01 簇内转移结构，图中比例不代表全国比例或模型准确率。

图片链接支持完整图阅读、适应窗口、原始尺寸及 10%—300% 缩放（极窄窗口允许更小的适应比例）；原图链接可独立打开。科研图与首屏及开发项目的 AI 概念插画分开说明。


## 本次视觉升级配图（2026-10-20）

以下四张为 OpenAI 内置图像生成工具生成的概念插画，用于页面视觉表达，不是卫星实测影像、项目运行截图或实验结果。原始生成文件保留于本机生成目录，网页采用 WebP 压缩版本。

### earth-hero.webp

提示词：

> Use case: stylized-concept. Asset type: panoramic hero artwork for a Chinese computer vision and remote sensing graduate student's portfolio. Create a spectacular premium editorial visualization of Earth observation: an oblique satellite view of a branching river delta and coastal city at blue hour, ultra-detailed realistic terrain and dark ocean, luminous turquoise tributaries, a finely delineated warm copper coastline and amber city lights, sparse precision contour lines and geospatial scan grids integrated with landscape, cinematic depth and atmosphere. A large curved planetary horizon on the upper right, most terrain concentration on right and bottom with dark navy negative space left upper for web typography. Wide landscape 16:9. Refined scientific visual art, photographic textures, not a busy video game, no spacecraft, no people, no words, no numbers, no text, no watermark. Main colors midnight blue, cyan, jade, tiny burnt orange. Visually breathtaking but composed.

### posture-cover.webp

提示词：

> Use case: stylized-concept. Asset type: widescreen project cover illustration for posture monitoring computer vision student project. Premium cinematic 3D editorial still, a translucent icy glass abstract human seated in an ergonomic chair in side profile, delicate cyan pose keypoint dots and connecting lines along the back neck and limbs, elegant orange arc near neck indicating pose angle, sculpted dark navy studio background, one luminous teal floor plane, dramatic soft rim lighting, hyper detailed glass material, sophisticated technical art. Center subject, wide 3:2 composition, no interface, no text, no logos, no watermark, conceptual art rather than proof of actual system execution.

### campus-cover.webp

提示词：

> Use case: stylized-concept. Asset type: widescreen project cover illustration for a university student assessment platform backend project. Premium architectural 3D editorial still: miniature layered modern university building composed of frosted mint glass blocks sitting on a midnight navy base, a few vertically floating warm orange and pearl rectangular record cards with abstract engraved lines but no letters, elegant translucent teal data streams connect levels, crisp isometric perspective, dramatic studio lighting and realistic caustics, tactile materials and beautiful shadows, coherent restrained geometric composition. Wide 3:2, central subject, no typography, no words, no numbers, no watermark. Conceptual art, not a software screenshot.

### sentiment-cover.webp

提示词：

> Use case: stylized-concept. Asset type: widescreen project cover illustration for a social media sentiment analysis student project. Premium cinematic 3D editorial still: luminous sculptural translucent glass speech bubbles in cyan and pale mint forming a flowing ribbon of conversation above a dark navy ground, small orange translucent analytical prisms and delicate blue connected data points, an abstract elegant wave in background, compelling depth and negative space, crisp realistic refraction, soft studio rim lighting, tactile high end digital art. Wide 3:2, central subject, no words, no text, no labels, no logos, no watermark. Conceptual cover art, not actual analytics results.

