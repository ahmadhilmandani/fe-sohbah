import axios, { type AxiosResponse } from "axios";
import type { ApiResponse } from "../types/apiRes";
import type { IDNbogorSurah } from "../types/surahIDNbogor";
import type { Surah } from "../types/surahQuranCloud";

type ApiType = "idn_bogor" | "alquran_cloud";

function getSurah(
  number: number,
  apiType: "idn_bogor"
): Promise<AxiosResponse<ApiResponse<IDNbogorSurah>>>;

function getSurah(
  number: number,
  apiType: "alquran_cloud"
): Promise<AxiosResponse<ApiResponse<Surah>>>;

async function getSurah(
  number: number,
  apiType: ApiType = "idn_bogor"
) {
  if (apiType === "idn_bogor") {
    return axios.get<ApiResponse<IDNbogorSurah>>(
      `https://cdn.idnbogor.id/api/v1/surat/${number}`
    );
  }

  return axios.get<ApiResponse<Surah>>(
    `https://api.alquran.cloud/v1/surah/${number}/quran-tajweed`
  );
}

export default getSurah;