exports.sayHello = (req, res) => {
  const rawName = req.params.name || '';
  // Basic sanitize: trim and escape any HTML
  const name = String(rawName).trim();
  res.json({ message: `Hello ${name}, welcome to API` });
};
