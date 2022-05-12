 function getVal() {
        const val1 = document.querySelector('.year').value;
        const val2 = document.querySelector('.month').value;
        const val3 = document.querySelector('.days').value;
        const val4 = document.querySelector('.hour').value;
        const val5 = document.querySelector('.minute').value;
        const val6 = document.querySelector('.seconds').value;
        let vals1 = val1 * 31536000000;
        let vals2 = val2 * 2628002880;
        let vals3 = val3 * 86400000;
        let vals4 = val4 * 3600000;
        let vals5 = val5 * 60000;
        let vals6 = val6 * 1000;
        const today = new Date();
           let todays = Date.parse(today);
          let number = todays + vals1 + vals2 + vals3 + vals4 + vals5 + vals6;
          const all = new Date (number);
          document.getElementById("ade").innerHTML = all;
       }