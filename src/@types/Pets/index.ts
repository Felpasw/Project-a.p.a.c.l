type Gender = "Masculino" | "Feminino";

export default interface Pet {
  type: string;
  _id: string;
  name: string,
  history?: string,
  gender: Gender,
  inHouseSince?: string
  urlImage: string
}

