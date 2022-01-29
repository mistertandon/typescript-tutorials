namespace PickNs {
  /**
   * Pick<Type, Keys>
   * Constructs a type by picking the set of properties Keys
   * (string literal or union of string literals) from Type.
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

    type Cricket = {
        Bat: string;
        Ball: string;
        Stumps: string;
    }
   */
  type Cricket = Pick<SportsAccessories, "Bat" | "Ball" | "Stumps">;

  /**
    Upon compilation answer would be 

    type Hockey = {
        HockeyStick: string;
        HockeyBall: string;
    }
   */
  type Hockey = Pick<SportsAccessories, "HockeyStick" | "HockeyBall">;
}
