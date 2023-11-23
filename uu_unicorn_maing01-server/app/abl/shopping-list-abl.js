"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;

const Errors = require("../api/errors/shopping-list-error.js");
const Warnings = require("../api/warnings/joke-warning.js");

class ShoppingListAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("shopping-list");
  }

  async list(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListsListDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Errors.CreateList.InvalidDtoIn
    );

    // set visibility
    const visibility = authorizationResult.getAuthorizedProfiles().includes("Executives");

    // get uuIdentity information
    const uuIdentity = session.getIdentity().getUuIdentity();
    const uuIdentityName = session.getIdentity().getName();

    // save joke to uuObjectStore
    const list = await this.dao.list(awid);

    // prepare and return dtoOut
    const dtoOut = { list, awid, visibility, uuIdentity, uuIdentityName, uuAppErrorMap };
    return dtoOut;
  }

  async getList(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListGetDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Errors.List.InvalidDtoIn
    );

    // set visibility
    const visibility = authorizationResult.getAuthorizedProfiles().includes("Executives");
    const uuIdentity = session.getIdentity().getUuIdentity();
    const uuIdentityName = session.getIdentity().getName();

    try {
      let list = await this.dao.get(dtoIn.id);

      // Check if the user is authorized to view the list
      let isAuthorized = list.authorizedUsers.some((user) => user.userID === uuIdentity);
      if (!isAuthorized) {
        // Add authorization error to uuAppErrorMap
        throw new Errors.CreateList.InvalidDtoIn({ uuAppErrorMap });
      }

      const uuObject = {
        list,
        awid,
        visibility,
        uuIdentity,
        uuIdentityName,
      };
      return { uuObject, uuAppErrorMap };
    } catch (error) {
      // Handle database access errors
      uuAppErrorMap = { ...uuAppErrorMap, ...Errors.List.ShoppingListDaoGetFailed };
      return { uuAppErrorMap };
    }
  }

  async createList(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListCreateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.CreateList.InvalidDtoIn
    );

    // set visibility
    const visibility = authorizationResult.getAuthorizedProfiles().includes("Executives");

    // get uuIdentity information
    const uuIdentity = session.getIdentity().getUuIdentity();
    const uuIdentityName = session.getIdentity().getName();
    const now = new Date();
    // save joke to uuObjectStore
    const uuObject = {
      name: dtoIn.listName, // name of list set at creation
      ownerId: uuIdentity, // id of the owner
      awid: awid, //appWorkspaceId - unique code specified externally
      archived: false, // use for sorting, in order to sort whitch lists are archived and whitch not
      sys: {
        cts: now, //create timestamp
        mts: now, //modification timestamp
        rev: 0, //revision number
      },
      shoppingListItems: [
        //...
      ],
      authorizedUsers: [{ userID: uuIdentity }],
      awid,
      visibility,
      uuIdentity,
      uuIdentityName,
    };
    const list = await this.dao.create(uuObject);

    // prepare and return dtoOut
    const dtoOut = { ...list, uuAppErrorMap };
    return dtoOut;
  }

  async deleteList(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListDeleteDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.CreateList.InvalidDtoIn
    );

    // set visibility
    const visibility = authorizationResult.getAuthorizedProfiles().includes("Executives");

    // get uuIdentity information
    const uuIdentity = session.getIdentity().getUuIdentity();
    const uuIdentityName = session.getIdentity().getName();

    const list = await this.dao.delete(dtoIn.listId);

    // prepare and return dtoOut
    const dtoOut = { list, visibility, uuAppErrorMap };
    return dtoOut;
  }

  async updateListName(dtoIn, session) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListUpdateNameDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.CreateList.InvalidDtoIn
    );

    // set visibility
    const uuIdentity = session.getIdentity().getUuIdentity();

    let list = await this.dao.get(dtoIn.listId);

    // Check if the user is authorized to view the list
    let isAuthorized = list.ownerId === uuIdentity;
    if (!isAuthorized) {
      // Add authorization error to uuAppErrorMap
      throw new Errors.UpdateListName.UserNotAuthorized({ uuAppErrorMap });
    }
    // Updating the list name
    list.name = dtoIn.newName;
    const now = new Date();
    list.sys.mts = now; // Update the modification timestamp

    // Save the updated list back to the database
    let updatedList = await this.dao.update(list);

    return { list: updatedList, uuAppErrorMap };
  }

  async archiveList(dtoIn, session) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListArchiveDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.CreateList.InvalidDtoIn
    );

    // set visibility
    const uuIdentity = session.getIdentity().getUuIdentity();

    let list = await this.dao.get(dtoIn.listId);

    // Check if the user is authorized to view the list
    let isAuthorized = list.ownerId === uuIdentity;
    if (!isAuthorized) {
      // Add authorization error to uuAppErrorMap
      throw new Errors.UpdateListName.UserNotAuthorized({ uuAppErrorMap });
    }
    // Updating the list name
    list.archived = true;
    const now = new Date();
    list.sys.mts = now; // Update the modification timestamp

    // Save the updated list back to the database
    let updatedList = await this.dao.update(list);

    return { list: updatedList, uuAppErrorMap };
  }

  async createItem(dtoIn, session) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListItemCreateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.CreateList.InvalidDtoIn
    );

    // set visibility
    const uuIdentity = session.getIdentity().getUuIdentity();

    let list = await this.dao.get(dtoIn.listId);

    // Check if the user is authorized to view the list
    let isAuthorized = list.authorizedUsers.some((user) => user.userID === uuIdentity);
    if (!isAuthorized) {
      // Add authorization error to uuAppErrorMap
      throw new Errors.UpdateListName.UserNotAuthorized({ uuAppErrorMap });
    }

    list.shoppingListItems.push({
      itemId: "4",
      itemName: dtoIn.itemName,
      resolved: false,
    });

    // Save the updated list back to the database
    let updatedList = await this.dao.update(list);

    return { list: updatedList, uuAppErrorMap };
  }

  async deleteItem(dtoIn, session) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListItemDeleteDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.CreateList.InvalidDtoIn
    );

    // set visibility
    const uuIdentity = session.getIdentity().getUuIdentity();

    let list = await this.dao.get(dtoIn.listId);

    // Check if the user is authorized to view the list
    let isAuthorized = list.authorizedUsers.some((user) => user.userID === uuIdentity);
    if (!isAuthorized) {
      // Add authorization error to uuAppErrorMap
      throw new Errors.UpdateListName.UserNotAuthorized({ uuAppErrorMap });
    }

 list.shoppingListItems = list.shoppingListItems.filter((item) => item.itemId !== dtoIn.itemId);

    let updatedList = await this.dao.update(list);

    return { list: updatedList, uuAppErrorMap };
  }

  async resolveItem(awid, dtoIn, session, authorizationResult) {}

  async createAuthorizedUser(awid, dtoIn, session, authorizationResult) {}

  async deleteAuthorizedUser(awid, dtoIn, session, authorizationResult) {}
}

module.exports = new ShoppingListAbl();
