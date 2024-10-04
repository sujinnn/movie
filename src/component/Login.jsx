import {
  BigboxStyle,
  ButtonStyle,
  InputListStyle,
  InputStyle,
  PStyle,
} from "./Signup";

function Login() {
  return (
    <BigboxStyle>
      <div className="text-[30px] p-[40px] ">Login</div>
      <InputListStyle>
        <PStyle>Email</PStyle>
        <InputStyle type="text" />
        <PStyle>Password</PStyle>
        <InputStyle type="text" />
      </InputListStyle>
      <ButtonStyle>Login</ButtonStyle>
    </BigboxStyle>
  );
}
export default Login;
