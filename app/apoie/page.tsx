import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

export default function Apoie() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-dark">
      <Navbar />
      <main>
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
