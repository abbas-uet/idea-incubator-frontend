// ----------------------------------------------------------------------
import img1 from "../../Utils/static/mock-images/avatars/avatar_1.jpg";

import img2 from "../../Utils/static/mock-images/avatars/avatar_2.jpg";

import img3 from "../../Utils/static/mock-images/avatars/avatar_3.jpg";

import img4 from "../../Utils/static/mock-images/avatars/avatar_4.jpg";

import img5 from "../../Utils/static/mock-images/avatars/avatar_5.jpg";

const array = [img1, img2, img3, img4, img5];
export const mockImgCover = (index) => `/static/mock-images/covers/cover_${index}.jpg`;
export const mockImgProduct = (index) => `/static/mock-images/products/product_${index}.jpg`;
export const mockImgAvatar = (index) => array[index - 1]
