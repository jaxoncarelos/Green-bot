"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuickCommand_1 = require("../../abstract/QuickCommand");
class Distorsion extends QuickCommand_1.Command {
    get name() { return "distorsion"; }
    get description() { return "Enables/disables the distorsion filter. It can generate some pretty unique audio effects."; }
    get category() { return "Filters"; }
    get checks() { return { voice: true, dispatcher: true, channel: true, vote: true }; }
    async run({ ctx: e }) { return e.dispatcher.filters.includes("distorsion") ? (e.dispatcher.player.setDistortion(), e.dispatcher.filters = e.dispatcher.filters.filter(e => "distorsion" !== e), e.successMessage("⏱ The `Distorsion` filter has been disabled.")) : (e.dispatcher.player.setDistortion({ sinOffset: 0, sinScale: 1, cosOffset: 0, cosScale: 1, tanOffset: 0, tanScale: 1, offset: 0, scale: 1 }), e.dispatcher.filters.push("distorsion"), e.successMessage("⏱ Enabling the `Distorsion` filter to the current song...")); }
}
exports.default = Distorsion;
