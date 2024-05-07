import { NavLink } from "react-router-dom";
import MainButton from "../Buttons/MainButton";
import InputField from "../Inputs/InputField";

const SignUpForm = () => {
   return ( 
      <>
      <section className="px-10 poppins-thin-italic py-8">
         <section className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-xl font-[700]">SIGN UP</h1>
            <p className="text-md text-[#636363]">
            Welcome! Your privacy and security are our top priority.  <br />
            <p className="ml-32"> Create your account</p>
            </p>
         </section>
         <section className="flex flex-col items-center justify-center mt-8">
            <InputField
              inputType="text"
              placeHolder="Username"
             />
              <InputField
              inputType="email"
              placeHolder="Enter your email"
             />
         </section>
         <section className="flex items-center justify-center mt-2">
            <div className="border border-1  border-[#E0E0E0] h-[200px] w-[180px] border-1 rounded-[10px] shadows py-3 ">
             <section className="flex items-center justify-center flex-col">
             <h1 className="font-[600] text-xl">fingerprint</h1> 
             <hr className="h-[2.5px] w-32 bg-[#4CAF4F]" />
              <div className="border border-[#E0E0E0] h-[90px] w-[90px] border-1 mt-7 shadowSm flex items-center justify-center">
               <img src="/Signup/Fingerprint.svg" alt="Fingerprint" width={60} height={20} />
              </div>
             </section>
            </div>
         </section>
         <section>
            <MainButton title="Create account"  />
         </section>
         <section className="flex items-center justify-center mt-10">
            <p>
               Already have an account?
               <NavLink to="/auth/login" className="text-[#5C59FF] underline decoration-[#5C59FF]">Sign in</NavLink>
            </p>
         </section>
      </section>
      </>
    );
}
 
export default SignUpForm;