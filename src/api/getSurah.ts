import axios from "axios";

import type { Surah } from "../types/surah";
import type { ApiResponse } from "../types/apiRes";

const getSurah = async (number: Number) => {
  return axios.get<ApiResponse<Surah>>(
    `https://api.alquran.cloud/v1/surah/${number}/quran-tajweed`,
  );
};

export default getSurah;
