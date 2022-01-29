namespace OmitNs {
  /**
   * Omit<Type, Keys>
   * Constructs a type by picking all properties from Type
   * and then removing Keys (string literal or union of string literals).
   */

  interface SportsAccessories {
    HockeyStick: string;
    HockeyBall: string;
    HockeyGlove: string;
    Bat: string;
    Ball: string;
    Stumps: string;
  }

  /**
      Upon compilation answer would be
  
      type Criket = {
          Bat: string;
          Ball: string;
          Stumps: string;
      }
     */
  type Cricket = Omit<SportsAccessories, "HockeyStick" | "HockeyBall">;
}
