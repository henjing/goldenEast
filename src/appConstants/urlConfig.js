// 注销
export const logoutUrl = '/api/index.php/index/logout';
// 获取当前登录用户信息
export const getUserInfoUrl = '/api/index.php/index/getUserInfo';
// 登录页
export const loginUrl = '/api/index.php/Index/index';
export const loginPage = '/public/login/index.html';
// 默认头像
export const defaultAvatar = '/public/avatar.jpg';

// 修改密码
export const modifyPasswordUrl = '/Base/modifyPassWord';

// 根据开发环境还是生产环境决定路由
export const routeBase = process.env.NODE_ENV !== 'production' ? '/' : '/';

// 获取川商大盘交易列表
export const getChuanShangTransactionListUrl = '/api/index.php/Transaction/transaction_spot_chuans';

// 获取深文所大盘交易列表
export const getShenWenSuoTransactionListUrl = '/api/index.php/Transaction/transaction_spot_shenw';