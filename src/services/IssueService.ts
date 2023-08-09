import { httpClient, HttpClient } from '../apis/HttpClient';

interface OptionProps {
  sort: string;
  state: string;
  per_page: number;
  page: string;
}

class IssueService {
  private httpClient;
  private endPoint: string;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.endPoint = '/repos/facebook/react/issues';
  }

  async get(option: OptionProps) {
    const res = await this.httpClient.create({
      endpoint: this.endPoint,
      options: {
        params: {
          ...option,
        },
      },
    });
    return res;
  }
}

export const issueService = new IssueService(httpClient);
