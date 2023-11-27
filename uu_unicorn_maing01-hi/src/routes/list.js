//@@viewOn:imports
import { Environment } from "uu5g05";
import { createVisualComponent } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import { Button } from "uu5g05-elements";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";
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
    // const {
    //   lists,
    //   currentListId,
    //   createUser,
    //   selectList,
    //   create,
    //   update,
    //   remove,
    //   createItem,
    //   updateItem,
    //   removeItem,
    //   changeListName,
    //   removeUser,
    //   showResolved,
    //   setShowResolved,
    //   getSelectedListWithUnresolvedItems,
    //   getSelectedListWithResolvedItems,
    //   isUserOwner,
    // } = useJokes();
    // const unresolvedItemsList = getSelectedListWithUnresolvedItems();
    // const resolvedItemsList = getSelectedListWithResolvedItems();
    //  const isOwner = isUserOwner(currentListId); 
    // const currentList = lists.find((list) => list.id === currentListId) || {};

    const { jokeDataList } = useJokes();
    console.log(jokeDataList.data);
    //@@viewOn:render
    return (
      <>
        <RouteBar />
        <div className={Css.screen()}>
          <div className={Css.userListContainer()}>
            <h1>USER LIST</h1>
            {/* {isOwner && <CreateUserView onCreate={createUser} style={{ maxWidth: 400, display: "block" }} />}
            <UserListView shoppingList={currentList} onDelete={removeUser} /> */}
          </div>
          <div className={Css.icon()}>
            {/* <h1>{currentList.listName}</h1> */}
            <div className={Css.ListButtons()}>
              {jokeDataList.data &&
                jokeDataList.data
                  .filter((item) => item && item.data) // Filter out null or undefined items
                  .map((item) => (
                    <div key={item.data.id}>
                      {" "}
                      {/* Use the id from data for the key */}
                      <p>Name: {item.data.name}</p>
                      <p>Text: {item.data.text || "No text"}</p>
                      {/* More fields can be added similarly */}
                    </div>
                  ))}
              {/* <NewTitleView changeListName={changeListName} style={{ maxWidth: 400, display: "block" }} />
              <CreateView currentID={currentListId} onCreate={createItem} style={{ maxWidth: 400, display: "block" }} />
              <Button onClick={() => setShowResolved(!showResolved)}>
                {showResolved ? "Show Unresolved" : "Show Resolved"}
              </Button> */}
            </div>
            {/* <ListView
              id={currentListId}
              shoppingList={unresolvedItemsList || {}}
              showResolved={showResolved}
              resolvedItems={resolvedItemsList || []}
              onDelete={removeItem}
              onUpdate={updateItem}
              
            /> */}
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
