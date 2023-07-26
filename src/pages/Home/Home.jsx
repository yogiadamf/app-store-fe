import React from "react";
import { motion } from "framer-motion";
import { IconStarFilled } from "@tabler/icons-react";
import Content from "../../components/navigation/Content";
import DocumentTitle from "../../hooks/DocumentTitle";
import TopList from "../../components/TopList";
import Carousel from "../../components/Carousel";

import "./Home.css";

const Home = () => {
  DocumentTitle("Home");
  const dataImage = [    
    {
      id: "image-1",
      title: "EA FC 2024",
      subtitle: "New game pass xbox 1",
      pathURL:
        "https://prod.assets.earlygamecdn.com/images/EA-FC-24-Beta.jpg?mtime=1688119906",
    },
    {
      id: "image-2",
      title: "Game pass 2",
      subtitle: "New game pass xbox 2",
      pathURL: "https://wallpapercave.com/wp/wp8830740.jpg",
    },
    {
      id: "image-3",
      title: "Game pass 3",
      subtitle: "New game pass xbox 3",
      pathURL: "https://ffa.hr/wp-content/uploads/2020/10/game-pass.jpg",
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
      </div>
    </Content>
  );
};

export default Home;
