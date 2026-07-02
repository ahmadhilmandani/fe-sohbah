import axios from "axios";

import type { ApiResponse, Surah } from "../types/quran";

const getAllSurah = async () => {
  return axios.get<ApiResponse<Surah[]>>(
    `https://cdn.idnbogor.id/api/v1/surat`,
  );
};

export default getAllSurah;
