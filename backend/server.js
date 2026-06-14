const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

require("@dotenvx/dotenvx").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/generar-hash", (req, res) => {
  const { orderId, monto, divisa } = req.body;

  const integrityKey =
    process.env.BOLD_INTEGRITY_KEY;

  const cadena =
    `${orderId}${monto}${divisa}${integrityKey}`;

  const hash = crypto
    .createHash("sha256")
    .update(cadena)
    .digest("hex");

  res.json({ hash });
});

app.listen(3001, () => {
  console.log("Backend corriendo en puerto 3001");
});