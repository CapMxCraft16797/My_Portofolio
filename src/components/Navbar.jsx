import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/maLogo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="sticky top-0 mb-10 flex flex-wrap items-center justify-center py-1 w-100 bg-slate-800 lg:justify-between   ">
      <div className="flex flex-shrink-0">
        <img className="h-5 w-20 m-5" src={logo} alt="logo" />
      </div>
      <div className=" flex flex-wrap  gap-5 bg-gradient-to-r  from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          About Me
        </Link>
        <Link
          to="technologies"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Technologies
        </Link>
        {/* <Link
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Experience
        </Link> */}
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="touch"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Contacts
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 m-8 text-2xl ">
        <a href="https://github.com/CapMxCraft16797">
          <FaGithub className="hover:text-neutral-500 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/mostafa-el-kholy-192360114/">
          <FaLinkedin className="hover:text-neutral-500 cursor-pointer" />
        </a>
        <a href="https://x.com/ByteSizedBiz1">
          <FaSquareXTwitter className="hover:text-neutral-500 cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100008395536966">
          <FaFacebook className="hover:text-neutral-500 cursor-pointer" />
        </a>
        <a className="mr-5" href="https://www.instagram.com/capmxqwerty/">
          <FaInstagram className="hover:text-neutral-500 cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
