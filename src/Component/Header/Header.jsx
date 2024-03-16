import image from '../../assets/images/Frame.png'
const Header = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl">
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
            </ul>
          </div>
          <a class="text-4xl font-bold">Recipe Calories</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 text-xl">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
        <div class="navbar-end gap-4">
          <div class="form-control  rounded-lg ">
            <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto bg-[#150B2B0D]" />
          </div>
          <button class="btn btn-circle btn-outline bg-[#0BE58A] border-none">
            <img src={image} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;