// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // 更新内容缓存间隔 单位(秒)；即每个页面有5秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  THEME: process.env.NEXT_PUBLIC_THEME || 'example', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  LANG: process.env.NEXT_PUBLIC_LANG || 'jp-JP', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2025, // e.g if leave this empty, current year will be used.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  TAG_SORT_BY_COUNT: true, // 标签是否按照文章数量倒序排列，文章多的标签排在前。
  IS_TAG_COLOR_DISTINGUISHED:
    process.env.NEXT_PUBLIC_IS_TAG_COLOR_DISTINGUISHED === 'true' || true, // 对于名称相同的tag是否区分tag的颜色

  // 3.14.1版本后，欢迎语在此配置，英文逗号隔开 ,  即可支持多个欢迎语打字效果。
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi，我是一个程序员, Hi，我是一个打工人,Hi，我是一个干饭人,欢迎来到我的博客🎉',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || false, // 支持Menu 类型，从3.12.0版本起，各主题将逐步支持灵活的二级菜单配置，替代了原来的Page类型，此配置是试验功能、默认关闭。

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'きらりんご', // 著者のニックネーム 例: tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || 'ネットの隅で生息しているハリネズミ', // 著者の自己紹介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://www.babelapple.com', // サイトのURL
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Blog' , // サイトのキーワード（英語のカンマで区切る）

  // ソーシャルリンク。必要がない場合は空欄にしてください。例: CONTACT_WEIBO:''
  //CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '', // メールアドレス 例: mail@tangly1024.com
  //CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // Weiboの個人ホームページ
  //CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // Twitterの個人ホームページ
  //CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || '', // GitHubの個人ホームページ 例: https://github.com/tangly1024
  //CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // Telegramのアドレス 例: https://t.me/tangly_1024
  //CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // LinkedInのホームページ
  //CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // Instagramのアドレス
  //CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', // B站主页
  //CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Youtube主页
  //CONTACT_XIAOHONGSHU: process.env.NEXT_PUBLIC_CONTACT_XIAOHONGSHU || '', // 小红书主页
  //CONTACT_ZHISHIXINGQIU: process.env.NEXT_PUBLIC_CONTACT_ZHISHIXINGQIU || '', // 知识星球
  //CONTACT_WEHCHAT_PUBLIC: process.env.NEXT_PUBLIC_CONTACT_WEHCHAT_PUBLIC || '', // 微信公众号 格式：https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=【xxxxxx】==#wechat_redirect

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Notion域名，您可以选择用自己的域名进行反向代理，如果不懂得什么是反向代理，请勿修改此项

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // ブログのファビコン設定。デフォルトは /public/favicon.ico を使用します。オンライン画像もサポートされます（例: https://img.imesong.com/favicon.png）。

  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 800, 
  // 画像圧縮の幅のデフォルト値。ブログのカバー画像や記事の内容に適用されます。値が小さいほど画像の読み込みが速くなります。
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1200, 
  // 記事内の画像をクリックして拡大したときの画質幅。ウェブページで実際に表示される幅ではありません。
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || '', 
  // ランダム画像API。以下のキーワードが設定されていない場合、ホームページのカバー画像、プロフィール画像、記事のカバー画像はランダム画像に置き換えられます。
  RANDOM_IMAGE_REPLACE_TEXT:
    process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT || 'images.unsplash.com', 
// 画像置き換えをトリガーするURLキーワード（複数はカンマで区切る）。画像のURLにこのキーワードが含まれる場合のみ、ランダム画像URLに置き換えられます。
// 例: images.unsplash.com（Notionの画像ホスティングがすべて置き換えられます）。
// Notionにランダム画像URLを設定していて、そのサービスが停止した場合に一括で置き換えることができます。
// デフォルトでは、Notionにアップロードしたホームページのカバー画像とプロフィール画像も置き換えられるため、これらの画像を他のホスティングサービスにアップロードし、リンクを設定することをお勧めします。

// START ************ウェブサイトのフォント設定*****************
FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-light', 
// フォントスタイル。'font-serif'（セリフ体）または 'font-sans'（サンセリフ体）が選択可能。フォントの太さはスペースで区切り指定します。例: font-light。

FONT_URL: [
    // フォントのCSS設定
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
],
FONT_SANS: [
    // サンセリフ体のフォント例
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
],
FONT_SERIF: [
    // セリフ体のフォント例
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
],
FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', 
// font-awesomeのフォントアイコンアドレス。例: https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

// END ************ウェブサイトのフォント設定*****************

// パスとコンポーネントのマッピング。異なるパスでテーマのどのコンポーネントを表示するかを指定
LAYOUT_MAPPINGS: {
  '-1': 'LayoutBase',
  '/': 'LayoutIndex',
  '/archive': 'LayoutArchive',
  '/page/[page]': 'LayoutPostList',
  '/category/[category]': 'LayoutPostList',
  '/category/[category]/page/[page]': 'LayoutPostList',
  '/tag/[tag]': 'LayoutPostList',
  '/tag/[tag]/page/[page]': 'LayoutPostList',
  '/search': 'LayoutSearch',
  '/search/[keyword]': 'LayoutSearch',
  '/search/[keyword]/page/[page]': 'LayoutSearch',
  '/404': 'Layout404',
  '/tag': 'LayoutTagIndex',
  '/category': 'LayoutCategoryIndex',
  '/[prefix]': 'LayoutSlug',
  '/[prefix]/[slug]': 'LayoutSlug',
  '/[prefix]/[slug]/[...suffix]': 'LayoutSlug',
  '/auth/result': 'LayoutAuth',
  '/sign-in/[[...index]]': 'LayoutSignIn',
  '/sign-up/[[...index]]': 'LayoutSignUp',
  '/dashboard/[[...index]]': 'LayoutDashboard'
},

  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // ページ内容のコピーを許可するかどうか。デフォルトは許可。falseに設定すると、コピーが完全に禁止されます。
  // 自定义右键菜单
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || true, // カスタム右クリックメニュー。システムメニューを上書き
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH ||
    false, // テーマ切り替えを表示するか
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE || true, // ダークモードを表示するか
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK || false, // リンク共有を表示するか
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST || true, // ランダム記事を表示するか
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY || true, // カテゴリを表示するか
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_TAG:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_TAG || true, // タグを表示するか

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXXX

  // START********代码相关********
  // PrismJs 代码相关
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER:
    'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // 代码主题 @see https://github.com/PrismJS/prism-themes
  PRISM_THEME_PREFIX_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // 代码块默认主题
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // 是否开启浅色/深色模式代码主题切换； 开启后将显示以下两个主题
  PRISM_THEME_LIGHT_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // 浅色模式主题
  PRISM_THEME_DARK_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // 深色模式主题

  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // 代码左上角显示mac的红黄绿图标
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // 是否显示行号
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // 是否支持折叠代码框
  CODE_COLLAPSE_EXPAND_DEFAULT:
    process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true, // 折叠代码默认是展开状态

  // END********代码相关********

  // Mermaid 图表CDN
  MERMAID_CDN:
    process.env.NEXT_PUBLIC_MERMAID_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // QRCodeCDN
  QR_CODE_CDN:
    process.env.NEXT_PUBLIC_QR_CODE_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // 文章分享功能 ，将在底部显示一个分享条
  POSTS_SHARE_SERVICES:
    process.env.NEXT_PUBLIC_POST_SHARE_SERVICES ||
    'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // 分享的服務，按顺序显示,逗号隔开
  // 所有支持的分享服务：link(复制链接),wechat(微信),qq,weibo(微博),email(邮件),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  // 文章URL前缀
  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX ?? 'article',
  // POST类型文章的默认路径前缀，例如默认POST类型的路径是  /article/[slug]
  // 如果此项配置为 '' 空， 则文章将没有前缀路径
  // 支援類似 WP 可自訂文章連結格式的功能：https://wordpress.org/documentation/article/customize-permalinks/，目前只先實作 %year%/%month%/%day%
  // 例：如想連結改成前綴 article + 時間戳記，可變更為： 'article/%year%/%month%/%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  是否在列表加载文章预览
  POST_PREVIEW_LINES: process.env.NEXT_PUBLIC_POST_POST_PREVIEW_LINES || 12, // 预览博客行数
  POST_RECOMMEND_COUNT: process.env.NEXT_PUBLIC_POST_RECOMMEND_COUNT || 6, // 推荐文章数量
  POSTS_PER_PAGE: process.env.NEXT_PUBLIC_POST_PER_PAGE || 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // 排序方式 'date'按时间,'notion'由notion控制

  POST_WAITING_TIME_FOR_404:
    process.env.NEXT_PUBLIC_POST_WAITING_TIME_FOR_404 || '8', // 文章加载超时时间，单位秒；超时后跳转到404页面

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // 在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // 管理后台的KEY，不要暴露在代码中，在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY:
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // 客户端搜索用的KEY
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // 在Algolia中创建一个index用作数据库
  //   ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // 为true时重新构建索引数据; 默认在build时会构建

  PREVIEW_CATEGORY_COUNT: 16, // 首页最多展示的分类数量，0为不限制
  PREVIEW_TAG_COUNT: 16, // 首页最多展示的标签数量，0为不限制

  POST_TITLE_ICON: process.env.NEXT_PUBLIC_POST_TITLE_ICON || true, // 是否显示标题icon
  POST_DISABLE_GALLERY_CLICK:
    process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // 画册视图禁止点击，方便在友链页面的画册插入链接

  //   ********动态特效相关********
  // マウスクリック時の花火エフェクト
FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false, // ON/OFFスイッチ
// 花火の色（提供: https://github.com/Vixcity）
FIREWORKS_COLOR: [
  '255, 20, 97',
  '24, 255, 146',
  '90, 135, 255',
  '251, 243, 140'
],

// マウスフォロワーエフェクト
MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW || false, // ON/OFFスイッチ
// 以下の設定はマウスフォロワーエフェクトがONの場合のみ有効
// マウス効果の種類（1～12まで選択可）
// 1: パス上に散らばる点 2: 下方向に落下する点 3: 上方向に上昇する点
// 4: 端からマウスへ向かう点 5: マウスを追従して回転する点
// 6: パスの線 7: 集中する点 8: 集中するグリッド
// 9: 移動するグリッド 10: 上昇する粒子
// 11: ランダムな色の回転粒子 12: 青い放射状の粒子
MOUSE_FOLLOW_EFFECT_TYPE: 11, // 1～12の番号で設定
MOUSE_FOLLOW_EFFECT_COLOR: '#ef672a', // エフェクトの色（#xxxxxxまたはrgba形式）

// 桜が舞うエフェクト
SAKURA: process.env.NEXT_PUBLIC_SAKURA || false, // ON/OFFスイッチ
// 浮遊するラインエフェクト
NEST: process.env.NEXT_PUBLIC_NEST || false, // ON/OFFスイッチ
// 動的リボンエフェクト
FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // ON/OFFスイッチ
// 静的リボンエフェクト
RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // ON/OFFスイッチ
// 星空エフェクト（夜間モードのみ有効）
STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || false, // ON/OFFスイッチ

// ********ウィジェット関連********
// AIによる記事の要約生成 @see https://docs_s.tianli0.top/
TianliGPT_CSS:
  process.env.NEXT_PUBLIC_TIANLI_GPT_CSS ||
  'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.css',
TianliGPT_JS:
  process.env.NEXT_PUBLIC_TIANLI_GPT_JS ||
  'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.js',
TianliGPT_KEY: process.env.NEXT_PUBLIC_TIANLI_GPT_KEY || '',

// Chatbaseチャットボット @see https://www.chatbase.co/
CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
// WebwhizAIチャットボット @see https://github.com/webwhiz-ai/webwhiz
WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 表示ON/OFF
WEB_WHIZ_BASE_URL:
  process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // カスタムサーバー可能
WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // IDをバックエンドから取得

// ペットウィジェット
WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || false, // ペットウィジェットの表示ON/OFF
WIDGET_PET_LINK:
  process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
  'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // モデルのURL @see https://github.com/xiazeyu/live2d-widget-models
WIDGET_PET_SWITCH_THEME:
  process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || false, // ペットクリックでテーマ切り替え

// 音楽プレーヤー
MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // 音楽プレーヤーのON/OFF
MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 左下に表示するか
MUSIC_PLAYER_AUTO_PLAY:
  process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 自動再生
MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌詞の表示形式（0:無効、1:lrc文字列、3:lrcファイルURL）
MUSIC_PLAYER_AUDIO_LIST: [
  {
    name: '風を共に舞う気持ち',
    artist: 'Falcom Sound Team jdk',
    url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
    cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
  },
  {
    name: '王都グランセル',
    artist: 'Falcom Sound Team jdk',
    url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
    cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
  }
],

// ----> コメント機能 設定可能な複数のプラグイン (WALINE, VALINE, GISCUS, CUSDIS, UTTERRANCES, GITALK)

COMMENT_HIDE_SINGLE_TAB:
  process.env.NEXT_PUBLIC_COMMENT_HIDE_SINGLE_TAB || false, 
  // コメントタブが1つしかない場合、切り替えタブを非表示にするかどうか

// artalk コメントプラグイン
COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', 
  // Artalkサーバーのアドレス https://artalk.js.org/guide/deploy.html
COMMENT_ARTALK_JS:
  process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS ||
  'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', 
  // ArtalkクライアントのJS CDN
COMMENT_ARTALK_CSS:
  process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS ||
  'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', 
  // ArtalkクライアントのCSS CDN

// twikoo コメントプラグイン
COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', 
  // TWIKOOサーバーのアドレス (Tencent Cloudの場合はenvId, Vercelの場合はドメイン)
COMMENT_TWIKOO_COUNT_ENABLE:
  process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, 
  // ブログリストにコメント数を表示するか
COMMENT_TWIKOO_CDN_URL:
  process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL ||
  'https://cdn.jsdelivr.net/npm/twikoo@1.6.17/dist/twikoo.all.min.js', 
  // twikooクライアントのCDN

// utterances コメントプラグイン
COMMENT_UTTERRANCES_REPO:
  process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', 
  // GitHubリポジトリ名 (例: 'tangly1024/NotionNext')

// giscus コメントプラグイン @see https://giscus.app/
COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', 
  // GitHubリポジトリ名 (例: 'tangly1024/NotionNext')
COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', 
  // GitHubリポジトリID
COMMENT_GISCUS_CATEGORY_ID:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', 
  // GitHub DiscussionsのカテゴリID
COMMENT_GISCUS_MAPPING:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', 
  // 記事を特定する方法 (デフォルト: 'pathname')
COMMENT_GISCUS_REACTIONS_ENABLED:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', 
  // 記事のリアクションを有効にするか ('1' = 有効, '0' = 無効)
COMMENT_GISCUS_INPUT_POSITION:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', 
  // コメント投稿欄の位置 ('bottom' = 下部, 'top' = 上部)

// CUSDIS コメントプラグイン
COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', 
  // CusdisのApp ID
COMMENT_CUSDIS_HOST:
  process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', 
  // Cusdisホスト (セルフホストの場合は変更)
COMMENT_CUSDIS_SCRIPT_SRC:
  process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC || '/js/cusdis.es.js', 
  // Cusdisスクリプトのソース (セルフホストの場合は変更)

// gitalk コメントプラグイン
COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', 
  // GitHubリポジトリ名 (例: 'NotionNext')
COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', 
  // GitHubユーザー名
COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', 
  // 管理者のGitHubユーザー名

// WebMention コメントシステム
COMMENT_WEBMENTION_ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false, 
  // WebMentionを有効にするか
COMMENT_WEBMENTION_AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '', 
  // WebMention用のIndieLogin
COMMENT_WEBMENTION_HOSTNAME:
  process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '', 
  // WebMentionに関連付けるドメイン
COMMENT_WEBMENTION_TWITTER_USERNAME:
  process.env.NEXT_PUBLIC_TWITTER_USERNAME || '', 
  // Twitterユーザー名
COMMENT_WEBMENTION_TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || '', 
  // WebMentionのAPIトークン
　// <---- コメントプラグイン

 // ----> サイト統計設定
ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, 
// Vercelの組み込み分析ツール https://vercel.com/docs/concepts/analytics/quickstart 
// https://github.com/tangly1024/NotionNext/issues/897

ANALYTICS_BUSUANZI_ENABLE:
  process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, 
  // サイトの閲覧数・訪問数を表示 http://busuanzi.ibruce.info/

ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', 
// Baidu AnalyticsのID [baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]

ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', 
// CNZZ (站长统计)のID [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]

ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', 
// Google AnalyticsのID (例: G-XXXXXXXXXX)

// 51la サイト統計 https://www.51.la/
ANALYTICS_51LA_ID: process.env.NEXT_PUBLIC_ANALYTICS_51LA_ID || '', 
// IDは51laのダッシュボードで取得 https://docs.tangly1024.com/article/notion-next-51-la
ANALYTICS_51LA_CK: process.env.NEXT_PUBLIC_ANALYTICS_51LA_CK || '', 
// CKは51laのダッシュボードで取得

// Matomo サイト統計
MATOMO_HOST_URL: process.env.NEXT_PUBLIC_MATOMO_HOST_URL || '', 
// MatomoサーバーURL (末尾にスラッシュなし)
MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '', 
// MatomoのサイトID

// ACKEE サイト訪問統計ツール
ANALYTICS_ACKEE_TRACKER:
  process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', 
  // e.g 'https://ackee.tangly1024.com/tracker.js'
ANALYTICS_ACKEE_DATA_SERVER:
  process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', 
  // e.g 'https://ackee.tangly1024.com' (末尾にスラッシュなし)
ANALYTICS_ACKEE_DOMAIN_ID:
  process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', 
  // e.g '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

// SEO 設定
SEO_GOOGLE_SITE_VERIFICATION:
  process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', 
  // Google サイト認証コード (必要に応じて設定)

SEO_BAIDU_SITE_VERIFICATION:
  process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', 
  // Baidu サイト認証コード (必要に応じて設定)

// Microsoft Clarity サイト分析
CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || null, 
// ClarityのID (スクリプト内の10桁の英数字)

// <---- サイト統計設定

// START----> 収益関連

// Google 広告
ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', 
// Google AdSense ID (例: ca-pub-xxxxxxxxxxxxxxxx)
ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, 
// AdSenseテストモード (偽の広告を表示してテスト可能) 
// https://www.tangly1024.com/article/local-dev-google-adsense

ADSENSE_GOOGLE_SLOT_IN_ARTICLE:
  process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '3806269138', 
  // 記事内広告のデータスロットID

ADSENSE_GOOGLE_SLOT_FLOW:
  process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '1510444138', 
  // インフォメーションフロー広告のデータスロットID

ADSENSE_GOOGLE_SLOT_NATIVE:
  process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', 
  // ネイティブ広告のデータスロットID

ADSENSE_GOOGLE_SLOT_AUTO:
  process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '8807314373', 
  // 自動広告のデータスロットID

// 万维广告
AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, 
// WWADS広告のID https://wwads.cn/
AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, 
// 広告ブロッカー検出を有効化 (広告スペースにテキスト通知を表示) 
// @see https://github.com/bytegravity/whitelist-wwads

// END<---- 収益関連


  // カスタムNotionデータベースフィールド名の設定
NOTION_PROPERTY_NAME: {
  password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
  type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // 記事タイプ
  type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // タイプがこれに一致するとブログ記事
  type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // タイプがこれに一致すると単一ページ
  type_notice:
    process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // タイプがこれに一致するとお知らせ
  type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // タイプがこれに一致するとメニュー
  type_sub_menu:
    process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // タイプがこれに一致するとサブメニュー
  title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // 記事タイトル
  status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
  status_publish:
    process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // ステータスがこれに一致すると公開状態 (日本語可)
  status_invisible:
    process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // ステータスがこれに一致すると非公開 (日本語可)
  summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
  slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
  category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
  date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
  tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
  icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon',
  ext: process.env.NEXT_PUBLIC_NOTION_PROPERTY_EXT || 'ext' // 拡張フィールド (JSON文字列で複雑なデータを格納)
},

// RSS購読
ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // RSS購読を有効化するかどうか
MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // Mailchimp購読リストID
MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // Mailchimp APIキー

// ANIMATE.css アニメーション
ANIMATE_CSS_URL:
  process.env.NEXT_PUBLIC_ANIMATE_CSS_URL ||
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', // アニメーション用CDN

// サイト画像設定
IMG_LAZY_LOAD_PLACEHOLDER:
  process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER ||
  'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // 遅延読み込みのプレースホルダー画像 (base64またはURL)
IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', 
// サイト画像の形式 (現状はNotionのみ対応)
IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // 記事画像に自動で影を追加するかどうか
IMG_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMG_COMPRESS_WIDTH || 800, // Notion画像の圧縮幅

// 廃止された設定
AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // 著者アバター画像 (Notionのアイコンで上書き可能)
TITLE: process.env.NEXT_PUBLIC_TITLE || 'NotionNext BLOG', // サイトタイトル (空欄禁止)
HOME_BANNER_IMAGE:
  process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // ホームページ背景画像
DESCRIPTION:
  process.env.NEXT_PUBLIC_DESCRIPTION || 'これはNotionNextで生成されたサイトです', // サイト説明

// 開発関連
NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // データベースを公開せずにアクセス可能にするためのトークン
DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // デバッグボタンを表示するかどうか
ENABLE_CACHE:
  process.env.ENABLE_CACHE ||
  process.env.npm_lifecycle_event === 'build' ||
  process.env.npm_lifecycle_event === 'export', // ビルド時にキャッシュを有効化
isProd: process.env.VERCEL_ENV === 'production' || process.env.EXPORT, 
// 開発環境と本番環境の区別
BUNDLE_ANALYZER: process.env.ANALYZE === 'true' || false, 
// バンドル依存関係とサイズを表示するかどうか
VERSION: (() => {
  try {
    // 環境変数が優先され、それがない場合package.jsonからバージョンを取得
    return (
      process.env.NEXT_PUBLIC_VERSION || require('./package.json').version
    )
  } catch (error) {
    console.warn('package.jsonからバージョン取得失敗:', error)
    return '1.0.0' // デフォルトバージョン
  }
})()
}

module.exports = BLOG

