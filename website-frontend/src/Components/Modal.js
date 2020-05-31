import React from "react";

export default function Modal(props){
    const [showModal, setShowModal] = React.useState(false);

    return(
        <>
            <button
                className="text-center font-bold text-4xl text-gray-800"
                type={"button"}
                style={{transition: " all .15s ease"}}
                onClick={() => setShowModal(true)}
            >{props.name}
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-200 outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-900 rounded-t">
                                    <h3 className="text-3xl font-semibold text-gray-900">
                                        {props.name}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none hover:text-gray-200">
                                                x
                                            </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-gray-900 text-lg leading-relaxed">
                                        {props.message}
                                    </p>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-900 rounded-b">
                                    <button
                                        className="text-gray-100 bg-gray-900 font-bold uppercase px-6 py-2 text-sm rounded hover:bg-orange-600 hover:text-gray-900 mr-1 mb-1"
                                        type={"button"}
                                        style={{transition: "all .15s ease"}}
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ): null}
        </>
    )
};
