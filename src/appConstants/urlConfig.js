// 注销
// export const logoutUrl = '/Api/index.php/Index/logout';

// 登录页
export const loginUrl = '/api/index.php/Index/index';
export const loginPage = '/public/login/index.html';
// 默认头像
export const defaultAvatar = '/public/avatar.jpg';

// 修改密码
export const modifyPasswordUrl = '/Base/modifyPassWord';

// 根据开发环境还是生产环境决定路由
export const routeBase = process.env.NODE_ENV !== 'production' ? '/' : '/';


