import axios from "axios";

class AppConfig {
  private prefix = "http://localhost:4000/api/";
  public getCSRFToken = `${this.prefix}csrf-token`;
  public addMetadata = `${this.prefix}fetch-metadata`;
  

  public async fetchCsrfToken(): Promise<string> {
    const response = await axios.get<{ csrfToken: string }>(this.getCSRFToken, {
      withCredentials: true,
    });
    return response?.data?.csrfToken;
  }

  public async getAxiosOptions() {
    const csrfToken = await this.fetchCsrfToken();
    return {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
    };
  }
}

export const appConfig = new AppConfig();
