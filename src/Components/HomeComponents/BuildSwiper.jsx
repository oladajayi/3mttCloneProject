import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";

const bios = [
  {
    name: "Amina Abdullahi",
    info: "3MTT Fellow, Jigawa State",
    story:
      "My learning journey in software development has been transformative, thanks to the 3MTT program. It has equipped me with the skills to become a software developer. I was also honored to be part of the top three teams in the hackathon event presentation in Kano, where I served as the team leader for 'Queue Smart.' Additionally, I participated in the Women Innovation Challenge and won an E-Pad tablet."
  },
  {
    name: "Victor Babarinde",
    info: "Cohort 1 Fellow/Àwárí MicroJob Recipient",
    story:
      "3MTT has had a profoundly positive impact on my life. I never imagined that something this remarkable could be accessible to so many. It truly feels like a groundbreaking initiative. As a graphic designer aspiring to become a product designer, this program has helped me refine my skills to a professional level. The hackathon and various challenges have significantly contributed to my growth and are now integral parts of my portfolio."
  },
  {
    name: "Ebuka Promise Ibeh",
    info: "Anambra State, 3MTT Fellow",
    story:
      "The 3MTT program has been an invaluable opportunity, giving me a significant head start in my journey into the tech world. Before 3MTT, I had aspirations of pursuing a career in AI/ML and software development but struggled to find a clear path forward due to the high costs of many platforms. I truly appreciate the collaborative environment and the support from peers who share similar goals and aspirations. The 3MTT program has not only deepened my understanding of UI/UX but also helped me build a network of like-minded colleagues. I’m eager to continue this journey and apply what I’ve learned to contribute to Nigeria's digital economy."
  }
];

 const BuildSwiper = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">3MTT Fellows Carousel</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {bios.map((_, index) => {
          // Create a group of 3 starting from current index
          const group = bios.slice(index, index + 3);
          if (group.length < 3) {
            group.push(...bios.slice(0, 3 - group.length)); // wrap around
          }

          return (
            <SwiperSlide key={index}>
              <div className="row">
                {group.map((bio, idx) => (
                  <div className="col-md-4" key={idx}>
                    <div className="card h-100 shadow-sm">
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{bio.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{bio.info}</h6>
                        <p className="card-text">{bio.story}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}


export default BuildSwiper
