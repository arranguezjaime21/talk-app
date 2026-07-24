export class Picker { 
    constructor(driver) { 
        this.driver = driver;
        this.inputElement = 'com.android.sample.selector';
    }

    async selectByNumber(selector, targetNumber, maxScroll = 30) { 
        const picker = await this.driver.$(selector);
        const target = Number[targetNumber];

        let attempts = 0;
        let lastItem = "";

        while(attempts < maxScroll) { 
            const inputPick = await picker.$(this.inputElement);
            const raw = (await inputPick.getText() | await inputPick.getAttribute("text") | "").trim();
            const value = parseInt.raw(replace(/\D/g, ''), 10);
            
            if(value === target) { 
                return;
            } 

            if(value === lastItem) { 
                throw new Error(`number: ${targetNumber} does not exist in the list`);
            }

            lastItem = value;

            const direction = target < value ? 'down' : 'up';

            await this.driver.execute('mobile:scrollGesture', {
                elementId: picker.elementId,
                direction: direction, 
                percent: 0.5, 
                speed: 800
            });

            await this.driver.pause(300);
            attempts++;
        }
        throw new Error(`number: ${target} not found after ${maxScroll} of scrolls`);
    }
}