import { useCallback } from "react";

export const useUrlInput = (onChange: (value: string) => void) => {
     const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;;

  const handleChange = useCallback((newValue: string): void => {
    onChange(newValue);
  }, [onChange]);

  const validateUrl = useCallback((value: string): boolean => {
    return urlRegex.test(value) || value === "";
  }, [urlRegex]);

  return {
    urlRegex:urlRegex.source,
    handleChange,
    validateUrl,
  };
};