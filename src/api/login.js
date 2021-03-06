import service from "@/utils/requests";
/**
 * 获取验证码
 */
export function GetSms(data) {
  return service.request({
    method: "post",
    url: "/getSms/",
    data, //data:data同名可以直接写 data
  });
}

/**
 * 获取用户角色
 */

/**
 * 登录
 */

export function Login(data) {
  return service.request({
    method: "post",
    url: "/login/",
    data, //data:data同名可以直接写 data
  });
}

/**
 * 注册
 */
export function Register(data) {
  return service.request({
    method: "post",
    url: "/register/",
    data, //data:data同名可以直接写 data
  });
}
