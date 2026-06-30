import type { ParentComponent } from "solid-js"

const QuranIndex: ParentComponent = (props) => {
  return (
    <>
      <h1 class="text-3xl text-primary-500">
        Quran!
      </h1>
      <div class="">
        {props.children}
      </div>
    </>
  )
}

export default QuranIndex