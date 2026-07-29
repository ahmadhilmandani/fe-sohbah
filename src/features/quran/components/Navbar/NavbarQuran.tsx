// @ts-nocheck
import { useNavigate } from "@solidjs/router";
import { createMemo, createSignal, For, Index, mergeProps, Show, type Accessor, type ParentComponent, type Setter } from "solid-js";
import type { IDNbogorSurah } from "../../../../types/surahIDNbogor";
import { createOptions, Select } from "@thisbeyond/solid-select";
import { useOptsSurah } from "../../hooks/useOptsSurah";
import { useNavSurah } from "../../hooks/useNavSurah";
import NavbarQuranRightItem from "./NavbarQuranRightItem"


type PropsType = {
  allSurah: IDNbogorSurah[]
}


const NavbarQuran: ParentComponent<PropsType> = (props) => {

  const navigate = useNavigate()

  const optsSurah = useOptsSurah(props)

  const navigationSurah = useNavSurah()



  return (
    <nav class="bg-white border-b-[0.8px] border-muted-200 sticky top-8 left-0 right-0 -translate-y-8 z-50 rounded-t-lg">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-4 md:gap-0">

        {/* KIRI: Tombol Back */}
        <div class="flex items-center">
          <button
            onClick={() => {
              navigate(`/quran`)
            }}
            type="button"
            class="inline-flex items-center gap-2 text-sm font-medium text-muted-500 hover:text-primary-500 cursor-pointer hover:bg-primary-50/65 rounded-md px-3 py-1.5 transition-all group"
          >
            <i class="ph ph-arrow-left text-muted-500 group-hover:text-primary-500"></i>
            Back

          </button>
        </div>

        {/* TENGAH: Dua Input Sejajar (Surah & Ayat) */}
        <div class="flex-1 max-w-xs flex gap-2 items-center">
          <div class="w-48">
            <Show when={props.allSurah.length}>
              <Select
                class="custom"
                {...optsSurah.selectOpts()}
                initialValue={optsSurah.selected()}
                onChange={navigationSurah.navbarChangeSurah}
              />
            </Show>
          </div>
          <div class="w-32">
            <Show when={props.allSurah.length}>
              <Select
                class="custom"
                {...optsSurah.surahAyah()}
                initialValue={optsSurah.surahAyahSeleced()}
                onChange={navigationSurah.goToAyah}
              />
            </Show>
          </div>
        </div>

        {/* KANAN (Desktop): Ikon Aksi & Menu Toggle */}
        <NavbarQuranRightItem />

      </div>
    </nav>
  );
}


export default NavbarQuran;