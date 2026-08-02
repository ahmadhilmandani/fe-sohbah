import { For, Show } from "solid-js"
import NavbarQuran from "../components/Navbar/NavbarQuran"
import ReadAyahList from "../components/ReadAyahList"
import { useSurahHook } from "../hooks/useSurah"
import { setContainerAyahSelect } from "../stores/readingSettingStore"
import { CardNextSurah } from "../components/CardNextSurah"
import { CardPrevSurah } from "../components/CardPrevSurah"
import { selectedSurah } from "../../../stores/selectedSurahStore"


const QuranDetail = () => {

  const useSurah = useSurahHook()

  return (
    <>
      <NavbarQuran
        allSurah={useSurah.surahAll()}
      />

      <div>
        <div class="flex flex-col items-center justify-center gap-1 my-12">
          <h1 class="text-5xl mb-0 leading-[120%]">
            {useSurah.surahMeta().nama}
          </h1>
          <h1 class="text-xl mb-0 leading-[120%] text-primary-900">
            {useSurah.surahMeta().namaLatin}
          </h1>
          <div class="flex gap-3 items-center text-muted-500">
            <div class="text-muted-500">
              {useSurah.surahMeta().tempatTurun}
            </div>
            •
            <div class="text-muted-500">
              {useSurah.surahMeta().jumlahAyat} ayat
            </div>
          </div>
        </div>

        <div class="mb-12 text-7xl text-center font-thin stroke-0" style='direction:rtl'>
          بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
        </div>

        <Show when={useSurah.surahDetail()}>
          <div ref={setContainerAyahSelect}>
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
          </div>

          <div class="mt-12 mb-40 relative">
            <Show when={selectedSurah() - 2 >= 0}>
              <div class="w-fit absolute left-5 bottom-0 top-5">
                <CardPrevSurah
                  nomor={useSurah?.surahAll?.()[selectedSurah() - 2]?.nomor}
                  namaLatin={useSurah?.surahAll?.()[selectedSurah() - 2]?.namaLatin}
                  numOfAyah={useSurah?.surahAll?.()[selectedSurah() - 2]?.jumlahAyat}
                />
              </div>
            </Show>
            <Show when={selectedSurah() + 1 <= 114}>
              <div class="w-fit absolute right-5 bottom-0 top-5">
                <CardNextSurah
                  nomor={useSurah?.surahAll?.()[selectedSurah()]?.nomor}
                  namaLatin={useSurah?.surahAll?.()[selectedSurah()]?.namaLatin}
                  numOfAyah={useSurah?.surahAll?.()[selectedSurah()]?.jumlahAyat}
                />
              </div>
            </Show>
          </div>
        </Show>
      </div>
    </>
  )
}

export default QuranDetail