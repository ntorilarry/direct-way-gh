export interface IApiResponse<T> {
  message: string;
  code: number;
  data: T;
}
