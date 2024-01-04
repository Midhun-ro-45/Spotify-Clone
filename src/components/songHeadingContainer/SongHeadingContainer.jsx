import ContentBox from "../content box/ContentBox"
import "./songheadingcontainer.css"

function SongHeadingContainer() {
    return (
        <div className="songheadingcontainer">
            <ContentBox maincontent={"2023 Bollywood Hits"} />
            <ContentBox maincontent={"Latest Telugu Hits"} />
            <ContentBox maincontent={"K.G.F - Chapter 1"} />
            <ContentBox maincontent={"RRR(Tamil)"} />
            <ContentBox maincontent={"Pushpa - The Rise"} />
            <ContentBox maincontent={"Leo(Tamil)"} />
        </div>
    )
}

export default SongHeadingContainer