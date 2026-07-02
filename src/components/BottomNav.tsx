export default function BottomNav() {
  return (
    <>
      <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
        <div class="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
          <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <i class="ph ph-house text-2xl mb-1 text-gray-500 group-hover:text-primary"></i>
            <span class="text-sm text-gray-500 group-hover:text-primary">Home</span>
          </button>

          <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <i class="ph ph-book-open-text text-2xl mb-1 text-gray-500 group-hover:text-primary"></i>
            <span class="text-sm text-gray-500 group-hover:text-primary">Quran</span>
          </button>

          <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
            <i class="ph ph-user text-2xl mb-1 text-gray-500 group-hover:text-primary"></i>
            <span class="text-sm text-gray-500 group-hover:text-primary">Profile</span>
          </button>
        </div>
      </div>
    </>
  )
}