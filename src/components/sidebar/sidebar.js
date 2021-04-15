import React, { Component } from "react";
import photo from '../../cdn/img/saya.jpg';

export class Sidebar extends Component {
    render() {
        return (
        <div className="sideMenu">
            <div className="sideMenuChild">
                <div className="photoContent">
                    <img src={photo} className="photo"/>
                </div>
                <ul>
                    <li><a href="#About" >About</a></li>
                    <li><a href="#Experience" >Experience</a></li>
                    <li><a href="#Education" >Education</a></li>
                    <li><a href="#Skills" >Skills</a></li>
                    <li><a href="#Interest" >Interests</a></li>
                    <li><a href="#Awards" >Awards</a></li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Sidebar;