"use strict";

const ShoppingListAbl = require("../../abl/shopping-list-abl.js");

class ShoppingListController {
  list(ucEnv) {
    const { getUri, getSession, getAuthorizationResult } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    return ShoppingListAbl.list(awid, session, authorizationResult);
  }

  listItems(ucEnv) {
    const { getUri, getSession, getAuthorizationResult } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    return ShoppingListAbl.listItems(awid, session, authorizationResult);
  }

  createList(ucEnv) {
    const { getUri, getSession, getAuthorizationResult, getDtoIn } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    const dtoIn = getDtoIn();
    return ShoppingListAbl.createList(awid, dtoIn, session, authorizationResult);
  }

  deleteList(ucEnv) {
    const { getUri, getSession, getAuthorizationResult, getDtoIn } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    const dtoIn = getDtoIn();
    return ShoppingListAbl.deleteList(awid, dtoIn, session, authorizationResult);
  }

  updateListName(ucEnv) {
    const { getUri, getSession, getAuthorizationResult, getDtoIn } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    const dtoIn = getDtoIn();
    return ShoppingListAbl.updateListName(awid, dtoIn, session, authorizationResult);
  }

  archiveList(ucEnv) {
    const { getUri, getSession, getAuthorizationResult, getDtoIn } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    const dtoIn = getDtoIn();
    return ShoppingListAbl.archiveList(awid, dtoIn, session, authorizationResult);
  }

  listArchived(ucEnv) {
    const { getUri, getSession, getAuthorizationResult } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    return ShoppingListAbl.listArchived(awid, session, authorizationResult);
  }

  createItem(ucEnv) {
    const { getUri, getSession, getAuthorizationResult, getDtoIn } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    const dtoIn = getDtoIn();
    return ShoppingListAbl.createItem(awid, dtoIn, session, authorizationResult);
  }

  deleteItem(ucEnv) {
    const { getUri, getSession, getAuthorizationResult, getDtoIn } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    const dtoIn = getDtoIn();
    return ShoppingListAbl.deleteItem(awid, dtoIn, session, authorizationResult);
  }

  resolveItem(ucEnv) {
    const { getUri, getSession, getAuthorizationResult, getDtoIn } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    const dtoIn = getDtoIn();
    return ShoppingListAbl.resolveItem(awid, dtoIn, session, authorizationResult);
  }

  listResolvedItems(ucEnv) {
    const { getUri, getSession, getAuthorizationResult } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    return ShoppingListAbl.listResolvedItems(awid, session, authorizationResult);
  }

  listAuthorizedUsers(ucEnv) {
    const { getUri, getSession, getAuthorizationResult } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    return ShoppingListAbl.listAuthorizedUsers(awid, session, authorizationResult);
  }

  createAuthorizedUser(ucEnv) {
    const { getUri, getSession, getAuthorizationResult, getDtoIn } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    const dtoIn = getDtoIn();
    return ShoppingListAbl.createAuthorizedUser(awid, dtoIn, session, authorizationResult);
  }

  deleteAuthorizedUser(ucEnv) {
    const { getUri, getSession, getAuthorizationResult, getDtoIn } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    const dtoIn = getDtoIn();
    return ShoppingListAbl.deleteAuthorizedUser(awid, dtoIn, session, authorizationResult);
  }

  deleteSelfFromAuthorizedUsers(ucEnv) {
    const { getUri, getSession, getAuthorizationResult } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    return ShoppingListAbl.deleteSelfFromAuthorizedUsers(awid, session, authorizationResult);
  }
}

module.exports = new ShoppingListController();
