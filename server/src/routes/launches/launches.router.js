const express = require("express");
const { httpGetAllLaunches, httpAddNewLaunche, httpAbortLaunch } = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunche);
launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;
