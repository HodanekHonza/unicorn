//@@viewOn:imports
import { createVisualComponent, Utils, Content, Lsi } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import RouteBar from "../core/route-bar.js";
import Config from "./config/config.js";
import { useJokes } from "../bricks/list-context.js";
import { useThemeContext } from "../bricks/theme-mode/theme-context.js";
import ListsView from "../bricks/lists/lists-view.js";
import CreateListView from "../bricks/lists/create-list-view.js";
import { Button } from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css`
  padding: 16px;
  max-width: 1200px;
  margin: auto;

  .create-list-view {
    display: flex;
    flex-direction: row; // Corrected property name
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom: 24px;
    padding: 16px;
    border-bottom: 1px solid #ccc;
  }

  @media (max-width: 768px) {
    .create-list-view {
      flex-direction: column; // Changed to column for smaller screens
      background-color: ""; // Corrected property name, you can specify a color if needed
    }
  }

  .lists-view {
    margin-top: px; // Ensure you specify a valid value here
  }
`,
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Lists = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Lists",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    const { jokeDataList, remove, update } = useJokes();
    const [isDark, setIsDark] = useThemeContext();
    //console.log(currentListId);
    return (
      <>
        <RouteBar />
        <div className={Css.main()} style={isDark ? { backgroundColor: "black" } : { backgroundColor: "white" }}>
          <div className="create-list-view" >
            <h1 style={isDark ? { color: "white" } : { color: "black" }}>
              <Lsi lsi={{ cs: "Seznam listů", en: "Lists" }} />{" "}
            </h1>
            <CreateListView onCreate={jokeDataList.handlerMap.create} />
            <Button onClick={() => setIsDark()}>
              {isDark ? (
                <Lsi lsi={{ cs: "Světlý režim", en: "Light Mode" }} />
              ) : (
                <Lsi lsi={{ cs: "Tmavý režim", en: "Dark Mode" }} />
              )}
            </Button>
          </div>
          <div className="lists-view">
            <ListsView />
          </div>
        </div>
      </>
    );
    //@@viewOff:render
  },
});

Lists = withRoute(Lists, { authenticated: true });

//@@viewOn:exports
export { Lists };
export default Lists;
//@@viewOff:exports
