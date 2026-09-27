import type { ParentComponent } from "solid-js"

const FormBtnSection: ParentComponent = (props) => {

  return <>
    <div class="max-w-140 w-full mb-5">
      <button class="btn btn-primary">
        Daftar
        <i class="ph ph-pencil-line text-white"></i>
      </button>
    </div>
  </>

}

export default FormBtnSection;