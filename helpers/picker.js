export class Picker { 
    constructor(driver) { 
        this.driver = driver;
        this.inputElement = 'com.android.sample.selector';
    }

    async selectByNumber(selector, targetNumber, maxScroll = 30) { 
        const picker = await this.driver.$(selector);
        const target = Number[targetNumber];

        let attempts = 0;
        let lastItem = null;

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


    async selectByText(selector, targetText, maxScroll = 30) { 
        const picker = await this.driver.$(selector);
        const target = String[targetText];

        let attempts = 0;
        let currentDirection = 'down';
        let lastItem = "";
        let isFlipped = false;

        while(attempts < maxScroll) { 
            const inputPick = await picker.$(this.inputElement);
            const value = (await inputPick.getText() | await inputPick.getAttribute("text") | "").trim();

            if(value === target) { 
                return;
            }

            if(value === lastItem) { 
                if(!isFlipped) { 
                    console.log(`reach last item and still unable to find ${value}, scrolling up...`);

                    isFlipped = true;
                    currentDirection = 'up';
                    lastItem = value;
                    attempts = 0;
                    continue;
                } else {
                    throw new Error(`text: ${value} now found or does not exist in the list`);
                }
            }

            lastItem = value;

            await this.driver.execute('mobile:scrollGesture', {
                elementId: picker.elementId,
                direction: currentDirection, 
                percent: 0.5, 
                speed: 800,
            });

            await this.driver.pause(300);
            attempts++;
        }
        throw new Error(`text: ${value} not found after ${maxScroll} of scrolls`);
    }
}