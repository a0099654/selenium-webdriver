var webdriver = require('selenium-webdriver');
var fs = require('fs');

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().window().maximize();
driver.get('http://www.google.com');
// driver.findElement({name:'q'}).sendKeys("stella");

driver.takeScreenshot().then(function(data){
    fs.writeFileSync('img.png', data, 'base64');
});

driver.quit();