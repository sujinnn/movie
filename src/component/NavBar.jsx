import styled from "styled-components";
import logo from "../data/logo.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <DivStyle>
      <Logo src={logo} alt="" />
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
  margin: 10px;
`;
const ButtonStyle = styled.div`
  display: flex;
  margin: 20px;
`;

export default NavBar;
