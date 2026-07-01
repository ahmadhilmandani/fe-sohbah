import type { ParentComponent } from "solid-js"
import BottomNav from "../components/BottomNav"

const MainLayout: ParentComponent = (props) => {
  return (
    <div class="w-full min-h-screen flex justify-center items-center bg-primary-50">
      <div class="max-w-2xl flex-1 p-3 lg:p-8 rounded-md shadow-xl bg-white relative mt-16 mb-28">
        {props.children}
        <BottomNav />
      </div>
    </div>
  )
}

export default MainLayout