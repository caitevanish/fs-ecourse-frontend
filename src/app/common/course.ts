export class Course {
  id: number;
  user_id: number;
  title: string;
  company_id: number;
  price: number;
  date_purchased: Date;

  constructor(
    id: number,
    user_id: number,
    title: string,
    company_id: number,
    price: number,
    date_purchased: Date
  ) {
    (this.id = id),
      (this.user_id = user_id),
      (this.company_id = company_id),
      (this.title = title),
      (this.price = price),
      (this.date_purchased = date_purchased);
  }

  // constructor(
  //   public id: number,
  //   public user_id: number,
  //   public title: string,
  //   public company_id: number,
  //   public price: number,
  //   public date_purchased: number
  // ) {}
}
