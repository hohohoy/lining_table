import axios from axios
import router from '../router'
import {Toash, Toast} from 'vant'

const axiosIns=axios.created({
    timeout:10*1000,
    headers:{
        'Content-type':'application/json'
    }
})

axiosIns.interceptors.request.use(config=>{
    Toast.loading({
        message:'拼命加载中...',
        duration:0,
        forbidClick:true
    })
    return config
},err=>{
    console.info('request err')
    return Promise.reject(err)
})

axiosIns.interceptors.response.use(response=>{
    if(repoonse.status===200){
        Toast.clear()
        return Promise.resolve(response)
    }else{
        return Promise.reject(response)
    }
},err=>{
    console.info('response err')
    return Promise.reject(err)
})

function _get(axiosins,url,params){
    return new Promise((res,rej)=>{
        axiosins.get(url,params).then(res=>{
            res(res.data)
        }).catch(err=>{
            rej(err.data)
        })
    })
}
function _post(axiosins,url,params){
    return new Promise((res,rej)=>{
        axiosins.post(url,params)
        .then(res=>{
            res(res.data)
        })
        .catch(err=>{
            rej(
                Toast({
                    message: '数据请求错误~',
                    duration: 1500,
                    forbidClick: true
                })
            )
        })
    })
}
function $get(url,params){return _get(axiosIns, url,params);}
function $post(url,params){return _get(axiosIns, url,params);}

export default{
    $get,
    $post
}