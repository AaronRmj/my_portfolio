import React from "react";
import SocialLink from "../components/socialLink";
import git from "../assets/images/bxl-github.svg"
import linkendin from "../assets/images/bxl-linkedin.svg"
import gmail from "../assets/images/bxl-gmail.svg"
const Landing = () =>{
    return(
        <section className="text-white text-5xl p-[20vh] space-y-10">
            <h1 className="font-bold">AARON RAMAMONJISOA</h1>
            <h3>Fullstack web developer</h3>    
            <div className="flex space-x-6">
                <SocialLink 
                    href="https://github.com/AaronRmj"
                    imgSrc={git}
                    alt="github"
                />
                <SocialLink 
                    href="https://linkendin.com/AaronRmj"
                    imgSrc={linkendin}
                    alt="linkendin"
                />
                <SocialLink 
                    href="https://facebook.com/AaronRmj"
                    imgSrc={gmail}
                    alt="facebook"
                />
            </div>
        </section>
        
    )

}
export default Landing


