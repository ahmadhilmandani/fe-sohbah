import { createOptions } from "@thisbeyond/solid-select";
import { createMemo } from "solid-js";
import type { IDNbogorSurah } from "../../../types/surahIDNbogor";
import { selectedSurah } from "../../../stores/selectedSurahStore";
import { selectedAyahStore } from "../../../stores/selectedAyahStore";
import { ayahStore } from "../../../stores/ayahStore";


type PropsType = {
  allSurah: IDNbogorSurah[]
}


export const useOptsSurah = (props: PropsType) => {
  let selectOpts
  let selected
  let surahAyah
  let surahAyahSeleced

  selectOpts = createMemo(() =>
    createOptions(props.allSurah, {
      key: "namaLatin",
    })
  );

  selected = createMemo(() =>
    props?.allSurah?.find(
      (row) => row.nomor === selectedSurah()
    )
  );

  surahAyah = createMemo(() => {
    const numbers = Array.from(
      { length: ayahStore() },
      (_, index) => index + 1
    );

    return createOptions(numbers);
  });

  surahAyahSeleced = createMemo(() => {
    return selectedAyahStore();
  });


  return {
    selectOpts,
    selected,
    surahAyah,
    surahAyahSeleced
  }
}