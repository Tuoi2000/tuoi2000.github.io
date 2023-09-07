function Time() {
    var hr = document.querySelector('#hrs');
    var mn = document.querySelector('#min');
    var sc = document.querySelector('#sec');
    
    var hour = document.querySelector('#hour');
    var minute = document.querySelector('#minute');
    var second = document.querySelector('#second');
    var period = document.querySelector('#period');

    setInterval(() =>{
        var day = new Date();
        var hh = day.getHours() * 30;
        var mm = day.getMinutes() * 6;
        var ss = day.getSeconds() * 6;

        hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
        
        var h = day.getHours();
        var m = day.getMinutes();
        var s = day.getSeconds();

        var am = h >= 12 ? 'PM' : 'AM';

        if (h > 12){
            h = h - 12;
        }

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        hour.innerHTML = h;
        minute.innerHTML = m;
        second.innerHTML = s;
        period.innerHTML = am;
    })
}
Time();
