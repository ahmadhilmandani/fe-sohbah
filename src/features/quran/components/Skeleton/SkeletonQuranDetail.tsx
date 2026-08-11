import { For, type Component } from "solid-js";
import SkeletonReadAyahList from "./SkeletonReadAyahList";
import SkeletonNavbarQuran from "./SkeletonNavbarQuran";

const SkeletonQuranDetail: Component = () => {
  return (
    <>
      <SkeletonNavbarQuran />

      <div>
        <div class="flex flex-col items-center justify-center gap-3 my-12 animate-pulse">
          <div class="h-10 w-56 bg-muted-200 rounded-xl" />
          <div class="h-5 w-32 bg-muted-200 rounded-xl" />
          <div class="flex gap-3 items-center">
            <div class="h-4 w-16 bg-muted-200 rounded-xl" />
            <div class="h-4 w-4 bg-muted-200 rounded-full" />
            <div class="h-4 w-16 bg-muted-200 rounded-xl" />
          </div>
        </div>

        <div class="mb-12 flex justify-center animate-pulse">
          <div class="h-14 w-2/3 bg-muted-200 rounded-xl" />
        </div>

        <div>
          <For each={Array(6)}>
            {() => <SkeletonReadAyahList />}
          </For>
        </div>

        <div class="mt-12 mb-40 relative h-12 animate-pulse">
          <div class="w-40 h-10 bg-muted-200 rounded-xl absolute left-5 bottom-0 top-5" />
          <div class="w-40 h-10 bg-muted-200 rounded-xl absolute right-5 bottom-0 top-5" />
        </div>
      </div>
    </>
  );
};

export default SkeletonQuranDetail;