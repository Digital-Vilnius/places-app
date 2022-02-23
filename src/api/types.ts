export interface Request {
  lang: string;
}

export interface ResultResponse<T> {
  status: string;
  response: T;
}
