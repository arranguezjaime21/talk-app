export class Base {
    constructor(driver) { 
        this.driver = driver;
        this.defaultTimeout = 5000;
    }

    async waitAndFind(selector, timeout = this.defaultTimeout) { 
        const el = await this.driver.$(selector);
        await el.waitForDisplayed({ timeout });
        return el;
    }

    async waitAndFindAll(selector, timeout = this.defaultTimeout) { 
        let elements = [];

        await this.driver.waitUntil(async() => {
            elements = await this.driver.$$(selector);
            return elements.length > 0;
        }, {
            timeout, 
            timeoutMsg: `element not found or does not exist`,
        });

        if(elements.length > 0) {
            await elements[0].waitForDisplayed({timeout});
        }
        return elements;
    }

    async safeFindAll(selector, timeout = this.defaultTimeout) { 
        try {
            return await this.waitAndFindAll(selector, timeout);
        } catch {
            return [];
        }
    }

    async elementExist(selector, timeout = this.defaultTimeout) { 
        try {
            await this.waitAndFind(selector, timeout);
            return true;
        } catch  {
            return false;
        }
    }

    async waitForGone(selector, timeout = this.defaultTimeout) { 
        try {
            await this.driver.waitUntil(async() => {
                const exist = await this.elementExist(selector, 500);
                return !exist;
            }, {
                timeout, 
                timeoutMsg: `element still present after ${timeout}ms`,
            });
            return true;
        } catch  {
            return false;
        }
    }

    async waitAndGetText(selector, timeout = this.defaultTimeout) { 
        const el = await this.waitAndFind(selector, timeout);
        const text = (await el.getText()) || (await el.getAttribute("text")) || "";
        return text.trim();
    }

    async waitAndClick(selector, timeout = this.defaultTimeout) { 
        const el = await this.waitAndFind(selector, timeout);
        await el.waitForEnabled({ timeout });
        await el.click();
    }

    async setValue(selector, value, timeout = this.defaultTimeout) { 
        const el = await this.waitAndFind(selector, timeout);
        await el.clearValue();
        await el.setValue(value);
    }
    
}