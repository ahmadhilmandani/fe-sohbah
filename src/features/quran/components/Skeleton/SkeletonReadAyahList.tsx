import type { Component } from "solid-js";

const SkeletonReadAyahList: Component = () => {
  return (
    <div class="border-b-[0.8px] border-muted-200 p-3 lg:p-8 animate-pulse">

      <div class="flex justify-end items-center mb-5">
        <div class="size-6 rounded-full bg-muted-200" />
      </div>

      <div class="space-y-3">
        <div class="h-8 w-full bg-muted-200 rounded-xl" style="direction:rtl" />
        <div class="h-8 w-4/5 ms-auto bg-muted-200 rounded-xl" style="direction:rtl" />
      </div>

      <div class="mt-5 h-5 w-3/4 bg-muted-200 rounded-xl" />

      <div class="mt-8 space-y-2">
        <div class="h-4 w-full bg-muted-200 rounded-xl" />
        <div class="h-4 w-2/3 bg-muted-200 rounded-xl" />
      </div>

      <div class="mt-5 flex items-center gap-3">
        <div class="size-9 rounded-full bg-muted-200" />
        <div class="size-9 rounded-full bg-muted-200" />
        <div class="size-9 rounded-full bg-muted-200" />
      </div>

    </div>
  );
};

export default SkeletonReadAyahList;