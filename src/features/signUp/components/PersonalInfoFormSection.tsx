import type { ParentComponent } from "solid-js"

const PersonalInfoFormSection: ParentComponent = (props) => {

  return <>
    <div class="max-w-140 w-full mb-5">
      <label for="" class="font-medium">Name</label>
      <div class="input-group group">
        <div class="add-on">
          <i class="ph ph-identification-badge"></i>
        </div>
        <input type="text"
          value={``}
          placeholder="fulan dangklek"
        />
      </div>
    </div>
    <div class="max-w-140 w-full mb-5">
      <label for="" class="font-medium">Gmail</label>
      <div class="input-group group">
        <div class="add-on">
          <i class="ph ph-envelope-simple"></i>
        </div>
        <input type="text"
          value={``}
          placeholder="cth: fulan@mail.dev"
        />
      </div>
    </div>
    <div class="max-w-140 w-full mb-5">
      <label for="" class="font-medium">Password</label>
      <div class="input-group group">
        <div class="add-on">
          <i class="ph ph-lock"></i>
        </div>
        <input type="text"
          value={``}
          placeholder="cth: Fulan&123"
        />
      </div>
    </div>
    <div class="max-w-140 w-full mb-5">
      <label for="" class="font-medium">Konfirmasi Password</label>
      <div class="input-group group">
        <div class="add-on">
          <i class="ph ph-lock"></i>
        </div>
        <input type="text"
          value={``}
          placeholder="cth: Fulan&123"
        />
      </div>
    </div>
  </>

}

export default PersonalInfoFormSection;