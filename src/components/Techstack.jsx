import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/contactMe.css';

function Techstack() {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={0}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={3000}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/OIP.5isFBQqeDC74J85Rq26v-wHaHa?rs=1&pid=ImgDetMain" className='tech_img' alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/R.1e3f4e0b519f5057795f186bd4224fb8?rik=vdWvi0sovMbzJA&riu=http%3a%2f%2flogonoid.com%2fimages%2fcss3-logo.png&ehk=1834Yvb9mgURw5ej9KtjAZvXXTxCWs8bA08xVL%2ftEBU%3d&risl=&pid=ImgRaw&r=0" alt="Image 2" className='tech_img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png" alt="Image 3" className='tech_img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://logodix.com/logo/2062444.png" alt="Image 4" className='tech_img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/OIP.rfbzSCa2ig0zr9zEKiWbLgHaE-?rs=1&pid=ImgDetMain" alt="Image 5" className='tech_img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/OIP.uDoQRZk_i0rLDLvBdiMzVAHaEc?rs=1&pid=ImgDetMain" alt="Image 6" className='tech_img' />
        </SwiperSlide>
      </Swiper>
    </div >
  );
}

export default Techstack;
