import styled from "styled-components";
import logo from "../data/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useDebounce from "../useDebounce";

function NavBar() {
  const navigate = useNavigate();
  // const searchDebounce = useDebounce({ value: text, delay: 1000 });

  return (
    <DivStyle>
      <Logo
        src={logo}
        alt=""
        onClick={() => {
          navigate(`/`);
        }}
      />
      <InputStyle
        onChange={(e) => {
          navigate(`/search?title=${e.target.value}`);
        }}
        placeholder="  영화 제목을 입력하여 검색하세요."
      />
      <ButtonStyle>
        <button onClick={() => navigate(`/signup`)}>회원가입</button>
        <button onClick={() => navigate(`/login`)} className="pl-[5px]">
          로그인
        </button>
      </ButtonStyle>
    </DivStyle>
  );
}

const DivStyle = styled.div`
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;
const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px;
`;
const ButtonStyle = styled.div`
  display: flex;
  margin: 20px;
`;
const InputStyle = styled.input`
  border: 2px solid darkgray;
  width: 800px;
  height: 60px;
  margin-top: 20px;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

export default NavBar;
