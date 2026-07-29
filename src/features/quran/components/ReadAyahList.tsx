import { mergeProps } from "solid-js"
import type { ParentComponent } from "solid-js/types/server/rendering.js"


type ReadAyahListProps = {
  ayahNum?: number | undefined;
  ayahArab?: string | undefined;
  quranLatin?: string | undefined;
  translation?: string | undefined;
};



const ReadAyahList: ParentComponent<ReadAyahListProps> = (props) => {
  const mergedProps = mergeProps({
    ayahNum: 0,
    ayahArab: '',
    quranLatin: '',
    translation: ''
  }, props)

  return (
    <>
      <div class="border-b-[0.8px] border-muted-200 hover:cursor-pointer hover:bg-tertiary-50/35 p-3 lg:p-8">

        <div class="flex justify-end items-center mb-5">
          <div>
            <i class="ph ph-dots-three text-3xl"></i>
          </div>

        </div>

        <div class="text-3xl font-light">
          <div class="text-5xl leading-[200%] text-pretty" style='direction: rtl;' innerHTML={
            mergedProps.ayahArab
            } />
        </div>

        <div class="mt-5 text-primary-400">
          {mergedProps.quranLatin}
        </div>

        <div class="mt-8">
          {mergedProps.translation}
        </div>

        <div class="mt-5 flex items-center gap-3">

          <i class="ph ph-play-circle text-lg text-primary-500 bg-primary-50 p-2.5 rounded-full"></i>

          <i class="ph ph-bookmark-simple text-lg text-primary-500 bg-primary-50 p-2.5 rounded-full"></i>

          <i class="ph ph-share text-lg text-primary-500 bg-primary-50 p-2.5 rounded-full"></i>

        </div>

      </div>
    </>
  )
}


export default ReadAyahList