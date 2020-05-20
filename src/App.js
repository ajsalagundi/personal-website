import React from 'react';
import Header from "./Components/Header";
import About from "./Components/About";

export default class App extends React.Component {
    render() {
        return (
            <div>
            <Header/>
            <About/>
            </div>
        )
    }
}