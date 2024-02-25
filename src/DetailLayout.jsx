import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle'
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
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='w-full h-screen bg-yellow-100 flex justify-center items-center'>
            <div className='w-[90%] h-[90%] bg-white rounded-3xl flex items-center'>
              <div key={index} className='w-full h-[90%] mr-14 md:flex md:items-center ml-14'>
                <div
                  className='rounded-3xl w-full h-[50%] md:w-[50%] md:h-[90%] md:mr-12'
                  style={{
                    backgroundImage: item ? `url(${item.imgUrl})` : '',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className='w-full h-[50%] text-ellipsis overflow-auto mt-5 md:w-[50%] md:h-full md:mt-14'>
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

