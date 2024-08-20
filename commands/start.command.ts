import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../src/context/context.interface";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.start((ctx) => {
      console.log(ctx.session);
      ctx.reply(
        "Вам понравился пост?",
        Markup.inlineKeyboard([
          Markup.button.callback("👍", "post_like"),
          Markup.button.callback("👎", "post_dislike"),
        ])
      );
    });

    this.bot.action("post_like", (ctx) => {
      ctx.session.postLike = true;
      ctx.editMessageText("😎 Круто");
    });

    this.bot.action("post_dislike", (ctx) => {
      ctx.session.postLike = false;
      ctx.editMessageText("😕");
    });
  }
}
