import Sidebar from "../components/navigation/sidebar";
export default function AppLayout({ children }) {
  return (
    <>
      <main style={{ backgroundColor: "#eef5f9" }}>
        <div className="flex">
          <aside>
            <Sidebar />
          </aside>
         <div className="p-3" >
         {children} 
         </div>
        </div>
      </main>
    </>
  );
}
