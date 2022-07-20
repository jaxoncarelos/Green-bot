"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuickCommand_1 = require("../../abstract/QuickCommand");
class Filters extends QuickCommand_1.Command {
    get name() { return "filters"; }
    get description() { return "Shows all enabled filters"; }
    get category() { return "Filters"; }
    get aliases() { return ["filter", "list"]; }
    get checks() { return { voice: true, dispatcher: true, channel: true }; }
    async run({ ctx: e }) { const a = e.dispatcher.player.filters; e.reply({ embeds: [{ author: { name: "Enabled filters", icon_url: e.client.user.dynamicAvatarURL() }, color: 0x3A871F, description: `__• Music filters:__\nBassboost: ${a.equalizer.length ? "`Enabled`" : "`Disabled`"} | Karaoke: ${a.karaoke ? "`Enabled`" : "`Disabled`"} | Tremolo: ${a.tremolo ? "`Enabled`" : "`Disabled`"} | Vibrato: ${a.vibrato ? "`Enabled`" : "`Disabled`"}\n Distorsion: ${a.distorsion ? "`Enabled`" : "`Disabled`"} | Rotation: ${a.rotation ? "`Enabled`" : "`Disabled`"} | Nightcore: ${a.timescale ? "`Enabled`" : "`Disabled`"} | Low pass: ${a.lowPass ? "`Enabled`" : "`Disabled`"}\n\n__• Other filters:__\nVolume: **${100 * a.volume}** | Speed: **${a.timescale ? a.timescale.speed : "1"}**`, footer: { text: "Green-bot | Free music for everyone!", icon_url: e.client.user.dynamicAvatarURL() } }] }); }
}
exports.default = Filters;
