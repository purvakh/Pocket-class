import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/basket.jpeg",
      title: "basketball",
    },
    {
      id: 2,
      url: "/fitnees.jpeg",
      title: "Improve Fitness",
    },
    {
      id: 3,
      url: "/camping.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "/images.jpeg",
      title: "School Play list ",
    },
    {
      id: 5,
      url: "/kar.jpeg",
      title: "karate",
    },
    {
      id: 6,
      url: "/khokho.jpeg",
      title: "kho..kho",
    },
    {
      id: 6,
      url: "/music.jpeg",
      title: "Classes",
    },
    {
      id: 6,
      url: "/song.jpeg",
      title: "Stage Confidance",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;