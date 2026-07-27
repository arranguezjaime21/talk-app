import { LoginSelectors } from "../../talk-selectors/selectors.js";
import { Base } from "../base";

export class LoginPage extends Base {
    constructor(driver) { 
        super(driver);
        this.selector = LoginSelectors;
    }

    // -- NAV MAIL LOGIN --
    async gotoMailLogin () { 
        try {
            await this.waitAndClick(this.selector.mailLogin);
            await this.waitAndClick(this.selector.mailSNSBtn);
            await this.waitAndClick(this.selector.submitBtn);
        } catch {
            return;
        }
    }
    
    // -- LOGIN FLOW --
    async loginFlow ({ email, password}) {
        await this.setValue(this.selector.inputEmail, email);
        await this.setValue(this.selector.inputPassword, password);
        await this.waitAndClick(this.selector.submitBtn);
    }

    // -- ERROR MESSAGE --
    async errMsg (expectedErr) {
        try {
            const msg = await this.waitAndGetText(this.selector.getErrMsg);
            console.log (
                msg === expectedErr
                ? `>>> Login fail and error message is displayed: "${expectedErr}"`
                : `>>> login fail and incorrect error message is displayed: "${msg}"`
            );
        } catch (error) {
            throw new Error(`Unexpected error or error message not found: ${error.message}`);
        }
    }
    
}