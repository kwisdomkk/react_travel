import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination,Scrollbar} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { useQuery } from 'react-query';
import { apiGetList } from './api';

export default function Slider() {
  const { data } = useQuery("getList", apiGetList);
  const items = data?.result.list || [];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='w-full h-screen bg-yellow-100 flex justify-center items-center'>
            <div className='w-[80%] h-[80%] bg-white rounded-3xl flex flex-col items-center'>
              <div key={index} className='w-[80%] h-[60%] mt-10'>
                <div
                  className='rounded-3xl w-full h-full'
                  style={{
                    backgroundImage: item ? `url(${item.imgUrl})` : '',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className='h-[40%] rounded-3xl p-4 mt-5'>
                  {item?.explanation_kor}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

