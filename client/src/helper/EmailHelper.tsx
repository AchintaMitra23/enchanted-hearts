import emailjs from "@emailjs/browser";

const sendEmail = async () => {
  try {
    let data = localStorage.getItem("valentineAns");

    if (data !== null && data.length > 0) {
      await emailjs.send(
        "service_pn02fvp",
        "template_ff7fhro",
        {
          name: "Nilanjana",
          answers: data,
          email: "nilanjanabasu12@gmail.com",
        },
        "yAsTnbyb3dYmcjagC",
      );

      localStorage.clear();
      return "Hey! I got your answers 💝";
    } else {
      return null;
    }
  } catch (error) {
    return "I haven't received your email 🥺";
  }
};

export default sendEmail;
