/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export function hello(name?: string) {
  return `hello ${name ?? "world"}`;
}


export function hi(name?: string) {
  return `hi ${name ?? "world"}`;
}
