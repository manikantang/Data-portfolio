import { motion } from "framer-motion";

// Programming & Data
import { FaPython, FaDatabase } from "react-icons/fa";
import { SiR, SiPandas, SiNumpy } from "react-icons/si";

// BI & Visualization
import { SiTableau, SiPowerbi, SiLooker } from "react-icons/si";

// Cloud & Data Platforms
import { SiAmazonaws, SiMicrosoftazure, SiSnowflake, SiDatabricks } from "react-icons/si";

// Data Engineering
import { SiApacheairflow, SiDbt } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDatabase className="text-7xl text-gray-400" />
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPandas className="text-7xl text-purple-600" />
        </motion.div>

        <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNumpy className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTableau className="text-7xl text-sky-400" />
        </motion.div>

        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPowerbi className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAmazonaws className="text-7xl text-orange-400" />
        </motion.div>

        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMicrosoftazure className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSnowflake className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDatabricks className="text-7xl text-red-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
