function MyFunction() {
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("lastname", "Smith");
        localStorage.firstname= "Jacek";
        // Retrieve
        document.getElementById("localstorage").innerHTML = localStorage.firstname
        document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    }
    else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}