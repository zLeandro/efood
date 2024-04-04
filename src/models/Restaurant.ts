class Resturant {
  description: string;
  image: string;
  infos: string[];
  title: string;
  classification: string;
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    classification: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.classification = classification
  }
}

export default Resturant
