import { useState } from "react";
import { useUrlInput } from "../../../InputsArea/UrlInput/hooks/useUrlInput";
import { notify } from "../../../../Utils/Notify";

export const useMetadataForm = (
  handleMetadataUpdate: (urls: string[]) => Promise<void>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // Initialize state with three empty URLs
  const [urls, setUrls] = useState<string[]>(["", "", ""]);
  const { validateUrl } = useUrlInput(() => {}); // We're only using the validateUrl function

  const handleUrlChange = (index: number, value: string) => {
    setUrls((prevUrls) => {
      const updatedUrls = [...prevUrls];
      updatedUrls[index] = value;
      return updatedUrls;
    });
  };

  const handleUrlRemove = (index: number) => {
    setUrls((prevUrls) => {
      const updatedUrls = prevUrls.filter((_, i) => i !== index);
      return updatedUrls;
    });
  };

  const submit = async (): Promise<void> => {
    try {
      // Validate all URLs before submission
      const areAllUrlsValid = urls.every((url) => validateUrl(url));
      if (!areAllUrlsValid) {
        notify.error("Please enter valid URLs");
        return;
      }
      setLoading(true); // Start loading
      await handleMetadataUpdate(urls);
      setUrls(["", "", ""]); // Reset URLs after successful submission
      notify.success("URLs have been sent");
    } catch (err: any) {
      notify.error(err);
    } finally {
      setLoading(false); // End loading
    }
  };

  return { submit, urls, handleUrlChange, handleUrlRemove, setUrls };
};
