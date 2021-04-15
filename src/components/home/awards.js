import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Awards extends Component {

    render() {
        const listAwards = [    
            "Google Analytics Certified Developer",
            "Mobile Web Specialist - Google Certification",
            "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
            "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
            "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
            "1 st Place - James Buchanan High School - Hackathon 2006",
            "3 rd Place - James Buchanan High School - Hack"
        ];

        return (
            <>
                <div id="Awards" style={this.props.common}>
                    <h1>Awards & Certifications</h1>
                    <ul>
                        {listAwards.map((obj, index) => {
                            return <li key={index}><FontAwesomeIcon icon={["fas", "check"]} size="1x"/> {obj}</li>
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

export default Awards;