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

// 获取粤国际微盘交易列表
export const getYueGuoJiMicroBoardListUrl = '/api/index.php/Transaction/transaction_micro_yuegj';

// 代理商本月总数据请求
export const getAgentOverviewDataUrl = '/api/index.php/overview/transaction';

//获取旗下代理商用户列表
export const getUserListDataUrl =  '/api/index.php/Customs/index';

// 获取"获得信息资产的用户"的列表 (小金列表)
export const getPeopleWhoHaveInfoAssetUrl = ' /api/index.php/Asset/asset_detail';

// 获取"已获得信息资产的用户"的列表 (小金获得信息资产的来源)
export const getPeopleWhoHaveInfoAssetAllotUrl = '/api/index.php/Asset/asset_in';

// 获得当前登录的用户的权限列表
export const getUserAuthorizationListUrl = '/api/index.php/Authority/user_authorization_list';

// 获得整个系统全部功能的访问权限列表
export const getAllAuthorizationListUrl = '/api/index.php/Authority/authorization_list';

// 设置某个用户的权限
export const setFollowerAuthorizationUrl = '/api/index.php/Authority/set_authorization';

// 获取已授权用户列表
export const getAuthorizedUserListUrl = '/api/index.php/Authority/authorization_user_list';

//获取用户详情
export const getUserDetailUrl = '/api/index.php/Customs/UserInfo';

// 居间商旗下某个用户的详细信息
export const getSomeUserDetailUrl = '/api/index.php/Customs/UserInfo';

// 居间商旗下某个用户所具有的权限列表
export const postSomeUserAuthorDetailUrl = '/api/index.php/Authority/user_authorization_list';

// 设置"居间商旗下某个用户"所具有的权限列表
export const setSomeUserAuthorDetailUrl = '/api/index.php/Authority/set_authorization';

// 移除"居间商旗下某个用户"的所有权限
export const deleteSomeUserAuthorUrl = '/api/index.php/Authority/del_authorization';

//当月注册量和激活量
export const registerActiveUrl = '/api/index.php/register_active';

//获取名下用户数据树结构
export const underUsertreeUrl = '/api/index.php/Customs/get_1children_list_tree';

//获取一度人脉数据
export const underUserUrl = '/api/index.php/Customs/get_1children_list_table';
