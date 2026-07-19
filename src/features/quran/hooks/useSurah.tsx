import { createEffect, createSignal, onMount } from "solid-js"
import getAllSurah from "../../../api/getAllSurah"
import type { IDNbogorSurah } from "../../../types/surahIDNbogor"
import getSurah from "../../../api/getSurah"
import tajweedParse from "../../../api/tajwedParse"
import type { Surah } from "../../../types/surahQuranCloud"
import { selectedSurah } from "../../../stores/selectedSurahStore"

export const useSurahHook = () => {

  const [loading, setIsLoading] = createSignal<boolean>(false)

  const [
    surahAll,
    setSurahAll
  ] = createSignal<IDNbogorSurah[]>([
    {
      "nomor": 1,
      "nama": '',
      "namaLatin": '',
      "jumlahAyat": 1,
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
      }]
    }
  ])

  const [
    surahDetail,
    setSurahDetail
  ] = createSignal<Surah>({
    "number": 0,
    "name": '',
    "englishName": '',
    "englishNameTranslation": '',
    "revelationType": '',
    "numberOfAyahs": 0,
    "ayahs": [{
      "number": 0,
      "text": '',
      "numberInSurah": 0,
      "juz": 0,
      "manzil": 0,
      "page": 0,
      "ruku": 0,
      "hizbQuarter": 0,
      "sajda": false
    }]
  });

  const [
    surahMeta,
    setSurahMeta
  ] = createSignal<IDNbogorSurah>({
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
  });

  async function getAll() {

    setIsLoading(true)

    try {

      const res = await getAllSurah()

      setSurahAll(res.data.data)

    } catch (err) {

      console.log(err)

    } finally {

      setIsLoading(false)

    }

  }

  async function getDetail() {

    setIsLoading(true)

    try {

      let resSurahDetail = await getSurah(selectedSurah(), 'alquran_cloud')

      if (resSurahDetail) {
        await Promise.all(resSurahDetail?.data?.data?.ayahs?.map(async (row) => {

          const tajweedParsed = await tajweedParse(row.text)
          row.text = tajweedParsed.data.tajweed_parsed

        }))

        setSurahDetail(resSurahDetail?.data?.data)

        const resSurahMeta = await getSurah(selectedSurah(), 'idn_bogor')

        if (resSurahMeta) {
          setSurahMeta(resSurahMeta.data.data)
        }

      }

    } catch (err) {

      console.log(err)

    } finally {

      setIsLoading(false)

    }

  }

  createEffect(() => {
    if (selectedSurah() != 0) {
      getDetail()
    }
  })

  onMount(() => {
    getAll()
  })

  return {
    surahAll,
    surahDetail,
    surahMeta
  }
}