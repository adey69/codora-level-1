type ImageSourcePropType = import('react-native').ImageSourcePropType;

interface IBaseRecord {
  singles: number;
  doubles: number;
  triples: number;
}

interface IPlayer {
  name: string;
  picture: ImageSourcePropType;
  position: string;
  team: string;
  dateOfBirth: string;
  origin: string;
  height: string;
  weight: string;
  battingHand: string;
  throwingHand: string;
  plateAppearances: number;
  bases: IBaseRecord;
}
