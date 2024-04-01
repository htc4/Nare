const rectangles = document.querySelectorAll('.rectangle');
  
    rectangles.forEach(rectangle => {
      const openWindowButton = rectangle.querySelector('.open-window-button');
      openWindowButton.addEventListener('click', () => {
        const newWindowWidth = 400;
        const newWindowHeight = 200;
        const newWindowLeft = (window.screen.width - newWindowWidth) / 2;
        const newWindowTop = (window.screen.height - newWindowHeight) / 2;
  
        const newWindow = window.open('', 'textWindow', `width=${newWindowWidth},height=${newWindowHeight},left=${newWindowLeft},top=${newWindowTop},scrollbars=yes`);
        
        const newText = rectangle.querySelector('.text').innerHTML;
        newWindow.document.write('<html><head><title>New Window</title></head><body>' + newText + '</body></html>');
      });
  
      
    });