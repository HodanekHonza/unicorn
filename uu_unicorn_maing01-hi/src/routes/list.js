//@@viewOn:imports
import { createVisualComponent } from "uu5g05";
import { Button } from "uu5g05-elements";
import { withRoute } from "uu_plus4u5g02-app";
import { RouteController } from "uu_plus4u5g02-app";
import { useRoute } from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";
import ListProvider from "../bricks/list/list-provider.js";
import ListView from "../bricks/list/list-view.js";
import CreateView from "../bricks/list/create-view.js";
import CreateUserView from "../bricks/list/create-user-view.js";
import NewTitleView from "../bricks/list/new-title-view.js";
import UserListView from "../bricks/list/user-list-view.js";
import { useJokes } from "../bricks/list-context.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css

const Css = {
  icon: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 0,
    }),
  screen: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "column", // Change to column for smaller screens
      justifyContent: "space-around",
      "@media (min-width: 768px)": {
        flexDirection: "row", // Change back to row for larger screens
      },
    }),
  userListContainer: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 0, // Remove right margin for smaller screens
      gap: 10,
    }),
  ListButtons: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "column", // Change to column for smaller screens
      gap: 10,
      "@media (min-width: 768px)": {
        flexDirection: "row", // Change back to row for larger screens
      },
    }),
};

//@@viewOff:cs
let List = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "List",
  //@@viewOff:statics

  render() {
    const [route] = useRoute();

    const { lists, currentListId,createUser, selectList, create, update, remove, createItem, updateItem, removeItem, changeListName, removeUser } = useJokes();
        const currentList = lists.find((list) => list.id === currentListId) || {};
    //@@viewOn:render
    return (
      <>
        <RouteBar />
        <div className={Css.screen()}>
          <div className={Css.userListContainer()}>
            <h1>USER LIST</h1>
            <CreateUserView onCreate={createUser} style={{ maxWidth: 400, display: "block" }} />
            <UserListView shoppingList={currentList} onDelete={removeUser} />
          </div>
          <div className={Css.icon()}>
            <h1>{currentList.listName}</h1>
            <div className={Css.ListButtons()}>
              <NewTitleView changeListName={changeListName} style={{ maxWidth: 400, display: "block" }} />
              <CreateView currentID={currentListId} onCreate={createItem} style={{ maxWidth: 400, display: "block" }} />
              {/* <Button onClick={() => setShowResolved(!showResolved)}>
                {showResolved ? "Show Unresolved" : "Show Resolved"}
              </Button> */}
            </div>
            <ListView
              id={currentListId}
              shoppingList={currentList}
              // showResolved={showResolved}
              resolvedItems={currentList.resolvedShoppingLists || []}
              onDelete={removeItem}
              onUpdate={update}
            />
          </div>
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
