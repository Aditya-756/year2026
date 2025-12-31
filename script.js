const demo = document.querySelector(".demo");

if (demo) {
  let processing = false;

  demo.addEventListener("click", () => {
    if (processing) return;
    processing = true;

    let reverting = false;

    const endListener = document.createElement("div");
    endListener.className = "demo-transitionend-listener";
    demo.appendChild(endListener);

    demo.offsetHeight; // force layout

    demo.classList.add("s--processing");

    endListener.addEventListener("transitionend", () => {
      if (reverting) return;
      reverting = true;

      demo.classList.add("s--reverting");

      setTimeout(() => {
        document.body.classList.add("page-exit");

        setTimeout(() => {
          window.location.href = "page2.html";
        }, 700);
      }, 1200);
    });
  });
}
