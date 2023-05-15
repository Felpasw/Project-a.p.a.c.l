type Gender = "Masculino" | "Feminino";

export default interface Pet {
  Type: string;
  _id: string;
  Name: string,
  History?: string,
  Gender: Gender,
  InHouseSince?: string
}

