const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const Reset = document.getElementById("Reset");
const tipPercent = document.querySelectorAll(".select-boxes span ,#custom");

// Make condition for bill input
billInput.addEventListener("input", () => {
  bill = +billInput.value;
  if (peopleInput.value > 0) {
    tippercent = 1 + tipc;
    total = bill * tippercent;
    tip = (total - bill) / peopleInput.value;

    document.getElementById("Tip").textContent = `$${tip.toFixed(2)}`;

    document.getElementById("Total").textContent = `$${(
      total / peopleInput.value
    ).toFixed(2)}`;
  }
});

// make conditions for tip content
tipPercent.forEach((e) => {
  if (e.localName.toLowerCase() == "span") {
    e.addEventListener("click", () => {
      tipPercent.forEach((el) => {
        el.classList.remove("active");
        e.classList.add("active");
        if (el.classList.contains("active")) {
          tipc = Number(el.textContent.split("%")[0]) / 100;
          if (peopleInput.value > 0 && bill > 0) {
            tippercent = 1 + tipc;
            total = bill * tippercent;
            tip = (total - bill) / peopleInput.value;

            document.getElementById("Tip").textContent = `$${tip.toFixed(2)}`;

            document.getElementById("Total").textContent = `$${(
              total / peopleInput.value
            ).toFixed(2)}`;
          }
        }
      });
    });
  } else {
    e.addEventListener("input", () => {
      if (e.value > 0) {
        tipc = Number(e.value) / 100;
        if (peopleInput.value > 0 && bill > 0) {
          tippercent = 1 + tipc;
          total = bill * tippercent;
          tip = (total - bill) / peopleInput.value;

          document.getElementById("Tip").textContent = `$${tip.toFixed(2)}`;

          document.getElementById("Total").textContent = `$${(
            total / peopleInput.value
          ).toFixed(2)}`;
        }
      }
    });
  }
});

// Make condition for people input
peopleInput.addEventListener("input", () => {
  if (peopleInput.value > 0) {
    tippercent = 1 + tipc;
    total = bill * tippercent;
    tip = (total - bill) / peopleInput.value;

    document.getElementById("Tip").textContent = `$${tip.toFixed(2)}`;

    document.getElementById("Total").textContent = `$${(
      total / peopleInput.value
    ).toFixed(2)}`;
  }
});

Reset.addEventListener("click", () => {
  tipPercent.forEach((e) => e.classList.remove("active"));
  bill = 0;
  tippercent = 0;
  total = 0;
  tip = 0;
  tipc = 0;
  peopleInput.value = "";
  billInput.value = "";
  document.getElementById("Tip").textContent = `$${tip.toFixed(2)}`;
  document.getElementById("Total").textContent = `$${total.toFixed(2)}`;
});

// Loader
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.opacity = 0;
    document.getElementById("loader").style.display = "none";
    document.getElementsByClassName("container")[0].style.display = "flex";
    setTimeout(() => {
      document.getElementsByClassName("container")[0].style.opacity = 1;
    }, 500);
  }, 3000);
};
