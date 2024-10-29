import { backData } from "../../data/data_from_back";
import Item from "./Item";

function LostItems() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1F1F1F",
      }}
    >
      {backData.map((item) => (
        <Item
          title={item.title}
          image={item.image}
          date={item.date}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default LostItems;
