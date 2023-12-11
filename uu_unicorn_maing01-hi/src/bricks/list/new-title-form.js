//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, Lsi } from "uu5g05";
import { Form, FormText, SubmitButton, CancelButton } from "uu5g05-forms";
import Config from "./config/config.js";
//@@viewOff:imports

const NewTitleForm = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "NewTitleForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSubmit: () => {},
    onCancel: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);

    return (
      <Form {...elementProps} onSubmit={props.onSubmit}>
        <FormText name="name" label={<Lsi lsi={{ cs: "Jméno nového listu", en: "New list title" }} />} required />
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", paddingTop: 8 }}>
          <CancelButton onClick={props.onCancel}>
            {" "}
            <Lsi lsi={{ cs: "Zrušit", en: "Cancel" }} />
          </CancelButton>
          <SubmitButton>
            <Lsi lsi={{ cs: "Změň název", en: "Change title" }} />
          </SubmitButton>
        </div>
      </Form>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { NewTitleForm };
export default NewTitleForm;
//@@viewOff:exports
