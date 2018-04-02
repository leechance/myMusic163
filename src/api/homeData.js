import ajax from './ajax';

export default {
    banner({success}){
        ajax({
            url:'/banner',
            success
        })
    },
    
}