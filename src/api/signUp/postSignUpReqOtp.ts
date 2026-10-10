import axios from "axios";
import type { ApiResponse } from "../../types/apiRes";
import type { SignUpReqOtp } from "../../types/signUp/signUpReqOtp";

export default async function postSignUpReqOtp(email: string, purpose: string) {
  return axios.post<ApiResponse<SignUpReqOtp>>(
    `${import.meta.env.VITE_DEV_BE_BASE_URL}/otp/send`,
    {
      email: email,
      purpose: purpose,
    },
  );
}
