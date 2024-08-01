import "./Input.scss";

const Input = ({ color, name, value, handleChange, min = -200, max = 200 }) => {
  const style = {
    accentColor: color,
    color: color,
  };

  return (
    <label className="input">
      <code className="input__code">{name}</code>
      <input
        className="input__option"
        type="range"
        value={value}
        name={name}
        min={min}
        max={max}
        onChange={handleChange}
        style={style}
      />
      <input
        className="input__option"
        type="number"
        value={value}
        name={name}
        min={min}
        max={max}
        onChange={handleChange}
        style={style}
      />
    </label>
  );
};

export default Input;
