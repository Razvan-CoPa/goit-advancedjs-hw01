let formData = { email: "", message: "", name: "", phone: ""};

const form = document.querySelector("#feedback-form");
const messageTextarea = form.elements.message;
const nameInput = form.elements.name;
const phoneInput = form.elements.phone;
const emailInput = form.elements.email;
const STORAGE_KEY = "feedback-form-state";
const savedData = localStorage.getItem(STORAGE_KEY);

if(savedData){
  formData = JSON.parse(savedData); // Parse the saved data
  emailInput.value = formData.email || ""; // Prefill email
  messageTextarea.value = formData.message || ""; // Prefill message
  nameInput.value = formData.name || "";
  phoneInput.value = formData.phone || "";
}


form.addEventListener("input", (evt) => {
  if (typeof formData !== "object" || formData === null) {
    formData = { email: "", message: "", name: "", phone: ""}; // Reset formData
  }

  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  
  if (!formData.email || !formData.message || !formData.name || !formData.phone) {
    alert("Please fill in all fields");
    return;
  }

  console.log("Form submitted:", formData);
  formData = { email: "", message: "", name: "", phone: ""};
  form.reset();
});