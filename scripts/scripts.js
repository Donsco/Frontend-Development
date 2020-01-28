var isClass = (cl, el) => el.classList.contains(cl);
var on = (typ, el, cb) => el.addEventListener(typ, cb);
var move;

on("dragover", document, (e) => e.preventDefault());
on("dragend", document, (e) => e.target.style.opacity = 1);
on("dragstart", document, (e) => {
    move = e.target;
});
on("drop", document, (e) => {
    e.preventDefault();
    if (isClass("drag", e.target)) {
        move.remove();
        e.target.append(move);
    }
});

//Bron: https://stackoverflow.com/questions/44768987/how-to-change-an-image-by-dragging-another-one-towards-it