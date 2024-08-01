import "./MenuItem.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useNavContext } from "../../context/NavContext";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ page }) => {
  const style = { border: `1px dotted ${page.color}` };
  const { isOpen, toggleOpen } = useNavContext();
  const navigate = useNavigate();

  const iconStyle = { border: page.url === "/circle" ? "10px" : "2px" };
  const textStyle = { color: page.color };

  const handleClick = () => {
    if (isOpen) {
      toggleOpen(); // collapse the menu
      setTimeout(() => {
        navigate(page.url);
      }, 450);
    } else {
      navigate(page.url);
    }
  };
  return (
    <motion.li
      className="menu-item"
      variants={variants}
      whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.95 }}
      style={style}
      onClick={handleClick}
    >
      <img className="menu-item__icon" src={page.icon} style={iconStyle} />
      <code className="menu-item__text" style={textStyle}>
        {page.name}
      </code>
    </motion.li>
  );
};

export default MenuItem;
