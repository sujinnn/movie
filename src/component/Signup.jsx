import styled from "styled-components";

function Signup() {
  return (
    <BigboxStyle>
      <div className="text-[30px] p-[40px] ">Sign UP</div>
      <InputListStyle>
        <PStyle>name</PStyle>
        <InputStyle type="text" />
        <PStyle>Email</PStyle>
        <InputStyle type="text" />
        <PStyle>password</PStyle>
        <InputStyle type="text" />
        <PStyle>Confirm Password</PStyle>
        <InputStyle type="text" />
      </InputListStyle>
      <ButtonStyle>Sign Up</ButtonStyle>
    </BigboxStyle>
  );
}

export const InputListStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BigboxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const InputStyle = styled.input`
  width: 300px;
  border: 1px solid black;
  margin-bottom: 30px;
`;
export const PStyle = styled.p`
  text-align: center;
`;
export const ButtonStyle = styled.button`
  width: 300px;
  height: 80px;
  background-color: lightblue;
`;
export default Signup;
