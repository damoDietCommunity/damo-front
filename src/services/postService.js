import axiosInstance from '../utils/axiosInstance';
import axiosUnsplash from '../utils/axiosUnsplash';

export const getPosts = async () => {
    try {
        const response = await axiosInstance.get('/posts');
        return response.data;
    } catch (error) {
        console.error('getPosts error:', error);
        throw(error);
    }
}

export const getPost = async ( postId ) => {
    try {
        const response = await axiosInstance.get(`/posts/${postId}`);
        return response.data;
    } catch (error) {
        console.error('getPost error:', error);
        throw(error);
    }
}

export const getUnsplashImage = async () => {
    try {
        const response = await axiosUnsplash.get('/search/photos', {
            params: {
                query: 'diet',
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('getUnsplashImage error:', error);
        throw(error);
    }
}

export const createPost = async ({ title, content, accessToken }) => {
    try {
        const response = await axiosInstance.post('/posts/create', 
            { title, content },{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            } 
        );
        console.log(`response: ${response}`);
        return response.data;
    } catch (error) {
        console.error('createPost error:', error);
        throw(error);
    }
}

export const updatePost = async ({ postId, title, content, accessToken }) => {
    try {
        const response = await axiosInstance.put(`/posts/${postId}`, 
            { title, content, images: [{imageUrl: "tempUrl"}] }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        return response.data;
    } catch (error) {
        console.error('updatePost error:', error);
        throw(error);
    }
}

export const deletePost = async ({ postId, accessToken }) => {
    try {
        await axiosInstance.delete(`/posts/${postId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    } catch (error) {
        console.error('deletePost error:', error);
        throw(error);
    }
}

export const getComments = async ( postId ) => {
    try {
        const response = await axiosInstance.get(`/posts/${postId}/comments`);
        return response.data;
    } catch (error) {
        console.error('getComments error:', error);
        throw(error);
    }
}

export const createComment = async ({ postId, content, accessToken }) => {
    try {
        const response = await axiosInstance.post(`/posts/${postId}/comments`, 
            {content}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        return response.data;
    } catch (error) {
        console.error('createComment error:', error);
        throw(error);
    }
}

export const deleteComment = async ({ postId, commentId, accessToken }) => {
    try {
        await axiosInstance.delete(`/posts/${postId}/comments/${commentId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    } catch (error) {
        console.error('deleteComment error:', error);
        throw(error);
    }
}
