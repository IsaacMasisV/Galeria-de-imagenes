const fullimgbox = document.getElementById("fullimgbox"),
fullimg = document.getElementById("fullimg");

function openfullimg(refarance){
    fullimgbox.style.display = "flex"
    fullimg.src = refarance
}

function closeImg(){
    fullimgbox.style.display = "none";
}



