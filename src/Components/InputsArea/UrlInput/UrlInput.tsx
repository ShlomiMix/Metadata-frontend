import { useUrlInput } from "./hooks/useUrlInput";
import "./UrlInput.css";
import React from 'react';

interface UrlInputProps {
  required: boolean;
  onChange: (value: string) => void;
  value: string;
}

const UrlInput = React.memo(({ required, onChange, value}: UrlInputProps) => {
  const { handleChange, urlRegex, validateUrl } = useUrlInput(onChange);

  return (
    <div className="UrlInput">
      <input
        type="text"
        placeholder="Enter url"
        required={required}
        pattern={urlRegex}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        onBlur={(e) => {
          if (!validateUrl(e.target.value)) {
            console.log("Invalid URL");
          }
        }}
      />
    </div>
  );
});

export { UrlInput };