import { A } from "@solidjs/router";
import type { ParentComponent } from "solid-js"

const RedirectLoginSection: ParentComponent = (props) => {

  return <>
    <div class="max-w-140 w-full mb-5">
      <div class="text-center text-muted-500">
        Belum punya akun? &nbsp
        <A href='/sign-in' class="text-primary-500 underline cursor-pointer">Masuk lewat sini!</A>.
      </div>
    </div>
    <div class="max-w-140 w-full mb-5 flex justify-center items-center gap-3">
      <div class="bg-muted-300 h-px flex-1 min-w-20 text-transparent">
        1
      </div>
      <div class="w-fit text-muted-500">
        atau
      </div>
      <div class="bg-muted-300 h-px flex-1 min-w-20 text-transparent">
        1
      </div>
    </div>
  </>

}

export default RedirectLoginSection;