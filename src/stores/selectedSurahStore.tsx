import { createSignal } from "solid-js";


export const [
  selectedSurah,
  setSelectedSurah
] = createSignal<number>(0)