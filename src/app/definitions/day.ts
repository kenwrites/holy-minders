export interface Celebration {
    colour: string;
    rank: string;
    rank_num: number;
    title: string;
}

export interface Day {
    date: string;
    season: string;
    season_week: number;
    celebrations: Celebration[];
    weekday: string;
    error: Error;
}

export interface FormattedDay extends Day {
    date: string;
    season: string;
    season_week: number;
    celebrations: Celebration[];
    weekday: string;
    error: Error;
    JSDate: Date;
    month: string;
  }

