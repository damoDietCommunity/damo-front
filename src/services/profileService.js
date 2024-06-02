import axios from 'axios';

export const getProfile = async () => {
    try {
        const response = await axios.get('/mypage');
        return response.data;
    } catch (error) {
        console.error('getProfile error:', error);
    }
    //{
// 	"nickName" : "String",
// 	"profileImage" : "String"
// 	"myPostResponse객체를 리스트로 반환"
// }
// //--------------
// //myPostResponse 반환값
// {
//         String title,
//         String content,
//         String authorName,
//         String thumbnail,
}

export const editProfile = async ({ nickName, profileImage, accountId }) => {
    try {
      const response = await axios.put(`/profile/${accountId}`, {
        nickName, profileImage
      });
      return response.data;
    } catch (error) {
      console.error('editPrifile error:', error);
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
    }
};

//{
// 	"nickName" : "String",
// 	"profileImage" : "String"
// }