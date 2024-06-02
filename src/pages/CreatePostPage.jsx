import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContainer, Title, Form, Label, Input, Textarea, FileInput, ImagePreview } from '../styles/PostPageStyle'; 
import { Button } from '../styles/StyledComponents';
import {createPost} from '../services/postService';
import {useSelector} from 'react-redux';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();

  const handleCreatePost = async (event) => {
    event.preventDefault();

    try {
      // // 이미지 업로드
      // const uploadedImages = await Promise.all(images.map(async (image) => {
      //   const formData = new FormData();
      //   formData.append('image', image);
      //   const response = await uploadImage(formData);
      //   return response.imageUrl;
      // }));
      // const imageURLs = uploadedImages.map(url => ({ imageUrl: url }));     

      const imageURLs = [
        {"imageUrl": "/logoPng.png"},
        {"imageUrl": "/logoPng.png"},
        {"imageUrl": "/logoPng.png"},
      ];

      const result = await createPost(
        {title, content, images:imageURLs, accessToken});
        alert('게시글이 등록되었습니다.');
        navigate(`/posts`);
    } catch (error) {
      console.error('handleCreatePost error:', error);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prev => [...prev, { imageUrl: reader.result}]);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <PostContainer>
      <Title>게시글 작성</Title>
      <Form onSubmit={handleCreatePost}>
        <Label htmlFor="title">제목</Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Label htmlFor="content">내용</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></Textarea>
        <Label>이미지 파일 - 최대 10개</Label>
        <FileInput type="file" id="images" multiple onChange={handleImageChange} />
        {images.length > 0 && (
          <ImagePreview>
            {images.map((image, index) => (
              <span key={index}>{image.name}</span>
            ))}
          </ImagePreview>
        )}
        <Button type="submit">게시글 등록하기</Button>
      </Form>
    </PostContainer>
  );
};

export default CreatePostPage;
