function updateLastModifiedDate() {
    var lastModifiedContainer = document.getElementById('lastModified');
    var lastModifiedDate = document.lastModified;
    lastModifiedContainer.textContent = "Last modified: " + lastModifiedDate;
}

updateLastModifiedDate();
