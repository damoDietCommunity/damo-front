import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, StyledHr } from "../styles/StyledComponents";
import { Container, PostContainer,CommentContainer, ButtonGroup, InfoSet, Field, Content, CommentContent, CommentInput, Form, Label, Input, Textarea, FileInput, Title } from "../styles/PostPageStyle";
import { getPost, deletePost, getComments, createComment, deleteComment, updatePost } from '../services/postService';
import { useSelector } from 'react-redux';
import Modal from '../components/Modal';

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const accountId = useSelector((state) => state.auth.accountId);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [postId]);

  const fetchPost = async () => {
    try {
      const result = await getPost(postId);
      setPost(result);
    } catch (error) {
      console.error('fetchPost error:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const result = await getComments(postId);
      setComments(result);
    } catch (error) {
      console.error('fetchComments error:', error);
    }
  };

  const handleDeletePost = async () => {
    if (window.confirm('게시물을 삭제하시겠습니까?')) {
      try {
        await deletePost({ postId, accessToken });
        alert('게시물이 삭제되었습니다.');
        navigate('/posts');
      } catch (error) {
        console.error('handleDeletePost:', error);
      }
    }
  };

  const handleCreateComment = async () => {
    try {
      const result = await createComment({
        postId,
        content: newComment,
        accessToken,
      });
      setComments([...comments, result]);
      setNewComment('');
    } catch (error) {
      console.error('handleCreateComment error:', error);
    }
  };

  const handleDeleteComment = async ({ commentId, accessToken }) => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      try {
        await deleteComment({ postId, commentId, accessToken });
        setComments(comments.filter(comment => comment.commentId !== commentId));
      } catch (error) {
        console.error('handleDeleteComment error:', error);
      }
    }
  };

  const handleUpdatePost = async (event) => {
    event.preventDefault();

    try {
      await updatePost({
        postId,
        title: post.title,
        content: post.content,
        accessToken
      });
      alert('게시물이 수정되었습니다.');
      setIsClosing(true); // 모달 닫힘 애니메이션 시작
    } catch (error) {
      console.error('handleUpdatePost error:', error);
    }
  };

  const closeEditMode = () => {
    setIsEditMode(false);
    setIsClosing(false);
  };

  return (
    <Container>
      <PostContainer>
        {post ? (
          <>
            <Title>{post.title}</Title>
            <InfoSet>
              <Field>작성자</Field>{post.authorName}
            </InfoSet>
            <Content>{post.content}</Content>
            {post.authorName === accountId && (
              <ButtonGroup>
                <Button onClick={() => setIsEditMode(true)}>게시물 수정</Button>
                <Button onClick={handleDeletePost}>게시물 삭제</Button>
              </ButtonGroup>
            )}
          </>
        ) : (
          <h1>Post가 없습니다.</h1>
        )}
      </PostContainer>
      <h3>댓글</h3>
      <CommentContainer>
        {comments && comments.map(comment => (
          <InfoSet key={comment.commentId}>
            <Field>{comment.author}</Field>
            <CommentContent>{comment.content}</CommentContent>
            {comment.author === accountId && (
              <Button onClick={() => handleDeleteComment({
                commentId: comment.commentId,
                accessToken
              })}>삭제</Button>
            )}
          </InfoSet>
        ))}
        <StyledHr />
        {isAuthenticated && (
          <InfoSet>
            <Field>{accountId}</Field>
            <CommentInput
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <Button onClick={handleCreateComment}>등록</Button>
          </InfoSet>
        )}
      </CommentContainer>
      {isEditMode && (
        <Modal isClosing={isClosing} onClose={closeEditMode}>
          <Title>게시글 수정</Title>
          <Form onSubmit={handleUpdatePost}>
            <Label htmlFor="title">제목</Label>
            <Input
              type="text"
              id="title"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              required
            />
            <Label htmlFor="content">내용</Label>
            <Textarea
              id="content"
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              required
            ></Textarea>
            <Button type="submit">저장</Button>
          </Form>
        </Modal>
      )}
    </Container>
  );
};

export default PostPage;