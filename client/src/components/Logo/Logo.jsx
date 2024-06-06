import "./Logo.scss";
const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2 8 16 24"
      width="16"
      height="24"
      className="logo"
    >
      <path
        d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
        className="logo__path"
      ></path>
    </svg>
  );
};

export default Logo;
