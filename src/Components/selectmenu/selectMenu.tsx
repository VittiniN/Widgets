import { FormSelect } from "react-bootstrap";
import React from "react";
interface SelectMenuProps {
  value: string[];
}

const SelectMenu: React.FC<SelectMenuProps> = ({ value }) => {
  return (
    <FormSelect>
      {value.map((content, index) => (
        <option key={index}>{content}</option>
      ))}
    </FormSelect>
  );
};

export default SelectMenu;