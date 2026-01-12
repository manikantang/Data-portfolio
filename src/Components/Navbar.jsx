import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/manikantan-ganesan/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/manikantang">
          <FaGithub />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=mganesan2@hawk.iit.edu&su=SUBJECT&body=BODY&bcc=manikantang11@gmail.com">
          <BiLogoGmail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
