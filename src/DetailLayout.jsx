import { useQuery } from "react-query";
import { apiGetList } from "./api";

export default function DetailLayout() {
  const { data } = useQuery("getList", apiGetList);
  const item = data?.result.list && data.result.list[0];

  return (
    <div className='w-full h-screen bg-yellow-100 flex justify-center items-center'>
      <div className='w-[80%] h-[80%] bg-white rounded-3xl flex flex-col items-center'>
        <div className='rounded-3xl w-[80%] h-[60%] mt-10'
          style={{
            backgroundImage: item ? `url(${item.imgUrl})` : '',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className='h-[40%] rounded-3xl p-4 mt-10'>
          {item?.explanation_kor}
        </div>
      </div>
    </div>
  );
}


// import { useQuery } from "react-query";
// import { apiGetList } from "./api";

// export default function DetailLayout() {
//   const { data } = useQuery("getList", apiGetList);
//   const items = data?.result.list || [];

//   return (
//     <div className='w-full h-screen bg-yellow-100 flex justify-center items-center'>
//       <div className='w-[80%] h-[80%] bg-white rounded-3xl flex flex-col items-center'>
//         {items.map((item, index) => (
//           <div key={index} className='w-[80%] h-[60%] mt-10'>
//             <div
//               className='rounded-3xl w-full h-full'
//               style={{
//                 backgroundImage: item ? `url(${item.imgUrl})` : '',
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             ></div>
//             <div className='h-[40%] rounded-3xl p-4'>
//               {item?.explanation_kor}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// } 
