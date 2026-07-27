import { remote } from "webdriverio";
import { emulatorCaps } from "../helpers/capabilities.js";
import { LoginPage } from "../talk-screens/login/login.main.js";

export const mochaHooks = { 
    async beforeAll() {
        this.timeout(120000);

        global.driver = await remote({
            path: "/",
            port: 4723,
            hostname: "127.0.0.1",
            logLevel: 'error',
            capabilities: emulatorCaps,
        });

        global.loginPage = new LoginPage(global.driver);

    },

    async afterAll() {
        if(global.driver) { 
            await global.driver.deleteSession();
            global.driver = null;
        }
    }
}