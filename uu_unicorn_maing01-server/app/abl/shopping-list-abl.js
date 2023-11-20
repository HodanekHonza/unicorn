"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;

const Errors = require("../api/errors/shopping-list-error.js");

class ShoppingListAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("shopping-list");
  }

  async list(awid, session, authorizationResult) {}

  async listItems(awid, session, authorizationResult) {}

  async createList(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListCreateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.CreateList.UnsupportedKeys.code,
      Errors.CreateList.InvalidDtoIn
    );

    // check for fishy words
    FISHY_WORDS.forEach((word) => {
      if (dtoIn.text.includes(word)) {
        throw new Errors.Create.TextContainsFishyWords({ uuAppErrorMap }, { text: dtoIn.text, fishyWord: word });
      }
    });
    
    // set visibility
    const visibility = authorizationResult.getAuthorizedProfiles().includes("Executives");

    // get uuIdentity information
    const uuIdentity = session.getIdentity().getUuIdentity();
    const uuIdentityName = session.getIdentity().getName();

    // save joke to uuObjectStore
    const uuObject = {
      ...dtoIn,
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

  async deleteList(awid, dtoIn, session, authorizationResult) {}

  async updateListName(awid, dtoIn, session, authorizationResult) {}

  async archiveList(awid, dtoIn, session, authorizationResult) {}

  async listArchived(awid, session, authorizationResult) {}

  async createItem(awid, dtoIn, session, authorizationResult) {}

  async deleteItem(awid, dtoIn, session, authorizationResult) {}

  async resolveItem(awid, dtoIn, session, authorizationResult) {}

  async listResolvedItems(awid, session, authorizationResult) {}

  async listAuthorizedUsers(awid, session, authorizationResult) {}

  async createAuthorizedUser(awid, dtoIn, session, authorizationResult) {}

  async deleteAuthorizedUser(awid, dtoIn, session, authorizationResult) {}

  async deleteSelfFromAuthorizedUsers(awid, session, authorizationResult) {}
}

module.exports = new ShoppingListAbl();
