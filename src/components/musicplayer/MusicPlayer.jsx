// import "./musicplayer.css"

// function MusicPlayer() {
//     return (
//         <div className="musicplayer">

//         </div>
//     )
// }

// export default MusicPlayer

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./musicplayer.css";
import {
    faBackwardStep,
    faBars,
    faCirclePlay,
    faForwardStep,
    faHeart,
    faMicrophone,
    faPlay,
    faRotate,
    faShuffle,
    faSquare,
    faUpRightAndDownLeftFromCenter,
    faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons";

function MusicPlayer() {
    return (
        <div className="musicplayer">
            <div className="music-player-one">
                <div className="img-div-one">
                    <img
                        // src="https://imgs.search.brave.com/cu9Tj1j9X3ikCtsd7VDLKwbzrduMU4kQnzqpbvLIjtU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w"
                        alt=""
                    />
                </div>
                <div className="song-div-one">
                    <h3>album</h3>
                    <p>artist name</p>
                </div>
                <div className="icon-div-one">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
            </div>
            <div className="music-player-two">
                <div className="icon-div-two">
                    <FontAwesomeIcon icon={faShuffle} />
                    <FontAwesomeIcon icon={faBackwardStep} />
                    <FontAwesomeIcon icon={faCirclePlay} />
                    <FontAwesomeIcon icon={faForwardStep} />
                    <FontAwesomeIcon icon={faRotate} />
                </div>
                <div className="song-length"></div>
            </div>
            <div className="music-player-three">
                <FontAwesomeIcon icon={faSquare} />
                <FontAwesomeIcon icon={faMicrophone} />
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon={faVolumeXmark} />
                <div className="volume-div"></div>
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </div>
        </div>
    );
}

export default MusicPlayer;