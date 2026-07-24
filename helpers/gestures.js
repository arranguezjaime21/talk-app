export class Gesture { 
    constructor(driver) { 
        this.driver = driver;
        this.defaultSpeed = 800;
    }

    async executeScroll ({startX, startY, endX, endY, speed = defaultSpeed}) { 
        await this.driver.execute('mobile:dragGesture', {
            startX,
            startY,
            endX,
            endY,
            speed
        });
    }

    async swipeUp() {
        const { width, height } = await this.driver.getWindowRect();
        const centerX = Math.floor(width / 2);
        
        await this.executeScroll({
            startX: centerX, 
            startY: Math.floor(height * 0.8),
            endX: centerX, 
            endY: Math.floor(height * 0.2),
        });
    }

    async swipeDown() {
        const { width, height } = await this.driver.getWindowRect();
        const centerX = Math.floor(width / 2);

        await this.executeScroll({
            startX: centerX, 
            startY: Math.floor(height * 0.2),
            endX: centerX, 
            endY: Math.floor(height * 0.8),
        })
    }

    async swipeUpInsideElement(selector) {
        const el = await this.driver.$(selector);
        const { x, y, width, height } = await el.getRect();
        const centerX = Math.floor(x + width / 2);
        
        await this.executeScroll({
            startX: centerX, 
            startY: Math.floor(y + height * 0.8),
            endX: centerX, 
            endY: Math.floor(y + height * 0.2),
        });
    }

    async swipeDownInsideElement(selector) { 
        const el = await this.driver.$(selector);
        const { x, y, width, height } = await el.getRect();

        const centerX = Math.floor(x + width / 2);

        await this.executeScroll({
            startX: centerX, 
            startY: Math.floor(y + height * 0.2),
            endX: centerX, 
            endY: Math.floor(y + height * 0.8),
        });
    }

  


}