export default interface UseCase<E, R> {
  execute(entry: E): Promise<R>;
}