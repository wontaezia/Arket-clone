import React, { useState } from "react";
import styled, { css } from "styled-components";
import Login from "../components/Login";
import { GrSearch } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { BsQuestionCircle } from "react-icons/bs";
import { BsBag } from "react-icons/bs";

import MenuContainer from "./MenuContainer";

const Nav = () => {
  const [currentMenu, setCurrentMenu] = useState(false);
  const [tool, setTool] = useState(false);
  const [account, setAccount] = useState(false);
  const openMenu = (menu) => {
    setCurrentMenu(true);
  };
  return (
    <>
      <NavBox>
        <Container>
          <Logo href="http://localhost:3000/">ARDOG</Logo>
          <NavBar>
            <MenuContainer currentMenu={currentMenu} openMenu={openMenu} />
          </NavBar>
        </Container>
        <Icons>
          <Button>
            <GrSearch />
          </Button>
          <Button>
            <VscAccount onClick={() => setAccount(!account)} />
          </Button>
          <Button>
            <BsQuestionCircle onClick={() => setTool(!tool)} />
          </Button>
          <Button>
            <BsBag />
          </Button>
        </Icons>
      </NavBox>
      <Login account={account} />
      <QuestionBox tool={tool}>
        <AboutWrap>
          <AboutBox>
            <About src="/Images/tag.png" alt="About ARKET" />
            <AboutTitle>About ARKET</AboutTitle>
          </AboutBox>
          <AboutBox>
            <About src="/Images/coffee.png" alt="Stores & cafés" />
            <AboutTitle>Stores & cafés</AboutTitle>
          </AboutBox>
          <AboutBox>
            <About src="/Images/smile.png" alt="Customer service" />
            <AboutTitle>Customer service</AboutTitle>
          </AboutBox>
          <AboutBox>
            <About src="/Images/closed-tag.png" alt="Newsletter" />
            <AboutTitle>Newsletter</AboutTitle>
          </AboutBox>
          <AboutBox>
            <About src="/Images/shopping-bag.png" alt="Size guide" />
            <AboutTitle>Size guide</AboutTitle>
          </AboutBox>
          <AboutBox>
            <About src="/Images/cycle.png" alt="Recycle with ARKET" />
            <AboutTitle>Recycle with ARKET</AboutTitle>
          </AboutBox>
        </AboutWrap>
        <QuestionBottom>
          <InternationalButton>
            <span>International</span>
          </InternationalButton>
        </QuestionBottom>
      </QuestionBox>
      {/* <Test
        onClick={() => {
          setCurrentMenu(false);
          setTool(false);
          setAccount(false);
        }}
      ></Test> */}
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  margin-top: 5px;
  margin-right: 0px;
`;

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  margin-left: 20px;
  border-bottom: 2.5px solid black;
`;

const Logo = styled.a`
  font-size: 27px;
  margin-top: 31px;
  width: 90px;
  cursor: pointer;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 5px;
  width: auto;
  height: 20px;
  list-style-type: none;
`;

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: auto;
  height: auto;
  margin-right: 25px;
`;

const AboutBox = styled.div`
  height: auto;
  width: 135px;
  text-align: center;
`;
const QuestionBox = styled.div`
  display: ${({ tool }) => (tool ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  right: 30px;
  width: 450px;
  height: auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background-color: white;
  transform-origin: 30% 0;
  padding: 15px 15px 10px;
  flex-wrap: wrap;
  justify-content: center;
`;
const AboutWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const About = styled.img`
  width: 75px;
  height: 75px;
  margin: 10px 10px 10px 20px;
  cursor: pointer;
`;

const AboutTitle = styled.span`
  font-size: 13px;
  line-height: 24px;
  margin-left: 9px;
  border-radius: 2px;
  padding: 5px 8px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const QuestionBottom = styled.div`
  text-align: center;
  width: 100%;
  height: auto;
  border-top: 1px solid #ddd;
  margin-top: 20px;
`;

const InternationalButton = styled.button`
  font-size: 14px;
  cursor: pointer;
  margin-top: 5px;
  &:hover {
    opacity: 0.6;
  }
`;

const Button = styled.button`
  border-radius: 4px;
  padding: 8px;
  display: flex;
  align-items: center;
  font-size: 22px;
  margin-left: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const Test = styled.div`
  position: absolute;
  width: 100%;
  height: 1000px;
`;

export default Nav;
