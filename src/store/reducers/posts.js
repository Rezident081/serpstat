export default function posts(state = {}, action){
    switch (action.type) {
        case "GET_POSTS" :
            return Object.assign(
                    {}, 
                    state, 
                    {isFetched : action.isFetched, defaultPosts : action.posts, hasError: action.hasError}
                )
        case "ERROR_POSTS" : 
            return Object.assign(
                    {}, 
                    state, 
                    {isFetched : action.isFetched, error : action.err, defaultPosts : null, hasError: action.hasError}
                )
        case "GET_SEARCH_QUERY" : 
            return Object.assign(
                    {}, 
                    state, 
                    {query : action.query}
                )
        case "GET_FILTERED_POSTS_BY_QUERY" : 
            return Object.assign(
                    {}, 
                    state, 
                    {posts : state.defaultPosts.filter( post => {
                            return [post.title, post.body].join("").includes(action.query);
                        })
                    }
                )
        case "SORT_POSTS" :
            const posts = state.posts ? state.posts : state.defaultPosts;
            return Object.assign(
                    {},
                    state,
                    {sortBy : action.sortBy},
                    {posts : posts.slice().sort( (firstIt, secondIt) => {
                        return secondIt[ action.sortBy ] - firstIt[ action.sortBy ]
                    } )}
            )
        default: return state;
    }
}