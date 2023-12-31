//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, useState, Lsi } from "uu5g05";
import { Button, useAlertBus } from "uu5g05-elements";
import CreateUserForm from "./create-user-form.js";
import Config from "./config/config.js";
import { useJokes } from "../list-context.js";
//@@viewOff:imports

//@@viewOn:constants
const Mode = {
  BUTTON: "BUTTON",
  FORM: "FORM",
};
//@@viewOff:constants

//@@viewOn:helpers
function CreateUserButton(props) {
  return (
    <Button {...props} colorScheme="primary" significance="highlighted">
      <Lsi lsi={{ cs: "Přidej uživatele", en: "Add user" }} />
    </Button>
  );
}
//@@viewOff:helpers

const CreateUserView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CreateUserView",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onCreate: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onCreate: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { addAlert } = useAlertBus();
    const { jokeDataList } = useJokes();
    const [mode, setMode] = useState(Mode.BUTTON);

    function handleSubmit(event) {
      try {
        jokeDataList.handlerMap.createUser();
      } catch (error) {
        // We pass Error.Message instance to the Uu5Forms.Form that shows alert
        throw new Utils.Error.Message("User create failed!", error);
      }

      addAlert({
        message: `User ${event.data.value.name} has been created.`,
        priority: "success",
        durationMs: 2000,
      });

      setMode(Mode.BUTTON);
    }
    //@@viewOff:private

    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);

    switch (mode) {
      case Mode.BUTTON:
        return <CreateUserButton {...elementProps} onClick={() => setMode(Mode.FORM)} />;
      default:
        return <CreateUserForm {...elementProps} onSubmit={handleSubmit} onCancel={() => setMode(Mode.BUTTON)} />;
    }
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { CreateUserView };
export default CreateUserView;
//@@viewOff:exports
