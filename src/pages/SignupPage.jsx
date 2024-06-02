import React, { useState } from 'react';
import { Button } from '../styles/StyledComponents'; // 경로는 실제 파일 위치에 맞게 수정하세요.
import { FormContainer, Title, Label, Input, InfoSet } from '../styles/LoginSignupStyle';
import { useNavigate } from 'react-router-dom';
import { sendEmail, signup } from '../services/authService';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigate = useNavigate();
  
  const handleSendVerificationCode = async (event) => {
    event.preventDefault();
    try {
      await sendEmail({ email });
      setIsEmailSent(true);
      alert('인증번호가 전송되었습니다.');
    } catch (error) {
      alert('인증번호 전송에 실패했습니다.');
      console.log(`handleSendVertificationCode error: ${error}`);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup ({ email, name, password, verificationCode });
      alert('회원가입이 성공적으로 완료되었습니다');
      navigate('/');
    } catch (error) {
      alert('회원가입에 실패했습니다.');
      console.log(`handleSignup error: ${error}`);
    }
  };

  return (
    <FormContainer>
      <Title>회원가입</Title>
      <InfoSet>
        <Label>
          이메일
          <Input id="emailInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Button onClick={handleSendVerificationCode} disabled={isEmailSent}>
          인증번호 전송
        </Button>
      </InfoSet>
      {isEmailSent && (
        <InfoSet>
          <Label>
            인증번호
            <Input id="vertificationCodeInput"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </Label>
        </InfoSet>
      )}
      <InfoSet>
        <Label>
          아이디
          <Input id="idInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Label>
      </InfoSet>
      <InfoSet>
        <Label>
          패스워드
          <Input id="passwordInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
      </InfoSet>
      <Button onClick={handleSignup}>회원가입</Button>
    </FormContainer>
  );
};

export default SignUp;