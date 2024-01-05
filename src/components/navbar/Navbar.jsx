import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <div className="navbar">

            <div className="arrows">
                <FontAwesomeIcon icon={faCircleArrowLeft} />
                <FontAwesomeIcon icon={faCircleArrowRight} />
            </div>

            <div className="user">
                <FontAwesomeIcon icon={faUser} />
            </div>

        </div>
    )
}

export default Navbar