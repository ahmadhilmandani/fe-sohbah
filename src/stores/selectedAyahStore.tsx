import { createSignal } from "solid-js";

export const [
  selectedAyahStore,
  setSelectedAyahStore
] = createSignal<number>(0)