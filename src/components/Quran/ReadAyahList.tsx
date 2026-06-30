import { mergeProps } from "solid-js"
import type { ParentComponent } from "solid-js/types/server/rendering.js"

const ReadAyahList: ParentComponent = (props) => {
  const mergedProps = mergeProps({
    ayahArab: '',
    quranArab: '',
    ayahLatin: '',
    quranLatin: '',
    translation: ''
  }, props)

  return (
    <>
      <div class="border-b border-gray-200 py-8">

        <div class="flex justify-between items-center mb-5">
          <div class="bg-primary-100/50 rounded-full px-3 py-1.5 text-primary-600">
            {mergedProps.ayahArab}
          </div>

          <div>
            <i class="ph ph-dots-three text-3xl"></i>
          </div>

        </div>

        <div class="text-right text-3xl font-light">
          {mergedProps.quranArab}
        </div>

        <div class="mt-5 text-primary-600">
          {mergedProps.quranLatin}
        </div>

        <div class="mt-8">
          {mergedProps.translation}
        </div>

        <div class="mt-5 flex items-center gap-3">

          <i class="ph ph-play-circle text-lg text-gray-500/70 bg-gray-50 p-2.5 rounded-full"></i>

          <i class="ph ph-bookmark-simple text-lg text-gray-500/70 bg-gray-50 p-2.5 rounded-full"></i>

          <i class="ph ph-share text-lg text-gray-500/70 bg-gray-50 p-2.5 rounded-full"></i>

        </div>

      </div>
    </>
  )
}


export default ReadAyahList