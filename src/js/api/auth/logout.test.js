import { LocalStorageMock } from "./LocalStorage.mock";
import { logout } from "./logout";

global.localStorage = new LocalStorageMock

const accessToken = "rkhmllerh";

describe("logout", () => {
  it("Check if function removes token in localstorage", () => {
    global.localStorage.setItem("token", accessToken );
    expect(global.localStorage.getItem("token")).toEqual(accessToken);

    logout()

    expect(global.localStorage.getItem("token")).toBeNull();
  })
})