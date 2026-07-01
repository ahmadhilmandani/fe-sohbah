import { createSignal, For, onMount, Show, type ParentComponent } from "solid-js"
import ReadAyahList from "../../components/Quran/ReadAyahList"
import getSurah from "../../api/getSurah"
import type { Surah } from "../../types/quran"

const QuranIndex: ParentComponent = () => {
  const [isLoading, setIsloading] = createSignal(false)

  const [ayah, setAyah] = createSignal<Surah>(
    {
      nomor: 0,
      nama: '',
      namaLatin: '',
      jumlahAyat: 0,
      tempatTurun: '',
      arti: '',
      deskripsi: '',
      audioFull: {
        '01': ''
      },
      ayat: [],
      suratSelanjutnya: {
        nomor: 0,
        nama: '',
        namaLatin: '',
        jumlahAyat: 0,
      },
      suratSebelumnya: false
    }
  )

  onMount(async () => {
    setIsloading(true)

    try {
      const res = await getSurah(1)

      setAyah(res.data.data)

    } catch (error) {

      console.log(error)

    } finally {
      setIsloading(false)
    }
  })

  return (
    <>

      <h1 class="text-3xl text-primary-500 text-center">
        Quran!
      </h1>
      <div class="">
        <Show when={ayah()}>
          <For each={ayah().ayat}>
            {(ayat) => {
              return (
                <>
                  <ReadAyahList
                    ayahArab={ayat?.nomorAyat}
                    quranArab={ayat?.teksArab}
                    quranLatin={ayat?.teksLatin}
                    translation={ayat?.teksIndonesia}
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

export default QuranIndex