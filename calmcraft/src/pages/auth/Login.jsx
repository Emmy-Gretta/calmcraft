import AuthSide from "../../components/Auth/AuthSide";
import LoginForm from "../../components/Auth/LoginForm";

const Login = () => {
   return (
      <>
     <section className="flex">
      <section className="w-[50%]">
         <AuthSide />
      </section>
      <section className="w-[50%]">
         <LoginForm />
      </section>
     </section>
      </>
     );
}
 
export default Login;