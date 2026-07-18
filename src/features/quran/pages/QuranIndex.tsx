import { For, type ParentComponent } from "solid-js"
import QuranIndexList from "../components/QuranIndexList"
import { useSurahHook } from "../hooks/useSurah"


const QuranIndex: ParentComponent = () => {
  
  const useSurah = useSurahHook()

  return (
    <>
      <h1 class="text-3xl text-primary-500 text-center">
        Quran
      </h1>
      <div class="">
        <div class="mt-10 flex justify-center items-center mb-5 px-8">
        </div>
        <For each={useSurah.surahAll()}>
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