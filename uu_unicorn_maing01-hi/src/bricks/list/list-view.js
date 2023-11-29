//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, useRoute, useMemo } from "uu5g05";
import { useAlertBus } from "uu5g05-elements";
import Tile from "./tile";
import ResolvedTile from "./resolved-tile";
import UserListView from "./user-list-view.js";
import Config from "./config/config.js";
import { useJokes } from "../list-context.js";
import CreateUserView from "./create-user-view.js";
import NewTitleView from "./new-title-view.js";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  // ... (your existing styles)

  listViewContainer: () =>
    Config.Css.css({
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    }),

  listViewTile: () =>
    Config.Css.css({
      width: 800,
      margin: "24px",
      "@media (max-width: 1000px)": {
        width: 550, // Adjust as needed for smaller screens
      },
      "@media (max-width: 768px)": {
        width: 400, // Adjust as needed for smaller screens
      },
      // Add more media queries for different screen sizes if necessary
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
    const detailId = route.params.id;


 



    const shoppingListDetail = useMemo(() => {
      return jokeDataList.data?.find((shoppingList) => {
        return shoppingList.data.id === detailId;
      });
    }, [jokeDataList, detailId]);
       
    
    
   
      console.log(shoppingListDetail.data)
  

    const { addAlert } = useAlertBus();

    function showError(error, header = "") {
      addAlert({
        header,
        message: error.message,
        priority: "error",
      });
    }

    function handleDelete(event) {
      const item = event.data;

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
      <div {...attrs}>
                  <div>
            <h1>USER LIST</h1>
            {isUserOwner(detailId) && 
            <div>
                 <NewTitleView/>
            <CreateUserView />
            </div>
         
            }
            {/* {isOwner && <CreateUserView onCreate={createUser} style={{ maxWidth: 400, display: "block" }} />} */}
            <UserListView shoppingList={shoppingListDetail.data} />
          </div>
        <h2> {shoppingListDetail.data.name}</h2>
        {shoppingListDetail.data.shoppingListItems?.map((item) => {
          return (
            <Tile
             key={item.id}
              item={item}
              className={Css.listViewTile()}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          );
        })}
           
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListView as ListView };
export default ListView;
//@@viewOff:exports
