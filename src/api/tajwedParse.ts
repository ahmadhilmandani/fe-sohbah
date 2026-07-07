import axios from "axios";
import type { TajweedParse } from "../types/tajweedParse";

const tajweedParse = async (ayah: string) => {
  return axios.post<TajweedParse>(
    `http://localhost/sohbah-tajweed-parser/parse.php`, {
      'ayah' : ayah
    }
  );
};

export default tajweedParse;
