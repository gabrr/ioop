export type HocType<B> = <T>(Component: React.FC<T>) => React.FC<T & B>;
