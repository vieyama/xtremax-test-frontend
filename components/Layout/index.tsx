/* eslint-disable react/no-unescaped-entities */
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import Image from "next/image";
import React, { useState } from "react";

interface LayoutInterface {
  children: React.ReactNode;
}

const IconDisplay = ({
  imageName,
  title,
  isActive,
}: {
  imageName: string;
  title: string;
  isActive: boolean;
}) => {
  return (
    <div className={`icon-wrapper ${isActive ? "active" : ""}`}>
      <Image
        src={`/assets/images/${imageName}`}
        alt=""
        width={45}
        height={45}
      />
      <div className="icon-title">{title}</div>
    </div>
  );
};

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  const [displayDetail, setDisplayDetail] = useState(true);

  const iconArray = [
    { imageName: "globe.svg", isActive: true, title: "Browse" },
    {
      imageName: "suggestion.svg",
      isActive: false,
      title: "Suggestion Attraction",
    },
    { imageName: "videos.svg", isActive: false, title: "Videos" },
    { imageName: "blog.svg", isActive: false, title: "Blog" },
    { imageName: "about.svg", isActive: false, title: "About" },
  ];

  const handleClose = () => setDisplayDetail(false);
  return (
    <div className="layout-container">
      <div className="sidebar">
        <div className="icon-container">
          {iconArray.map((item, key) => (
            <IconDisplay
              key={key}
              imageName={item.imageName}
              title={item.title}
              isActive={item.isActive}
            />
          ))}
        </div>
        <div className="sidebar-menu">
          <div className="filter-string">
            Filter by favorite
            <CaretDownOutlined style={{ color: "#a9abaf" }} />
          </div>
          <div className="menu-string">
            <ul>
              <li
                className={`${displayDetail ? "active" : ""}`}
                onClick={() => setDisplayDetail(!displayDetail)}
              >
                Merlion
              </li>
              <li>
                Marina Bay Sands{" "}
                <CaretUpOutlined style={{ color: "#a9abaf" }} />
              </li>
              <ul className="parent-menu">
                <li>artScience Museum</li>
                <li>Marina Bay Sands Skypark</li>
                <li>Double Helix Bridge</li>
              </ul>
              <li>
                Garden by the Bay{" "}
                <CaretDownOutlined style={{ color: "#a9abaf" }} />
              </li>
              <li>
                China Town <CaretDownOutlined style={{ color: "#a9abaf" }} />
              </li>
              <li>Asia Civilisations Museum</li>
              <li>Clarke Quay</li>
              <li>Fort Canning Park</li>
              <li>Singapore Flyer</li>
              <li>Orchard Road</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <h1>TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE</h1>
          <div className="btn-menu-wrapper">
            <Image
              src="/assets/images/set.svg"
              alt=""
              width={45}
              height={45}
              style={{ cursor: "pointer" }}
            />
            <Image
              src="/assets/images/quest.svg"
              alt=""
              width={45}
              height={45}
              style={{ cursor: "pointer" }}
            />
            <Image
              src="/assets/images/close.svg"
              alt=""
              width={45}
              height={45}
              style={{ cursor: "pointer" }}
              onClick={handleClose}
            />
          </div>
        </div>
        {displayDetail && (
          <div className="overlay-detail">
            <div className="img-header"></div>
            <div className="description-wrapper">
              <h2 className="title">Merliion</h2>
              <div className="description">
                The Merlion is the national personification of Singapore.
                <br />
                <br />
                Its name combines "mer" meaning the sea and "lion". The fish
                body represents Singapore's origin as a fishing village when it
                was called Temasek, which means "sea town" in Javanese. The lion
                head represents Singapore's original name—Singapura—meaning
                "lion city" or "kota singa".
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="overlay-footer-wrarpper">
                  <Image
                    src="/assets/images/pointing.svg"
                    alt=""
                    width={35}
                    height={31}
                    style={{ marginRight: 7 }}
                  />
                  <span style={{ marginLeft: 10 }}>
                    10 Bayfront Avenue, Singapore
                  </span>
                </div>
                <div className="overlay-footer-wrarpper">
                  <Image
                    src="/assets/images/globe.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                  <span style={{ marginLeft: 20 }}>
                    http://www.marinabaysands.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Layout;
