"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuickCommand_1 = require("../../abstract/QuickCommand");
class EightD extends QuickCommand_1.Command {
    get name() { return "8d"; }
    get description() { return "Enables/disables the 8d filter. It can generate some pretty unique audio effects."; }
    get category() { return "Filters"; }
    get checks() { return { voice: true, dispatcher: true, channel: true, vote: true }; }
    async run({ ctx: e }) { return e.dispatcher.filters.includes("8d") ? (e.dispatcher.player.setRotation(), e.dispatcher.filters = e.dispatcher.filters.filter(e => "8d" !== e), e.successMessage("⏱ The `8d` filter has been disabled.")) : (e.dispatcher.player.setRotation({ rotationHz: .2 }), e.dispatcher.filters.push("8d"), e.successMessage("⏱ Enabling the `8d` filter to the current song...")); }
}
exports.default = EightD;
