import { createSignal, For, onMount, Show, type ParentComponent } from "solid-js"
import ReadAyahList from "../../components/Quran/ReadAyahList"
import getSurah from "../../api/getSurah"
import { useNavigate, useParams } from "@solidjs/router"
import type { Surah } from "../../types/surah"
import tajweedParse from "../../api/tajwedParse"

const QuranDetail: ParentComponent = () => {
  const params = useParams()
  const surahNum = parseInt(useParams().number ?? '0')

  const navigate = useNavigate()

  const [isLoading, setIsloading] = createSignal(false)

  const [surah, setSurah] = createSignal<Surah>({
    "number": 0,
    "name": '',
    "englishName": '',
    "englishNameTranslation": '',
    "revelationType": '',
    "numberOfAyahs": 0,
    "ayahs": [
      {
        "number": 0,
        "text": '',
        "numberInSurah": 0,
        "juz": 0,
        "manzil": 0,
        "page": 0,
        "ruku": 0,
        "hizbQuarter": 0,
        "sajda": false
      }
    ]
  })

  onMount(async () => {
    setIsloading(true)

    try {
      const res = await getSurah(surahNum)

      const ayahs = res?.data?.data?.ayahs

      await Promise.all(
        ayahs.map(async (row) => {
          const tajweedParsed = await tajweedParse(row.text)
          row.text = tajweedParsed.data.tajweed_parsed
        })
      )


      setSurah(res.data.data)

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
        <Show when={surah()}>
          <For each={surah().ayahs}>
            {(ayah) => {
              return (
                <>
                  <ReadAyahList
                    ayahNum={ayah?.numberInSurah}
                    ayahArab={ayah?.text}
                    // quranLatin={ayah?.teksLatin}
                    // translation={ayah?.teksIndonesia}
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