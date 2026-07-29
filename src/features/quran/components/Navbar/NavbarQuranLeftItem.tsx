import { useNavigate } from "@solidjs/router";

const NavbarQuranLeftItem = () => {

  const navigate = useNavigate()

  return (
    <>
      <div class="flex items-center">
        <button
          onClick={() => {
            navigate(`/quran`)
          }}
          type="button"
          class="inline-flex items-center gap-2 text-sm font-medium text-muted-500 hover:text-primary-500 cursor-pointer hover:bg-primary-50/65 rounded-md px-3 py-1.5 transition-all group"
        >
          <i class="ph ph-arrow-left text-muted-500 group-hover:text-primary-500"></i>
          Back
        </button>
      </div>
    </>
  );
}


export default NavbarQuranLeftItem;