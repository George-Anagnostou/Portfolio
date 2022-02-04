import React from "react";
// Icons
import Instagram from "../icons/Instagram";
import Gitgub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
// Animations
import styled from "styled-components";

function SocialLinks() {
  return (
    <SocialLinkList>
      <li>
        <a href="https://github.com/George-Anagnostou" target="_blank" rel="noreferrer">
          <Gitgub />
        </a>
      </li>
      <li>
        <a href="https://github.com/George-Anagnostou" target="_blank" rel="noreferrer">
          <LinkedIn />
        </a>
      </li>
      <li>
        <a href="https://github.com/George-Anagnostou" target="_blank" rel="noreferrer">
          <Instagram />
        </a>
      </li>
    </SocialLinkList>
  );
}

const SocialLinkList = styled.ul`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  border-radius: 10px;

  li {
    margin: 0 0.5rem;

    a {
      display: block;
    }
    a[href]:not(:hover) path {
      fill: #363636 !important;
    }
  }
`;

export default SocialLinks;
