import { createSignal } from "solid-js";



const [ayahArabic, setAyahArabic] = createSignal(44.0);

const [ayahLatin, setAyahLatin] = createSignal(14.5);

const [translation, setTranslation] = createSignal(14.5);

const [isTajweed, setIsTajweed] = createSignal(true);

const [inVerseNum, setInVerseNum] = createSignal(1);

let [containerAyahSelect, setContainerAyahSelect] = createSignal<HTMLDivElement>();


export {
  ayahArabic,
  setAyahArabic,
  ayahLatin,
  setAyahLatin,
  translation,
  setTranslation,
  inVerseNum,
  setInVerseNum,
  isTajweed,
  setIsTajweed,
  containerAyahSelect,
  setContainerAyahSelect
}