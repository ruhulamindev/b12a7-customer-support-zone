import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Container from "./components/container";

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <div className="grid grid-cols-2 gap-[20px] my-[50px]">
          <div className="rounded p-7 text-white h-[220px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col items-center justify-center relative overflow-hidden">
            <h2 className="font-bold text-[35px] z-10">In-Progress</h2>
            <p className="font-semibold text-[30px] z-10">0</p>

            <img
              src="/vector1.png"
              alt="vector img"
              className="absolute left-0 bottom-0 h-full opacity-60 object-contain"
            />
            <img
              src="/vector1.png"
              alt="vector-right"
              className="absolute right-0 bottom-0 h-full opacity-60 object-contain scale-x-[-1]"
            />
          </div>
          <div className="rounded p-7 text-white h-[220px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col items-center justify-center relative overflow-hidden">
            <h2 className="font-bold text-[35px] z-10">Resolved</h2>
            <p className="font-semibold text-[30px] z-10">0</p>

            <img
              src="/vector1.png"
              alt="vector img"
              className="absolute left-0 bottom-0 h-full opacity-60 object-contain"
            />
            <img
              src="/vector1.png"
              alt="vector-right"
              className="absolute right-0 bottom-0 h-full opacity-60 object-contain scale-x-[-1]"
            />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default App;
