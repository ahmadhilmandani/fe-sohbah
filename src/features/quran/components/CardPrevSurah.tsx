import { mergeProps, type Component } from "solid-js";
import { useNavSurah } from "../hooks/useNavSurah";

interface CardPrevSurah {
  nomor: number;
  namaLatin: string;
  numOfAyah: number

}

export const CardPrevSurah: Component<CardPrevSurah> = (props) => {
  const navSurah = useNavSurah()

  const mergedProps = mergeProps(
    {
      nomor: 0,
      namaLatin: "",
      numOfAyah: 1,

    },
    props
  );

  return (
    <div onClick={() => {
      navSurah.clickSurahNavigation(mergedProps.nomor, mergedProps.numOfAyah)
    }} class="group flex items-center gap-3 cursor-pointer">
      <i class="ph ph-caret-left text-muted-500 group-hover:text-primary-700 transition-colors"></i>
      <div class="flex flex-col">
        <span class="text-sm text-muted-500 group-hover:text-primary-700 transition-colors">
          Sebelumnya
        </span>
        <span class="text-base font-semibold text-primary-600 group-hover:text-primary-950 transition-colors">
          {mergedProps.namaLatin}
        </span>
      </div>
    </div>
  );
};