import { createSignal } from "solid-js";

const useFontSize = () => {
  const [ayahArabic, setAyahArabic] = createSignal(44.0);

  const [ayahLatin, setAyahLatin] = createSignal(14.5);

  const [translation, setTranslation] = createSignal(14.5);

  function changeAyahArabSize(size: string) {
    setAyahArabic(parseFloat(size));
  }

  function changeAyahLatinSize(size: string) {
    setAyahLatin(parseFloat(size));
  }

  function changeTranslationSize(size: string) {
    setTranslation(parseFloat(size));
  }

  return {
    ayahArabic,
    changeAyahArabSize,
    ayahLatin,
    changeAyahLatinSize,
    translation,
    changeTranslationSize,
  };
};

export default useFontSize;
