import { tabsData } from "./tabsData";
import { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const clickHandler = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <div className="tabs-container">
        <ul>
          {tabsData.map((item, index) => (
            <li
              className={index === activeTab ? "active" : ""}
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
              className={`desc ${index === activeTab ? "active" : ""}`}
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
