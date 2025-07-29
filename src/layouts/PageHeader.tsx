import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/Logo.png";
import Button from "../components/Button";
export default function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between border pt-2 mb-6 mx-4">
      {/* Logo And SideBar Button */}
      <div className="flex gap-4 items-center flex-shrink-0 border-t border-r">
        <Button size="icon" variant="ghost">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>

      {/* Search Bar */}
      <form className="flex flex-grow gap-4 justify-center">
        <div className="flex flex-grow max-w-[600px] ">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary w-full px-4 py-1 text-lg
            focus:border-blue-500 outline-none"
          />
          <Button size="icon" className="bg-amber-500">
            <Search />
          </Button>
        </div>
        <Button size="icon" className="flex-shrink-0" type="button">
          <Mic />
        </Button>
      </form>

      {/* Right Section */}
      <div className="flex flex-shrink-0 md:gap-2">
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
}
