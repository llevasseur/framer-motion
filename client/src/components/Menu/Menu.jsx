import "./Menu.scss";
import { motion } from "framer-motion";
import MenuItem from "../MenuItem/MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const itemIds = [0, 1, 2];

const Menu = ({ pages, color }) => {
  return (
    <motion.ul variants={variants} className="menu-ul">
      {itemIds.map((i) => (
        <MenuItem
          page={pages[i]}
          key={i}
          color={color}
          className="menu-ul__item"
        />
      ))}
    </motion.ul>
  );
};

export default Menu;
