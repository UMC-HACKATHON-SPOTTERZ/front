import { NavermapsProvider } from "react-naver-maps";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NavermapsProvider
      ncpClientId="0j7usq82lg"
      // or finClientId, govClientId
    >
      <Component {...pageProps} />
    </NavermapsProvider>
  );
}
