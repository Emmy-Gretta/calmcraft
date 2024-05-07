const MainButton = ({ title }) => {
   return ( 
      <>
      <section className="flex items-center justify-center mt-4">
         <button type="submit" className="w-[180px] h-[40px] rounded-full bg-[#48A248] text-white">
            {title}
         </button>
      </section>
      </>
    );
}
 
export default MainButton;