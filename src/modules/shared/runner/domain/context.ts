// eslint-disable-next-line import/no-cycle
import UseCase from '@/modules/shared/use-cases/base';

export default interface Context {
  result: unknown;
  param: unknown;
  // TODO: agregar clase UseCase
  useCase: UseCase<unknown, unknown>
  // eslint-disable-next-line semi
}
