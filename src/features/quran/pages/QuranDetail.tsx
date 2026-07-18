import { For, Show } from "solid-js"
import NavbarQuran from "../components/NavbarQuran"
import ReadAyahList from "../components/ReadAyahList"
import { useSurahHook } from "../hooks/useSurah"




const QuranDetail = () => {

  const useSurah = useSurahHook()

  return (
    <>
      <NavbarQuran
        selectedSurah={useSurah?.selectedSurah()}
        setSurahNum={useSurah.setSelectedSurah}
        allSurah={useSurah.surahAll()} />

      <h1 class="text-3xl text-primary-500 text-center">
        Quran!

      </h1>
      <div class="">
        <Show when={useSurah.surahDetail()}>
          <For each={useSurah.surahDetail().ayahs}>
            {(ayah, idx) => {
              return (
                <>
                  <ReadAyahList
                    ayahNum={ayah?.numberInSurah}
                    ayahArab={ayah?.text}
                    quranLatin={useSurah.surahMeta()?.ayat?.[idx()]?.teksLatin}
                    translation={useSurah.surahMeta()?.ayat?.[idx()]?.teksIndonesia}
                  />
                </>
              )
            }}
          </For>
        </Show>
      </div>
    </>
  )
}

export default QuranDetail