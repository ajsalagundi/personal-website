import React from 'react';
import pic from '../circle-cropped.png';

export default class About extends React.Component {
    render(){
        return(
            <section id={"about"} className={"w-screen flex h-screen bg-gray-900"}>
                <div className="flex items-center justify-center w-1/2 h-full">
                    <img className={"self-center w-3/5 h-3/5 ml-10"} src={pic} alt=""/>
                </div>
                <div className="flex items-center justify-center w-1/2 h-full">
                    <div className="rounded overflow-hidden shadow-lg bg-red-400 h-48 w-3/5 bg-orange-600">

                    </div>
                </div>
            </section>
        )
    }
}