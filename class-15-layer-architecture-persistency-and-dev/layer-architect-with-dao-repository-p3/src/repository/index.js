import { Products } from "../dao/factory.js";
import ProductRepository from "./product.repository.js";

export const ProductService = new ProductRepository(new Products());
