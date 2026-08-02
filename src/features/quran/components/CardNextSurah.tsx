import { mergeProps, type Component } from "solid-js";
import { useNavSurah } from "../hooks/useNavSurah";

interface CardNextSurah {
  nomor: number;
  namaLatin: string;
  numOfAyah: number
}

export const CardNextSurah: Component<CardNextSurah> = (props) => {
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
    }} class="group flex items-center justify-end gap-3 cursor-pointer">
      <div class="flex flex-col items-end">
        <span class="text-sm text-muted-500 group-hover:text-primary-700 transition-colors">
          Selanjutnya
        </span>
        <span class="text-base font-semibold text-primary-600 group-hover:text-primary-950 transition-colors">
          {mergedProps.namaLatin}
        </span>
      </div>

      <i class="ph ph-caret-right text-muted-500 group-hover:text-primary-700 transition-colors"></i>
    </div>
  );
};