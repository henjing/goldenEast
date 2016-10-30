// thunk 函数源码
const thunk = function (store) {
    return function (next) {
        return function (action) {
            typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);
        }
    }
};

// 异步action可以这样写
//function fetchPosts(subreddit) {
//  return dispatch => {
//    dispatch(requestPosts(subreddit))
//    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
//      .then(response => response.json())
//      .then(json => dispatch(receivePosts(subreddit, json)))
//  }
//}
//
//function shouldFetchPosts(state, subreddit) {
//  const posts = state.postsBySubreddit[subreddit]
//  if (!posts) {
//    return true
//  } else if (posts.isFetching) {
//    return false
//  } else {
//    return posts.didInvalidate
//  }
//}
//
//export function fetchPostsIfNeeded(subreddit) {
//  return (dispatch, getState) => {
//    if (shouldFetchPosts(getState(), subreddit)) {
//      return dispatch(fetchPosts(subreddit))
//    }
//  }
//}

// logger源码
const logger = function (store) {
    return function (next) {
        return function (action) {
            console.group(action.type);
            console.info('dispatching', action);
            let result = next(action);
            console.log('next state', store.getState());
            console.log.groupEnd(action.type);
            return result;
        }
    }
};

// 加载顺序 : applyMiddleware( thunk, logger)