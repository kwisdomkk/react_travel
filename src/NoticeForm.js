// export default function NoticeForm(){

//   return <div className="w-full flex justify-center py-16">
//     <form className="max-w-7xl w-full flex flex-col space-y-4">
//     <div className="text-lg mb-3">경복궁 가이드 문의하기</div>
//       <input
//       className="py-1 px-2 border" 
//       type="text" 
//       placeholder="title"/>
//       <input
//       className="py-1 px-2 border" 
//       type="text" 
//       placeholder="writer"/>
//       <textarea rows="10" className="py-1 px-2 border" type="text" placeholder="description"></textarea>
//       <button type="submit" className="py-1 bg-black text-white">작성하기</button>
//     </form>
//   </div>
// }

import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostNoticeWrite } from "./NoticeApi";

export default function NoticeForm(){
  const {register,handleSubmit}=useForm();
  const {mutate}=useMutation(apiPostNoticeWrite);
  const onSubmit=(formData)=>{
    mutate(formData);
  };

  return <div className="w-full flex justify-center py-16">
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-7xl w-full flex flex-col space-y-4">
    <div className="text-lg mb-3">경복궁 가이드 문의하기</div>
      <input
      {...register("title")}
      className="py-1 px-2 border" 
      type="text" 
      placeholder="title"/>
      <input
      {...register("writer")} 
      className="py-1 px-2 border" 
      type="text" 
      placeholder="writer"/>
      <textarea rows="10" className="py-1 px-2 border" type="text" placeholder="description" {...register("description")}></textarea>
      <button type="submit" className="py-1 bg-black text-white">작성하기</button>
    </form>
  </div>
}

