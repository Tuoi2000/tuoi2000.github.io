function Time() {
    var hr = document.querySelector('#hrs');
    var mn = document.querySelector('#min');
    var sc = document.querySelector('#sec');
    
    var year = document.querySelector('#year');
    var month = document.querySelector('#month');
    var day = document.querySelector('#day');

    var hour = document.querySelector('#hour');
    var minute = document.querySelector('#minute');
    var second = document.querySelector('#second');
    var period = document.querySelector('#period');

    setInterval(() =>{
        var dayy = new Date();
        var hh = dayy.getHours() * 30;
        var mm = dayy.getMinutes() * 6;
        var ss = dayy.getSeconds() * 6;

        hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
        
        var da = dayy.getDate();
        var mo = dayy.getMonth() + 1;
        var ye = dayy.getFullYear() - 2000;

        var h = dayy.getHours();
        var m = dayy.getMinutes();
        var s = dayy.getSeconds();

        var am = h >= 12 ? 'PM' : 'AM';

        if (h > 12){
            h = h - 12;
        }

        ye = (ye < 10) ? "0" + ye : ye;
        mo = (mo < 10) ? "0" + mo : mo;
        da = (da < 10) ? "0" + da : da;
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        year.innerHTML = ye;
        month.innerHTML = mo;
        day.innerHTML = da;

        hour.innerHTML = h;
        minute.innerHTML = m;
        second.innerHTML = s;
        period.innerHTML = am;
    })
}
Time();
