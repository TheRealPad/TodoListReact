express = require("express"),
router = express.Router();

let todoSchema = require("../models/Todo");

router.post("/create-todo", (req, res, next) => {
	todoSchema.create(req.body, (error, data) => {
		if (error) {
			return next(error);
		} else {
			console.log(data);
			res.json(data);
		}
	});
});

router.get("/", (req, res) => {
	todoSchema.find((error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});

router
.route("/update-todo/:id")
.get((req, res, next) => {
	todoSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

.put((req, res, next) => {
	todoSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
			console.log(error);
			return next(error);
		} else {
			res.json(data);
			console.log("Student updated successfully !");
		}
	});
});

router.delete("/delete-todo/:id", (req, res, next) => {
	todoSchema.findByIdAndRemove(
		req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.status(200).json({
				msg: data,
			});
		}
	});
});

module.exports = router;
