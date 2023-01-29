import { ReactElement } from 'react';
import { motion } from 'framer-motion';
type Props = {
  children?: ReactElement;
  className: string;
};

const Card = ({ children, className }: Props) => {
  return (
    <motion.div
      className={`bg-white  rounded-[10px] ${className} shadow-md`}
      whileHover={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
