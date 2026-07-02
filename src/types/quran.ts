export type Ayah = {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: Record<string, string>;
};

export type Surah = {
    "nomor": number;
    "nama": string;
    "namaLatin": string;
    "jumlahAyat": number;
    "tempatTurun": string;
    "arti": string;
    "deskripsi": string;
    "audioFull": Record<string, string>
};

export type SurahDetail = {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: Record<string, string>;
  ayat: Ayah[];
  suratSelanjutnya: {
    nomor: number;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
  };
  suratSebelumnya: Boolean;
};

export type ApiResponse<T> = {
  code: number;
  message: string;
  data: T;
};
