import { Outlet } from "react-router-dom";
import HomeContainer from "../components/homecontainer/HomeContainer";
import Navbar from "../components/navbar/Navbar";
import SongHeadingContainer from "../components/songHeadingContainer/SongHeadingContainer";

const ParentPage = () => {
  return (
    <main style={{ display: "flex", width: "100vw" }}>
      <div>
        <HomeContainer />
        <SongHeadingContainer />
      </div>
      <div
        style={{
          flexGrow: 1,
        }}
      >
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default ParentPage;
