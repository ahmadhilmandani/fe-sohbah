import type { ParentComponent } from "solid-js"
import logoGoole from "../../../assets/img/logo-google.webp"


const SignWithGoogleSection: ParentComponent = (props) => {

  return <>
    <div class="max-w-140 w-full mb-5 flex justify-center items-center gap-3 bg-muted-50 border-[0.8px] h-9 border-muted-200 text-sm rounded-lg py-1.5 px-2.5 placeholder-muted-400 outline-0 hover:border-primary-300 hover:bg-primary-50/65 transition-all cursor-pointer group">
      <img src={logoGoole} alt="" class="h-full" />
      <div class="group-hover:font-medium transition-all">
        Masuk dengan google
      </div>
    </div>
  </>

}

export default SignWithGoogleSection;