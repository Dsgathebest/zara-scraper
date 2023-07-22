# Web Scraper of the page Zara
This code seeks to scrape the data of interest from the Nafnaf page, such as product names, price, images, sizes, description and etc.  
## Intro
Web scraping is a technique used to automatically extract information from web pages.  
 It consists of collecting data from various online sources, analyzing its structure and extracting the relevant information. This practice is widely used in areas such as research, data analysis, price monitoring, content generation, and many other applications. By using specialized tools, users can efficiently and accurately collect data, saving time and effort compared to manually collecting information online.  
 However, it is important to adhere to the websites' policies and terms of use when web scraping, and to ensure that data is collected ethically and legally.

## Installing
#### Note:
If you do not have Node.js installed on your system, you will need to follow these steps to install it:
  1. Visit the official Node.js website at [Node js](https://nodejs.org/).
  2. On the main page, you will find two versions to download: LTS (Long-Term Support) and Current. It is recommended to download the LTS version, as it is the stable and long-term supported version.
  3. Click the download button for your operating system (Windows, macOS, or Linux).
  4. Once the installer is downloaded, run it and follow the instructions in the installation wizard.
  5. During the installation, you will be asked to choose options such as the installation location and the components to install. You can leave the default options, unless you want to make specific configurations.
  6. After completing the installation, open a new terminal window or command line and verify that Node.js is installed correctly by running the following command:
```
node --version
```
If the version of Node.js installed is displayed, it means that the installation was successful.

Initialize the project with the following command. This command will guide you through an interactive process to create a package.json file, which is a configuration file for your project.
```
npm init
```
#### Installation of the required libraries
1. Abre tu terminal o línea de comandos.
2. Ejecuta el siguiente comando para instalar las librerías requeridas:

```
npm install puppeteer-extra puppeteer-cluster fs puppeteer-extra-plugin-stealth
```
If you have problems in which your computer gets stuck or slows down for carrying out all the installations in a single line, you can do it independently
```
npm install puppeteer-extra
npm install puppeteer-cluster
npm install fs
npm install puppeteer-extra-plugin-stealth
```
#### What are these libraries or What do they do?
* **'puppeteer'** is a web browser automation library that allows you to control and manipulate a browser through code. Puppeteer allows you to perform tasks like capturing screenshots, generating PDF files, interacting with web pages, filling out forms, and more.

* **'puppeteer-extra'** is an extension to Puppeteer that extends its capabilities and provides additional solutions for web browser automation. It allows you to customize and tailor Puppeteer to your specific needs by using plugins and extra features.

 Some of the common uses of puppeteer-extra are:

1. Bot detection and evasion: puppeteer-extra includes a number of plugins that help prevent bot detection by websites. These plugins implement evasion techniques to prevent websites from detecting and blocking the automation.

2. Manipulation of headers and fingerprints: puppeteer-extra allows you to modify HTTP headers and browser fingerprints, which can help you simulate different browsers or devices and avoid detection.

3. Ad blocking and tracking: Some puppeteer-extra plugins allow you to block ads and trackers on web pages, which can improve loading speed and privacy during automation.

4. Integration of other libraries and tools: puppeteer-extra is compatible with a wide range of plugins that offer additional functionality, such as captcha generation, proxy use, structured data extraction, and more.

* **'puppeteer-cluster'** is a Puppeteer extension that helps you create groups of browsers to perform tasks in parallel. It is useful when you need to multitask efficiently, such as crawling multiple web pages or running tests in parallel.

* **'fs'** is a module built into Node.js that allows you to interact with your computer's file system. You can use it to read, write or manipulate files and folders.

* '**puppeteer-extra-plugin-stealth'** is a plugin for Puppeteer that helps prevent bot detection by websites. Add evasion techniques to avoid blocking or restricting access to web pages.

