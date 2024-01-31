// import "./rightBarArea.css"

import RightBarContent from "../rightBarContent/RightBarContent"
import Row from "../row/Row"

function RightBarArea() {
    return (
        <div>
            <RightBarContent />
            <Row title={"Tamil Trending"} />
            <Row title={"2024 kuthu songs"} />
            <Row title={"2024 Romantic"} />
        </div>
    )
}

export default RightBarArea