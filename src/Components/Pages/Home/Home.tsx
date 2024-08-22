import { MetadataCard } from "../../MetadataCardArea/MetadataCard/MetadataCard";
import { MetadataForm } from "../../MetadataFormArea/MetadataForm/MetadataForm";
import "./Home.css";
import { useHome } from "./hooks/useHome";

export function Home(): JSX.Element {
  const { handleMetadataUpdate, loading, metadata, setLoading } = useHome();

  return (
    <div className="Home">
      <div className="metadata-form-container">
        <MetadataForm
          handleMetadataUpdate={handleMetadataUpdate}
          setLoading={setLoading}
        />
      </div>
      {loading ? (
        <div className="loader-container">
          <div className="loader">
            <span>Loading...</span>
          </div>
        </div>
      ) : (
        <div className="metadata-container">
          {metadata.length > 0 &&
            metadata.map((data, index) => (
              <MetadataCard key={index} metadata={data} />
            ))}
        </div>
      )}
    </div>
  );
}
