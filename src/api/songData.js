import ajax from './ajax';
import {stringify as qs} from 'querystring';

export default {
    songDetail({data,success}){
        ajax({
            url:'/song/detail?'+qs(data),
            success
        })
    },
}