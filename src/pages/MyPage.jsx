import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserSection, ProfileImage, UserName } from '../styles/MyPageStyle';
import {Container, Post, Image, PostTitle, Nickname} from '../styles/PostListPageStyle'; 
import Modal from "../components/Modal";
import { Form, Label, Input, FileInput, Title } from "../styles/PostPageStyle";
import { Button } from "../styles/StyledComponents";
import { getProfile, editProfile, registerProfile } from "../services/profileService";

const MyPage = () => {
  const navigate = useNavigate();
  // userData = {"nickName", "profileImage", "myPostResponse"}
  const [userData, setUserData] = useState({ nickName: '', profileImage: '', myPostResponse: [] });
  const [editingProfile, setEditingProfile] = useState(false);
  const [nickName, setNickName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const accountId = useSelector((state)=>state.auth.accountId);
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(()=>{
    handleGetProfile();
  }, [accountId, accessToken]);

  const handleGetProfile = async () => {
    try {
      const result = await getProfile();
      setUserData(result);
    } catch (error) {
      console.error('handleGetProfile error:', error);
    }
  }

  const handlePostClick = (postId) => {
    try {
      navigate(`/posts/${postId}`);
    } catch (error) {
      console.error('handlePostClick error:', error);
    }
  };

  const handleEditProfile = () => {
    setEditingProfile(true);
  };

  const handleSaveProfile = async () => {
    if (userData.profileImage) {
      try {
        const result = await editProfile(
          { nickName, profileImage, accountId, accessToken });
        setUserData({ result });
        setEditingProfile(false);
      } catch (error) {
        console.error('handleSaveProfile-edit error:', error);
      } 
    } else {
        try {
          const result = await registerProfile(
            { nickName, profileImage, accountId, accessToken });
          setUserData({ result });
          setEditingProfile(false);
        } catch (error) {
          console.error('handleSaveProfile-register error:', error);
        }
    }
  };

  return (
    <div>
      {editingProfile && (
        <Modal onClose={() => setEditingProfile(false)}>
          <Title>프로필 수정</Title>
          <Form>
            <Label htmlFor="nickName">닉네임</Label>
            <Input
              type="text"
              id="nickName"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              placeholder="닉네임을 입력해주세요"
            />
            <Label htmlFor="profileImage">프로필 사진</Label>
            <FileInput
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={(e)=>setProfileImage(e.target.value)}
            />
            <Button type="button" onClick={handleSaveProfile}>설정</Button>
            <Button type="button" onClick={() => setEditingProfile(false)}>취소</Button>
          </Form>
        </Modal>
      )}
      { userData && <>
        <UserSection>
          <ProfileImage src={userData.profileImage} alt="Profile" />
          <UserName>{userData.nickName}</UserName>
          <Button onClick={handleEditProfile}>프로필 수정</Button>
        </UserSection>
        <h2>작성한 게시물 목록</h2>
        <Container>
          {userData.myPostRespose.map((post) => (
            <Post key={post.postId} onClick={()=>handlePostClick(post.postId)}>
              <Image>
                <img 
                  src={post.thumbnail} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </Image>
              <PostTitle>{post.title}</PostTitle>
              <Nickname>{post.authorName}</Nickname>
            </Post>
          ))}
        </Container>
      </>
      }
    </div>
  );
};

export default MyPage;
