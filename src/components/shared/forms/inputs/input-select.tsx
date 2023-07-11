"use client";

import { IInput } from "@/Domain/interfaces/components/form.interface";

export const InputSelect = ({
  id,
  value,
  options,
  onChange,
  label,
}: IInput) => {
  return (
    <section>
      <h6>{label}</h6>
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
    </section>
  );
};
