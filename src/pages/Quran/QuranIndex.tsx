import type { ParentComponent } from "solid-js"
import ReadAyahList from "../../components/Quran/ReadAyahList"

const QuranIndex: ParentComponent = (props) => {
  return (
    <>
      <h1 class="text-3xl text-primary-500">
        Quran!
      </h1>
      <div class="">
        <ReadAyahList />
        <ReadAyahList />
      </div>
    </>
  )
}

export default QuranIndex