import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
function app() {
  return (
    <div>
      <Navbar />
      <div className="text-center md:mt-14 ">
        <h1 className="mt-5 text-2xl font-bold pb-3 border-b-4 inline-block border-solid border-slate-500">
          Courses
        </h1>
        <Slider/>
      </div>

      <div className="text-center mt-28 mb-10">
        <h1 className="mt-5 text-2xl font-bold pb-3 border-b-4 inline-block border-solid border-slate-500">
          Sections
        </h1>
        <Slider/>
      </div>
    </div>
  );
}

export default app;
