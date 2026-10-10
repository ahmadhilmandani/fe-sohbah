import axios from "axios";
import type { ApiResponse } from "../../types/apiRes";
import type { SignUpVerifOtp } from "../../types/signUp/signUpVerifOtp";

export default async function postSignUpVerifOtp(
  email: string,
  purpose: string,
  otp: string
) {
  return axios.post<ApiResponse<SignUpVerifOtp>>(
    `${import.meta.env.VITE_DEV_BE_BASE_URL}/otp/verify`,
    {
      email: email,
      purpose: purpose,
      otp: otp
    },
  );
}
