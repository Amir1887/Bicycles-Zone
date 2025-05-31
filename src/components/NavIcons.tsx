'use client'
function NavIcons() {
  return (
    <div className="flex items-center gap-4 lg:gap-6">
      <button 
        aria-label="User account"
        className="p-2 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        👤
      </button>
      <button 
        aria-label="Notifications"
        className="p-2 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        🔔
      </button>
      <button 
        aria-label="Shopping cart"
        className="p-2 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
      >
        🛒
        {/* cart count badge */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          0
        </span>
      </button>
    </div>
  );
}

export default NavIcons;