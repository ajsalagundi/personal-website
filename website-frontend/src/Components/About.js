import React from 'react';
import pic from '../portrait.PNG';

export default class About extends React.Component {
    render(){
        return(
            <section id={"about"} className={"w-screen flex h-screen bg-gray-900"}>
                <div className="flex items-center justify-center w-1/2 h-full">
                    <img className={"self-center w-3/5 h-3/5 ml-10 mt-24"} src={pic} alt=""/>
                </div>
                <div className="flex items-center justify-center w-1/2 h-full">
                    <div className="rounded overflow-hidden shadow-2xl w-3/5 bg-orange-600 mr-10" style={{height: '50%'}}>
                        <div className="text-center font-bold text-5xl text-gray-800 mt-6">A Little About Me</div>
                        <p className="text-left text-gray-900 text-lg mx-10 mt-6">
                            I'm a resourceful and meticulous Software Engineering intern excited to leverage classroom knowledge and experience in a technical environment to develop complex, end-to-end software solutions. I have experience in Java, HTML, CSS, JS and MERN, with proficient knowledge in C++, web hosting technologies, and automated testing.
                        </p>
                        <div className="p-6 pt-10 flex justify-around">
                            <span className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-200">#JS</span>
                            <span className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-200">#HTML</span>
                            <span className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-200">#CSS</span>
                            <span className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-200">#MERN</span>
                            <span className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-200">#Java</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}