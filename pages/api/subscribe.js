import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: "b98c11ff866018f769a5063edc69f1ae-us4",
  server: "us4" // e.g. us1
});

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await mailchimp.lists.addListMember("5be9d1f906", {
      email_address: email,
      status: "subscribed"
    });

    return res.status(201).json({ error: "" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
