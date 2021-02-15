const Client = require("./model");

const createClient = (req, res) => {
  const newClient = new Client(req.body);
  newClient.save((error, clientSaved) => {
    if (error) {
      console.error("Error saving client ", error);
      res.status(500).send(error);
    } else {
      res.send(clientSaved);
    }
  });
};

const deleteClient = (req, res) => {
  Client.findByIdAndDelete(req.params.id, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(result);
    }
  });
};

const getClient = (req, res) => {
  Client.findById(req.params.id, (error, client) => {
    if (error) {
      res.status(500).send(error);
    } else if (client) {
      res.send(client);
    } else {
      res.status(404).send({});
    }
  });
};

const getClients = (req, res) => {
  let query = req.query;
  if (req.query.name) {
    query = { name: new RegExp(`.*${req.query.name}.*`, "i") };
  }

  Client.find(query, (error, clients) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.send(clients);
    }
  });
};

const updateClient = (req, res) => {
  Client.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true },
    (error, result) => {
      if (error) {
        res.status(422).send(error);
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = {
  createClient,
  deleteClient,
  getClient,
  getClients,
  updateClient,
};
