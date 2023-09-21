function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    let meridiem = 'AM';
    if (hours > 12) {
        hours -= 12;
        meridiem = 'PM';
    }
    hours = String(hours).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  updateTime();
  setInterval(updateTime, 1000);