const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("document chargée");

  //mes éléments sous forme de variable
  const btContact = $.querySelector("#btn-contact");
  const btClose = $.querySelector("#btn-close");
  const contactForm = $.querySelector("#contact-form");
  const btSend = $.querySelector("#btn-send");
  const msgInfos = $.querySelector("#msg-infos");

  // Bouton connectez-vous : affiche formulaire de contact modal

  btContact.addEventListener("click", () => {
    $.querySelector(".modal").classList.add("display");
  });

  // Bouton croix : ferme le formulaire modal

  btClose.addEventListener("click", () => {
    $.querySelector(".modal").classList.remove("display");
  });

  // Bouton Envoyer les données du formulaire

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    btSend.setAttribute("disabled", "disabled");
    btSend.classList.add("btn-disabled");

    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      message: $.querySelector("#message").value,
    };

    console.log(data);

    const response = await axios.post(
      "https://form-trip-advisor-api-lily.herokuapp.com/",
      data
    );

    console.log(response);

    if (response.status !== 200) {
      alert("Le formulaire n'a pu être envoyé");
      btSend.removeAttribute("disabled");
      btSend.classList.remove("btn-disabled");
    } else {
      btSend.removeAttribute("disabled");
      btSend.classList.remove("btn-disabled");
      msgInfos.classList.remove("msg-hidden");
      contactForm.reset();
    }
  });
});
