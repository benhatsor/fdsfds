let copy = async (text) => {
  
  await navigator.clipboard.writeText(text);
  
}

document.onclick = (e) => {
    if (e.target.classList.contains('materialStyle')) { 
        copy(e.target.textContent);
    }
}
