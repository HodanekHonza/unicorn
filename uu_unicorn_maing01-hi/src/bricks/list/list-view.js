//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, useRoute, useMemo, Lsi } from "uu5g05";
import { useAlertBus } from "uu5g05-elements";
import Tile from "./tile";
import ResolvedTile from "./resolved-tile";
import UserListView from "./user-list-view.js";
import Config from "./config/config.js";
import { useJokes } from "../list-context.js";
import { useThemeContext } from "../theme-mode/theme-context.js";
import CreateUserView from "./create-user-view.js";
import NewTitleView from "./new-title-view.js";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  listViewContainer: () =>
    Config.Css.css({
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    }),

  listViewTile: () =>
    Config.Css.css({
      width: 1200,
      margin: "24px",
      "@media (max-width: 1200px)": {
        width: 1000,
      },
      "@media (max-width: 950px)": {
        width: 650,
      },
      "@media (max-width: 740px)": {
        width: 500,
      },
      "@media (max-width: 600px)": {
        width: 400,
      },
      "@media (max-width: 468px)": {
        width: 300,
      },
      "@media (max-width: 368px)": {
        width: 200,
      },
    }),

  memberList: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      "@media (max-width: 768px)": {
        flexDirection: "column",
      },
    }),
  titleChangeTitleContainer: () =>
    Config.Css.css({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
      "@media (max-width: 768px)": {
        flexDirection: "column",
        gap: "0px",
      },
    }),
  Container: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
    }),
};

//@@viewOff:css

const ListView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListView",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    shoppingList: [],
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private

    const { jokeDataList, isUserOwner } = useJokes();
    const [route] = useRoute();
    const [isDark] = useThemeContext();

    const detailId = route.params.id;

    const shoppingListDetail = useMemo(() => {
      return jokeDataList.data?.find((shoppingList) => {
        return shoppingList.data.id === detailId;
      });
    }, [jokeDataList, detailId]);

    const { addAlert } = useAlertBus();

    function showError(error, header = "") {
      addAlert({
        header,
        message: error.message,
        priority: "error",
      });
    }

    function handleDelete(event) {
      // const item = event.data;

      try {
        jokeDataList.handlerMap.deleteItem();
        addAlert({
          message: `The joke ${"..."} has been deleted.`,
          priority: "success",
          durationMs: 2000,
        });
      } catch (error) {
        ListView.logger.error("Error deleting list", error);
        showError(error, "List delete failed!");
      }
    }

    function handleUpdate(event) {
      const id = event;

      try {
        jokeDataList.handlerMap.resolveItem();
        addAlert({
          message: `The item ${"dd"} has been resolved.`,
          priority: "success",
          durationMs: 2000,
        });
      } catch (error) {
        ListView.logger.error("Error resolving item", error);
        showError(error, "Item resolve failed!");
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);

    return (
      <div {...attrs} className={Css.Container()}>
        <div
          className={Css.listViewContainer()}
          style={isDark ? { backgroundColor: "black" } : { backgroundColor: "white" }}
        >
          <div>
            <div className={Css.titleChangeTitleContainer()}>
              <h1 style={isDark ? { color: "white" } : { color: "black" }}>{shoppingListDetail.data.name}</h1>
              {isUserOwner(detailId) && <NewTitleView />}
            </div>
            <div className={Css.memberList()}>
              <h2 style={isDark ? { color: "white" } : { color: "black" }}>
                <Lsi lsi={{ cs: "Seznam uživetelů", en: "Member list" }} />{" "}
              </h2>
              <UserListView shoppingList={shoppingListDetail.data} isDark={isDark} />
              {isUserOwner(detailId) && <CreateUserView />}
            </div>
          </div>
          <div>
            {shoppingListDetail.data.shoppingListItems?.map((item) => {
              return (
                <Tile
                  style={isDark ? { backgroundColor: "black" } : { backgroundColor: "white" }}
                  isDark={isDark}
                  key={item.id}
                  item={item}
                  className={Css.listViewTile()}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListView as ListView };
export default ListView;
//@@viewOff:exports
