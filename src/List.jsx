import { useQuery } from 'react-query';
import { apiGetList} from './api';

export default function List() {
  const{data}=useQuery("getList",apiGetList);
  console.log(data);
  return <div className='flex flex-wrap justify-center'>{
    data?.result.list&&data?.result.list.map((item,index)=>(
      <div key={index}>
        <img className="w-[400px] rounded-2xl m-5"src= {item.imgUrl}alt={`Item ${index}`}/>
        <div className='ml-5'>{item.contents_kor}</div>
      </div>
      
  ))
  }
  
</div>;
}
