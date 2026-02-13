import emailjs from "@emailjs/browser";

const sendEmail = async (isFlipkart?: boolean) => {
  try {
    if (isFlipkart) {
      await emailjs.send(
        "service_pn02fvp",
        "template_amp1yp8",
        {
          to_name: "Kutus",
          pin: "135579",
          number: "6000 - 1710 - 2959 - 1762",
        },
        "yAsTnbyb3dYmcjagC",
      );
      return "Sent your gift to nilanjanabasu12@gmail.com 🥳";
    } else {
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
    }
  } catch (error) {
    return "I haven't received your email 🥺";
  }
};

export default sendEmail;
