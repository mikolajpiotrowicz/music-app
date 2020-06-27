declare namespace __AppData {
  import { InitialData } from './src/server/models/locals';
  interface Window {
    appData: {
      initialData: InitialData;
      statusCode: number;
    };
  }
}
interface Window extends __AppData.Window {}

declare type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };

//  * @example
//  * NewType = OptionalExpectFor<SomeType, 'prop' | 'prop2'>
declare type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> & Pick<T, TRequired>;

//   * From T, select a union of property names which values extends R
//   * @example
//   * SelectPropertyNames<{ foo: boolean, bar: string, baz: string }, string> // "bar" | "baz"
//   */
declare type SelectPropertyNames<T, R> = {
  [K in keyof T]: T[K] extends R ? K : never;
}[keyof T];

//   /*
//   * From T, pick only properties which values extends R
//   * @example
//   * PickProperties<{ foo: boolean, bar: string, baz: string }, string> // { bar: string, baz: string }
//   */
declare type PickProperties<T, R> = Pick<T, SelectPropertyNames<T, R>>;

declare type SetsTuple<T, T1> = {
  0: T;
  1: T1;
};
