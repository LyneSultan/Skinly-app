export const routes = {
  login: "/auth/login",
  register: "/auth/register",
  veificationCode: "/auth/sendCode",
  skinDetection: "/skinDetection",
  ocr: "/ocr",
  advertisement: (productName: string) => "/advertisement/" + productName,
  getCompanyProducts: "/product/company",
  getProducts: (page: number, pageSize: number) => `/product?page=${page}&pageSize=${pageSize}`,
 }
