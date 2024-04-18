chrome.runtime.onMessage.addListener((message) => {
  chrome.windows.create({
    'url': message.url,
    'type': 'popup'
  });
});