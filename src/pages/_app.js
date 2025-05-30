import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.css"
import dynamic from "next/dynamic";
import Footer from "@/components/Footer/Footer";

const BootstrapClientSide = dynamic(
  () => import('../components/Bootstrap/BootstrapClient'),
  {
    ssr: false,
  }
);

export default function App({ Component, pageProps }) {
  return (
    <>
      <BootstrapClientSide />
      <Component {...pageProps} />
    </>
  );
}