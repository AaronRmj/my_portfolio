import React from "react";
import self from "../assets/images/self.jpg"
import Button from "../components/Button";
const About = () =>{
    
return(
    <>
        <div className="my-[50vh] mx-[30vh] flex space-x-36">
            <img className="h-[600px] w-3xl rounded-sm" src={self} alt="imageofme" />
            <aside className="space-y-5">
                <h1 className="text-5xl text-red-500">Who am I?</h1>
                <p className="text-2xl text-slate-700 leading-[65px]">A curious and self-motivated frontend developer 
                    with a strong passion for learning and sharing knowledge. 
                    I enjoy working on innovative projects and continuously expanding my
                     skill set. I'm currently seeking for some opportunities for company 
                     experiences while countributing as a developer
                </p>
                <Button className="hover:cursor-pointer" label="Download CV" />
            </aside>
        </div>
        
    </>
)
}

export default About
