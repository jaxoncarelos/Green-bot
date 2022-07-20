"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuickCommand_1 = require("../../abstract/QuickCommand");
class Bassboost extends QuickCommand_1.Command {
    get name() { return "bassboost"; }
    get description() { return "Enables/disables the bassboost filter. It can generate some pretty unique audio effects."; }
    get category() { return "Filters"; }
    get checks() { return { voice: true, dispatcher: true, channel: true, dj: true, vote: true }; }
    async run({ ctx: e }) { return e.dispatcher.player.filters.equalizer.length ? (e.dispatcher.player.clearFilters(), e.successMessage("⏱ Disabling the `bassboost` filter to the current song...")) : (e.dispatcher.player.setEqualizer([{ band: 0, gain: .31 }, { band: 1, gain: .31 }, { band: 2, gain: .31 }, { band: 3, gain: .31 }]), e.successMessage("⏱ Enabling the `bassboost` filter to the current song...")); }
}
exports.default = Bassboost;
