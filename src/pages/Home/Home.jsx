import React from "react";
import { motion } from "framer-motion";
import { IconChevronRight, IconStarFilled } from "@tabler/icons-react";
import Content from "../../components/navigation/Content";
import DocumentTitle from "../../hooks/DocumentTitle";
import TopList from "../../components/TopList";
import Carousel from "../../components/Carousel";

import "./Home.css";
import { Link } from "react-router-dom";
import EssentialList from "../../components/EssentialList";
import CardApps from "../../components/CardApps";

const Home = () => {
  DocumentTitle("Home");
  const dataImage = [
    {
      id: "image-1",
      title: "EA FC 2024",
      subtitle:
        "The EA SPORTS FC platform is home to the biggest competitions, leagues, and players across the men's and women's game.",
      pathURL:
        "https://prod.assets.earlygamecdn.com/images/EA-FC-24-Beta.jpg?mtime=1688119906",
    },
    {
      id: "image-2",
      title: "PUBG: BATTLEGROUNDS",
      subtitle:
        "Battle royale that pits 100 players against each other. Outplay your opponents to become the lone survivor.",
      pathURL:
        "https://www.telkomsel.com/sites/default/files/2023-03/929%20D.png",
    },
    {
      id: "image-3",
      title: "Call of Duty®: Black Ops ",
      subtitle:
        "The biggest action series of all time returns. Call of Duty®: Black Ops",
      pathURL:
        "https://www.nyk.co.id/wp-content/uploads/2019/05/Bo4_XboxWire_Hero.Large_-hero.jpg",
    },
  ];
  const dataTopApps = [
    {
      id: "0",
      titleApps: "Whatsapp",
      category: "Social",
      tags: "Free",
      review: "4.2",
      pathURL: "https://cdn-icons-png.flaticon.com/512/124/124034.png",
    },
    {
      id: "1",
      titleApps: "Instagram",
      category: "Social",
      tags: "Free",
      review: "4.3",
      pathURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png",
    },
    {
      id: "2",
      titleApps: "Facebook",
      category: "Social",
      tags: "Free",
      review: "4.3",
      pathURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
    },
    {
      id: "3",
      titleApps: "Tiktok",
      category: "Social",
      tags: "Free",
      review: "4.7",
      pathURL:
        "https://cdn.icon-icons.com/icons2/3041/PNG/512/tiktok_logo_icon_189233.png",
    },
    {
      id: "4",
      titleApps: "Whatsapp",
      category: "Social",
      tags: "Free",
      review: "4.2",
      pathURL: "https://cdn-icons-png.flaticon.com/512/124/124034.png",
    },
    {
      id: "5",
      titleApps: "Instagram",
      category: "Social",
      tags: "Free",
      review: "4.3",
      pathURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png",
    },
    {
      id: "6",
      titleApps: "Facebook",
      category: "Social",
      tags: "Free",
      review: "4.3",
      pathURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
    },
    {
      id: "7",
      titleApps: "Tiktok",
      category: "Social",
      tags: "Free",
      review: "4.7",
      pathURL:
        "https://cdn.icon-icons.com/icons2/3041/PNG/512/tiktok_logo_icon_189233.png",
    },
  ];
  const dataBestGames = [
    {
      link: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "EA FC 2024",
      rating: "4.3",
      tags: "Free",
    },
    {
      link: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "EA FC 2024",
      rating: "4.3",
      tags: "Free",
    },
    {
      link: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "EA FC 2024",
      rating: "4.3",
      tags: "Free",
    },
    {
      link: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "EA FC 2024",
      rating: "4.3",
      tags: "Free",
    },
  ];
  return (
    <Content>
      <div className="container">
        <Carousel>
          {dataImage.map((data, key) => {
            return (
              <div key={key}>
                <div className="card-carousel">
                  <img
                    src={data.pathURL}
                    className="card-carousel-image"
                    alt={data.id}
                  />
                  <div className="card-carousel-text">
                    <span>{data.title}</span>
                    <span>{data.subtitle}</span>
                    <Link to={data.id} className="card-carousel-link">
                      <IconChevronRight size={18} /> See Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <TopList title="Top Free Apps" url="apps/top-free-apps">
          {dataTopApps.map((data, key) => {
            return (
              <motion.div
                whileHover={{
                  y: -1.2,
                  boxShadow: "0px 5px 5px #202020",
                }}
                className="card"
                key={key}
              >
                <div className="card-icon">
                  <img
                    src={data.pathURL}
                    alt="iconwa"
                    width={"32px"}
                    height={"32px"}
                  />
                </div>
                <div className="card-title">
                  {data.titleApps}
                  <div className="card-subtitle">
                    {data.review} <IconStarFilled size={10} /> {data.category}
                  </div>
                </div>
                <div className="card-category">{data.tags}</div>
              </motion.div>
            );
          })}
        </TopList>
        <EssentialList
          src="https://img.freepik.com/free-photo/futuristic-background-with-colorful-glowing-abstract-neon-lights_181624-26329.jpg"
          title="Featured Free Games"
          subtitle="Explore free fun to play games and find a new favorite"
        >
          {dataBestGames.map((data, key) => {
            return (
              <CardApps
                key={key}
                src={data.link}
                title={data.title}
                rating={data.rating}
                tags={data.tags}
              />
            );
          })}
        </EssentialList>
      </div>
    </Content>
  );
};

export default Home;
