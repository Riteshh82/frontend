import React from 'react';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <>
    
      <Fade bottom>
        <footer className="footer lg:max-w-7xl mx-auto">
          <Link to="https://twitter.com/Imriteshxo" target="_blank" rel="noopener noreferrer" aria-label="Go To Ritesh Yadav Twitter Page" title="Twitter Page">
            <XIcon className="" />
          </Link>

          <Link to="https://linkedin.com/in/riteshh82" target="_blank" rel="noopener noreferrer" aria-label="Go To Ritesh Yadav Linkedin Page" title="Linkedin Page">
            <LinkedInIcon className=""/>
          </Link>

          <Link to="https://github.com/Riteshh82" target="_blank" rel="noopener noreferrer" aria-label="Go To Ritesh Yadav Github Page" title="Github Page">
            <GitHubIcon className="" />
          </Link>

          <Link to="https://www.instagram.com/imriteshxo/" target="_blank" rel="noopener noreferrer" aria-label="Go To Ritesh Yadav Instagram Page" title="Instagram Page">
            <InstagramIcon className="" />
          </Link>
          </footer>
      </Fade>
    </>
  );
}

export default Footer
