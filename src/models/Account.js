export class Profile {
  constructor(data) {
    this.id = data._id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.graduated = data.graduated
    this.coverImg = data.coverImg
    this.class = data.class
    this.github = data.github
    this.linkedin = data.linkedin
    this.graduated = data.graduated
    // TODO add additional properties if needed
  }
}

export class Account extends Profile {
  constructor(data) {
    super(data)
    this.email = data.email
  }
}
