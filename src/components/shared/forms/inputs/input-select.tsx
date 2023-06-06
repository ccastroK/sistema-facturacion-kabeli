"use client";

import { useState } from "react";
import { IInput } from "../../interfaces/forms/inputs/input-interface";

export const InputSelect = ({ id, value, options, onChange }: IInput) => {
  return (
    <select key={id} value={value} onChange={onChange}>
      {options != null ? (
        options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))
      ) : (
        <option key="null" value="null">
          -
        </option>
      )}
    </select>
  );
};
