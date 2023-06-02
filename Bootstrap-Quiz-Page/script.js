"use strict";

document.getElementById('changeImageButton').onclick = function() {
    var img = document.getElementById('imageToBeChanged');
    img.src = img.src.includes('/images/Bongo.Up.png') ? '/images/Bongo.Down.png' : '/images/Bongo.Up.png';
};
