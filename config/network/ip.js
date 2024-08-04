"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIPAddresses = getIPAddresses;
function getIPAddresses(OS) {
    const interfaces = OS.networkInterfaces();
    const addresses = [];
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            const { family, address, internal } = iface;
            if (!internal) {
                addresses.push({ family, address });
            }
        }
    }
    return addresses;
}
