import type { ParentComponent } from "solid-js"
import logoOriginal from "../../../assets/img/logo-original.png"
import logoCircleOriginal from "../../../assets/img/logo-circle-original.png"
import logoGoole from "../../../assets/img/logo-google.webp"
import { A } from "@solidjs/router"
import GoogleLogin from "../components/BtnSignWithGoogle"

const SignInIndex: ParentComponent = () => {
  let signInGoogleBtn;

  return (
    <>
      <div class="flex justify-center items-center mx-auto mb-5">
        <img src={logoCircleOriginal} alt="" class="max-h-[26px]" />
        <img src={logoOriginal} alt="" class="max-h-[38px] -ml-1 mt-2" />
      </div>
      <div class="mb-8">
        <h1 class="text-3xl text-primary-500 text-center">
          Masuk ke akun anda.
        </h1>
        <div class="text-center text-muted-500">
          Masuk ke akun anda dan untuk menggunakan layanan penuh dari &nbsp
          <span class="text-primary-500 italic">sohbah</span>.
        </div>
      </div>

      <div class="flex justify-center items-center gap-3 flex-col">
        <div class="max-w-[560px] w-full mb-5">
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
        <div class="max-w-[560px] w-full mb-5">
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
        <div class="max-w-[560px] w-full mb-5">
          <button class="btn btn-primary">Masuk</button>
        </div>
        <div class="max-w-[560px] w-full mb-5">
          <div class="text-center text-muted-500">
            Belum punya akun? &nbsp
            <A href='/sign-up' class="text-primary-500 underline cursor-pointer">Daftar di sini!</A>.
          </div>
        </div>
        <div class="max-w-[560px] w-full mb-5 flex justify-center items-center gap-3">
          <div class="bg-muted-300 h-px flex-1 min-w-[80px] text-transparent">
            1
          </div>
          <div class="w-fit text-muted-500">
            atau
          </div>
          <div class="bg-muted-300 h-px flex-1 min-w-[80px] text-transparent">
            1
          </div>
        </div>
        <div class="max-w-[560px] w-full ">

          <GoogleLogin />

        </div>
      </div>

    </>
  )
}

export default SignInIndex