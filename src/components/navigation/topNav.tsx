import TeamSwitcher from "../app/team-switcher"
import { MainNav } from "../app/main-nav"
import { Search } from "../app/search"
import ThemeToggle from "../modes/modes"
import { UserNav } from "../app/user-nav"
export default function TopNav(){
    return (
        <>
        <div className="border-b  pl-60 pr-4 w-full fixed w-100 bg-sky-900">
          <div className="flex h-20 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <ThemeToggle />
              {/* <Search /> */}
              <UserNav />
            </div>
          </div>
        </div>
        </>
    )
}