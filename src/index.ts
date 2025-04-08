import express from "express";

const app = express();

app.get("/", (req, res) => {
  const data = await PrismaClient.user.findMany();
  res.json({
    data,
  });
});

app.post("/", (req, res) => {
  await PrismaClient.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  res.json({
    message: "post endpoint",
  });
});

app.listen(3000);
