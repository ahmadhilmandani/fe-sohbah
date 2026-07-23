import { A, useNavigate } from "@solidjs/router";
import { mergeProps, type ParentComponent } from "solid-js";
import { setSelectedSurah } from "../../../stores/selectedSurahStore";
import { useNavSurah } from "../hooks/useNavSurah";

type QuranIndexListT = {
  'nomor': number,
  'nama': string;
  'namaLatin': string;
  'jumlahAyat': number;
  'tempatTurun': string
}

const QuranIndexList: ParentComponent<QuranIndexListT> = (props) => {


  const mergedProps = mergeProps({
    'nomor': 0,
    'nama': '',
    'namaLatin': '',
    'jumlahAyat': 0,
    'tempatTurun': ''
  }, props)

  const navSurah = useNavSurah()

  
  const goToReadSurah = () => {
    navSurah.clickChangeSurah(
      mergedProps.nomor,
      mergedProps.jumlahAyat
    ) 
  }

  return (
    <>
      <div onClick={goToReadSurah} class="block border-b border-muted-100 hover:cursor-pointer hover:bg-primary-50/40 p-3 lg:p-8 ">

        <div class="flex justify-between items-center mb-5 gap-5">
          <div class="flex justify-between items-center gap-3">
            <div class="bg-primary-100/50 rounded-full text-primary-600 size-12 flex justify-center items-center">
              {mergedProps.nomor}
            </div>
            <div>
              <h2 class="text-xl leading-1.5 mb-3">
                {mergedProps.namaLatin}
              </h2>
              <div class="flex items-center gap-3 text-muted-400">
                {mergedProps.tempatTurun} . {mergedProps.jumlahAyat} ayah
              </div>
            </div>
          </div>

          <div class="text-muted-400 text-2xl">
            {mergedProps.nama}
          </div>
        </div>
      </div>
    </>
  )
}


export default QuranIndexList;