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

function setHidClasses(id, classes, callback)
{
  const el = document.getElementById(id);

  el.classList = [];
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

    el.setAttribute("visibility", "hidden");

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

function setTransitionFunction()
{
  const el = document.getElementById("the-way-home");
  el.style.cursor = "pointer";
  el.setAttribute("onclick", "transition()");
}

function text()
{
  setVisClasses("roam", ["animated", "fadeInUp", "delay-3700ms", "evenslower"]);
  setVisClasses("sojourner", ["animated", "fadeInUp", "delay-4000ms", "evenslower"], setTransitionFunction);
}

function celestialOut()
{
  setHidClasses("Star1", ["animated", "fadeOut", "slow"]);
  setHidClasses("Star2", ["animated", "fadeOut", "delay-300ms", "slow"]);
  setHidClasses("Star3", ["animated", "fadeOut", "delay-500ms", "slower"]);
  setHidClasses("Star4", ["animated", "fadeOut", "delay-700ms", "slow"]);
  setHidClasses("Star5", ["animated", "fadeOut", "delay-1200ms", "slower"]);
  setHidClasses("Moon", ["animated", "fadeOut", "delay-1500ms", "slower"]);
}

function mountainsOut()
{
  setHidClasses("BackMount", ["animated", "fadeOut", "slow"]);
  setHidClasses("MidMount", ["animated", "fadeOut", "delay-500ms", "slow"]);
  setHidClasses("ForeMount", ["animated", "fadeOut", "delay-800ms", "slow"]);
}

function flickerOut()
{
}

function fireOut()
{
  setHidClasses("Front-rock-1", ["animated", "fadeOut", "delay-2500ms"]);
  setHidClasses("Front-rock-2", ["animated", "fadeOut", "delay-2550ms"]);
  setHidClasses("Front-rock-3", ["animated", "fadeOut", "delay-2500ms"]);
  setHidClasses("Front-rock-4", ["animated", "fadeOut", "delay-2600ms"]);
  setHidClasses("Front-rock-5", ["animated", "fadeOut", "delay-2500ms"]);
  setHidClasses("Back-rock-1", ["animated", "fadeOut", "delay-2500ms"]);
  setHidClasses("Back-rock-2", ["animated", "fadeOut", "delay-2550ms"]);
  setHidClasses("Back-rock-3", ["animated", "fadeOut", "delay-2500ms"]);
  setHidClasses("Back-rock-4", ["animated", "fadeOut", "delay-2600ms"]);
  setHidClasses("Back-rock-5", ["animated", "fadeOut", "delay-2500ms"]);
  setHidClasses("Back-rock-6", ["animated", "fadeOut", "delay-2600ms"]);
  setHidClasses("Back-rock-7", ["animated", "fadeOut", "delay-2500ms"]);
  setHidClasses("Fire-Base", ["animated", "fadeOut", "delay-2800ms"]);
  setHidClasses("Fire", ["animated", "fadeOut", "delay-2800ms", "slower"]);
  setHidClasses("FireOuter", ["animated", "fadeOut", "slower", "delay-2800ms"]);
  setHidClasses("FireInner", ["animated", "fadeOut", "slower", "delay-2800ms"]);
  setHidClasses("foreground-tint", ["animated", "fadeOut", "delay-2800ms", "evenslower"]);
  setHidClasses("Ground", ["animated", "fadeOut", "delay-2800ms", "evenslower"]);
  setHidClasses("Background-tint", ["animated", "fadeOut", "delay-2800ms", "evenslower"]);
}

function propsOut()
{
  setHidClasses("tent", ["animated", "fadeOut", "delay-2800ms", "slow"]);
  setHidClasses("stump", ["animated", "fadeOut", "delay-2800ms", "slow"]);
  setHidClasses("bread", ["animated", "fadeOut", "delay-2800ms", "slower"]);
  setHidClasses("wine", ["animated", "fadeOut", "delay-2800ms", "slower"]);
  setHidClasses("pan", ["animated", "fadeOut", "delay-2800ms", "slower"]);
  setHidClasses("eggs", ["animated", "fadeOut", "delay-2800ms", "slower"]);
  setHidClasses("Bible", ["animated", "fadeOut", "delay-3300ms", "slower"]);
  setHidClasses("harp", ["animated", "fadeOut", "delay-3300ms", "slower"]);
}

function crossesOut()
{
  setHidClasses("Cross", ["animated", "fadeOut", "slower"]);
  setHidClasses("left cross", ["animated", "fadeOut", "slower"]);
  setHidClasses("right cross", ["animated", "fadeOut", "slower"]);
}

function setFinallyHome()
{
  const body = document.getElementById("body");
  body.style.transition = "all 700ms ease-in-out";
  body.style.background = "white";
  body.style.color = "black";

  const header = document.getElementById("header");
  header.style.transition = "all 700ms ease-in-out";
  header.style.background = "white";
  header.style.color = "black";

  setVisClasses("New-Background-tint", ["animated", "fadeIn", "delay-700ms", "evenslower"]);
  setVisClasses("servant", ["animated", "fadeIn", "delay-1200ms", "evenslower"]);
  setVisClasses("verse", ["animated", "fadeIn", "delay-1500ms", "evenslower"]);
  setVisClasses("citizen", ["animated", "fadeInUp", "delay-2600ms", "slower"]);
  setVisClasses("home", ["animated", "fadeInUp", "delay-2800ms", "slower"]);
}

function textOut()
{
  setHidClasses("roam", ["animated", "fadeOutDown", "delay-3700ms", "evenslower"]);
  setHidClasses("sojourner", ["animated", "fadeOutDown", "delay-4000ms", "evenslower"], setFinallyHome);
}

function transition()
{
  celestialOut();
  crossesOut();
  mountainsOut();
  propsOut();
  fireOut();
  textOut();

  const el = document.getElementById("the-way-home");
  el.style.cursor = "default";
  el.removeAttribute("onclick");
}

celestial();
mountains();
fire();
props();
crosses();
text();
