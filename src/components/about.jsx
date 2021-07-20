import React, { Component } from 'react';
import "./about.css";

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="about-page">
                <div className="jumbotron">
                    <h1>Online store created by</h1>
                    <h3>Sergio Inzunza</h3>
                </div>
            </div>
         );
    }
}
 
export default About;