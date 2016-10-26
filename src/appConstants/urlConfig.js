// 注销
export const logoutUrl = '/Api/index.php/Index/logout';

// 登录页
export const loginUrl = 'login/index.html';

// 默认头像
export const defaultAvatar = '/img/avatar.jpg';

// 修改密码
export const modifyPasswordUrl = '/Base/modifyPassWord';

// 根据开发环境还是生产环境决定路由
export const routeBase = process.env.NODE_ENV !== 'production' ? '/' : '/';

// 获取当前登录用户的信息
export const getAdminUrl = '/Api/index.php/Index/getUserInfo';

