import React from "react";
import Modal from "./Modal";

export default class Projects extends React.Component {
    render() {
        return (
            <section id={"projs"} className={"w-screen flex bg-gray-900 pb-10"} style={{height: '800px'}}>
                <div className="container mx-auto px-4 grid grid-cols-2 gap-4 w-full flex">
                    <div className="flex justify-center items-center h-16 mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <Modal name={"Partner Portal"} message={"This project entailed the construction of a portal for the company's affiliates to view relevant information. For example, since Mercatalyst is an eCommerce firm,\n" +
                            "                                        the portal would be designed for their affiliates, such as suppliers, shippers, and others, to view information that is relevant to them. This project was where I\n" +
                            "                                        was first introduced to the MERN stack, where by we stored partner information in a MongoDB database, used Mongoose for handling object modeling, and routed using\n" +
                            "                                        ExpressJS and RESTful API concepts. We attempted to utilize React as our front-end development framework, however the middleware software they had previously implemented\n" +
                            "                                        (Electricity) was not able to handle ReactJSX language, and we were thus reduced to developing views with EJS templating engine, HTML, and CSS. This was also where\n" +
                            "                                        I was first exposed to Postman and TravisCI as tools for software development."}/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-16 mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <Modal name={"Bloodhound"} message={"Bloodhound was focused on developing a module that delivered a streamlined response to a tracking request. More specifically, a user would send in a request to receive the latest tracking information regarding a package, and the response would contain a clean and unified message that said where the package was, what was the latest movements, and so forth, regardless of the carrier. I specifically worked on providing support for UPS. This project provided us with an experience in working in a NodeJS development environment."}/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-16 mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <Modal name={"Slackbot"} message={"Slackbot was specifically designed for our company's employees as a way to track packages using Bloodhound. This project gave me exposure in creating automated message bots using Slack's API, which was completely different that developing a web platform. "}/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-16 mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <Modal name={"Search Hero Module"} message={"The goal for the search hero module was for customers to utilize enhanced search engine features to research different products that we had offered for one of our services. We had to constrain the search engine to display results that would fit the description of what the user provided and detailed the UI to be similar to those of the big-box retailers. This project was based solely on HTML, CSS, and the usage of lunr, a client-side search engine. "}/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-16 mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <Modal name={"CPU/Memory Simulation"} message={"This was a school project where we had to simulate the interprocess communication between the CPU and the Memory module. Essentially, we had a set of 32 instructions that the Memory class would store and relay the result of the instruction back to the CPU class, as it would in a real computer. The results of the instruction were decoded and displayed in real-time to an output file. Complexities emerged when I was attempting to set up the communication between the two classes in Java. To solve this issue, I used a StringBuffer to cache the instruction from Memory and set the buffer to read the Memory class's output from the CPU class. "}/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-16 mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <Modal name={"OS Scheduling"} message={"The Operating System Scheduling project was a detailed simulation of several of the basic uniprocessor scheduling methods taught. They included First Come First Served (FCFS), Round Robin (RR), Shortest Response Time (SRT), Shortest Process Next (SPN), Highest Response Ratio Next (HRRN), and Feedback (with 3 queues)."}/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-16 mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <Modal name={"Calculus Calculator"} message={"This was a unique project I developed in C++ where I had to use a binary tree to calculate the result of basic calculus equations (simple derivatives and integrals) and display the result to a text file."}/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-16 mb-16">
                        <div className="flex items-center justify-center rounded overflow-hidden shadow-2xl w-full h-full mx-10 bg-orange-600">
                            <Modal name={"MIPS Cache Sorting"} message={"The cache sorting project was where I had to write instructions in Assembly to sort an array of numbers using both Bubble Sort and Merge Sort, and store the results back into the MIPS memory unit. "}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}