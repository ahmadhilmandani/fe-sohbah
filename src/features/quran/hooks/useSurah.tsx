import { createSignal, onMount } from "solid-js"
import getAllSurah from "../../../api/getAllSurah"
import type { IDNbogorSurah } from "../../../types/surahIDNbogor"

export const useSurahHook = () => {

  const [loading, setIsLoading] = createSignal<boolean>(false)

  const [surah, setSurah] = createSignal<IDNbogorSurah[]>()

  async function get() {

    setIsLoading(true)

    try {
      
      const res = await getAllSurah()

      setSurah(res.data.data)

    } catch (err) {

      console.log(err)
      
    } finally {

      setIsLoading(false)

    }

  }

  onMount(() => {
    get()
  })

  return {
    surah
  }
}