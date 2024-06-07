import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContainer, Title, Form, Label, Input, Textarea } from '../styles/PostPageStyle'; 
import { Button } from '../styles/StyledComponents';
import {createPost} from '../services/postService';
import {useSelector} from 'react-redux';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const accessToken = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();

  const handleCreatePost = async (event) => {
    event.preventDefault();

    try {
      await createPost(
        {title, content, accessToken});
        alert('게시글이 등록되었습니다.');
        navigate(`/posts`);
    } catch (error) {
      console.error('handleCreatePost error:', error);
    }
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
        <Button type="submit">게시글 등록하기</Button>
      </Form>
    </PostContainer>
  );
};

export default CreatePostPage;
