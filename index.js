
    setInterval(function () {

        d = new Date();
        htime = d.getHours();
        mtime = d.getMinutes();
        stime = d.getSeconds();

        hrotation = 30*htime + mtime/2;
        mrotation = 6*mtime;
        srotation = 6*stime;
         
        seconds.style.transform = `rotate(${srotation}deg)`;
        hours.style.transform = `rotate(${hrotation}deg)`;
        minutes.style.transform = `rotate(${mrotation}deg)`;
    }, 1000)
