import './Menu.scss'
import { motion } from 'framer-motion'
import MenuItem from '../MenuItem/MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
}

const itemIds = [0, 1, 2, 3, 4]

const Menu = ({ pages }) => {
  return (
    <motion.ul
      variants={variants}
      className="menu-ul"
    >
      {itemIds.map((i) => (
        <MenuItem
          i={i}
          key={i}
        />
      ))}
    </motion.ul>
  )
}

export default Menu
