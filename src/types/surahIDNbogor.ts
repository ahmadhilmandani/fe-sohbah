export type IDNbogorAyah = {        
  "nomorAyat": number,
  "teksArab": string,
  "teksLatin": string,
  "teksIndonesia": string,
  "audio": Record<string, string>
}


export type IDNbogorSurah = {
  "nomor": number ,
  "nama": string,
  "namaLatin": string,
  "jumlahAyat": number,
  "tempatTurun": string,
  "arti": string,
  "deskripsi": string,
  "audioFull": Record<string, string>,
  "ayat"?: IDNbogorAyah[]
}
