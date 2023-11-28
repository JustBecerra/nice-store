"use client";
import { ProductDetail } from "@/components/ProductDetail";
import { fetchProduct } from "@/redux/features/product-slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProductPage = ({ params }: { params: { id: number } }) => {
  const product = useAppSelector((state) => state.productReducer.productDetail);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProduct(params.id));
  }, [dispatch, params.id]);
  return <ProductDetail item={product} />;
};

export default ProductPage;
