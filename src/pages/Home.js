import React from "react";
// components
import Hero from "../components/Home/Hero";
import LatestBlog from "../components/Home/NewestBlog";
import FeaturedProjects from "../components/Home/FeaturedProjects";

import styled from "styled-components";

function Home() {
  return (
    <Page>
      <Hero />
      <LatestBlog />
      <FeaturedProjects />
    </Page>
  );
}

export default Home;

const Page = styled.div`
  max-width: 1200px;
  margin: auto;

  & > * {
    border-bottom: 1px solid #c3c3c3;
  }
`;
