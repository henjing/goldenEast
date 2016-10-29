// 注销
export const logoutUrl = '/api/index.php/index/logout';
// 检测用户是否登录
export const checkLoginUrl = '/api/index.php/index/checkLogin';
// 获取当前登录用户信息
export const getUserInfoUrl = '/api/index.php/index/getUserInfo';
// 登录页
export const loginUrl = '/api/index.php/Index/index';
export const loginPage = '/public/login/index.html';

// 修改密码
export const modifyPasswordUrl = '/Base/modifyPassWord';

// 根据开发环境还是生产环境决定路由
export const routeBase = process.env.NODE_ENV !== 'production' ? '/' : '/';

// 获取川商大盘交易列表
export const getChuanShangBoardMarketListUrl = '/api/index.php/Transaction/transaction_spot_chuans';
// 获取川商邮币卡交易列表
export const getChuanShangYBKListUrl = '/api/index.php/Transaction/transaction_stamp_chuans';

// 获取深文所大盘交易列表
export const getShenWenSuoBoardMarketListUrl = '/api/index.php/Transaction/transaction_spot_shenw';
// 获取深文所微盘交易列表
export const getShenWenSuoMicroBoardListUrl = '/api/index.php/Transaction/transaction_micro_shenw';

// 获取吉商邮币卡交易列表
export const getJiShangYBKListUrl = '/api/index.php/Transaction/transaction_stamp_jis';

// 获取吉商微盘交易列表
export const getJiShangMicroBoardListUrl = '/api/index.php/Transaction/transaction_micro_jis';

// 获取粤国际微盘交易列表
export const getYueGuoJiMicroBoardListUrl = '/api/index.php/Transaction/transaction_micro_yuegj';

// 代理商本月总数据请求
export const getAgentOverviewDataUrl = '/api/index.php/overview/transaction';