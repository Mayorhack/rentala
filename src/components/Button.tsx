import { motion } from 'framer-motion';

type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  return (
    <motion.button
      className="bg-highlight text-white py-4 px-8 rounded-md capitalize hover:bg-[#F4511E97] "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
