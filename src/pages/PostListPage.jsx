import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LinkButton } from '../styles/StyledComponents';
import { Container, Post, Image, PostTitle, Nickname, TopBar } from '../styles/PostListPageStyle';
import { getPosts } from '../services/postService';

function PostListPage() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await getPosts();
        setPosts(result);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div>
      <TopBar>
        { isAuthenticated &&
          <LinkButton to='/posts/create'>게시글 작성하기</LinkButton>
        }
      </TopBar>
      <Container>
        { posts.length > 0 ? <>
          {posts.map((post) => (
            <Post key={post.postId} onClick={()=>handlePostClick(post.postId)}>
              <Image>
                {post.images && post.images.length > 0 ?
                  <img 
                    src={post.images[0].imageUrl} 
                    alt={post.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  /> :
                  <img
                    src="/sampleImg.jpg"
                    alt={post.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                }
              </Image>
              <PostTitle>{post.title}</PostTitle>
              <Nickname>{post.nickName}</Nickname>
            </Post>
          ))}</>
        : <h1>게시글이 없습니다😥</h1>
        }
        
      </Container>
    </div>
  );
};

export default PostListPage;