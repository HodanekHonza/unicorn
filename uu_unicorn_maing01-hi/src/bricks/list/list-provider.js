//@@viewOn:imports
import { useEffect } from "uu5g05";
import { createComponent, Utils, useState, useSession } from "uu5g05";
import Config from "./config/config";
import Context from "../list-context";
//@@viewOff:imports

const initialLists = [
  {
    id: "12345121216",
    listName: "John list",
    archived: false,
    owner: "5783-7035-899-0000",
    userList: [
      { id: Utils.String.generateId(), name: "John" },
      { id: Utils.String.generateId(), name: "Jacob" },
      { id: Utils.String.generateId(), name: "Daniel" },
    ],
    singleShoppingList: [
      {
        id: Utils.String.generateId(),
        name: "Banana",
        resolved: false,
      },
      {
        id: Utils.String.generateId(),
        name: "Egg",
        resolved: true,
      },
      {
        id: Utils.String.generateId(),
        name: "Bread",
        resolved: true,
      },
    ],
  },
  {
    id: "123456111222",
    listName: "matheo list",
    archived: false,
    owner: "5783-7035-899-0000",
    userList: [
      { id: Utils.String.generateId(), name: "jimmy" },
      { id: Utils.String.generateId(), name: "neutron" },
      { id: Utils.String.generateId(), name: "bastl" },
    ],
    singleShoppingList: [
      {
        id: Utils.String.generateId(),
        name: "egg white",
        resolved: false,
      },
      {
        id: Utils.String.generateId(),
        name: "ham",
        resolved: true,
      },
      {
        id: Utils.String.generateId(),
        name: "Bread",
        resolved: true,
      },
    ],
  },
  {
    id: "12345612112121",
    listName: "jacobs list",
    archived: false,
    owner: "5783-7035-899-0000",
    userList: [
      { id: Utils.String.generateId(), name: "jimmy" },
      { id: Utils.String.generateId(), name: "neutron" },
      { id: Utils.String.generateId(), name: "bastl" },
    ],
    singleShoppingList: [
      {
        id: Utils.String.generateId(),
        name: "egg white",
        resolved: false,
      },
      {
        id: Utils.String.generateId(),
        name: "ham",
        resolved: true,
      },
      {
        id: Utils.String.generateId(),
        name: "Bread",
        resolved: true,
      },
    ],
  },
];

const ListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [lists, setLists] = useState(initialLists); // State to manage multiple lists
    const [currentListId, setCurrentListId] = useState(initialLists[0]?.id); // Initialize with the ID of the first list
    const [showResolved, setShowResolved] = useState(false);
    // Function to change the currently selected list
    function selectList(listId) {
      setCurrentListId(listId);
    }


        const { identity } = useSession();
    function isUserOwner(listId) {
      const list = lists.find((list) => list.id === listId);
      return identity?.uuIdentity === list?.owner;
    }

    // Function to get all archived lists
    function getArchivedLists() {
      return lists.filter((list) => list.archived === true);
    }

    // Function to get all active (not archived) lists
    function getActiveLists() {
      return lists.filter((list) => list.archived === false);
    }

    function getSelectedListWithUnresolvedItems() {
      const selectedList = lists.find((list) => list.id === currentListId);
      if (!selectedList) return null;

      return {
        ...selectedList,
        singleShoppingList: selectedList.singleShoppingList.filter((item) => !item.resolved),
      };
    }

    function getSelectedListWithResolvedItems() {
      const selectedList = lists.find((list) => list.id === currentListId);
      if (!selectedList) return null;

      return {
        ...selectedList,
        singleShoppingList: selectedList.singleShoppingList.filter((item) => item.resolved),
      };
    }

    // CRUD operations adapted for multiple lists:

    function create(listName, owner, ownerName) {
      const newList = {
        id: Utils.String.generateId(), 
        listName: listName, 
        archived: false, 
        userList: [{ id: owner, name: ownerName }], 
        singleShoppingList: [], 
        owner: owner,
      };

      setLists((prevLists) => [...prevLists, newList]);
    }

    function update(listId) {
      setLists((prevLists) => prevLists.map((list) => (list.id === listId ? { ...list, archived: true } : list)));
   
    }

    function remove(listId) {
      setLists((prevLists) => prevLists.filter((list) => list.id !== listId));
    }

    function createItem(listId, item) {
      setLists((prevLists) =>
        prevLists.map((list) =>
          list.id === listId
            ? { ...list, singleShoppingList: [...list.singleShoppingList, { ...item, id: Utils.String.generateId() }] }
            : list
        )
      );
    }

    function createUser(userName, userID) {
      setLists((prevLists) =>
        prevLists.map((list) => {
          if (list.id === currentListId) {
            const newUser = { id: userID, name: userName };
            return { ...list, userList: [...list.userList, newUser] };
          }
          return list;
        })
      );
    }
    function updateItem(listId, itemId) {
      setLists((prevLists) =>
        prevLists.map((list) =>
          list.id === listId
            ? {
                ...list,
                singleShoppingList: list.singleShoppingList.map((item) =>
                  item.id === itemId ? { ...item, resolved: true } : item
                ),
              }
            : list
        )
      );
    }

    function removeItem(listId, itemId) {
      setLists((prevLists) =>
        prevLists.map((list) =>
          list.id === listId
            ? {
                ...list,
                singleShoppingList: list.singleShoppingList.filter((item) => item.id !== itemId),
              }
            : list
        )
      );
    }

    // Function to change the name of the current list
    function changeListName(newName) {
      setLists((prevLists) =>
        prevLists.map((list) => (list.id === currentListId ? { ...list, listName: newName } : list))
      );
    }

    // Function to remove a user from the userList of the current list
    function removeUser(userId) {
      setLists((prevLists) =>
        prevLists.map((list) =>
          list.id === currentListId
            ? { ...list, userList: list.userList.filter((user) => user.id !== userId.id) }
            : list
        )
      );
    }

    //@@viewOff:private

    //@@viewOn:render
    const value = {
      lists,
      currentListId,
      selectList,
      create,
      update,
      remove,
      createItem,
      updateItem,
      removeItem,
      createUser,
      removeUser,
      changeListName,
      showResolved,
      setShowResolved,
      getSelectedListWithUnresolvedItems,
      getSelectedListWithResolvedItems,
      getArchivedLists,
      getActiveLists,
      isUserOwner,
    };

    return (
      <Context.Provider value={value}>
        {typeof props.children === "function" ? props.children(value) : props.children}
      </Context.Provider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListProvider };
export default ListProvider;
//@@viewOff:exports
