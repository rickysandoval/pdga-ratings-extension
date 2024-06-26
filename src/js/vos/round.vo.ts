export interface Round {
    tournamentName: string;
    roundNumber: number;
    roundDate: number;
    roundRating: number;
    holes: number;
}

export interface SavedRound extends Round {
    id: string;
    pdgaNumber: string;
    dropped: boolean;
}
