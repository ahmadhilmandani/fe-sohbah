import { createSignal, onCleanup, onMount } from "solid-js";

const useNavDropdown = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  let btnDropdownRef!: HTMLButtonElement;

  const setBtnRef = (el: HTMLButtonElement) => {
    btnDropdownRef = el;
  };

  function handleClick(e: MouseEvent) {
    const target = e.target as Node;

    if (btnDropdownRef.contains(target)) {
      setIsOpen(true);

      return;
    }

    setIsOpen(false);
  }

  onMount(() => {
    document.addEventListener("click", handleClick);
  });

  onCleanup(() => {
    document.removeEventListener("click", handleClick);
  });

  return {
    isOpen,
    setBtnRef,
  };
};

export default useNavDropdown;
