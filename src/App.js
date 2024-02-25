import { Link } from "react-router-dom";
import { MdOutlineSpeakerNotes } from "react-icons/md";


export default function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] md:h-[100vh] flex justify-center items-center">
        <div className="relative">
          <img className="w-[100vw] h-[100vh] object-center object-cover" src="image/main_2.jpg" alt="main_image"/>
          <div className="absolute top-1/2 left-10  text-white font-bold p-4 space-y-2 md:text-2xl text-sm">
          <Link to={'/notice'}><MdOutlineSpeakerNotes className="w-5 h-5 md:w-10 md:h-10" /></Link>
            <p>조선 최초의 궁궐 경복궁,</p>
            <p>오랜 역사의 이야기 속으로 초대합니다.</p>
            <Link to={'/detail'}><button className="mt-4 ml-44 md:ml-80 border-2 rounded-lg text-center p-2 md:text-xl ">시작하기</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}
