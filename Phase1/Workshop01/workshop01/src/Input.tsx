import { ChangeEvent } from "react";

interface props {
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ name, value, onChange }: props) {
  return (
    <>
      <div className="form-floating">
        <input
          className="form-control"
          id="floatingInput"
          type="text"
          placeholder={`${name}:`}
          value={value}
          name={name}
          onChange={onChange}
        />
      </div>
      <br />
    </>
  );
}
