import { Context } from "telegraf";

export interface SessionData {
  postLike: boolean;
}

export interface IBotContext extends Context {
  session: SessionData;
}
