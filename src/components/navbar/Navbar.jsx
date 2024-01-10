import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">

            <div className="arrows">
                <Link to={"/parentpage"}>
                    <FontAwesomeIcon icon={faCircleArrowLeft} />
                </Link>
                {/* <FontAwesomeIcon icon={faCircleArrowRight} /> */}
            </div>

            <div className="user">
                <FontAwesomeIcon icon={faUser} />
            </div>

        </div>
    )
}

export default Navbar