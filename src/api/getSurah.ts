import axios from "axios";

import type { ApiResponse, SurahDetail } from "../types/quran";

const getSurah = async (number: Number) => {
  return axios.get<ApiResponse<SurahDetail>>(
    `https://cdn.idnbogor.id/api/v1/surat/${number}`,
  );
};

export default getSurah;
