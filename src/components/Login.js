import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { BsCheckBox } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import URL from "../url";

export default function Login({ account }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
    console.log(inputs.email);
    console.log(inputs.password);
  };

  const fetchLogin = async () => {
    const result = fetch(URL + "user/signin", {
      method: "post",
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
      }),
    });
    console.log(result);
    const response = await (await result).json();
    console.log(response);
  };

  const clickLogin = (event) => {
    event.preventDefault();
    console.log("로그인버튼");
    fetchLogin();
  };

  return (
    <SignInBox account={account}>
      <SignInContent>
        <SignInTab>
          <li>
            <SignInForm href="">SIGN IN</SignInForm>
          </li>
          <li>
            <RegistrationForm>CREATE ACCOUNT</RegistrationForm>
          </li>
        </SignInTab>
        <>
          <LoginForm action="" method="POST" className="email">
            <EmailBox>
              <SignInEmail
                onChange={onChange}
                type="text"
                id="fname"
                name="email"
                // value={Email}
                placeholder="Email"
                required="required"
              />
            </EmailBox>
            <PasswordBox>
              <SignInPassword
                onChange={onChange}
                type="password"
                id="lname"
                name="password"
                // value={Password}
                placeholder="Password"
              />
              <ShowButton
                on
                type="button"
                className="a-button-nostyle toggle-password-state password-visible"
                data-show-text="Show"
                data-hide-text="Hide"
              >
                Show
              </ShowButton>
            </PasswordBox>
            <CheckBoxInput>
              <BsCheckBox style={{ marginRight: "10" }} />
              Keep me signed in
            </CheckBoxInput>
            <ContinueButton onClick={clickLogin}>
              <span>Continue</span>
            </ContinueButton>
            <KakaoButton type="submit">
              <RiKakaoTalkFill style={{ marginRight: "5" }} />
              <span>KakaoTalk Login</span>
            </KakaoButton>
            <ResetPasswordBox>
              <ResetPassword href="">RESET PASSWORD</ResetPassword>
            </ResetPasswordBox>
          </LoginForm>
        </>
      </SignInContent>
    </SignInBox>
  );
}
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 312px;
`;
const SignInBox = styled.div`
  ${(props) => props}
  position: absolute;
  display: ${({ account }) => (account ? "flex" : "none")};
  width: 350px;
  right: 64px;
  top: 62px;
  padding: 24px 0 15px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const SignInContent = styled.div`
  max-height: calc(100vh - 56px - 43px);
  padding: 0 19px;
`;

const SignInTab = styled.ul`
  display: flex;
`;
const SignInForm = styled.a`
  width: auto;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.5px;
`;

const EmailBox = styled.div`
  min-height: 75px;
`;

const SignInEmail = styled.input`
  font-size: 20px;
  line-height: 22px;
  font-weight: 400;
  height: 38px;
  width: 100%;
  border-bottom: 1px solid #000;
  margin-top: 10px;
  margin-bottom: 2px;
  cursor: text;
  appearance: textfield;
`;

const PasswordBox = styled.div`
  height: 80px;
`;

const SignInPassword = styled.input`
  font-size: 20px;
  line-height: 22px;
  font-weight: 400;
  height: 38px;
  width: 100%;
  border-bottom: 1px solid #000;
  margin-bottom: 2px;
  padding-right: 45px;
  cursor: text;
  appearance: textfield;
`;
const ShowButton = styled.button`
  color: #babbbc;
  position: absolute;
  top: 123px;
  right: 15px;
  font-size: 13px;
  cursor: pointer;
`;
const CheckBoxInput = styled.div`
  font-size: 14px;
  margin: 10px 0 24px;
  width: 75%;
`;
const ContinueButton = styled.button`
  border: none;
  background-color: #000;
  color: white;
  font-size: 20px;
  text-align: center;
  display: block;
  line-height: 50px;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const KakaoButton = styled.button`
  border: none;
  background-color: #ffe812;
  color: black;
  font-size: 20px;
  text-align: center;
  display: block;
  line-height: 50px;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const RegistrationForm = styled.a`
  position: absolute;
  right: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: auto;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
`;
const ResetPasswordBox = styled.div`
  color: #7b7b7b;
  font-weight: 400;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
  width: 100%;
  margin: 19px 0 0;
  cursor: pointer;
`;

const ResetPassword = styled.a``;
