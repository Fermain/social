import { login } from "./login";
import { LocalStorageMock } from "./LocalStorage.mock";

global.localStorage = new LocalStorageMock

const name = "Anette"
const email = "email@test.com";
const password = "weeeeee"
const accessToken = "rkhmllerh";
const credentials = {email: email, password: password}

const PROFILE = {
  name: name,
  email: email,
  accessToken: accessToken
}

function validFetch() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: jest.fn().mockResolvedValue(PROFILE)
  });
}

describe("login", () => {
  it("Check if function fetches and stores token in browser storage", async () => {
    localStorage.clear();
    global.fetch = jest.fn(() => validFetch());
    await login(credentials.email, credentials.password)

    expect(global.localStorage.getItem("token")).not.toBeNull();
  })
})