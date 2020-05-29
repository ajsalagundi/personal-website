import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faFacebook, faGithub} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component{
    render() {
        return (
            <section id={"contact"} className={"w-screen flex bg-orange-600"} style={{paddingBottom: '3%'}}>
                <div className="container mx-auto px-64 w-full">
                    <div className="text-center font-bold text-4xl text-gray-900 mt-12 w-auto">Contact Me At</div>
                    <div className="text-center font-semibold text-xl text-gray-900 mt-2 w-auto">+1 609 208 4589</div>
                    <div className="text-center font-semibold text-xl text-gray-900 mt-2 w-auto"><a href={"mailto:ajsalagundi@gmail.com"}>ajsalagundi@gmail.com</a></div>
                    <ul className="mt-4 w-1/2 list-none flex justify-between mx-auto">
                        <li className={"inline-block text-3xl text-gray-900"}><a href="https://www.linkedin.com/in/ananth-salagundi/"><FontAwesomeIcon icon={ faLinkedin }/></a></li>
                        <li className={"inline-block text-3xl text-gray-900"}><a href="https://www.instagram.com/aj_salagundi/"><FontAwesomeIcon icon={ faInstagram }/></a></li>
                        <li className={"inline-block text-3xl text-gray-900"}><a href="https://www.facebook.com/ananth.salagundi/"><FontAwesomeIcon icon={ faFacebook }/></a></li>
                        <li className={"inline-block text-3xl text-gray-900"}><a href="https://twitter.com/TheAntIsAwesome"><FontAwesomeIcon icon={ faTwitter }/></a></li>
                        <li className={"inline-block text-3xl text-gray-900"}><a href="https://github.com/ajsalagundi"><FontAwesomeIcon icon={ faGithub }/></a></li>
                    </ul>
                </div>
            </section>
        );
    }
}