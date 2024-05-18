import { range } from "lodash";

export function sample() {
  console.log("---sample---");

  const chapters: number[] = range(1, 100);

  chapters.forEach((c) => console.log(`Chapter ${c}`));
}
