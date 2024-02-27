export type HocType<B> = <T>(Component: React.FC<T>) => {
  Component: React.FC<T & B>;
};
