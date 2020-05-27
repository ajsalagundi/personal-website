import React from "react";

export default class Footer extends React.Component{
    render() {
        return (
            <section id={"contact"} className={"w-screen flex bg-gray-900"} style={{paddingBottom: '30%'}}>
                <div className="container mx-auto px-64 w-full">
                    <div className="text-center font-bold text-4xl text-orange-200 mt-6 w-auto">Contact Me At</div>
                    
                </div>
            </section>
        );
    }
}