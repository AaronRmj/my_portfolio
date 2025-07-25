import React from "react";
const SocialLink = ({href, imgSrc, alt}) =>{
    return(
        <a href={href}>
            <img className="bg-white rounded-sm w-10 h-10 flex text-center"
                src={imgSrc}
                alt={alt}
            />
        </a>
    )
}
export default SocialLink