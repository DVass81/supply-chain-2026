function setYear(){
  const el = document.getElementById("year");
  if(el) el.textContent = new Date().getFullYear();
}

function bindLocalCheckboxes(selector, storagePrefix){
  const boxes = document.querySelectorAll(selector);
  boxes.forEach(cb => {
    const key = `${storagePrefix}:${cb.dataset.progress || cb.dataset.skill}`;
    const saved = localStorage.getItem(key);
    if(saved === "1") cb.checked = true;

    cb.addEventListener("change", () => {
      localStorage.setItem(key, cb.checked ? "1" : "0");
    });
  });
}

function bindReset(buttonId, selector, storagePrefix){
  const btn = document.getElementById(buttonId);
  if(!btn) return;
  btn.addEventListener("click", () => {
    const boxes = document.querySelectorAll(selector);
    boxes.forEach(cb => {
      const key = `${storagePrefix}:${cb.dataset.progress || cb.dataset.skill}`;
      cb.checked = false;
      localStorage.removeItem(key);
    });
  });
}

setYear();
bindLocalCheckboxes('input[type="checkbox"][data-progress]', "progress");
bindLocalCheckboxes('input[type="checkbox"][data-skill]', "skills");
bindReset("resetProgress", 'input[type="checkbox"][data-progress]', "progress");
bindReset("resetSkills", 'input[type="checkbox"][data-skill]', "skills");
