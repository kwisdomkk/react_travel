import MainImage from "./MainImage";

export default function App() {
  return (
    <>
    <div className="w-full h-[600px]">
      <div className="w-full h-[50px] bg-slate-500 text-center pt-3 font-bold text-white">문화 유산</div>
      <div className="w-full h-[550px]"><img className="w-full h-full object-cover object-center" src="image/main.jpg" alt="main_image"/></div>
    </div>
    <div className="w-full flex flex-col items-center h-[500px]">
      <div className="max-w-7xl w-full h-full bg-blue-200">
        <MainImage/>
      </div>
    </div>
    </>
  )
}
