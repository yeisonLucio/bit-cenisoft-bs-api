const Sale = require("../sale/model");

const createDetail = (req, res) => {
  const { idSale, idBook, bookName, unitValue, amount } = req.body;

  Sale.findById(idSale, (error, sale) => {
    if (error) {
      res.status(500).send(error);
    } else if (sale) {
      sale.details.push({
        idBook,
        bookName,
        unitValue,
        amount,
      });

      sale.save((error, saleSaved) => {
        if (error) {
          console.error("Error saving sale ", error);
          res.status(500).send(error);
        } else {
          res.send(saleSaved);
        }
      });
    } else {
      res.status(404).send({});
    }
  });
};

const deleteDetail = (req, res) => {
  const { idSale, id } = req.params;

  Sale.findById(idSale, (error, sale) => {
    if (error) {
      res.status(500).send(error);
    } else if (sale) {
      sale.details.id(id).remove();

      sale.save((error, saleSaved) => {
        if (error) {
          console.error("Error saving sale ", error);
          res.status(500).send(error);
        } else {
          res.send(saleSaved);
        }
      });
    } else {
      res.status(404).send({});
    }
  });
};

const getDetail = (req, res) => {
  const { idSale, id } = req.params;

  Sale.findById(idSale, (error, sale) => {
    if (error) {
      res.status(500).send(error);
    } else if (sale) {
      let detail = sale.details.id(id);
      res.send(detail);
    } else {
      res.status(404).send({});
    }
  });
};

const getDetails = (req, res) => {
  let idSale = req.params.idSale;
  Sale.findById(idSale, (error, sale) => {
    if (error) {
      res.status(500).send(error);
    } else if (sale) {
      let details = sale.details;
      res.send(details);
    } else {
      res.status(404).send({});
    }
  });
};

const updateDetail = (req, res) => {
  let id = req.params.id;
  const { idSale, idBook, bookName, unitValue, amount } = req.body;

  Sale.findOneAndUpdate(
    { _id: idSale, "details._id": id },
    {
      $set: {
        "details.$.idBook": idBook,
        "details.$.bookName": bookName,
        "details.$.unitValue": unitValue,
        "details.$.amount": amount,               
      },
    },
    { new: true, runValidators: true },
    (error, sale) => {
      if (error) {
        res.status(500).send(error);
      } else if (sale) {
        res.send(sale);
      }
    }
  );
};

module.exports = {
  createDetail,
  deleteDetail,
  getDetail,
  getDetails,
  updateDetail,
};
