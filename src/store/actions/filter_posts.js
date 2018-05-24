export function getSearchQuery(query){
    return {
        type : "GET_SEARCH_QUERY",
        query
    }
}

export function sortPosts(sortBy){
    return {
        type : "SORT_POSTS",
        sortBy
    }
}

export function getFilteredPostsByQuery(query){
    return {
        type : "GET_FILTERED_POSTS_BY_QUERY",
        query
    }
}