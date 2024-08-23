import { tabsData } from "./tabsData";
import "./Tabs.css";

const Tabs = () => {
  return (
    <>
      <div className="tabs-container">
        <ul>
          {tabsData.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
        <div className="content">
          {tabsData.map((item, index) => (
            <div key={index} className={`desc ${index === 0? "active" : ""}`}>
              {item.description}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabs;
