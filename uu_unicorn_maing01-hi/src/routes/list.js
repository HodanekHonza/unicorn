//@@viewOn:imports

import { createVisualComponent } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";
import ListView from "../bricks/list/list-view.js";
import { useThemeContext } from "../bricks/theme-mode/theme-context.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css

const Css = {
  screen: () =>
    Config.Css.css({
      backgroundColor: "black",
      height: "80vh",
    }),
};

//@@viewOff:cs
let List = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "List",
  //@@viewOff:statics
  render() {
    const [isDark] = useThemeContext();
    //@@viewOn:render
    return (
      <>
        <RouteBar />
        <div
          style={isDark ? { backgroundColor: "black", height: "80vh" } : { backgroundColor: "white", height: "80vh" }}
        >
          <ListView />
        </div>
      </>
    );
    //@@viewOff:render
  },
});

List = withRoute(List, { authenticated: true });

//@@viewOn:exports
export { List };
export default List;
//@@viewOff:exports
