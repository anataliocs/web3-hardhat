const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Lock", (m) => {

    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const unlockTime = currentTimestampInSeconds + 60;

    const lock = m.contract("Lock", [unlockTime]);

    return lock;
});