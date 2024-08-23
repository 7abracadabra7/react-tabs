import { tabsData } from "./tabsData";
import { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  let tabIndex = localStorage.getItem("index") || 0;
  const [activeTab, setActiveTab] = useState(tabIndex);

  const clickHandler = (id) => {
    setActiveTab(id);
    localStorage.setItem("index", id);
  };
  return (
    <>
      <div className="tabs-container">
        <ul>
          {tabsData.map((item, index) => (
            <li
              className={index == activeTab ? "active" : ""}
              key={index}
              onClick={() => clickHandler(index)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className="content">
          {tabsData.map((item, index) => (
            <div
              key={index}
              className={`desc ${index == activeTab ? "active" : ""}`}
            >
              {item.description}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabs;
