// @ts-nocheck
import { useNavigate } from "@solidjs/router";
import { createMemo, createSignal, For, Index, mergeProps, Show, type ParentComponent, type Setter } from "solid-js";
import type { IDNbogorSurah } from "../../../types/surahIDNbogor";
import { createOptions, Select } from "@thisbeyond/solid-select";
import { useOptsSurah } from "../hooks/useOptsSurah";
import { useNavSurah } from "../hooks/useNavSurah";


type PropsType = {
  allSurah: IDNbogorSurah[]
}


const NavbarQuran: ParentComponent<PropsType> = (props) => {

  const navigate = useNavigate()

  const optsSurah = useOptsSurah(props)
  const navigationSurah = useNavSurah()

  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <nav class="bg-white border-b border-muted-200 sticky top-8 left-0 right-0 -translate-y-8 z-50 rounded-t-lg">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-4 md:gap-0">

        {/* KIRI: Tombol Back */}
        <div class="flex items-center">
          <button
            onClick={() => {
              navigate(`/quran`)
            }}
            type="button"
            class="inline-flex items-center gap-2 text-sm font-medium text-muted-400 hover:text-primary-600 transition-colors cursor-pointer hover:bg-primary-50/45 rounded-md px-3 py-1.5 transition-all group"
          >
            <i class="ph ph-arrow-left text-muted-400 group-hover:text-primary-500"></i>
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
        <div class="flex items-center space-x-2">
          {/* Ikon Sejajar: Tanya & Gear */}
          <div class="hidden sm:flex items-center space-x-1">
            <button type="button" class="p-2 text-muted-600 hover:bg-muted-100 rounded-lg transition-colors" aria-label="Bantuan">
              <i class="ph ph-question text-xl"></i>
            </button>
            <button type="button" class="p-2 text-muted-600 hover:bg-muted-100 rounded-lg transition-colors" aria-label="Pengaturan">
              <i class="ph ph-gear-six text-xl"></i>
            </button>
          </div>

          {/* Hamburger Button untuk Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen())}
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-muted-500 rounded-lg md:hidden hover:bg-muted-100 focus:outline-none focus:ring-2 focus:ring-muted-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen()}
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Menu Navigasi Dropdown */}
        <div class={`${isOpen() ? "block" : "hidden"} w-full`} id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-muted-100 rounded-lg bg-muted-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">

            {/* Ikon tampil di dalam menu dropdown saat tampilan mobile */}
            <li class="flex sm:hidden p-2 justify-around border-t border-muted-100 mt-2">
              <button type="button" class="p-2 text-muted-600" aria-label="Bantuan">
                <i class="ph ph-question"></i>
              </button>
              <button type="button" class="p-2 text-muted-600" aria-label="Pengaturan">
                <i class="ph ph-gear-six"></i>
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}


export default NavbarQuran;