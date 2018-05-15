function hideWhenClicked() {
  const hideThisDiv = document.getElementById('hide_this');
  hideThisDiv.addEventListener('click', (event) => {
    hideThisDiv.innerHTML = "";
  });
}

function hideLink() {
  const hideThisDiv = document.getElementById('hide_this');
  hideThisDiv.innerHTML = "";
}

hideWhenClicked();
