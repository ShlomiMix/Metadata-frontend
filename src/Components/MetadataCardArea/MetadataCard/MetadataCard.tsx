import { UrlMetadataModel } from "../../../Models/UrlMetadataModel";
import "./MetadataCard.css";

interface MetadataCardProps {
  metadata: UrlMetadataModel;
}

export function MetadataCard({ metadata }: MetadataCardProps): JSX.Element {
  return (
    <div className="MetadataCard">
      <div>
        <span>URL:</span> {metadata?.url}
      </div>
      <br />
      <div>
        <span>Title:</span> {metadata?.title}
      </div>
      <br />
      <div>
        <span>Description:</span> {metadata?.description}
      </div>
      <br />
      <div>
        <img src={metadata?.image} />
      </div>
    </div>
  );
}
