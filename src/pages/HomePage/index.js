import { motion } from "framer-motion";

function HomePage() {
  return (
    <div className="justify-center">
      <motion.div
        className="w-20 h-20 bg-red-600"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      />
    </div>
  );
}

export default HomePage;
