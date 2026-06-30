import type { ParentComponent } from "solid-js"

const HomeIndex: ParentComponent = (props) => {
  return (
    <>
      <h1 class="text-3xl text-primary-500">
        Home!
      </h1>
      <div class="">
        {props.children}
      </div>
    </>
  )
}

export default HomeIndex