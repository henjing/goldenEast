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
// 获取川商大盘个人交易详情列表
export const getChuanShangBoardMarketDetailsListUrl = '/api/index.php/Transaction/transaction_spot_chuans_detail';

// 获取川商邮币卡交易列表
export const getChuanShangYBKListUrl = '/api/index.php/Transaction/transaction_stamp_chuans';
// 获取川商邮币卡个人交易详情列表
export const getChuanShangYBKDetailsListUrl = '/api/index.php/Transaction/transaction_stamp_chuans_detail';

// 获取深文所大盘交易列表
export const getShenWenSuoBoardMarketListUrl = '/api/index.php/Transaction/transaction_spot_shenw';
// 获取深文所大盘个人交易详情列表
export const getShenWenSuoBoardMarketDetailsListUrl = '/api/index.php/Transaction/transaction_spot_shenw_detail';
// 获取深文所微盘交易列表
export const getShenWenSuoMicroBoardListUrl = '/api/index.php/Transaction/transaction_micro_shenw';
// 获取深文所微盘个人交易详情列表
export const getShenWenSuoMicroBoardDetailsListUrl = '/api/index.php/Transaction/transaction_micro_shenw_detail';

// 获取吉商邮币卡交易列表
export const getJiShangYBKListUrl = '/api/index.php/Transaction/transaction_stamp_jis';
// 获取吉商邮币卡个人交易详情列表
export const getJiShangYBKDetailsListUrl = '/api/index.php/Transaction/transaction_stamp_jis_detail';
// 获取吉商微盘交易列表
export const getJiShangMicroBoardListUrl = '/api/index.php/Transaction/transaction_micro_jis';
// 获取吉商微盘个人交易详情列表
export const getJiShangMicroBoardDetailsListUrl = '/api/index.php/Transaction/transaction_micro_jis_detail';

// 获取粤国际微盘交易列表
export const getYueGuoJiMicroBoardListUrl = '/api/index.php/Transaction/transaction_micro_yuegj';
// 获取粤国际微盘个人交易详情列表
export const getYueGuoJiMicroBoardDetailsListUrl = '/api/index.php/Transaction/transaction_micro_yuegj_detail';

// 获取大盘佣金列表
export const getBoardMarketBrokerageListUrl = '/api/index.php/Transaction/bonus_list_spot';

// 获取微盘佣金列表
export const getMicroBoardBrokerageListUrl = '/api/index.php/Transaction/bonus_list_mico';

// 获取邮币卡佣金列表
export const getYBKBrokerageListUrl = '/api/index.php/Transaction/bonus_list_stamp';

// 获取大盘某用户个人佣金详情列表
export const getBoardMarketUserDetailUrl = '/api/index.php/Transaction/bonus_detail_spot';

// 获取微盘某用户个人佣金详情列表
export const getMicroBoardUserDetailUrl = '/api/index.php/Transaction/bonus_detail_spot';

// 获取邮币卡某用户个人佣金详情列表
export const getPostCardUserDetailUrl = '/api/index.php/Transaction/bonus_detail_spot';

// 代理商本月总数据请求
export const getAgentOverviewDataUrl = '/api/index.php/overview/transaction';

//获取旗下代理商用户列表
export const getUserListDataUrl =  '/api/index.php/Customs/index';

//获取红包用户列表
export const getHongBaoListDataUrl =  '/api/index.php/Awards/red_pack';

// 获取"信息资产分配列表 (小金列表)
export const getPeopleWhoHaveInfoAssetUrl = ' /api/index.php/Asset/asset_out_detail';

// 获取"获得信息资产的用户"的列表 (小金列表)
export const getGainPeopleWhoHaveInfoAssetUrl = ' /api/index.php/Asset/asset_in_detail';

// 获得当前登录的用户的权限列表
export const getUserAuthorizationListUrl = '/api/index.php/Authority/user_authorization_list';

// 获得整个系统全部功能的访问权限列表
export const getAllAuthorizationListUrl = '/api/index.php/Authority/authorization_list';

// 设置某个用户的权限
export const setFollowerAuthorizationUrl = '/api/index.php/Authority/set_authorization';

// 获取未授权用户列表
export const getNoAuthorizedUserListUrl = '/api/index.php/Authority/unauthorize_user_list';

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

//获取名下用户数据树结构
export const underUsertreeUrl = '/api/index.php/Customs/get_1children_list_tree';

//获取一度人脉数据
export const underUserUrl = '/api/index.php/Customs/get_1children_list_table';
//获取旗下代理商数据
export const registerActiveUrl = '/api/index.php/Overview/subordinate_jujianshang';

// 获取某用户的所有一度人脉用户
export const getUserFirstClassConnectedUrl = '/api/index.php/Customs/get_1children_list';


// 获取下载中心数据
export const getDownloadDataUrl = '/api/index.php/Download/index';

//获取深文所入金送券列表
export const getShenWenSuoVoucherListDataUrl =  '/api/index.php/Awards/coupon_list_shenw';



