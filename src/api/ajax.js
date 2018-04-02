import fetchJsonp from 'fetch-jsonp';

const baseUrl='http://172.27.35.1:3000';

export default function({jsonp,url,option,success}){
    let pm = jsonp ? fetchJsonp(baseUrl + url , option) : fetch(baseUrl + url , option) ;
    pm.then(res=>res.json()).then(res=>{
        success(res)
    }).catch(err=>{
        console.log('错误：'+err)
    })
}
