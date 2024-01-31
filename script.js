function toggleFAQ(id) {
  var content = document.getElementById(id);
  var section = document.querySelector('#faq ' + '#' + id);

  if (content.style.display === "block") {
    content.style.display = "none";
    section.classList.remove('open');
  } else {
    content.style.display = "block";
    section.classList.add('open');
  }
}
