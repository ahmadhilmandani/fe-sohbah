import { ARABIC_NUM } from "../consts/arabicNum";

export default function convertIntoArabNum(num: number) {
  let finalNum = "";
  let numString = num.toString();

  numString.split("").forEach((row) => {
    finalNum = finalNum + ARABIC_NUM[row];
  });

  return `
            <span class='inline-block mx-2 arabic-number text-6xl text-secondary-400'>
              ${finalNum}
            </span>
          `;
}
