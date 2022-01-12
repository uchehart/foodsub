import React from "react";
import "./Services.css";
import deliver from "../../assets/deliver.svg";
import gift from "../../assets/gift.svg";
import subscribe from "../../assets/subscribe.svg";
import track from "../../assets/track.svg";

const icons = [deliver, gift, subscribe, track];
const servicesArray = [
  {
    title: 'Save time',
    desc: 'No more market run and prep-time ',
    icon: subscribe
  },
  {
    title: 'Flexible ',
    desc: 'One time payment weekly or monthly.',
    icon: deliver
  },
 
  {
    title: 'Pause Anytime',
    desc: 'Leaving town? Pause and resume whenever',
    icon: track
  },
  {
    title: 'Gift a Meal',
    desc: 'Make someone happy with food',
    icon: gift
  },
]

const Service = ({ icon, title, desc }) => {
  return (
    <div className="foodsub__service_cards-card shadow-5 pointer grow">
      <img src={icon} alt='icon' />
      <p className="foodsub__services-title">{title}</p>
      <p className="foodsub__services-desc">{desc}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="foodsub__services w-100">
      <h2>Why choose Foodsub</h2>
      <p className="foodsub__services-sub">
      We belive eating should be easy for everyone.

      </p>
      <div className="foodsub__service_cards">
        {
          servicesArray.map((service, i) => <Service key={service+i} icon={service.icon} title={service.title} desc={service.desc} />)
        }
      </div>
    </section>
  );
};

export default Services;
