const express = require("express");
const { getSpreadSheetValues } = require("./googleSheetServices");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

app.get("/api/sheet-data", async (req, res) => {
  const emploreeData = await getSpreadSheetValues({
    spreadsheetId: process.env.SHEET_URL,
    sheetName: "Sheet1",
  });
  res.send(emploreeData.slice(1));
});

app.listen(5000, () => {
  console.log("server started");
});
