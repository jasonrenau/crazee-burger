import Logo from "../../ui/Logo";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <main className="flex h-dvh flex-col items-center justify-center bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat bg-blend-luminosity">
      <Logo />
      <LoginForm />
    </main>
  );
};
export default LoginPage;
