"use strict";
const ShoppingListMainUseCaseError = require("./unicorn-main-use-case-error.js");

const List = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/list/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoListFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}shoppingListDaoListFailed`;
      this.message = "Failed to list shopping lists.";
    }
  },
};

const ListItem = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/:id/item/list/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListItem.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoListItemFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListItem.UC_CODE}shoppingListDaoListItemFailed`;
      this.message = "Failed to list items of the shopping list.";
    }
  },
};

const CreateList = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/create/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CreateList.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoCreateListFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CreateList.UC_CODE}shoppingListDaoCreateListFailed`;
      this.message = "Failed to create the shopping list.";
    }
  },
};

const DeleteList = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/:id/delete/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteList.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoDeleteFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteList.UC_CODE}shoppingListDaoDeleteFailed`;
      this.message = "Failed to delete the shopping list.";
    }
  },
};

const UpdateListName = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/:id/name/update/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateListName.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoUpdateNameFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateListName.UC_CODE}shoppingListDaoUpdateNameFailed`;
      this.message = "Failed to update the shopping list name.";
    }
  },
  UserNotAuthorized: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${UpdateListName.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },
};

const ArchiveList = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/:id/archived/update/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ArchiveList.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoArchiveFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ArchiveList.UC_CODE}shoppingListDaoArchiveFailed`;
      this.message = "Failed to archive the shopping list.";
    }
  },
};

const ListArchived = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/archived/list/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListArchived.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoListArchivedFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListArchived.UC_CODE}shoppingListDaoListArchivedFailed`;
      this.message = "Failed to list archived shopping lists.";
    }
  },
};

const CreateItem = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/:id/item/create/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CreateItem.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoCreateItemFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CreateItem.UC_CODE}shoppingListDaoCreateItemFailed`;
      this.message = "Failed to create an item in the shopping list.";
    }
  },
};

const DeleteItem = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/:id/item/:id/delete/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteItem.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoDeleteItemFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteItem.UC_CODE}shoppingListDaoDeleteItemFailed`;
      this.message = "Failed to delete the item from the shopping list.";
    }
  },
};

const ResolveItem = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/:id/item/:id/resolved/update/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ResolveItem.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoResolveItemFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ResolveItem.UC_CODE}shoppingListDaoResolveItemFailed`;
      this.message = "Failed to update the item status to resolved.";
    }
  },
};

const ListResolvedItems = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/:id/resolved/list/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListResolvedItems.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoListResolvedItemsFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListResolvedItems.UC_CODE}shoppingListDaoListResolvedItemsFailed`;
      this.message = "Failed to list resolved items of the shopping list.";
    }
  },
};

const ListAuthorizedUsers = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/:id/authorizedUsers/list/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListAuthorizedUsers.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoListAuthorizedUsersFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListAuthorizedUsers.UC_CODE}shoppingListDaoListAuthorizedUsersFailed`;
      this.message = "Failed to list authorized users of the shopping list.";
    }
  },
};

const CreateAuthorizedUser = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/:id/authorizedUsers/create/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CreateAuthorizedUser.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoCreateAuthorizedUserFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CreateAuthorizedUser.UC_CODE}shoppingListDaoCreateAuthorizedUserFailed`;
      this.message = "Failed to create an authorized user for the shopping list.";
    }
  },
};

const DeleteAuthorizedUser = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/:id/authorizedUsers/:id/delete/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteAuthorizedUser.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoDeleteAuthorizedUserFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteAuthorizedUser.UC_CODE}shoppingListDaoDeleteAuthorizedUserFailed`;
      this.message = "Failed to delete the authorized user from the shopping list.";
    }
  },
};

const DeleteSelfFromAuthorizedUsers = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/:id/authorizedUsers/:myID/delete/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteSelfFromAuthorizedUsers.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ShoppingListDaoDeleteSelfFromAuthorizedUsersFailed: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteSelfFromAuthorizedUsers.UC_CODE}shoppingListDaoDeleteSelfFromAuthorizedUsersFailed`;
      this.message = "Failed to remove self from the authorized users of the shopping list.";
    }
  },
};

module.exports = {
  List,
  ListItem,
  CreateList,
  DeleteList,
  UpdateListName,
  ArchiveList,
  ListArchived,
  CreateItem,
  DeleteItem,
  ResolveItem,
  ListResolvedItems,
  ListAuthorizedUsers,
  CreateAuthorizedUser,
  DeleteAuthorizedUser,
  DeleteSelfFromAuthorizedUsers,
};
