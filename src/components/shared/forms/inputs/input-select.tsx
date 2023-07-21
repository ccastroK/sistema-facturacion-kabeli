"use client";

import { IInput } from "@/domain/interfaces/components/form.interface";

export const InputSelect = ({
  id,
  value,
  options,
  onChange,
  label,
}: IInput) => {
  return (
    <section>
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
