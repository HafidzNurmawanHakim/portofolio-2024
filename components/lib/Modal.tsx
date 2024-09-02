import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text }: any) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="backdrop"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      onClick={handleClose}
    >
      <motion.div
        animate="visible"
        className="modal orange-gradient"
        exit="exit"
        initial="hidden"
        variants={dropIn}
        onClick={(e) => e.stopPropagation()}
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
