function setVisClasses(id, classes, callback)
{
  const el = document.getElementById(id);

  el.setAttribute("visibility", "visible");
  for (i = 0; i < classes.length; i++) {
    el.classList.add(classes[i]);
  }

  // handle animation end
  function handleAnimationEnd()
  {
    for (i = 0; i < classes.length; i++) {
      el.classList.remove(classes[i]);
    }

    el.removeEventListener("animationend", handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }

  el.addEventListener("animationend", handleAnimationEnd);
}

function celestial()
{
  setVisClasses("Star1", ["animated", "fadeIn", "slow"],
                         () => setVisClasses("Star1",
                           ["animated", "flashsoft", "infinite", "evenslower"]));
  setVisClasses("Star2", ["animated", "fadeIn", "delay-300ms", "slow"],
                         () => setVisClasses("Star2",
                           ["animated", "flashsoft", "infinite", "slothslower"]));
  setVisClasses("Star3", ["animated", "fadeIn", "delay-500ms", "slower"],
                         () => setVisClasses("Star3",
                           ["animated", "flashsoft", "infinite", "evenslower"]));
  setVisClasses("Star4", ["animated", "fadeIn", "delay-700ms", "slow"],
                         () => setVisClasses("Star4",
                           ["animated", "flashsoft", "infinite", "slothslower"]));
  setVisClasses("Star5", ["animated", "fadeIn", "delay-1200ms", "slower"],
                         () => setVisClasses("Star5",
                           ["animated", "flashsoft", "infinite", "evenslower"]));

  setVisClasses("Moon", ["animated", "fadeIn", "delay-1500ms", "slower"]);
}

function mountains()
{
  setVisClasses("BackMount", ["animated", "fadeInUp", "slow"]);
  setVisClasses("MidMount", ["animated", "fadeInUp", "delay-500ms", "slow"]);
  setVisClasses("ForeMount", ["animated", "fadeInUp", "delay-800ms", "slow"]);
}

function flicker()
{
  setVisClasses("FireOuter", ["animated", "flicker", "slower", "infinite"]);
  setVisClasses("FireInner", ["animated", "flicker", "slower", "infinite", "delay-500ms"]);
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
  setVisClasses("Fire-Base", ["animated", "fadeIn", "delay-2800ms"]);
  setVisClasses("Fire", ["animated", "fadeIn", "delay-2800ms", "slower"], flicker);
  setVisClasses("foreground-tint", ["animated", "fadeIn", "delay-2800ms", "evenslower"]);
  setVisClasses("Ground", ["animated", "fadeIn", "delay-2800ms", "evenslower"],
                          () => setVisClasses("Ground",
                            ["animated", "flashslight", "slower", "infinite"]));
  setVisClasses("Background-tint", ["animated", "fadeIn", "delay-2800ms", "evenslower"]);
}

function props()
{
  setVisClasses("tent", ["animated", "fadeIn", "delay-2800ms", "slow"]);
  setVisClasses("stump", ["animated", "fadeIn", "delay-2800ms", "slow"]);
  setVisClasses("bread", ["animated", "fadeIn", "delay-2800ms", "slower"]);
  setVisClasses("wine", ["animated", "fadeIn", "delay-2800ms", "slower"]);
  setVisClasses("pan", ["animated", "fadeIn", "delay-2800ms", "slower"]);
  setVisClasses("eggs", ["animated", "fadeIn", "delay-2800ms", "slower"]);
  setVisClasses("Bible", ["animated", "fadeIn", "delay-3300ms", "slower"]);
  setVisClasses("harp", ["animated", "fadeIn", "delay-3300ms", "slower"]);
}

function crosses()
{
  setVisClasses("Cross", ["animated", "fadeIn", "delay-3700ms", "evenslower"]);
  setVisClasses("left cross", ["animated", "fadeIn", "delay-4000ms", "evenslower"]);
  setVisClasses("right cross", ["animated", "fadeIn", "delay-4000ms", "evenslower"]);
}

function text()
{
  setVisClasses("roam", ["animated", "fadeInUp", "delay-3700ms", "evenslower"]);
  setVisClasses("sojourner", ["animated", "fadeInUp", "delay-4000ms", "evenslower"]);
}

celestial();
mountains();
fire();
props();
crosses();
text();
