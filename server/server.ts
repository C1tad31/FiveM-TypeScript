import PlayerData from "../utils/types";

RegisterCommand("warn", (source: number, args: string[], raw: string) => {
    if (args.length < 2) {
        console.log("Usage: /warn <playerID> <reason>");
        return;
    }

    const playerID = parseInt(args[0]);
    const reason = args.slice(1).join(" ");

    if (isNaN(playerID)) {
        console.log("Invalid player ID.");
        return;
    }

    console.log(`Player ${playerID} has been warned for: ${reason}`);
    console.log(`Player ${playerID} has been warned for: ${reason}`);
    TriggerEvent('codem-notification:Create', 'Warn Successful', 'info', `Successfully warned ${playerID} for ${reason}`, 5000)
});