import "./homecontainer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function HomeContainer() {
    return (
        <div className="homecontainer">

            <div className="homeIcon">
                <FontAwesomeIcon icon={faHouse} />
                <h3>Home</h3>

            </div>

            <div className="searchIcon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <h3>Search</h3>
            </div>

        </div>
    )
}

export default HomeContainer