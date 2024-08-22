import { useState } from "react";
import { urlMetadataService } from "../../../../Services/UrlMetadataService";
import { notify } from "../../../../Utils/Notify";
import { UrlMetadataModel } from "../../../../Models/UrlMetadataModel";

export const useHome = () => {
  // State to hold metadata
  const [metadata, setMetadata] = useState<UrlMetadataModel[]>([]);

  // State to manage loading
  const [loading, setLoading] = useState<boolean>(false);

  // State to manage errors

  // Function to handle metadata fetching
  const handleMetadataUpdate = async (urls: string[]) => {
    setLoading(true);
    try {
      const metadata = await urlMetadataService.addMetadata(urls); // Adjust this call to match your service

      // Check if metadata is valid; if not, throw an error
      if (
        metadata.some((meta) => !meta.description || !meta.image || !meta.title)
      ) {
        throw new Error("One or more URLs returned incomplete metadata.");
      }

      setMetadata(metadata);
    } catch (error: any) {
      console.error("Error fetching metadata:", error);
      notify.error(
        "Failed to fetch metadata. Please check your URLs and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    handleMetadataUpdate,
    setLoading,
    loading,
    metadata

  };
};
