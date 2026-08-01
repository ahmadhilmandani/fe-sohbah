import {
  ayahArabic,
  ayahLatin,
  inVerseNum,
  setAyahArabic,
  setAyahLatin,
  setInVerseNum,
  setTranslation,
  translation,
  isTajweed,
  setIsTajweed,
} from "../stores/readingSettingStore";

const useQuranSetting = () => {
  function changeAyahArabSize(size: string) {
    setAyahArabic(parseFloat(size));
  }

  function changeAyahLatinSize(size: string) {
    setAyahLatin(parseFloat(size));
  }

  function changeTranslationSize(size: string) {
    setTranslation(parseFloat(size));
  }

  function changeUserReadVerse(verse: string) {
    setInVerseNum(parseFloat(verse));
  }

  function toggleTajweed(toggle: boolean) {
    setIsTajweed(toggle);
  }

  return {
    ayahArabic,
    ayahLatin,
    inVerseNum,
    setAyahArabic,
    setAyahLatin,
    setInVerseNum,
    setTranslation,
    translation,
    isTajweed,

    changeAyahArabSize,
    changeAyahLatinSize,
    changeTranslationSize,
    changeUserReadVerse,
    toggleTajweed,
  };
};

export default useQuranSetting;
