import { useQuery } from "react-query";
import { apiGetList } from "./api";

export default function Detail() {
  const { data } = useQuery("getList", apiGetList);
  const item = data?.result.list && data.result.list[0]; 

  return (
    <div className="relative w-full py-16 flex justify-centers" 
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: item ? `url(${item.imgUrl})` : '' 
    }}>
    </div> 
  );
}
