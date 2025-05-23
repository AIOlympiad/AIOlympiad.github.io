import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";

// Components
import Hero from "../components/Hero";
// import AboutMe from "../components/AboutMe";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";

// Config
import { filteredProjects, moreInfo } from "../config";

// Utils
import { updateTitle } from "../utils";

// Router
import { Link } from "react-router-dom";
// Icons
import { Icon } from "@iconify/react";
// Bootstrap
import { Button } from "react-bootstrap";

const Home = () => {
  const theme = useSelector(selectMode);
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    updateTitle(`${userData.name} | Portfolio`);
  }, [userData]);

  return (
    <>
      <Hero name={userData.name} />
      {/* Optional main content if needed */}
      {/* <main>
        <AboutMe
          avatar_url={userData.avatar_url}
          bio={userData.bio}
          moreInfo={moreInfo}
        />
        <Skills />
        <Projects filteredProjects={filteredProjects} />
        <Contact />
        <Link to="/All-Projects">
          <Button
            size="lg"
            variant={theme === "light" ? "outline-dark" : "outline-light"}
          >
            All <Icon icon="icomoon-free:github" /> Projects
          </Button>
        </Link>
      </main> */}
    </>
  );
};

export default Home;
