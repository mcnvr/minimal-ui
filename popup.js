document.getElementById('open').onclick = function() {
    var url = document.getElementById('url').value;
    if (url.startsWith('http://') || url.startsWith('https://')) {
      chrome.runtime.sendMessage({url: url});
      window.close();
    } else {
      alert('Please enter a valid URL.\nMake sure to include \'http://\' or \'https://\'');
    }
};