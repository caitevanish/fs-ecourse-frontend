export class Course {
  constructor(
    public user_id: number,
    public title: string,
    public company_id: number,
    public price: number,
    public date_purchased: number
  ) {}
}
