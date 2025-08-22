import { Component } from "@angular/core";
import { CardComponent } from "./component/card/card.component";
import { CardModel } from "./component/card/model/card.model";
import { CardBuilder } from "./component/card/builder/card.builder";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "portfolio";
  cards: Array<CardModel> = [];
  hide: boolean = true;

  constructor() {
    this.buildCards();
  }

  showPortfolio() {
    const profile = document.getElementById("profile");
    if (profile?.classList.contains("hide")) {
      profile.classList.remove("hide");
    } else {
      profile?.classList.add("hide");
    }
    this.hide = !this.hide;
  }

  private buildCards(): void {
    const letsgototalkclient = new CardBuilder()
      .setColor("rgb(240, 46, 170)")
      .setTitle("LetsGoTalkClient")
      .setCol("col-4")
      .setSubtitle("A simple chat server")
      .setContent(
        "This is a simple chat client built with Angular and Socket.IO.",
      )
      .setGithub("https://github.com/JavierAcevedoC/letsGoTalkClient")
      .setDemo(
        "https://github.com/JavierAcevedoC/letsGoTalk/raw/master/pics/good.png",
      )
      .build();
    this.cards.push(letsgototalkclient);

    const letsgototalk = new CardBuilder()
      .setColor("rgb(46, 240, 182)")
      .setTitle("LetsGoTalk")
      .setCol("col-4")
      .setSubtitle("A simple chat client")
      .setContent(
        "An app (server) to chat over the protocol WS written with Go and gorilla/websocket.",
      )
      .setGithub("https://github.com/JavierAcevedoC/letsGoTalk")
      .setDemo(
        "https://github.com/JavierAcevedoC/letsGoTalk/raw/master/pics/good.png",
      )
      .build();
    this.cards.push(letsgototalk);

    const mailgoing = new CardBuilder()
      .setColor("rgb(46, 182, 240)")
      .setTitle("MailGOing")
      .setCol("col-3")
      .setContent("Use smtp service with golang and a internal api using gin")
      .setGithub("https://github.com/JavierAcevedoC/mailGOing")
      .setDemo(
        "https://github.com/JavierAcevedoC/mailGOing/raw/master/pics/email_test.png",
      )
      .build();
    this.cards.push(mailgoing);

    const alpaca = new CardBuilder()
      .setColor("rgb(240, 140, 46)")
      .setTitle("Alpaca Plugin")
      .setCol("col-3")
      .setSubtitle("A plugin to generate responses")
      .setContent("A plugin for pop-launcher that use local LLM across IPC")
      .setGithub("https://github.com/JavierAcevedoC/alpaca")
      .setDemo(
        "https://github.com/JavierAcevedoC/alpaca/raw/master/pics/example3.png",
      )
      .build();
    this.cards.push(alpaca);

    const tmanager = new CardBuilder()
      .setColor("rgb(19, 175, 13)")
      .setTitle("ToDo Manager")
      .setCol("col-4")
      .setSubtitle("ToDo manager to create and see tasks by day.")
      .setContent(
        "A tmanager made with signals and the basic and common of angular dev.",
      )
      .setGithub("https://github.com/JavierAcevedoC/tmanager")
      .setDemo(
        "https://github.com/JavierAcevedoC/tmanager/raw/feature/first-look/pics/mobile_first_04.png",
      )
      .build();
    this.cards.push(tmanager);

    const spotibar = new CardBuilder()
      .setColor("rgb(0, 109, 89)")
      .setCol("col-4")
      .setTitle("Spotibar Plugin")
      .setContent(
        "Polybar plugin for Spotify that uses the Spotify Web API. Note that this requires a Spotify premium account.",
      )
      .setGithub("https://github.com/JavierAcevedoC/spotibar")
      .setDemo(
        "https://user-images.githubusercontent.com/2671067/111181789-3aa6b000-85a6-11eb-8511-da536700438a.png",
      )
      .build();
    this.cards.push(spotibar);
  }
}
