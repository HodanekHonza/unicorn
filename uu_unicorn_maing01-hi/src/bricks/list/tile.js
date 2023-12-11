//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils } from "uu5g05";
import { Box, Text, Button } from "uu5g05-elements";
import Config from "./config/config.js";

//@@viewOff:imports

const Tile = createVisualComponent({
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
    //@@viewOn:private

    function handleDelete(event) {
      props.onDelete(new Utils.Event(props.joke, event));
    }

    function handleUpdate(event) {
      props.onUpdate(new Utils.Event(props.joke, event));
    }

    //@@viewOff:private

    //@@viewOn:render
    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);
    const tileStyle = {
      border: "1px solid #ccc", 
      padding: "10px", 
      margin: "10px", 
      backgroundColor: props.isDark ? "black" : "white",
    };

    const boxStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      border: props.isDark ? "1px solid white" : "1px solid black", 
      marginLeft: 50,
      color: props.isDark ? "white" : "black",
 
    };

    const textStyle = {
      color: props.isDark ? "white" : "black",
      marginLeft: 50,
    };

    return (
      <Box {...elementProps} style={tileStyle}>
        <div style={boxStyle}>
          <Text category="interface" segment="title" type="minor" colorScheme="building" style={textStyle}>
            {props.item.itemName}
          </Text>
          <div>
            <Button icon="mdi-update" onClick={handleUpdate} significance="subdued" tooltip="Resolve" />
            <Button icon="mdi-delete" onClick={handleDelete} significance="subdued" tooltip="Delete" />
          </div>
        </div>
      </Box>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Tile };
export default Tile;
//@@viewOff:exports
