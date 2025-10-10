import asyncHandler from "express-async-handler";
import axios from "axios";

export const getZohoAuth = asyncHandler(async (req, res) => {
  const url = `${process.env.ZOHO_ACCOUNTS_URL}/oauth/v2/auth?scope=ZohoCRM.modules.ALL,ZohoCRM.settings.ALL&client_id=${process.env.ZOHO_CLIENT_ID}&response_type=code&access_type=offline&redirect_uri=${process.env.ZOHO_REDIRECT_URI}`;
  res.redirect(url);
});

export const handleZohoCallback = asyncHandler(async (req, res) => {
  const { code } = req.query;
  if (!code) {
    res.status(400);
    throw new Error("No authorization code provided");
  }

  const tokenRes = await axios.post(`${process.env.ZOHO_ACCOUNTS_URL}/oauth/v2/token`, null, {
    params: {
      code,
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      redirect_uri: process.env.ZOHO_REDIRECT_URI,
      grant_type: "authorization_code",
    },
  });

  const { access_token, refresh_token } = tokenRes.data;
  console.log("✅ Access Token:", access_token);
  console.log("🔁 Refresh Token:", refresh_token);

  res.send("✅ Zoho connected successfully!");
});

export const createZohoLead = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const tokenResponse = await axios.post(`${process.env.ZOHO_ACCOUNTS_URL}/oauth/v2/token`, null, {
    params: {
      refresh_token: process.env.ZOHO_REFRESH_TOKEN,
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      grant_type: "refresh_token",
    },
  });

  const { access_token } = tokenResponse.data;

  const crmRes = await axios.post(
    `${process.env.ZOHO_API_DOMAIN}/crm/v2/Leads`,
    {
      data: [
        {
          First_Name: firstName,
          Last_Name: lastName,
          Email: email,
          Phone: phone,
          Description: message,
        },
      ],
    },
    {
      headers: { Authorization: `Zoho-oauthtoken ${access_token}` },
    }
  );

  res.status(201).json({
    success: true,
    message: "Lead created successfully in Zoho CRM",
    zohoResponse: crmRes.data,
  });
});
