import type { Component } from "solid-js";

const SkeletonNavbarQuran: Component = () => {
  return (
    <nav class="bg-white border-b-[0.8px] border-muted-200 sticky top-8 left-0 right-0 -translate-y-8 z-50 rounded-t-lg animate-pulse">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-4 md:gap-0">

        {/* KIRI: Tombol Back */}
        <div class="size-8 rounded-full bg-muted-200" />

        {/* TENGAH: Dua Input Sejajar (Surah & Ayat) */}
        <div class="flex items-center gap-3">
          <div class="h-7.5 w-40 bg-muted-200 rounded-lg" />
          <div class="h-7.5 w-24 bg-muted-200 rounded-lg" />
        </div>

        {/* KANAN: Ikon Aksi & Menu Toggle */}
        <div class="flex items-center gap-3">
          <div class="size-8 rounded-full bg-muted-200" />
          <div class="size-8 rounded-full bg-muted-200" />
        </div>

      </div>
    </nav>
  );
};

export default SkeletonNavbarQuran;