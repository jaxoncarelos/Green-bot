"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuickCommand_1 = require("../../abstract/QuickCommand");
class AlwaysOn extends QuickCommand_1.Command {
    get name() {
        return "247";
    }
    get aliases() {
        return ["247"];
    }
    get description() {
        return "Enables/Disables The 24/7 mode.";
    }
    get category() {
        return "Admin Commands";
    }
    get permissions() {
        return ["manageGuild"];
    }
    get checks() {
        return { vote: true };
    }
    async run({ ctx: e }) {
        return e.guildDB.h24
            ? ((e.guildDB.h24 = null), e.client.database.handleCache(e.guildDB), e.dispatcher && (e.dispatcher.metadata.guildDB.h24 = null), e.successMessage("🎧 24/7 mode: **Disabled**"))
            : ((e.guildDB.h24 = true), e.client.database.handleCache(e.guildDB), e.dispatcher && (e.dispatcher.metadata.guildDB.h24 = true), e.successMessage("🎧 24/7 mode: **Enabled**"));
    }
}
exports.default = AlwaysOn;
