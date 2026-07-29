
import { Show, type ParentComponent } from "solid-js";
import type { IDNbogorSurah } from "../../../../types/surahIDNbogor";
import { Select } from "@thisbeyond/solid-select";
import { useOptsSurah } from "../../hooks/useOptsSurah";
import { useNavSurah } from "../../hooks/useNavSurah";


type PropsType = {
  allSurah: IDNbogorSurah[]
}


const NavbarQuranMiddleItem: ParentComponent<PropsType> = (props) => {

  const optsSurah = useOptsSurah(props)

  const navigationSurah = useNavSurah()

  return (
    <>
        <div class="flex-1 max-w-xs flex gap-2 items-center">
          <div class="w-48">
            <Show when={props.allSurah.length}>
              <Select
                class="custom"
                {...optsSurah.selectOpts()}
                initialValue={optsSurah.selected()}
                onChange={navigationSurah.navbarChangeSurah}
              />
            </Show>
          </div>
          <div class="w-32">
            <Show when={props.allSurah.length}>
              <Select
                class="custom"
                {...optsSurah.surahAyah()}
                initialValue={optsSurah.surahAyahSeleced()}
                onChange={navigationSurah.goToAyah}
              />
            </Show>
          </div>
        </div>
    </>
  );
}


export default NavbarQuranMiddleItem;