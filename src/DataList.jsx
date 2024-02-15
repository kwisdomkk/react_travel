import { useQuery } from 'react-query';
import { apiGetData} from './api';

export default function DataList() {
  const{data}=useQuery("getData",apiGetData);
  console.log(data);
  return <div>{
  data?.result.item.map((item,index)=>(
      <div key={index}>{item.ccbaMnm1}</div>
  ))}
  
</div>;
}
