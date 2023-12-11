//@@viewOn:imports
import { createVisualComponent, Utils, useRoute } from "uu5g05";
import { Box, Text, Button } from "uu5g05-elements";
import Config from "./config/config.js";
import { useJokes } from "../list-context.js";
//@@viewOff:imports

const UserTile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "UserTile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { isUserOwner } = useJokes();
    const [route] = useRoute();
    const detailId = route.params.id;
    function handleDelete(event) {
      props.onDelete(new Utils.Event(props.joke, event));
    }

    //@@viewOff:private

    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);

    const boxStyle = {
      border: props.isDark ? "1px solid white" : "1px solid black",
      width: 200,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: props.isDark ? "black" : "white",
    };
    const textStyle = {
      color: props.isDark ? "white" : "black",
    };

    return (
      <Box {...elementProps} style={boxStyle} key={props?.joke?.userID}>
        <Text style={textStyle} category="interface" segment="title" type="minor" colorScheme="building">
          {props?.joke?.userName}
        </Text>
        {isUserOwner(detailId) && (
          <Button icon="mdi-delete" onClick={handleDelete} significance="subdued" tooltip="Delete" />
        )}
      </Box>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { UserTile };
export default UserTile;
//@@viewOff:exports
