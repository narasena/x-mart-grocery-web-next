import { z } from "zod"

const productCrudSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().optional(),
  price: z.coerce.number().min(1, {
    message: "Price must be at least 1.",
  }),
  stock: z.coerce.number().min(1, {
    message: "Stock must be at least 1.",
  }),
  productSubCategory: z.number(),
  image: z.array(z.url().optional()).optional(),
})

export default productCrudSchema