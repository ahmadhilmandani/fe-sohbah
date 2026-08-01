import type { IDNbogorSurah } from "../../../types/surahIDNbogor";
import { setSelectedSurah } from "../../../stores/selectedSurahStore";
import { useNavigate } from "@solidjs/router";
import { setSelectedAyahStore } from "../../../stores/selectedAyahStore";
import { setAyahStore } from "../../../stores/ayahStore";
import { containerAyahSelect } from "../stores/readingSettingStore";


export const useNavSurah = () => {

  const navigate = useNavigate()

  function handleChangeAyah(num: number) {
    setSelectedAyahStore(num)
  }

  function handleChangeSurah(num: number, numOfAyah: number) {
    setSelectedSurah(num)
    handleChangeAyah(1)
    setAyahStore(numOfAyah)
  }

  function navbarChangeSurah(e: IDNbogorSurah) {
    handleChangeSurah(e.nomor, e.jumlahAyat)
  }

  function clickChangeSurah(num: number, numOfAyah: number) {
    navigate('surah')

    handleChangeSurah(num, numOfAyah)
  }

  function goToAyah(num: number) {

    handleChangeAyah(num)

    const element = containerAyahSelect()?.querySelector(`#ayah-${num}`);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });


  }

  return {
    navbarChangeSurah,
    clickChangeSurah,
    goToAyah
  }
}