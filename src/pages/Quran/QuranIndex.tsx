import { createSignal, For, onMount, Show, type ParentComponent } from "solid-js"
import QuranIndexList from "../../components/Quran/QuranIndexList"
import getAllSurah from "../../api/getAllSurah"
import type { Surah } from "../../types/quran"

const QuranIndex: ParentComponent = () => {
  const [loading, setIsLoading] = createSignal(true)

  const [surahs, setSurahs] = createSignal<Surah[]>([
    {
      "nomor": 0,
      "nama": '',
      "namaLatin": '',
      "jumlahAyat": 0,
      "tempatTurun": '',
      "arti": '',
      "deskripsi": '',
      "audioFull": {
        '01': ''
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
          {/* 
            <div class="w-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary-50 via-amber-50 to-primary-100 p-5 shadow-2xl shadow-primary-400/20">

              <div class="flex items-center justify-between">

                <div>
                  <p class="text-sm font-medium text-muted-500">
                    Last Read
                  </p>

                  <h2 class="mt-2 text-3xl font-bold text-primary-600">
                    QS. Al-Kahf
                  </h2>

                  <p class="mt-1 text-muted-500">
                    Ayah No. 11
                  </p>
                </div>

                <div
                  class="flex h-24 w-24 items-center justify-center rounded-2xl bg-muted-200">
                  <span class="text-xs text-muted-500">Image</span>
                </div>

              </div>

            </div> 
          */}
        </div>
        <For each={surahs()}>
          {(row, index) => {
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