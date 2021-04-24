const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("page chargée");

  // Bouton connectez-vous : affiche formulaire de contact modal

  $.querySelector("#btn-connect").addEventListener("click", () => {
    $.querySelector(".modal").classList.add("display");
  });

  // Bouton croix : ferme le formulaire modal

  $.querySelector("#btn-close").addEventListener("click", () => {
    $.querySelector(".modal").classList.remove("display");
  });

  // Bouton Envoyer les données du formulaire

  $.querySelector("#contact-form").addEventListener("submit", async (event) => {
    // event.preventDefault();

    if (firstname && lastname && email && message) {
      const data = {
        firstname: $.querySelector("#firstname").value,
        lastname: $.querySelector("#lastname").value,
        email: $.querySelector("#email").value,
        message: $.querySelector("#message").value,
      };

      console.log(data);

      const response = await axios.post("http://localhost:3000/form", data);

      console.log(response);

      alert("Merci pour votre message");
    } else {
      alert("Vous devez remplir tous les champs");
    }
  });
});
