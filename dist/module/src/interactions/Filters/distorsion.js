"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuickCommand_1 = require("../../abstract/QuickCommand");
class Distorsion extends QuickCommand_1.Command {
    get name() { return "distorsion"; }
    get description() { return "Enables/disables the distorsion filter. It can generate some pretty unique audio effects."; }
    get category() { return "Filters"; }
    get checks() { return { voice: true, dispatcher: true, channel: true, dj: true, vote: true }; }
    async run({ ctx: e }) { return e.dispatcher.player.filters.distorsion ? (e.dispatcher.player.clearFilters(), e.successMessage("⏱ Disabling the `Distorsion` filter to the current song...")) : (e.dispatcher.player.setDistortion({ sinOffset: 0, sinScale: 1, cosOffset: 0, cosScale: 1, tanOffset: 0, tanScale: 1, offset: 0, scale: 1 }), e.successMessage("⏱ Enabling the `Distorsion` filter to the current song...")); }
}
exports.default = Distorsion;
