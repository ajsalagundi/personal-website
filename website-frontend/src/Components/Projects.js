import React from "react";

class Dashboard extends React.Component {
    state = { show: false };

    showModal = () => {
        this.setState({show: true});
    }

    hideModal = () => {
        this.setState({show: false});
    }
}

export default class Projects extends React.Component {
    render() {
        return (
            <section id={"projs"} className={"w-screen flex bg-gray-900 pb-10"} style={{height: '1800px'}}>
                <div className="container mx-auto px-4 grid grid-cols-2 gap-4 w-full flex">
                    <div className="flex justify-center items-center h-auto mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <button className="text-center font-bold text-4xl text-gray-800">Partner Portal</button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-auto mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <div className="text-center font-bold text-4xl text-gray-800">Bloodhound</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-auto mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <div className="text-center font-bold text-4xl text-gray-800">Slackbot</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-auto mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <div className="text-center font-bold text-4xl text-gray-800">Search Hero Module</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-auto mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <div className="text-center font-bold text-4xl text-gray-800">CPU/Memory Simulation</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-auto mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <div className="text-center font-bold text-4xl text-gray-800">OS Scheduling</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-auto mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <div className="text-center font-bold text-4xl text-gray-800">Calculus Calculator</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-auto mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <div className="text-center font-bold text-4xl text-gray-800">MIPS Cache Sorting</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}