import React from "react";
import { UrlInput } from "../../InputsArea/UrlInput/UrlInput";
import { useMetadataForm } from "./hooks/useMetadataForm";
import "./MetadataForm.css";

interface MetadataFormProps {
  handleMetadataUpdate: (urls: string[]) => Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MetadataForm({
  handleMetadataUpdate,
  setLoading,
}: MetadataFormProps): JSX.Element {
  const { handleUrlChange, handleUrlRemove, setUrls, submit, urls } =
    useMetadataForm(handleMetadataUpdate, setLoading);

  return (
    <div className="MetadataForm">
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        {urls.map((value, index) => (
          <div key={index} className="url-input-container">
            <UrlInput
              required={index < 3} // Only the first three inputs are required
              onChange={(newValue) => handleUrlChange(index, newValue)}
              value={value}
            />
            {/* Render delete button for non-required inputs */}
            {index >= 3 && (
              <button
                type="button"
                onClick={() => handleUrlRemove(index)}
                className="delete-button"
              >
                ❌
              </button>
            )}
          </div>
        ))}

        <div className="buttons-container">
          <button
            className="addUrl-button"
            type="button"
            onClick={() => setUrls((prevUrls) => [...prevUrls, ""])}
          >
            Add URL
          </button>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
