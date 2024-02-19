import { Link } from "react-router-dom";


export default function App() {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="relative">
          <img className="w-full h-full object-cover object-center" src="image/main_2.jpg" alt="main_image"/>
          <div className="absolute top-1/2 left-10  text-white font-bold text-2xl p-4">
            <p>조선 최초의 궁궐 경복궁,</p>
            <p>오랜 역사의 이야기 속으로 초대합니다.</p>
            <Link to={'/detail'}><div className="mt-10 ml-72 border rounded-lg text-center ">시작하기</div></Link>
          </div>
        </div>
      </div>
    </>
  )
}
