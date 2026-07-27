import { user } from "../../user.js";

describe("login test", function() {
    this.timeout(90000);
    
    user.forEach(user => {
        it("should login", async function () {
        await loginPage.gotoMailLogin();
        await loginPage.loginFlow({
            email: user.email,
            password: user.password,
        });

        this.

    })
    })
    
})