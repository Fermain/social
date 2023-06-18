export const NAMESPACE = "live-social";

export const API_BASE = "https://api.noroff.dev/api/v1/social";
export const API_PATH_AUTH = "/auth";
export const API_PATH_AUTH_REGISTER = `${API_PATH_AUTH}/register`;
export const API_PATH_AUTH_LOGIN = `${API_PATH_AUTH}/login`;
export const API_AUTH_REGISTER = `${API_BASE}${API_PATH_AUTH_REGISTER}`;
export const API_AUTH_LOGIN = `${API_BASE}${API_PATH_AUTH_LOGIN}`;
export const API_PATH_POSTS = "/posts";
export const API_PATH_POST = (id) => `${API_PATH_POSTS}/${id}`;
export const API_POSTS = `${API_BASE}${API_PATH_POSTS}`;
export const API_POST = (id) => (`${API_POSTS}/${id}`);
export const API_POST_REACT = (id, symbol) => (`${API_POST(id)}/react/${symbol}`);
export const API_POST_COMMENT = (id) => (`${API_POST(id)}/comment`);
export const API_PATH_PROFILES = "/profiles";
export const API_PATH_PROFILE = (name) => (`${API_PATH_PROFILES}/${name}`);
export const API_PATH_PROFILE_POSTS = (name) => (`${API_PATH_PROFILE(name)}${API_PATH_POSTS}`);
export const API_PROFILES = `${API_BASE}${API_PATH_PROFILES}`;
export const API_PROFILE = (name) => (`${API_BASE}${API_PATH_PROFILE(name)}`);
export const API_PROFILE_MEDIA = (name) => (`${API_PROFILE(name)}/media`);
export const API_PROFILE_FOLLOW = (name) => (`${API_PROFILE(name)}/follow`);
export const API_PROFILE_UNFOLLOW = (name) => (`${API_PROFILE(name)}/unfollow`);
export const API_PROFILE_POSTS = (name) => (`${API_PROFILE(name)}/${API_PATH_POSTS}`);

export const DEFAULT_SORT_PARAMS = {
    sort: "updated",
    sortOrder: "desc",
}

export const DEFAULT_PAGE_PARAMS = {
    limit: 30,
    offset: 0,
}

export const DEFAULT_LIST_PARAMS = {
    ...DEFAULT_SORT_PARAMS,
    ...DEFAULT_PAGE_PARAMS
}

export const DEFAULT_POST_PARAMS = {
    _author: true,
    _reactions: true,
    _comments: true
}

export const DEFAULT_POSTS_PARAMS = {
    ...DEFAULT_POST_PARAMS,
    ...DEFAULT_LIST_PARAMS,
    // _tag: NAMESPACE
}

export const DEFAULT_PROFILE_PARAMS = {
    _followers: true,
    _following: true,
    _posts: false
}

export const DEFAULT_PROFILES_PARAMS = {
    ...DEFAULT_PROFILE_PARAMS,
    ...DEFAULT_LIST_PARAMS
}
