import { Box, Grid, Typography, styled } from "@mui/material"
import { FooterFootnote } from "./footer_footnote/footer_footnote"
import Link from "next/link"
import { FooterContentLinks } from "./footer_content_link/footer_content_links"
import { FooterContentConnections } from "./footer_content_connections/footer_content_connections"
import { FooterContentScrollButton } from "./footer_content_scroll_button/footer_content_scroll_button"

const symbolsImage =[
  '/images/01.png',
  '/images/02.png',
  '/images/03 1.png' 
]

const FooterBox = styled(Box)(({ theme }) => ({
  marginTop: "30px",
  width: "100%",
  backgroundColor: theme.palette.neutral.main,
  minHeight: "500px",
  borderRadius: "33px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderTop : `1px solid ${theme.palette.primary.light}`,
  "& a": {
    textDecoration: "none",
  },
}))

const FooterContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  Height: "auto",
}))
const LogoBoxLink = styled(Link)(({ theme }) => ({
    fontSize:'1.5rem',
    lineHeight:'140%',
    fontWeight:'800',
    whiteSpace :'nowrap',
    color : theme.palette.black.main,
    marginBottom: '16px',
}))
const TrustSiteSection = styled('div')(({theme})=>({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop : `1px solid ${theme.palette.primary.light}`,
  padding: '30px 0'
}))
const TrustSiteArticle = styled('div')(({theme})=>({
  position: 'relative',
  marginLeft: '40px',
  overflow: 'hidden',
  height: '125px',
  "&::before":{
    content: `""`,
    position: 'absolute',
    background: 'linear-gradient(180deg,hsla(0,0%,100%,0) 50%,#fff)',
    height: '100%',
    width: '100%',
  },
}))
const SymbolImage = styled('img')(({theme})=>({
  width:'100px',
  height: '100px',
  padding: '16px',
  border: `1px solid ${theme.palette.black.light}`,
  borderRadius : '8px',
}))

export const Footer = () => {
  return (
    <>
    <FooterBox
    padding={{xs: '0 12px',sm:'0 20px',md:'0 48px',lg:'0 76px'}}> 
      <FooterContentBox>
        <FooterContentScrollButton />
        
      <Box
        sx={{
          margin: { lg: "40px 0", tabletL: "30px 0", xs: "20px 0" }
        }}>
        <LogoBoxLink href="/" style={{ display: "flex" }}>
          فروشگاه اینترنتی کاستومی
        </LogoBoxLink>
        <div style={{display:'flex'}}>
          <Typography variant='body2' component='p' ml={4}>تماس با پشتیبانی : 021-3456000</Typography>
          <Typography variant='body2' component='p' ml={4}>پاسخگویی ۲۴ ساعته ، ۷ روز هفته </Typography>
        </div>
      </Box>

      <Grid container justifyContent='flex-end' alignItems='baseline'>
          <FooterContentLinks />
          <FooterContentConnections />
      </Grid>
      </FooterContentBox>

    <TrustSiteSection>
      <TrustSiteArticle>
        <Typography component='h1' variant="h5" mb={4}>فروشگاه اینترنتی کاستومی، بررسی، انتخاب و خرید آنلاین</Typography>
        <Typography component='p' variant="body1" >یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی کاستومی سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
        یکی از مهم‌ترین دغدغه‌های کاربران کاستومی یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد. کاستومی شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات کاستومی، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست</Typography>
      </TrustSiteArticle>
      <div style={{display:'flex',gap:'16px'}}>
          {symbolsImage.map((item)=>{
                return <SymbolImage src={item} />
          })}
      </div>
    </TrustSiteSection>


    </FooterBox>
  <FooterFootnote />
  </>
  )
}
