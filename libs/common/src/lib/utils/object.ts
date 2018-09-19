export function zipObject<T = any>(columns: (keyof T)[], data: any[]): T {
  return columns.reduce(
    (result, column, index) => ({ ...result, [column]: data[index] }),
    {} as any
  );
}
