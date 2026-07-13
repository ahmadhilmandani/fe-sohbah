import { createEffect, createSignal, For, mergeProps, onMount, Show, type ParentComponent } from "solid-js"
import ReadAyahList from "../../components/Quran/ReadAyahList"
import getSurah from "../../api/getSurah"
import { useNavigate, useParams } from "@solidjs/router"
import type { Surah } from "../../types/surahQuranCloud"
import tajweedParse from "../../api/tajwedParse"
import type { IDNbogorSurah } from "../../types/surahIDNbogor"
import NavbarQuran from "../../components/Quran/NavbarQuran"
import getAllSurah from "../../api/getAllSurah"


type PropsType = {
  allSurah: IDNbogorSurah[]
}



const QuranDetail: ParentComponent<PropsType> = (props) => {

  const mergedProps = mergeProps({
    'allSurah': [{
      "nomor": 0,
      "nama": '',
      "namaLatin": '',
      "jumlahAyat": 0,
      "tempatTurun": '',
      "arti": '',
      "deskripsi": '',
      "audioFull": { '0': '0' }
    }]
  }, props)


  const [surahNum, setSurahNum] = createSignal(parseInt(useParams().number ?? '0'))


  const navigate = useNavigate()

  const [isLoading, setIsloading] = createSignal(false)

    const [allSurah, setAllSurah] = createSignal<IDNbogorSurah[]>([
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

  const [surahMeta, setSurahMeta] = createSignal<IDNbogorSurah>({
    "nomor": 0,
    "nama": '',
    "namaLatin": '',
    "jumlahAyat": 0,
    "tempatTurun": '',
    "arti": '',
    "deskripsi": '',
    "audioFull": {
      '0': ''
    },
    "ayat": [{
      "nomorAyat": 0,
      "teksArab": '',
      "teksLatin": '',
      "teksIndonesia": '',
      "audio": {
        '0': ''
      }
    }
    ]
  })

  createEffect(async () => {
    setIsloading(true)

    try {
      const resSurah = await getSurah(surahNum(), 'alquran_cloud')

      const ayahs = resSurah?.data?.data?.ayahs

      if (ayahs) {
        await Promise.all(
          ayahs.map(async (row) => {
            const tajweedParsed = await tajweedParse(row.text)
            row.text = tajweedParsed.data.tajweed_parsed
          })
        )

        const resSurahMeta = await getSurah(surahNum(), 'idn_bogor')

        if (resSurahMeta) {
          setSurahMeta(resSurahMeta.data.data)
        }
      }

      if (resSurah) {
        setSurah(resSurah.data.data)
      }

      const resAllSurah = await getAllSurah()

      setAllSurah(resAllSurah.data.data)

    } catch (error) {

      console.log(error)

    } finally {
      setIsloading(false)
    }
  })

  return (
    <>
      <NavbarQuran
        selectedSurah={surahNum()}
        setSurahNum={setSurahNum}
        allSurah={allSurah()} />

      <h1 class="text-3xl text-primary-500 text-center">
        Quran!

      </h1>
      <div class="">
        <Show when={surah()}>
          <For each={surah().ayahs}>
            {(ayah, idx) => {
              return (
                <>
                  <ReadAyahList
                    ayahNum={ayah?.numberInSurah}
                    ayahArab={ayah?.text}
                    quranLatin={surahMeta()?.ayat?.[idx()]?.teksLatin}
                    translation={surahMeta()?.ayat?.[idx()]?.teksIndonesia}
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