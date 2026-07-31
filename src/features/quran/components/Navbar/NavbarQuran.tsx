import { type ParentComponent } from "solid-js";
import type { IDNbogorSurah } from "../../../../types/surahIDNbogor";
import NavbarQuranRightItem from "./NavbarQuranRightItem"
import NavbarQuranLeftItem from "./NavbarQuranLeftItem";
import NavbarQuranMiddleItem from "./NavbarQuranMiddleItem";


type PropsType = {
  allSurah: IDNbogorSurah[];
}


const NavbarQuran: ParentComponent<PropsType> = (props) => {

  return (
    <nav class="bg-white border-b-[0.8px] border-muted-200 sticky top-8 left-0 right-0 -translate-y-8 z-50 rounded-t-lg">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-4 md:gap-0">

        {/* KIRI: Tombol Back */}
        <NavbarQuranLeftItem />

        {/* TENGAH: Dua Input Sejajar (Surah & Ayat) */}
        <NavbarQuranMiddleItem allSurah={props.allSurah} />

        {/* KANAN (Desktop): Ikon Aksi & Menu Toggle */}
        <NavbarQuranRightItem />

      </div>
    </nav>
  );
}


export default NavbarQuran;