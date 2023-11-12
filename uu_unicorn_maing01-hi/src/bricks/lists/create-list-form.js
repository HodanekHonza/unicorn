//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils } from "uu5g05";
import { Form, FormText, SubmitButton, CancelButton } from "uu5g05-forms";
import Config from "./config/config.js";
//@@viewOff:imports

const CreateFormList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CreateFormList",
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
        <FormText name="name" label="Name of list" required />
        <FormText name="owner" label="Owner ID" required />
        <FormText name="ownerName" label="Owner Name" required />
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", paddingTop: 8 }}>
          <CancelButton onClick={props.onCancel}>Cancel</CancelButton>
          <SubmitButton>Create List</SubmitButton>
        </div>
      </Form>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { CreateFormList };
export default CreateFormList;
//@@viewOff:exports
