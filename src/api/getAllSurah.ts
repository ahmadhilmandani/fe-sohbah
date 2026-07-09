import axios from "axios";

import type { ApiResponse } from "../types/apiRes";
import type { IDNbogorSurah } from "../types/surahIDNbogor";

const getAllSurah = async () => {
  return axios.get<ApiResponse<IDNbogorSurah[]>>(
    `https://cdn.idnbogor.id/api/v1/surat`,
  );
};

export default getAllSurah;
