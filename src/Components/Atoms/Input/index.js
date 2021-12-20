// Style
import * as S from "./style";

// Template
const Input = ({ id, type, placeholder, value, onChange }) => {
  return (
    <S.Input
      id={id}
      name={id}
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
