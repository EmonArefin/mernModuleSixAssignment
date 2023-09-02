const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogController");
router.get("/one", blogController.create);
router.get("/two", blogController.read);
router.get("/three", blogController.delete);
router.get("/four", blogController.update);

const blogDetailsController = require("../controllers/blogDetailsController");
router.get("/five", blogDetailsController.create);
router.get("/six", blogDetailsController.read);
router.get("/seven", blogDetailsController.delete);
router.get("/eight", blogDetailsController.update);

const commentController = require("../controllers/commentController");
router.get("/nine", commentController.create);
router.get("/ten", commentController.read);
router.get("/eleven", commentController.delete);
router.get("/twelve", commentController.update);

const messageController = require("../controllers/messageController");
router.get("/thirteen", messageController.create);
router.get("/fourteen", messageController.read);
router.get("/fifteen", messageController.delete);
router.get("/sixteen", messageController.update);

const portfolioController = require("../controllers/portfolioController");
router.get("/seventeen", portfolioController.create);
router.get("/eighteen", portfolioController.read);
router.get("/nineteen", portfolioController.delete);
router.get("/twenty", portfolioController.update);

const productController = require("../controllers/productController");
router.get("/twentyone", productController.create);
router.get("/twentytwo", productController.read);
router.get("/twentythree", productController.delete);
router.get("/twentyfour", productController.update);

const profitController = require("../controllers/profitController");
router.get("/twentyfive", profitController.create);
router.get("/twentysix", profitController.read);
router.get("/twentyseven", profitController.delete);
router.get("/twentyeight", profitController.update);

const projectController = require("../controllers/projectController");
router.get("/twentynine", projectController.create);
router.get("/thirty", projectController.read);
router.get("/thirtyone", projectController.delete);
router.get("/thirtytwo", projectController.update);

const serviceController = require("../controllers/serviceController");
router.get("/thirtythree", serviceController.create);
router.get("/thirtyfour", serviceController.read);
router.get("/thirtyfive", serviceController.delete);
router.get("/thirtysix", serviceController.update);

const titleController = require("../controllers/titleController")
router.get("/thirtyseven", titleController.create);
router.get("/thirtyeight", titleController.read);
router.get("/thirtynine", titleController.delete);
router.get("/fourty", titleController.update);

module.exports = router;