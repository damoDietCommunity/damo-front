import axios from 'axios';

export const getPosts = async () => {
    try {
        const response = await axios.get('/posts');
        return response.data;
    } catch (error) {
        console.error('getPosts error:', error);
    }
}

export const getPost = async ( postId ) => {
    try {
        const response = await axios.get(`/posts/${postId}`);
        return response.data;
    } catch (error) {
        console.error('getPost error:', error);
    }
}

export const createPost = async ({ title, content, images, accessToken }) => {
    try {
        const response = await axios.post('/posts/create', 
            { title, content, images },{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            } 
        );
        console.log(`response: ${response}`);
        return response.data;
    } catch (error) {
        console.error('createPost error:', error);
    }
}

export const updatePost = async ({ postId, title, content, images, accessToken }) => {
    try {
        const response = await axios.put(`/posts/${postId}`, 
            { title, content, images }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        return response.data;
    } catch (error) {
        console.error('updatePost error:', error);
    }
}

export const deletePost = async ({ postId, accessToken }) => {
    try {
        await axios.delete(`/posts/${postId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    } catch (error) {
        console.error('deletePost error:', error);
    }
}

export const getComments = async ( postId ) => {
    try {
        const response = await axios.get(`/posts/${postId}/comments`);
        return response.data;
    } catch (error) {
        console.error('getComments error:', error);
    }
}

export const createComment = async ({ postId, content, accessToken }) => {
    try {
        const response = await axios.post(`/posts/${postId}/comments`, 
            {content}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        return response.data;
    } catch (error) {
        console.error('createComment error:', error);
    }
}

export const deleteComment = async ({ postId, commentId, accessToken }) => {
    try {
        await axios.delete(`/posts/${postId}/comments/${commentId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    } catch (error) {
        console.error('deleteComment error:', error);
    }
}
