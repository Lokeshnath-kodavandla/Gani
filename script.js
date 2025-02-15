// function openNav() {
//     document.getElementById('nav-togle').style.display = "flex"
// }
 
const ele = document.getElementById("checkbox-mob-nav");

ele.addEventListener("change", function () {
    const navToggle = document.getElementById("nav-togle"); // Correct selection
    if (ele.checked) {
        navToggle.style.display = "flex";
    } else {
        navToggle.style.display = "none";
    }
});

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewriter-text');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewriter-text > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    const iframe = document.getElementById('videoIframe');
    iframe.src = "https://www.youtube.com/embed/dV6in2jgpQA?autoplay=1";
    lightbox.style.display = 'flex';
}
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const iframe = document.getElementById('videoIframe');
    lightbox.style.display = 'none';
    iframe.src = "";
}
function showMoreVideos() {
    alert('More videos coming soon!');
}

/* Footer Code */
function generateBalls() {
    for (var i = 0; i < Math.floor(window.innerWidth/20); i++) {
      var colors = ['#7c68ff','#47f59c','#effb88','#ff2c76'];
      var ball = document.createElement('div');
      ball.classList.add('ball');
      document.querySelector(".gooey-animations").appendChild(ball);

      ball.style.bottom = "0px";
      ball.style.left = Math.random() * window.innerWidth - 100 + 'px';
      ball.style.animationDelay = Math.random() * 5 + "s";
      ball.style.transform = "translateY(" + Math.random() * 10 + "px)";
      ball.style.backgroundColor = colors[i % 4];
    }
  }

  generateBalls();

  window.addEventListener('resize', function() {
    var balls = document.querySelectorAll(".gooey-animations .ball");
    balls.forEach(ball => ball.remove());
    generateBalls();
  });