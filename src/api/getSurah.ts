import axios from "axios";

import type { ApiResponse, Surah } from "../types/quran";

const getSurah = async (number: Number) => {
  return axios.get<ApiResponse<Surah>>(
    `https://cdn.idnbogor.id/api/v1/surat/${number}`,
  );
};

export default getSurah;
