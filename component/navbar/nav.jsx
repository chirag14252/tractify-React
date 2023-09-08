import "./nav.css"
import logo from "./images/traction.png";
import homesvg from "./images/home.svg";
const Nav = () => {
    const heading = ["SERVICES", "SOLUTION", "CONTACT US"];
    return (
        <>
            <div className="nav-bar">
                <div className="left-box">
                    <div className="nav-logo"><img src={logo} height={100}></img></div>
                    <div className="nav-child">
                        <img src={homesvg} alt="" className="home-svg" />
                        {
                            heading.map((item, idx) => {
                                return <div className="heading" key={idx}>{item}</div>
                            })
                        }
                    </div>
                </div>
                <div className="button-Schedule">SCHEDULE A MEET</div>
            </div>



        </>

    )
}

export default Nav;