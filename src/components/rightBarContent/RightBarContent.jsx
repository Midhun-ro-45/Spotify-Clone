import { BrowserRouter as Router } from "react-router-dom";
import ArtistContent from "../artistContent box/ArtistContent";
import "./rightBarContent.css";

function RightBarContent() {
  return <div className="rightBarContent-container">
    <ArtistContent />
    <ArtistContent />
    <ArtistContent />
    <ArtistContent />
    <ArtistContent />
    <ArtistContent />
  </div>;
}

export default RightBarContent;
