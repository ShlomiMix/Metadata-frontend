import axios from "axios";
import { UrlMetadataModel } from "../Models/UrlMetadataModel";
import { appConfig } from "../Utils/AppConfig";

class UrlMetadataService {
  public async addMetadata(urls: string[]): Promise<UrlMetadataModel[]> {
    const options  = await appConfig.getAxiosOptions();  
    console.log({urls:urls});
    console.log({options:options});
    const response = await axios.post<UrlMetadataModel[]>(
      appConfig.addMetadata,
      urls,
      options
    );


    return response.data;
  }

  
}

export const urlMetadataService = new UrlMetadataService();
