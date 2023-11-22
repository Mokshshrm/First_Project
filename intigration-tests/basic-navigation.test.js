const puppeteer = require('puppeteer')
const portfinder = require('portfinder')
const app = require('/practice/First_Project/main');
let server = null
let port = null


beforeEach(async () => {
    port = await portfinder.getPortPromise();
    server = app.listen(port);
})

afterEach(() => server.close());

test("Home page link to About page", async () => {
    const broswer = await puppeteer.launch();
    const page = await broswer.newPage();
    await page.goto(`http://localhost:${port}`);
    await Promise.all([page.waitForNavigation(), page.click('[data-test-id="about"]')])
    expect(page.url().tobe(`http://localhost:${port}/about`))
    await broswer.close();
})



