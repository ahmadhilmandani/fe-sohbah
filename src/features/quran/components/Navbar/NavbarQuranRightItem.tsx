
import { Show, type ParentComponent } from "solid-js";
import useNavDropdown from "../../hooks/useNavDropdown";

type PropsType = {
  ayahArabic: number;
  ayahLatin: number;
  translation: number;
  changeAyahArabSize: (size: string) => void;
  changeAyahLatinSize: (size: string) => void;
  changeTranslationSize: (size: string) => void;
}

const NavbarQuranRightItem: ParentComponent<PropsType> = (props) => {

  const navDropdown = useNavDropdown()

  return (
    <>
      {/* KANAN (Desktop): Ikon Aksi & Menu Toggle */}
      <div class="flex items-center space-x-2">
        {/* Ikon Sejajar: Tanya & Gear */}
        <div class="hidden sm:flex items-center space-x-1 relative">
          <button type="button" class="aspect-square p-2 text-muted-500 cursor-pointer hover:bg-primary-50/65 rounded-md transition-all group" aria-label="Bantuan">
            <i class="ph ph-question text-xl text-muted-500 group-hover:text-primary-500"></i>
          </button>

          <div ref={navDropdown.setBtnRef} class="relative">

            <button id='btn_nav_dropdown' type="button" class="aspect-square p-2 text-muted-500 cursor-pointer hover:bg-primary-50/65 rounded-md transition-all group" aria-label="Pengaturan">
              <i class="ph ph-gear-six text-xl text-muted-500 group-hover:text-primary-500"></i>
            </button>

            <Show when={navDropdown.isOpen()}>

              <div class="absolute top-12 right-0 z-60 bg-white border-[0.8px] border-muted-200 shadow-md w-screen max-w-56 p-4 rounded-lg">

                <div class="mb-5">
                  <label for="">
                    Aktifkan Tajwid
                  </label>

                  <div class="flex items-center gap-8">
                    <div class="flex items-center gap-2">
                      <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4  accent-primary-400" />
                      <label for="default-radio-1" class="">Iya</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4  accent-primary-400" />
                      <label for="default-radio-2" class="">Tidak</label>
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <div class="mb-5">
                    <label for="">Ukuran Ayat Arab</label>
                    <div class="input-group group">
                      <div class="add-on with-hover"
                        onClick={() => {
                          props.changeAyahArabSize(
                            (props.ayahArabic - 1).toString()
                          )
                        }}
                      >
                        <i class="ph ph-minus text-sm"></i>
                      </div>
                      <input type="text"
                        value={`${props.ayahArabic}`}
                        onInput={
                          (e) => {
                            props.changeAyahArabSize(e.target.value)
                          }} />
                      <div class="add-on with-hover"
                        onClick={() => {
                          props.changeAyahArabSize(
                            (props.ayahArabic + 1).toString()
                          )
                        }}
                      >
                        <i class="ph ph-plus text-sm"></i>
                      </div>
                    </div>
                  </div>
                  <div class="mb-5">
                    <label for="">Ukuran Ayat Latin</label>
                    <div class="input-group group">
                      <div class="add-on with-hover"
                        onClick={() => {
                          props.changeAyahLatinSize(
                            (props.ayahLatin - 1).toString()
                          )
                        }}
                      >
                        <i class="ph ph-minus text-sm"></i>
                      </div>
                      <input type="text"
                        value={`${props.ayahLatin}`}
                        onInput={
                          (e) => {
                            props.changeAyahLatinSize(e.target.value)
                          }} />
                      <div class="add-on with-hover"
                        onClick={() => {
                          props.changeAyahLatinSize(
                            (props.ayahLatin + 1).toString()
                          )
                        }}
                      >
                        <i class="ph ph-plus text-sm"></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label for="">Ukuran Terjemahan</label>
                    <div class="input-group group">
                      <div class="add-on with-hover"
                        onClick={() => {
                          props.changeTranslationSize(
                            (props.translation - 1).toString()
                          )
                        }}
                      >
                        <i class="ph ph-minus"></i>
                      </div>
                      <input type="text"
                        value={`${props.translation}`}
                        onInput={
                          (e) => {
                            props.changeTranslationSize(e.target.value)
                          }} />
                      <div class="add-on with-hover"
                        onClick={() => {
                          props.changeTranslationSize(
                            (props.translation + 1).toString()
                          )
                        }}
                      >
                        <i class="ph ph-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button class="btn btn-light-primary">
                    <i class="ph ph-arrow-counter-clockwise"></i>
                    Reset
                  </button>
                </div>
              </div>
            </Show>
          </div>

        </div>

        {/* Hamburger Button untuk Mobile */}
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-muted-500 rounded-lg md:hidden hover:bg-muted-100 focus:outline-none focus:ring-2 focus:ring-muted-200"
          aria-controls="navbar-default"

        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>

      {/* Menu Navigasi Dropdown */}
      <div class={`${true == true ? "block" : "hidden"} w-full`} id="navbar-default">
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
    </>

  );
}


export default NavbarQuranRightItem;