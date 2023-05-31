import React from "react";
import VisuallyHiddenInput from "/src/components/styled/visually-hidden-input/visually-hidden-input";
import Label from "/src/components/styled/label/label";

function Checkbox({
  onClick,
  labelComponent, //Компонент для отображения label
  isChecked, //выбрано ли значение
  name, //имя
  value, //значение
  text, //текст элемента
  onChange, //событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </Label>
  );
}

export default Checkbox;
