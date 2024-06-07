import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LinkButton } from '../styles/StyledComponents';
import { Container, Post, ImageWrapper, Image, PostTitle, TopBar } from '../styles/PostListPageStyle';
import { getPosts, getUnsplashImage } from '../services/postService';

function PostListPage() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState({});
 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await getPosts();
        setPosts(postsResult);

        const imageResult = await getUnsplashImage();
        
        const imageUrls = imageResult.map((image) => image.urls.regular);
        if (postsResult.length > imageResult.length) {
          const diff = postsResult.length - imageResult.length;
          for (let i = 0; i < diff; i++) {
            imageUrls.push(imageResult[i % imageResult.length]);
          }
        }
        setImages(imageUrls);
      } catch (error) {
        console.error('fetchPosts error:', error);
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
          <LinkButton to='/posts/create'>게시글 작성</LinkButton>
        }
      </TopBar>
      <Container>
        { posts.length > 0 ? <>
          {posts.map((post, index) => (
            <Post key={post.postId} onClick={()=>handlePostClick(post.postId)}>
              <ImageWrapper>
                <Image
                  src={images[index] ? images[index] : 'sampleImg.jpg'}
                  alt={post.title} 
                />
              </ImageWrapper>
              <PostTitle>{post.title}</PostTitle>
            </Post>
          ))}</>
        : <h1>게시글이 없습니다😥</h1>
        }
        
      </Container>
    </div>
  );
};

export default PostListPage;