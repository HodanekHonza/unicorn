//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, useRoute } from "uu5g05";
import { Box, Text, Line, Button, DateTime } from "uu5g05-elements";
import Config from "./config/config.js";
import { useJokes } from "../list-context.js";
//@@viewOff:imports

const ListsTile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Tile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    const { isUserOwner } = useJokes();
    const [route, setRoute] = useRoute();
    //@@viewOn:private
    function handleDelete(event) {
      props.onDelete(new Utils.Event(props.list, event));
    }

    function handleUpdate(event) {
      props.onUpdate(new Utils.Event(props.list, event));
    }

    function handleSelect() {
      props.selectList(props.list.id);
      setRoute("list");
      // Call the context function to select the list
    };


    //@@viewOff:private

    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);

    return (
      <Box {...elementProps}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 100,
          }}
        >
          <Box onClick={() => handleSelect()} style={{ padding: "20px", width: 500}}>
            <Text category="interface" segment="title" type="minor" colorScheme="building" style={{ marginLeft: 50 }}>
              {props.list.listName}
            </Text>
          </Box>
          <Box significance="distinct">
            {isUserOwner(props.list?.id) && !props.isArchived && (
              <Box significance="distinct">
                <Button icon="mdi-update" onClick={handleUpdate} significance="subdued" tooltip="Archive" />
                <Button icon="mdi-delete" onClick={handleDelete} significance="subdued" tooltip="Delete" />
              </Box>
            )}
          </Box>
        </div>
      </Box>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListsTile as Tile };
export default ListsTile;
//@@viewOff:exports
