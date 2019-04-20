function setVisClasses(id, classes)
{
  const el = document.getElementById(id);

  el.setAttribute("visibility", "visible");
  for (i = 0; i < classes.length; i++) {
    el.classList.add(classes[i]);
  }
}

function celestial()
{
  setVisClasses("Star1", ["animated", "fadeIn", "slow"]);
  setVisClasses("Star2", ["animated", "fadeIn", "delay-300ms", "slow"]);
  setVisClasses("Star3", ["animated", "fadeIn", "delay-500ms", "slower"]);
  setVisClasses("Star4", ["animated", "fadeIn", "delay-700ms", "slow"]);
  setVisClasses("Star5", ["animated", "fadeIn", "delay-1200ms", "slower"]);

  setVisClasses("Moon", ["animated", "fadeIn", "delay-1500ms", "slower"]);
}

function mountains()
{
  setVisClasses("BackMount", ["animated", "fadeInUp", "slow"]);
  setVisClasses("MidMount", ["animated", "fadeInUp", "delay-500ms", "slow"]);
  setVisClasses("ForeMount", ["animated", "fadeInUp", "delay-800ms", "slow"]);
}

function fire()
{
  setVisClasses("Front-rock-1", ["animated", "bounceInDown", "delay-2500ms"]);
  setVisClasses("Front-rock-2", ["animated", "bounceInDown", "delay-2550ms"]);
  setVisClasses("Front-rock-3", ["animated", "bounceInDown", "delay-2500ms"]);
  setVisClasses("Front-rock-4", ["animated", "bounceInDown", "delay-2600ms"]);
  setVisClasses("Front-rock-5", ["animated", "bounceInDown", "delay-2500ms"]);
  setVisClasses("Back-rock-1", ["animated", "bounceInDown", "delay-2500ms"]);
  setVisClasses("Back-rock-2", ["animated", "bounceInDown", "delay-2550ms"]);
  setVisClasses("Back-rock-3", ["animated", "bounceInDown", "delay-2500ms"]);
  setVisClasses("Back-rock-4", ["animated", "bounceInDown", "delay-2600ms"]);
  setVisClasses("Back-rock-5", ["animated", "bounceInDown", "delay-2500ms"]);
  setVisClasses("Back-rock-6", ["animated", "bounceInDown", "delay-2600ms"]);
  setVisClasses("Back-rock-7", ["animated", "bounceInDown", "delay-2500ms"]);
}

celestial();
mountains();
fire();
