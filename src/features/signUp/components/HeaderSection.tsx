import type { ParentComponent } from "solid-js"

import logoOriginal from "../../../assets/img/logo-original.png"
import logoCircleOriginal from "../../../assets/img/logo-circle-original.png"
import Modal from "../../../components/Modal"

const HeaderSection: ParentComponent = (props) => {

  return <>
    <div class="flex justify-center items-center mx-auto mb-5">
      <img src={logoCircleOriginal} alt="" class="max-h-6.5" />
      <img src={logoOriginal} alt="" class="max-h-9.5 -ml-1 mt-2" />
    </div>

    <div class="mb-8">
      <h1 class="text-3xl text-primary-500 text-center">
        Daftarkan diri Anda.
      </h1>
      <div class="text-center text-muted-500">
        Daftar untuk menikmati seluruh layanan yang disediakan oleh &nbsp
        <span class="text-primary-500 italic">sohbah</span>.
      </div>
    </div>
  </>

}

export default HeaderSection;