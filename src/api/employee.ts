import request from '@/utils/request'
/**
 *
 * 员工管理
 *
 **/
// 登录
export const login = (data: any) =>
  request({
    'url': '/employee/login',
    'method': 'post',
    data: data
  })

  // 退出
 export const userLogout = (params: any) =>
 request({
   'url': `/employee/logout`,
   'method': 'post',
   params
 })

 export const getEmployeeList = (params: any) =>
  request({
    'url': `/employee/page`,
    'method': 'get',
    'params':params
  })

  export const updateEmployeeStatus = (params: any) =>
    request({
      'url': `/employee/status/${params.status}`,
      'method': 'post',
      'params':{'id': params.id}
    })

  export const addEmployee= (params: any) =>
      request({
        'url': `/employee/`,
        'method': 'post',
        'data': params
      })

  export const getEmployeebyId = (id: any) =>
    request({
      'url': `/employee/${id}`,
      'method': 'get'
    })

  export const updateEmployee = (params: any) =>
    request({
      'url': `/employee/`,
      'method': 'put',
      'data':params
    })