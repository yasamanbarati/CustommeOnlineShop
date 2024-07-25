"use client";
import Image from "next/image";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { ImageListProps } from "@/_slice/type";

interface Props {
  Data: ImageListProps[];
}

const srcset = (
  image: string,
  containerWidth: number,
  size: number,
  rows = 1,
  cols = 1
) => {
  const width = Math.floor((containerWidth / cols) * size);
  return {
    src: `${image}?w=${width}&h=${width}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width}&h=${width}&fit=crop&auto=format&dpr=2 2x`,
  };
};

const ImageBox = ({ Data }: Props) => {
  return (
    <Box>
      <ImageList
        sx={{
          height: "auto",
          transform: "translateZ(0)",
          overflow: "hidden",
        }}
        rowHeight={250}
        cols={6}
        gap={16}
      >
        {Data.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{ height: `calc(${item.rows} * 125px)!important` }}
          >
            <Image
              // @ts-ignore
              {...srcset(item.img, 125, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              layout="fill"
              style={{ borderRadius: "10px" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default ImageBox;
