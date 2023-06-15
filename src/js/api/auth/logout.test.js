// const { JSDOM } = require('jsdom');
// global.DOMParser = (new JSDOM()).window.DOMParser;


import { logout } from "./logout";
import { LocalStorageMock } from "./LocalStorage.mock";

jest.mock('../../router', () => ({     redirect: jest.fn(),   }));

global.localStorage = new LocalStorageMock

const accessToken = "rkhmllerh";

describe("logout", () => {
  it("Check if function removes token in localstorage", () => {
    localStorage.clear();
    global.localStorage.setItem("token", accessToken );
    expect(global.localStorage.getItem("token")).toEqual(accessToken);

    logout()
    expect(global.localStorage.getItem("token")).toBeNull();
  })
})

