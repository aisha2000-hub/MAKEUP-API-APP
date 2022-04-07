var express = require("express");
var axios = require("axios");
var router = express.Router();


const getData = async () => {
  try {
    const response = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json"
    );
    console.log(response.data);
    return response.data.slice(8,30);
 
  } catch (error) {
    throw error;
  }
};

/* GET home page. */
router.get("/", async (req, res) => {
  try {
    const data = await getData();
    res.render("index", {
      data: data
      
    });
  } catch (error) {
    console.log(error);
    return res.status(404).render("error", { message: error });
  }
});

module.exports = router;
