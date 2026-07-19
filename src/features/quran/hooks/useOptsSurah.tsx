import { createOptions } from "@thisbeyond/solid-select";
import { createMemo, type Setter } from "solid-js";
import type { IDNbogorSurah } from "../../../types/surahIDNbogor";
import { selectedSurah, setSelectedSurah } from "../../../stores/selectedSurahStore";


type PropsType = {
  allSurah: IDNbogorSurah[]
}


export const useOptsSurah = (props: PropsType) => {

  const selectOpts = createMemo(() =>
    createOptions(props.allSurah, {
      key: "namaLatin",
    })
  );

  const selected = createMemo(() =>
    props.allSurah.find(
      (row) => row.nomor === selectedSurah()
    )
  );

  function handleChangeSurah(e: IDNbogorSurah) {
    setSelectedSurah(e.nomor)
  }

  return {
    selectOpts,
    selected,
    handleChangeSurah
  }
}