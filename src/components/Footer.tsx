import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <BsTwitter className="footer-icons" />
        <BsFacebook className="footer-icons" />
        <AiFillInstagram className="footer-icons" />
        <AiFillGithub className="footer-icons" />
      </div>
    </footer>
  );
};
