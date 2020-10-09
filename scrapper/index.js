// Automatically scrape product details from Tesco website
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://example.com');
	//await page.screenshot({path: 'example.png'});

	const list = await page.evaluate(() => {
		let data = []            /** this can be changed for other website.*/
		const list = document.querySelectorAll('.product-list--list-item');
		for (const a of list) {
			data.push({
				'title': a.querySelector('.LC20lb').innerText.trim().replace(/(\r\n|\n|\r)/gm, " "),
				'link': a.querySelector('a').href
			})
		}
		return data;
	})
	console.log(list);

	await browser.close();
})();