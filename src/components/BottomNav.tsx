import { A } from "@solidjs/router";

export default function BottomNav() {
  return (
    <>
      <div class="sticky bottom-0 mx-auto  max-w-7xl w-full  z-10">
        <div class="py-3 rounded-lg bg-white/30 backdrop-blur-xl border border-muted-500/25 shadow-lg mx-auto">
          <div class="grid h-full grid-cols-3">

            <A href="home"
              class="group flex items-center justify-center gap-2 rounded-2xl transition-all duration-300 hover:bg-white/20">

              <i
                class="ph ph-house text-2xl mb-0 leading-0 text-muted-500 transition-all duration-300 group-hover:text-muted group-hover:scale-110"></i>

              <span
                class="mt-0.5 text-base text-muted-500 transition-colors group-hover:text-muted">
                Home
              </span>
            </A>


            <A href="quran"
              class="group flex items-center justify-center gap-2 rounded-2xl">

              <i class="ph-fill ph-book-open-text text-2xl mb-0 leading-0 text-muted"></i>

              <span class="mt-0.5 text-base font-medium text-muted">
                Quran
              </span>

            </A>


            <button
              class="group flex items-center justify-center gap-2 rounded-2xl transition-all duration-300 hover:bg-white/20">

              <i
                class="ph ph-user text-2xl mb-0 leading-0 text-muted-500 transition-all duration-300 group-hover:text-muted group-hover:scale-110"></i>

              <span
                class="mt-0.5 text-base text-muted-500 transition-colors group-hover:text-muted">
                Profile
              </span>
            </button>

          </div>
        </div>
      </div>
    </>
  )
}