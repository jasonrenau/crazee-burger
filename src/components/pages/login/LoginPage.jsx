import LoginForm from "./LoginForm";
import Logo from "./Logo";

const LoginPage = () => {
  return (
    <main className="flex h-dvh flex-col items-center justify-center bg-[url('src/assets/images/background.jpg')] bg-cover bg-center bg-no-repeat bg-blend-luminosity">
      <Logo />
      <LoginForm />
    </main>
  );
};
export default LoginPage;
