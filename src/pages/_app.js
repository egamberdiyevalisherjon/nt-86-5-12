import Header from "@/Components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <div className="container">
        <Header />
        <Component {...pageProps} />
      </div>
    </main>
  );
}
