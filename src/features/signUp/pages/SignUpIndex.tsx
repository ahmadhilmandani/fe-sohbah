import type { ParentComponent } from "solid-js"

import SignWithGoogleSection from "../components/SignWithGoogleSection"
import RedirectLoginSection from "../components/RedirectLoginSection"
import FormBtnSection from "../components/FormBtnSection"
import PersonalInfoFormSection from "../components/PersonalInfoFormSection"
import HeaderSection from "../components/HeaderSection"

const SignUpIndex: ParentComponent = () => {

  return (
    <>
      {/* <Modal /> */}

      <HeaderSection />

      <div class="flex justify-center items-center gap-3 flex-col">

        <PersonalInfoFormSection />

        <FormBtnSection />

        <RedirectLoginSection />

        <SignWithGoogleSection />

      </div>

    </>
  )
}

export default SignUpIndex