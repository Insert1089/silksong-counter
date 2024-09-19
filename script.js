function updateCounter() {
    const announcementDate = new Date('February 14, 2019 00:00:00');
    const now = new Date();
    const difference = now - announcementDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById('counter').innerText = 
        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    setTimeout(updateCounter, 1000);
}

updateCounter();
