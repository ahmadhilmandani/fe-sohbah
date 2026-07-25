import { For, Show } from "solid-js"
import NavbarQuran from "../components/NavbarQuran"
import ReadAyahList from "../components/ReadAyahList"
import { useSurahHook } from "../hooks/useSurah"




const QuranDetail = () => {

  const useSurah = useSurahHook()

  return (
    <>
      <NavbarQuran
        allSurah={useSurah.surahAll()} />

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
              {useSurah.surahMeta().jumlahAyat}

            </div>
          </div>
        </div>

        <div class="mb-12 text-7xl text-center font-thin stroke-0" style='direction:rtl'>
          بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
        </div>

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