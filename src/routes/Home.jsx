import ChoiceButton from "../components/ChoiceButton";

function Home() {
  const choices = {
    found: {
      title: "You have found the item",
      content:
        "You just need to upload a photo of the object and AI will work out the rest!",
      path: "/found",
    },
    lost: {
      title: "You have lost the item",
      content:
        "You just need to describe your belonging and AI will try to find it from our database!",
      path: "/lost",
    },
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        backgroundColor: "#2A2A2A",
        height: "94.75vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ChoiceButton
        title={choices.found.title}
        content={choices.found.content}
        path={choices.found.path}
      />
      <ChoiceButton
        title={choices.lost.title}
        content={choices.lost.content}
        path={choices.lost.path}
      />
    </div>
  );
}

export default Home;
