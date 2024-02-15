
import { useQuery } from "react-query";
import { apiGetImage } from "./api";

export default function MainImage() {
    const{data}=useQuery("getImage",apiGetImage);
    // console.log(data);
  return <div>{
    data?.result.item.map((item,index)=>(
        <div key={index}>{item.imageUrl[0]}</div>
    ))}
    
  </div>;
  
}
