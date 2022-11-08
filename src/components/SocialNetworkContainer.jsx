import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/gabriel-souza-bruini/" },
  { name: "github", icon: <FaGithub />, href: "https://github.com/gabrielBruini" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.href} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
