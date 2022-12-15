class Page {
  constructor(
    id = 0,
    name = "Title missing",
    thumbnail = "/images/jpg/missing.jpg",
    link = "/"
  ) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
    this.link = link;
  }
}

export default Page;
