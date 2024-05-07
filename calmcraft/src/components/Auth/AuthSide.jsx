const AuthSide = () => {
   return ( 
      <>
      <section className="image-background">
         <section className="flex flex-row gap-3 px-8 py-8">
            <img src="/Signup/mainLogo.svg" alt="Calm Craft" width={40} height={20} />
            { /*Link to home*/}
            <h1 className="font-[700] text-2xl">CalmCraft</h1>
         </section>
         <section>
            <section className="flex flex-col items-center justify-center mt-40">
              <img src="/Signup/mainLogo.svg" alt="Calm Craft" width={150} height={20} />
              <p className="text-sm mt-8"> 
              Unlock Peace of Mind with Calm Craft Your Path to Inner Serenity.
              </p>
            </section>
         </section>
      </section>
      </>
    );
}
 
export default AuthSide;