const Sale = require("./model");

const createSale = (req, res) => {
  const newSale = new Sale(req.body);
  newSale.save((error, saleSaved) => {
    if (error) {
      console.error("Error saving sale ", error);
      res.status(500).send(error);
    } else {
      res.send(saleSaved);
    }
  });
};

const deleteSale = (req, res) => {
  Sale.findByIdAndDelete(req.params.id, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(result);
    }
  });
};

const getSale = (req, res) => {
  Sale.findById(req.params.id, (error, sale) => {
    if (error) {
      res.status(500).send(error);
    } else if (sale) {
      res.send(sale);
    } else {
      res.status(404).send({});
    }
  });
};

const getSales = (req, res) => {
  Sale.find({}, (error, sales) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.send(sales);
    }
  });
};

const updateSale = (req, res) => {
  Sale.findOneAndUpdate(
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
  createSale,
  deleteSale,
  getSale,
  getSales,
  updateSale,
};
