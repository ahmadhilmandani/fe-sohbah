import type { ParentComponent } from "solid-js"
import BottomNav from "../components/BottomNav"

const MainLayout: ParentComponent = (props) => {
  return (
    <div class="w-full min-h-screen bg-primary-50">
      {props.children}
      <BottomNav />
    </div>
  )
}

export default MainLayout