//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, useRoute, useEffect } from "uu5g05";
import { Box, Text, Line, Button, DateTime } from "uu5g05-elements";
import Config from "./config/config.js";
import { useJokes } from "../list-context.js";
import { useThemeContext } from "../theme-mode/theme-context.js";
//@@viewOff:imports
//test commit to main

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
    const [route, setRoute] = useRoute();
    const [isDark] = useThemeContext();
    const { isUserOwner } = useJokes();

    //@@viewOn:private
    function handleDelete(event) {
      props.onDelete(new Utils.Event(props.list, event));
    }

    function handleUpdate(event) {
      props.onUpdate(new Utils.Event(props.list, event));
    }

    //@@viewOff:private

    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);

     // Styles for Box and Text adjusted for dark mode
     const boxOuterStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 100,
      backgroundColor: isDark ? "black" : "white", // Dark mode background color for outer box
    };

    const boxInnerStyle = {
      padding: "20px",
      width: 800,
      backgroundColor: isDark ? "#333" : "#fff", // Dark mode background color for inner box
    };

    const textStyle = {
      marginLeft: 50,
      fontWeight: "bold",
      color: isDark ? "#fff" : "#000", // Dark mode text color
    };

    return (
      <Box {...elementProps} style={boxOuterStyle}>
        <Box style={boxInnerStyle} onClick={() => setRoute("list", { id: props.list.data?.id })}>
          <Text
            category="interface"
            segment="title"
            type="minor"
            colorScheme="building"
            style={textStyle}
          >
            {props.list.data?.name}
          </Text>
        </Box>

        {isUserOwner(props.list?.data?.id) && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 100,
              borderRadius: "90px",
            }}
          >
            <Button icon="mdi-update" onClick={handleUpdate} significance="subdued" tooltip="Archive" />
            <Button icon="mdi-delete" onClick={handleDelete} significance="subdued" tooltip="Delete" />
          </div>
        )}
      </Box>
    );
  },
});

//@@viewOn:exports
export { ListsTile as Tile };
export default ListsTile;
//@@viewOff:exports
