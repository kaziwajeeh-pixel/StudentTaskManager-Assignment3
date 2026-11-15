const StudentTaskManager = artifacts.require("StudentTaskManager");

module.exports = function (deployer) {
    deployer.deploy(StudentTaskManager);
};