import axios from 'axios';
import { randomDate } from '../../helpers/randomDate';

function GET_POSTS(posts){
    return {
        type : "GET_POSTS",
        isFetched : true,
        hasError : false,
        posts
    }
}

function ERROR_POSTS(err){
    return {
        type : "ERROR_POSTS",
        isFetched : false,
        hasError : true,
        err
    }
}

export function fetchPosts(limit){
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
             .then( resp => resp.data.map( item => {
                 item.view = Number(item.id + 230); //set view for post
                 item.date = randomDate(new Date(2016, 0, 1), new Date()).getTime(); //set random Date for post
                 return item;
              }))
             .then( resp => dispatch( GET_POSTS(resp) ) )
             .catch( error => dispatch( ERROR_POSTS(error.message) ) );
    }
}