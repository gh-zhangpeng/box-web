import axios from 'axios'
// let api_base_url = ''
// if (import.meta.env.MODE === 'development') {
//   api_base_url = 'http://www.liulongbin.top:3006/'
// } else if (import.meta.env.MODE === 'production') {
//   api_base_url = 'http://www.liulongbin.top:3006/'
// }
const service = axios.create({
    // 公共接口--这里注意后面会讲
    baseURL: '/ofy',
    // 超时时间 单位是ms，这里设置了3s的超时时间
    timeout: 3 * 1000
})
// Add a request interceptor
service.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor
service.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger. Do something with response error
    // 状态代码超出了 2xx 的范围
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // 请求已经成功发起，但没有收到响应
        // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
        // 而在node.js中是 http.ClientRequest 的实例
        console.log(error.request);
    } else {
        // 发送请求时出了点问题
        console.log('Error', error.message);
    }
    return Promise.reject(error);
});
export default service