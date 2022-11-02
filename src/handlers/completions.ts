import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/completions/create-request';
import CreateResponse from '../models/completions/create-response';

export default class Completions {
  client: Client;
  constructor(Client: Client) {
    this.client = Client;
  }

  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse> {
    const path = '/completions';
    return this.client.request<CreateResponse>(
      {
        method: 'POST',
        path,
        data,
      },
      config
    );
  }
}
