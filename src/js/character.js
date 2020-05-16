/*
* Основной класс для всех персонажей
*/
export default class Character {
  /**
   * @param  {} name - имя персонажа
   */
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  /*
  * Метод для повышения уровня персонажа
   */
  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
    } else {
      throw new Error("Нельзя повысить level умершего");
    }
  }

  /*
  * Метод, вызываемый, когда наступает смерть персонажа
   */
  death() {
    this.health = 0;
  }
}
