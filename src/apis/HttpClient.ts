import axios, { AxiosResponse } from 'axios';

interface Request {
  endpoint: string;
  options?: Object;
}
export class HttpClient {
  private baseURL;
  private accessToken;
  constructor() {
    this.baseURL = 'https://api.github.com';
    this.accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  }
  async create({ endpoint, options }: Request): Promise<AxiosResponse> {
    return await axios(this.baseURL + endpoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${this.accessToken}`,
      },
    });
  }
}

export const httpClient = new HttpClient();
