import { createSignal, For, onMount, Show, type ParentComponent } from "solid-js"
import ReadAyahList from "../../components/Quran/ReadAyahList"
import getSurah from "../../api/getSurah"
import type { SurahDetail } from "../../types/quran"
import { useNavigate, useParams } from "@solidjs/router"

const QuranDetail: ParentComponent = () => {
  const params = useParams()
  const surahNum = parseInt(useParams().number ?? '0')

  const navigate = useNavigate()

  const [isLoading, setIsloading] = createSignal(false)

  const [ayah, setAyah] = createSignal<SurahDetail>(
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
      const res = await getSurah(surahNum)

      setAyah(res.data.data)

    } catch (error) {

      console.log(error)

    } finally {
      setIsloading(false)
    }
  })

  return (
    <>

      <div class="mb-4 pl-3 pt-3 lg:pl-8 lg:pt-3">
        <button
          onClick={() => {
            navigate(`/quran`)
          }}
          type="button"
          class="inline-flex items-center gap-2 text-sm font-medium text-muted-400 hover:text-primary-600 transition-colors cursor-pointer hover:bg-primary-50/50 rounded-md px-3 py-1.5 transition-all group"
        >
          <i class="ph ph-arrow-left text-muted-400 group-hover:text-primary-500"></i>
          Back
        </button>
      </div>

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

export default QuranDetail