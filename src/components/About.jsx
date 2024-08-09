import { motion } from "framer-motion";
import aboutImg from "../assets/about2.jpg";
import { ABOUT_TEXT } from "../constants";
import { Element } from "react-scroll";
Element;
const About = () => {
  return (
    <Element name="about" className="border-b border-neutral-900 pb-4 lg:mb-35">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full lg:w-1/2 "
        >
          <div className="flex justify-center lg:justify-start">
            <p>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default About;
