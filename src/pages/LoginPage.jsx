import React, { useState } from 'react';
import { Button } from '../styles/StyledComponents';
import {FormContainer, Label, InfoSet, Title, Input} from '../styles/LoginSignupStyle';
import { useDispatch } from 'react-redux';
import { login as loginAction, setTokens, logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { login, refresh } from '../services/authService';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { accessToken, refreshToken } = await login({name, password});
            dispatch(loginAction({
                accessToken: accessToken,
                refreshToken: refreshToken,
                accountId: name,
                isAuthenticated: true,
            }));
            alert('로그인 성공!');
            const decodedToken = jwtDecode(accessToken);
            const expirationTime = decodedToken.exp * 1000 - 60000; // 만료 1분 전에 갱신
            setTimeout(()=>handleRefresh(refreshToken), expirationTime);
            navigate('/');
        } catch (error) {
            alert('로그인에 실패했습니다.');
            console.error('handleLogin error:', error);
        }
    };

    const handleRefresh = async (refreshToken) => {
        try {
            const result = await refresh(refreshToken);
            const newAccessToken = result.accessToken;
            localStorage.setItem('accessToken', newAccessToken);
            dispatch(setTokens({
                accessToken: newAccessToken,
                refreshToken: refreshToken,
            }));
        } catch (error) {
            console.error('handleRefresh error:', error);
            dispatch(logout());
        }
    }

    return (
        <FormContainer>
            <Title>로그인</Title>
            <InfoSet>
                <Label>
                    아이디
                    <Input
                        type="text"
                        value={name}
                        autoComplete="id"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Label>
            </InfoSet>
            <InfoSet>
                <Label>
                    패스워드
                    <Input
                        type="password"
                        value={password}
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Label>
            </InfoSet>
            <Button onClick={handleLogin}>로그인</Button>
        </FormContainer>
    );
};

export default Login;
