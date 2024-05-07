import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (  
        <>
            <section className="px-8 py-5">
                <section className="flex flex-row gap-3">
                    <img src="/Dashboards/Cl_logo.svg" alt="Calm Craft" width={40} height={20} />
                    <h1 className="font-bold text-2xl text-[#48A248]">CalmCraft</h1>
                </section>
                <section className="flex flex-col text-md gap-3 ml-3">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => 
                            isActive 
                            ? "flex gap-3 font-medium h-[35px] w-[170px] bg-[#48A248] rounded-[50px] items-center justify-center text-white"
                            : "flex gap-3 font-medium items-center h-[40px] w-[170px] rounded-[50px] justify-center"
                        }
                    >
                        <section className="flex gap-3 ml-3 mr-5">
                            <img 
                                // src={isActive ? "/Dashboards/ActiveDashboard.svg" : "/Dashboards/Dashboard.svg"} 
                                alt="Dashboard" 
                                width={16} 
                                height={10}
                            />
                            <h1>Dashboard</h1>
                        </section>
                    </NavLink>
                </section>
            </section>
        </>
    );
}
 
export default Sidebar;
