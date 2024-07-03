import { Swiper, SwiperSlide } from 'swiper/react'
import {register} from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
    const carros = [
        {id: "1", img:"civic.png"},
        {id:"2", img:"hb20.png"},
        {id:"3",img:"corolla.png"}
    ]



    return (
        <>

            <header>
                <section >
                    <img src="logocar.png" />

                </section>
                <section>
                    <img className="gpsM" src="gps2.png" />
                    <img className="gpsM" src="linkedin.png" />
                </section>
            </header>
            <main>

                <nav class="pags">
                    <ul>
                        <li > <a href="home">HOME</a></li>
                        <li ><a href="favoritos">FAVORITOS</a></li>
                        <li  ><a href="reservar">RESERVADOS</a></li>
                    </ul>
                </nav>

                <div class="swiper">
                    <Swiper 
                       slidesPerView={1}
                       pagination={{ clickable: true }}
                       navigation
                       >
                    {carros.map( (item) => (

                 <SwiperSlide key={item.id}>
                   <img  className="slide" src={item.img} alt=""/>
                 </SwiperSlide>

))}
            
                    </Swiper>

                </div>
                
            </main>
        </>
    )
}