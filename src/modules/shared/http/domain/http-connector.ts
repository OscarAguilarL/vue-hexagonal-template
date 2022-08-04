import { HttpMethodType } from '@/modules/shared/http/domain/http-method-type';

export default interface HttpConnector {
  execute(
    path: string,
    method?: HttpMethodType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: Record<string, any>,
    retries?: number,
    headers?: Record<string, string> | null,
  ): Promise<Response>;
  // eslint-disable-next-line semi
}
