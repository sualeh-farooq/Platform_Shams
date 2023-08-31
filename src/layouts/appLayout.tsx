import Sidebar from "../components/navigation/sidebar";
import TopNav from "../components/navigation/topNav";
import { ThemeProvider } from "../components/theme/theme-provider";
export default function AppLayout({ children }) {
  return (
    <>
      <main className="h-screen">
        <div className="flex">
          <aside>
            <Sidebar />
          </aside>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className=" w-full h-screen">
            <TopNav />
            {children}
          </div>
      </ThemeProvider>
        </div>
      </main>
    </>
  );
}
