import type { ParentComponent } from "solid-js"
import BottomNav from "../components/BottomNav"

const MainLayout: ParentComponent = (props) => {
  return (
    <div class="w-full min-h-screen flex justify-center items-center bg-primary-50 relative">
      <div class="max-w-7xl flex-1 rounded-lg shadow-xl bg-white relative mt-16 mb-28 py-8">
        {props.children}
        <BottomNav />
      </div>
    </div>
  )
}

export default MainLayout