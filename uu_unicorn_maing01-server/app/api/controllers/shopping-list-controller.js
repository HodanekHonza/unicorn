"use strict";

const ShoppingListAbl = require("../../abl/shopping-list-abl.js");

class ShoppingListController {
  list(ucEnv) {
    let dtoIn = ucEnv.getDtoIn();
    let awid = ucEnv.getUri().getAwid();
    let session = ucEnv.getSession();
    let authorizationResult = ucEnv.getAuthorizationResult();
    return ShoppingListAbl.list(awid, dtoIn, session, authorizationResult);
  }

  getList(ucEnv) {
    let dtoIn = ucEnv.getDtoIn();
    let awid = ucEnv.getUri().getAwid();
    let session = ucEnv.getSession();
    let authorizationResult = ucEnv.getAuthorizationResult();
    return ShoppingListAbl.getList(awid, dtoIn, session, authorizationResult);
  }

  createList(ucEnv) {
    let dtoIn = ucEnv.getDtoIn();
    let awid = ucEnv.getUri().getAwid();
    let session = ucEnv.getSession();
    let authorizationResult = ucEnv.getAuthorizationResult();
    return ShoppingListAbl.createList(awid, dtoIn, session, authorizationResult);
  }

  deleteList(ucEnv) {
    let dtoIn = ucEnv.getDtoIn();
    let awid = ucEnv.getUri().getAwid();
    let session = ucEnv.getSession();
    let authorizationResult = ucEnv.getAuthorizationResult();
    return ShoppingListAbl.deleteList(awid, dtoIn, session, authorizationResult);
  }

  updateListName(ucEnv) {
    let dtoIn = ucEnv.getDtoIn();
    let session = ucEnv.getSession();
    return ShoppingListAbl.updateListName(dtoIn, session);
  }

  archiveList(ucEnv) {
    let dtoIn = ucEnv.getDtoIn();
    let session = ucEnv.getSession();
    return ShoppingListAbl.archiveList(dtoIn, session);
  }

  listArchived(ucEnv) {
    const { getUri, getSession, getAuthorizationResult } = ucEnv;
    const awid = getUri().getAwid();
    const session = getSession();
    const authorizationResult = getAuthorizationResult();
    return ShoppingListAbl.listArchived(awid, session, authorizationResult);
  }

  createItem(ucEnv) {
    let dtoIn = ucEnv.getDtoIn();
    let session = ucEnv.getSession();
    return ShoppingListAbl.createItem(dtoIn, session);
  }

  deleteItem(ucEnv) {
    let dtoIn = ucEnv.getDtoIn();
    let session = ucEnv.getSession();
    return ShoppingListAbl.deleteItem(dtoIn, session);
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
