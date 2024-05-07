import AuthSide from "../../components/Auth/AuthSide";
import SignUpForm from "../../components/Auth/SignUpForm";

const Signup = () => {
   return (
      <>
     <section className="flex">
      <section className="w-[50%]">
         <AuthSide />
      </section>
      <section className="w-[50%]">
         <SignUpForm />
      </section>
     </section>
      </>
     );
}
 
export default Signup;