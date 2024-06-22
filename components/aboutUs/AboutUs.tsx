import { ProductWarraper } from "./style";

export default function AboutUs() {
  return (
    <ProductWarraper>
      <div className="aboutContainer">
        <span className="aboutTitle">ما کی هستیم؟</span>
        <p className="description">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
      </div>
      <div className="productConatiner">
        <div className="card">
          <img className="img" src="assets/images/1.jpg" />
          <p className="title">صندلی سفید با پایه های مارپیچ سفید</p>
          <p className="price">10,000,000 تومان</p>
        </div>
        <div className="card">
          <img className="img" src="assets/images/2.jpg" />
          <p className="title">صندلی مشکی با پایه های بلند</p>
          <p className="price">10,000,000 تومان</p>
        </div>
        <div className="card">
          <img className="img" src="assets/images/3.jpg" />

          <p className="title">صندلی قهوایی روشن با پایه های چوبی</p>
          <p className="price">10,000,000 تومان</p>
        </div>
      </div>
    </ProductWarraper>
  );
}
