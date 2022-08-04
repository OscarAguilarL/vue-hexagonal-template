import Injectable from '@/modules/shared/di/domain/injectable';
import HttpConnector from '@/modules/shared/http/domain/http-connector';

@Injectable()
export default class FetchHttpConnector implements HttpConnector {
  async execute(
    path: string,
    method = 'GET',
    body = undefined,
    retries = 0,
    headers: Record<string, string> = {
      Authorization: `Bearer ${sessionStorage.getItem('authorization')}` || '',
      'Content-Type': 'application/json',
    },
  ): Promise<Response> {
    try {
      const response = await fetch(path, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok && retries > 0) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(this.execute(path, method, body, retries - 1, headers));
          }, 1000);
        });
      }

      return response;
    } catch {
      if (retries > 0) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(this.execute(path, method, body, retries - 1, headers));
          }, 1000);
        });
      }

      return Promise.reject(new Error('Fetch Error'));
    }
  }
}
