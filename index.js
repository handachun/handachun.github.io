function celestial() {
  const star1 = document.getElementById("Star1");
  const star2 = document.getElementById("Star2");
  const star3 = document.getElementById("Star3");
  const star4 = document.getElementById("Star4");
  const star5 = document.getElementById("Star5");
  const moon = document.getElementById("Moon");

  star1.setAttribute("visibility", "visible");
  star1.classList.add("animated", "fadeIn");

  star2.setAttribute("visibility", "visible");
  star2.classList.add("animated", "fadeIn", "delay-300ms", "slow");

  star3.setAttribute("visibility", "visible");
  star3.classList.add("animated", "fadeIn", "delay-500ms", "slower");

  star4.setAttribute("visibility", "visible");
  star4.classList.add("animated", "fadeIn", "delay-700ms", "slow");
  
  star5.setAttribute("visibility", "visible");
  star5.classList.add("animated", "fadeIn", "delay-1200ms", "slower");

  moon.setAttribute("visibility", "visible");
  moon.classList.add("animated", "fadeIn", "delay-1500ms", "slower");
}

function mountains() {
  const backmount = document.getElementById("BackMount");
  const midmount = document.getElementById("MidMount");
  const foremount = document.getElementById("ForeMount");

  backmount.setAttribute("visibility", "visible");
  backmount.classList.add("animated", "fadeInUp", "slow");

  midmount.setAttribute("visibility", "visible");
  midmount.classList.add("animated", "fadeInUp", "delay-500ms", "slow");

  foremount.setAttribute("visibility", "visible");
  foremount.classList.add("animated", "fadeInUp", "delay-1s", "slow");
}

celestial();
mountains();
