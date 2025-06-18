COMPANY:CODETECT IT SOLUTIONS

NAME:ARFA PARVEEN

INTERN ID:CT04DN696

DOMAIN:FULL STACK

DURATION:4 WEEKS# TASK-4-Chrome-Extension-for-time-tracking-and-productivity-Analytics

Description of the Time Tracker Chrome Extension Task
For this task, I was asked to create a Chrome extension for time tracking and productivity analytics. The goal of this project was to track how much time a user spends on different websites while using the Chrome browser. This information can help users become more aware of their online habits and improve their productivity by identifying time spent on both productive and unproductive websites.

To begin, I created a Chrome extension project folder that contained a few important files. These included a manifest.json file, which acts as the main configuration file for Chrome extensions, a background.js file for handling the time tracking logic, and some icon images for displaying the extension’s icon in the browser toolbar. The manifest.json defines the extension’s name, version, permissions, and background service worker that runs the core functionality in the background.

The core logic of this extension is handled through the background.js file. Here, I used the Chrome Extensions API, specifically the chrome.tabs module, to detect when the user switches between different tabs in the browser. When a tab becomes active, the extension records the current time and identifies the website’s hostname. If the user switches to another tab, the extension calculates how much time was spent on the previous tab by comparing the current time with the recorded start time. This time duration is then printed in the service worker console using console.log(). Each time the user moves to a new tab, the extension updates the active tab hostname and reset the start time.

To test the extension, I loaded it in Chrome by opening chrome://extensions/, enabling developer mode, and using the “Load unpacked” option to select the project folder. Once loaded, the extension started working in the background. By switching between different websites in multiple browser tabs, I could track the time spent on each site. These time logs were visible in the service worker console, which can be accessed from the Chrome Extensions page by clicking on the “service worker” link under the extension's details.

This extension uses permissions like tabs to access browser tabs, and storage for future use if data needs to be saved locally. The host_permissions for <all_urls> allows the extension to track time across all websites the user visits. The icons used help display the extension in the browser’s extension bar.

In future improvements, this extension can be enhanced to classify websites into productive and unproductive categories. Websites like coding platforms or educational resources can be labeled productive, while social media sites can be considered unproductive. The extension can also be connected to a backend server to store user data and generate a dashboard displaying detailed productivity analytics, including a weekly report on time usage patterns.

Overall, this task gave me practical experience working with Chrome extensions, JavaScript, and browser APIs. It helped me understand how to develop simple but useful productivity tools for web browsers.

OUTPUT:

![Image](https://github.com/user-attachments/assets/5e6e8935-1a20-40d2-9b7b-ace6c1c2ea1d)

![Image](https://github.com/user-attachments/assets/398d2ba5-1c8d-42e8-b81c-98fc3ea1f770)

![Image](https://github.com/user-attachments/assets/489ecedb-d935-4cf2-9f2c-a2d6057f4e09)
