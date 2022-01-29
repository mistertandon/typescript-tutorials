/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a01_conditional.ts
 */
import { ExternalUser } from "./a01_third_party";

interface User {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
}

type UserId = User["id"];

type UserAddress = User["address"];

//========== 1.1
/**
 * Type I: Define function parameters types
 */
function updateAddressA(id: User["id"], newAddress: User["address"]) {}

//========== 1.2
/**
 * Type II: Define function parameters types
 */
function updateAddressB(id: UserId, newAddress: UserAddress) {}

//========== 2.1
/**
 * In case if we're using type imported from third party library
 */
type ExternalUserId = ExternalUser["id"];

type ExternalUserAddress = ExternalUser["address"];
/**
 * Type II: Define function parameters types
 */
function updateAddressC(id: ExternalUserId, newAddress: ExternalUserAddress) {}

//========== 3.1
type UserProperties = keyof UserAddress;

/**
 * userAnyProperty can take only "street" | "city" | "country"
 */
let userAnyPropertyA: UserProperties = "street";

/**
 * Below statement would be invalid
 *
 * let userAnyPropertyB: UserProperties = "íd";
 */

//========== 4.1
function getPropertyValue<T, k extends keyof T>(objRef: T, key: k) {
  return objRef[key];
}

let resA = getPropertyValue({ propAKey: "propAValue" }, "propAKey");

//========== 5.1

type MouseEvent = {
  x: number;
  y: number;
};

type KeyboardEvent = {
  key: string;
};

type EventTypes = {
  click: MouseEvent;
  keypress: KeyboardEvent;
};

type EventTypesUnion = EventTypes[keyof EventTypes];

function handleEvent<K extends keyof EventTypes>(
  eventName: K,
  callBack: (e: EventTypes[keyof EventTypes]) => void
) {
  if (eventName === "click") {
    callBack({ x: 12, y: 21 });
  }

  if (eventName === "keypress") {
    callBack({ key: "ENTER" });
  }
}

document.addEventListener("click", () => {});
document.addEventListener("keypress", () => {});
