import "./Input.scss";

const Input = ({ color, value, children, set, min = -200, max = 200 }) => {
  const style = {
    accentColor: color,
  };

  return (
    <label className="label">
      <code className="label__code">{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
        style={style}
        className="label__input"
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
        className="label__input"
      />
    </label>
  );
};

export default Input;
