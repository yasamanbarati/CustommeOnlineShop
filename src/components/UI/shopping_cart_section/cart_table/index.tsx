"use client";

import { Grid, styled } from "@mui/material";

import ShoppingCard from "@/components/cards/shopping_card";
import { useSelector } from "react-redux";
import { RootState } from "@/setup/store";

const ShoppingCartBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "& h2": {
    fontSize: "1rem",
    lineHeight: "180%",
    textAlign: "right",
    color: theme.palette.black.main,
    borderBottom: `1px solid ${theme.palette.black.light}`,
    paddingBottom: "8px",
  },
  "& .cart-empty": {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: "600",
    color: theme.palette.neutral.dark,
  },
  "& .shopping-card:last-child": {
    borderBottom: 'none'
  }
}));

//   {
//     title: "مانتو زنانه",
//     price: 925000,
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
//     category: "زنانه",
//     image:
//       "https://dkstatics-public.digikala.com/digikala-products/d956782ea288a655961e3fc6f60c8d9faf650fc3_1693139802.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
//     rating: 4.8,
//     count: 15,
//     discount: 9,
//     id: "1",
//     quantity: 1,
//   },
//   {
//     title: "کیف چرم زنانه دوشی قهوه ای سرمه ای",
//     price: 850000,
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
//     category: "زنانه",
//     image:
//       "https://dkstatics-public.digikala.com/digikala-products/870759d73fa5b2000bb681d5d9190ac488ad1aff_1688910643.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
//     rating: 4.5,
//     count: 8,
//     discount: 9,
//     id: "2",
//     quantity: 1,
//   },
//   {
//     title: "کفش زنانه اسپرت راحت",
//     price: 420000,
//     description:
//       "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
//     category: "زنانه",
//     image:
//       "https://dkstatics-public.digikala.com/digikala-products/d3d4b4cb1c11bc3b78c4e3483df99431a32c94ff_1696261368.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
//     rating: 5,
//     count: 32,
//     discount: 9,
//     id: "3",
//     quantity: 1,
//   },
// ];
const CartTableSection = () => {
  const cart = useSelector((state: RootState) => state.shoppingCard.cartItems);

  return (
    <ShoppingCartBox item xs={12} md={8}>
      <h2>سبد خرید</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">سبد خرید شما خالی است.</p>
      ) : (
        <>
          {cart.map((item) => (
            <ShoppingCard carditem={item} />
          ))}
        </>
      )}
    </ShoppingCartBox>
  );
};

export default CartTableSection;
