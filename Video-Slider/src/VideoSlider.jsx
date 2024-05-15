
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './VideoSlider.css'; // Custom styles for the component
import Video1 from './assets/sls-1.mp4';
import Video2 from './assets/sls-2.mp4';
import Video3 from './assets/Milestone-Badge.mp4';

const VideoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const videos = [
    { src: Video1, type: 'video/mp4' },
    { src: Video2, type: 'video/mp4' },
    { src: Video3, type: 'video/mp4' },
  ];

  return (
    <div className="video-slider">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="video-slide">
            <video autoPlay loop muted>
              <source src={video.src} type={video.type} />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
