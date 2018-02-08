export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function randomBool(): boolean {
  return Math.random() > 0.5;
}
export function randFromList<T>(list: T[]): T {
  const index = randomInt(0, list.length - 1);
  return list[index];
}
