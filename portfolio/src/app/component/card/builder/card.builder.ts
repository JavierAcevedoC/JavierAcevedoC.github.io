import { CardModel } from "../model/card.model";
import { Builder } from '../../interface/builder';

export class CardBuilder implements Builder<CardModel> {

  private card: CardModel = new CardModel();

  setGithub(github: string): CardBuilder {
    this.card.github = github;
    return this;
  }

  setDemo(demo: string): CardBuilder {
    this.card.demo = demo;
    return this;
  }

  setSubtitle(subtitle: string): CardBuilder {
    this.card.subtitle = subtitle;
    return this;
  }

  setTitle(title: string): CardBuilder {
    this.card.title = title;
    return this;
  }

  setContent(content: string): CardBuilder {
    this.card.content = content;
    return this;
  }

  setImageUrl(imageUrl: string): CardBuilder {
    this.card.imageUrl = imageUrl;
    return this;
  }

  setColor(color: string): CardBuilder {
    this.card.color = color;
    return this;
  }

  build(): CardModel {
    return this.card;
  }

}
