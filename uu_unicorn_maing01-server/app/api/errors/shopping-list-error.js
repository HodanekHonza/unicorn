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
  UserNotAuthorized: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },
  ListDoesNotExist: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}ListDoesNotExist`;
      this.message = "List does not exist";
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
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/delete/`,

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
  ListDoesNotExist: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteList.UC_CODE}listDoesNotExist`;
      this.message = "The list to be deleted does not exist.";
    }
  },

  UserNotAuthorized: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteList.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },
};

const UpdateListName = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/name/update/`,

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
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/archived/update/`,

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
  UserNotAuthorized: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ArchiveList.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },
};

const CreateItem = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/item/create/`,

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
  UserNotAuthorized: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CreateItem.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },
};

const DeleteItem = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/item/delete/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteItem.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  ItemDoesNotExist: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteItem.UC_CODE}itemDoesNotExist`;
      this.message = "The item to be deleted does not exist.";
    }
  },

  UserNotAuthorized: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteItem.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },
};

const ResolveItem = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/item/resolved/update/`,

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
  UserNotAuthorized: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ResolveItem.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },
};

const CreateAuthorizedUser = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/authorizedUsers/create/`,

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
  UserNotAuthorized: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CreateAuthorizedUser.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },
};

const DeleteAuthorizedUser = {
  UC_CODE: `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppingList/singleList/authorizedUsers/delete/`,

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
  UserNotAuthorized: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${DeleteAuthorizedUser.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },
};

module.exports = {
  List,
  CreateList,
  DeleteList,
  UpdateListName,
  ArchiveList,
  CreateItem,
  DeleteItem,
  ResolveItem,
  CreateAuthorizedUser,
  DeleteAuthorizedUser,
};
