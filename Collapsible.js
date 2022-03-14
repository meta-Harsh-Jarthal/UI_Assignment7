var coll = document.getElementsByClassName("collapse");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        collapse(this);
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        }
        content.classList.toggle("active");
    });
}

(function () {

    var col1 = document.getElementsByClassName("nav-item");
    for (var i = 0; i < col1.length - 1; i++) {
        col1[i].addEventListener("click", function () {
            collapse(this);
            const str = new String(this.getAttribute('href'));
            var var2 = document.getElementById(str.substr(1));
            var2.classList.add("active");
            var content = var2.nextElementSibling;
            content.classList.add("active");

        });
    }
})()

function collapse(present) {
    for (var j = 0; j < coll.length - 1; j++) {
        if (coll[j].classList[1] == 'active' && coll[j] !== present) {
            coll[j].classList.remove("active");
            coll[j].nextElementSibling.classList.remove("active");
        }

    }
}