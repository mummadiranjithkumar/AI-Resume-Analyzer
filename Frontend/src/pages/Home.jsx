import Navbar from "../components/Navbar";
import UploadForm from "../components/UploadForm";

function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <UploadForm />
      </div>
    </div>
  );
}

export default Home;