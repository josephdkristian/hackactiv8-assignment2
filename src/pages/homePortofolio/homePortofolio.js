import React from 'react';

const SideMenuComp = (props) => {
    return (
        <>
            <div className="sideMenu">
                <div className="sideMenuChild">
                    <div className="photoContent"></div>
                    <ul>
                        <li><a href="#aboutPage" >About</a></li>
                        <li><a href="#expPage" >Experience</a></li>
                        <li><a href="#eduPage" >Education</a></li>
                        <li><a href="#skillsPage" >Skills</a></li>
                        <li><a href="#interestPage" >Interests</a></li>
                        <li><a href="#awardsPage" >Awards</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

const AboutComp = (props) => {
    return (
        <>
            <div id="aboutPage" style={props.commonStyle}>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies. Est ante in nibh mauris cursus mattis molestie a iaculis. Velit dignissim sodales ut eu sem. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Varius duis at consectetur lorem donec massa. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Ac turpis egestas sed tempus. Turpis cursus in hac habitasse platea dictumst quisque.</p>
            </div>
        </>
    );
};

const ExpComp = (props) => {
    return (
        <>
            <div id="expPage" style={props.commonStyle}>
                <h1>Experience</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies. Est ante in nibh mauris cursus mattis molestie a iaculis. Velit dignissim sodales ut eu sem. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Varius duis at consectetur lorem donec massa. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Ac turpis egestas sed tempus. Turpis cursus in hac habitasse platea dictumst quisque.</p>
            </div>
        </>
    );
};

const EduComp = (props) => {
    return (
        <>
            <div id="eduPage" style={props.commonStyle}>
                <h1>Education</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies. Est ante in nibh mauris cursus mattis molestie a iaculis. Velit dignissim sodales ut eu sem. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Varius duis at consectetur lorem donec massa. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Ac turpis egestas sed tempus. Turpis cursus in hac habitasse platea dictumst quisque.</p>
            </div>
        </>
    );
};

const SkillsComp = (props) => {
    return (
        <>
            <div id="skillsPage" style={props.commonStyle}>
                <h1>Skills</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies. Est ante in nibh mauris cursus mattis molestie a iaculis. Velit dignissim sodales ut eu sem. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Varius duis at consectetur lorem donec massa. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Ac turpis egestas sed tempus. Turpis cursus in hac habitasse platea dictumst quisque.</p>
            </div>
        </>
    );
};

const InterestsComp = (props) => {
    return (
        <>
            <div id="interestPage" style={props.commonStyle}>
                <h1>Education</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies. Est ante in nibh mauris cursus mattis molestie a iaculis. Velit dignissim sodales ut eu sem. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Varius duis at consectetur lorem donec massa. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Ac turpis egestas sed tempus. Turpis cursus in hac habitasse platea dictumst quisque.</p>
            </div>
        </>
    );
};

const AwardsComp = (props) => {
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
            <div id="awardsPage" style={props.commonStyle}>
                <h1>Awards & Certifications</h1>
                <ul>
                    {listAwards.map((obj, index) => {
                        return <li key={index}>{obj}</li>
                    })}
                </ul>
            </div>
        </>
    );
};

class HomePortofolio extends React.Component {

    state = {
        common: {
            height: `${document.body.clientHeight}px`,
            padding: "50px"
        },
    }

    render() {
        return (
            <div id="mainPage" className="container">
                <div className="row">
                    <div className="col-md-3">
                        <SideMenuComp />
                    </div>
                    <div className="col-md-9 overflow-y-scroll" style={this.state.common}>
                        <AboutComp commonStyle={this.state.common} />
                        <ExpComp commonStyle={this.state.common} />
                        <EduComp commonStyle={this.state.common} />
                        <SkillsComp commonStyle={this.state.common} />
                        <InterestsComp commonStyle={this.state.common} />
                        <AwardsComp commonStyle={this.state.common} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePortofolio;