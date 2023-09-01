// import "@/styles/globals.css";
import '../styles/globals.css'
import { useRouter } from "next/router";
import AppLayout from "../layouts/appLayout";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/" || router.pathname === "/signup" ? (
        <Component {...pageProps} />
       
      ) : (

        <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      )}
    </>
  );
}
