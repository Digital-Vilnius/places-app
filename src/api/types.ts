export interface ListRequest {
  lang: string;
}

export interface ResultResponse<T> {
  status: string;
  response: T;
}
