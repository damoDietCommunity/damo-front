import axios from 'axios';

export const getProfile = async () => {
    try {
        const response = await axios.get('/mypage');
        return response.data;
    } catch (error) {
        console.error('getProfile error:', error);
        throw(error);
    }
}

export const editProfile = async ({ nickName, profileImage, accountId }) => {
    try {
      const response = await axios.put(`/profile/${accountId}`, {
        nickName, profileImage
      });
      return response.data;
    } catch (error) {
      console.error('editPrifile error:', error);
      throw(error);
    }
};

export const registerProfile = async ({ nickName, profileImage, accountId }) => {
    try {
      const response = await axios.post(`/profile/${accountId}`, {
        nickName, profileImage
      });
      return response.data;
    } catch (error) {
      console.error('editPrifile error:', error);
      throw(error);
    }
};