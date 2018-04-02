import ajax from './ajax';
import {stringify as qs} from 'querystring';

export default {
    search({data,success}){
        ajax({
            url:'/search?'+qs(data),
            success
        })
    },
    searchSuggest({data,success}){
        ajax({
            url:'/search/suggest?'+qs(data),
            success
        })
    },
    searchMultimatch({data,success}){
        ajax({
            url:'/search/multimatch?'+qs(data),
            success
        })
    }
}