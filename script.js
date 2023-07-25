const text = "Hi! I am Krizsha!";
let index = 0;
const speed = 100; // Speed of typing (in milliseconds)
let isTypewriterRunning = false; // Flag variable to track if typewriter effect is running

function typeWriter() {
  if (index < text.length) {
    document.getElementById("welcome").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    isTypewriterRunning = false; // Reset the flag once typewriter effect completes
  }
}

typeWriter();

function typeEducation() {
  if (!isTypewriterRunning) {
    isTypewriterRunning = true; // Set the flag before starting the typewriter effect

    const educationText = "Educational Background";
    let educationIndex = 0;
    const educationSpeed = 100; // Speed of typing (in milliseconds)

    function type() {
      if (educationIndex < educationText.length) {
        document.getElementById("education").innerHTML = educationText.substring(0, educationIndex + 1);
        educationIndex++;
        setTimeout(type, educationSpeed);
      } else {
        isTypewriterRunning = false; // Reset the flag once typewriter effect completes
      }
    }

    type();
  }
}

function typeHireMe() {
  if (!isTypewriterRunning) {
    isTypewriterRunning = true; // Set the flag before starting the typewriter effect

    const hireMeText = "Hire Me To";
    let hireMeIndex = 0;
    const hireMeSpeed = 100; // Speed of typing (in milliseconds)

    function type() {
      if (hireMeIndex < hireMeText.length) {
        document.getElementById("hiremeTypewriter").innerHTML = hireMeText.substring(0, hireMeIndex + 1);
        hireMeIndex++;
        setTimeout(type, hireMeSpeed);
      } else {
        isTypewriterRunning = false; // Reset the flag once typewriter effect completes
      }
    }

    type();
  }
}
function typeSkill() {
  if (!isTypewriterRunning) {
    isTypewriterRunning = true; // Set the flag before starting the typewriter effect

    const SkillsText = "Skills & Experiences";
    let SkillIndex= 0;
    const SkillsSpeed= 100; // Speed of typing (in milliseconds)

    function type() {
      if (SkillIndex < SkillsText.length) {
        document.getElementById("sne").innerHTML = SkillsText.substring(0, SkillIndex + 1);
        SkillIndex++;
        setTimeout(type, SkillsSpeed);
      } else {
        isTypewriterRunning = false; // Reset the flag once typewriter effect completes
      }
    }

    type();
  }
}
function typeContact() {
  if (!isTypewriterRunning) {
    isTypewriterRunning = true; // Set the flag before starting the typewriter effect

    const ContactText = "Send Me a Message";
    let ContactIndex = 0;
    const ContactSpeed = 100; // Speed of typing (in milliseconds)

    function type() {
      if (ContactIndex < ContactText.length) {
        document.getElementById("contactType").innerHTML = ContactText.substring(0, ContactIndex + 1);
        ContactIndex++;
        setTimeout(type, ContactSpeed);
      } else {
        isTypewriterRunning = false; // Reset the flag once typewriter effect completes
      }
    }

    type();
  }
}

document.getElementById("startTypewriter").addEventListener("click", function() {
  if (!isTypewriterRunning) {
    typeEducation();
  }
  const educationDiv = document.querySelector(".education");
  educationDiv.classList.add("show-education");
});

document.getElementById("dropdownMenu2").addEventListener("click", function() {
  if (!isTypewriterRunning) {
    typeHireMe();
  }
  const hiremeDiv = document.querySelector(".hireme");
  hiremeDiv.classList.add("show-hireme");
});


document.getElementById("skillstyping").addEventListener("click", function() {
  if (!isTypewriterRunning) {
    typeSkill();
  }
  const skillDiv = document.querySelector(".skills");
  skillDiv.classList.add("show-skills");
});

document.getElementById("contactTyping").addEventListener("click", function() {
  if (!isTypewriterRunning) {
    typeContact();
  }
  const contactDiv = document.querySelector(".contact");
  contactDiv.classList.add("show-contact");
});