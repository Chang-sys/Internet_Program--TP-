const Prices = require("../models/price");

const findById = async (id) => {
    try {
        const price = await Prices.findById(id);
        if (!price) {
            return {
                success: false,
                error: "Price not found"
            };
        }
        return {
            success: true,
            data: price
        };
    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
}

const findAll = async () => {
    try {
        return await Prices.find();
    } catch (e) {
        return {
            success: false,
            Error: e.message
        }
    }
}

const create = async (newPrice) => {
    try {
        const createdPrice = await Prices.create(newPrice);
        return {
            success: true,
            data: createdPrice
        }
    } catch (e) {
        return {
            success: false,
            Error: e.message
        }
    }
}

const update = async (_price) => {
    try {
        const price = await Prices.findById(_price.id);
        if (!price) {
            return {
                success: false,
                error: "Price not found"
            };
        }
        price.price = _price.price;
        price.source = _price.source;
        await price.save();
        return {
            success: true,
            data: price
        };
    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
};

const remove = async (id) => {
    try {
      await Prices.deleteOne({ _id: id });
      return {
        success: true,
        data: "Deleted"
      };
    } catch (err) {
      return {
        success: false,
        error: err.message
      };
    }
  };

module.exports = {
    update,
    remove,
    findAll,
    findById,
    create,
}