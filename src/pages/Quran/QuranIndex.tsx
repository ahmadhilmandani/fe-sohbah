import { createSignal, For, onMount, Show, type ParentComponent } from "solid-js"
import QuranIndexList from "../../components/Quran/QuranIndexList"
import getAllSurah from "../../api/getAllSurah"
import type { IDNbogorSurah } from "../../types/surahIDNbogor"

const QuranIndex: ParentComponent = () => {
  const [loading, setIsLoading] = createSignal(true)

  const [surahs, setSurahs] = createSignal<IDNbogorSurah[]>([
    {
      "nomor": 0,
      "nama": '',
      "namaLatin": '',
      "jumlahAyat": 0,
      "tempatTurun": '',
      "arti": '',
      "deskripsi": '',
      "audioFull": {
        '0': ''
      }
    }
  ])


  onMount(async () => {

    try {

      const res = await getAllSurah()

      setSurahs(res.data.data)

    } catch (error) {
      console.log(error)
    } finally {

      setIsLoading(false)

    }

  })

  return (
    <>
      <h1 class="text-3xl text-primary-500 text-center">
        Quran
      </h1>
      <div class="">
        <div class="mt-10 flex justify-center items-center mb-5 px-8">
        </div>
        <For each={surahs()}>
          {(row) => {
            return (
              <>
                <QuranIndexList
                  nomor={row.nomor}
                  nama={row.nama}
                  namaLatin={row.namaLatin}
                  jumlahAyat={row.jumlahAyat}
                  tempatTurun={row.tempatTurun}

                />
              </>
            )
          }}
        </For>
      </div>
    </>
  )
}

export default QuranIndex