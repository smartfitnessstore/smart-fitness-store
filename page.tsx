"use client";
import React from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Smart Treadmill X100",
    description: "AI-powered treadmill with real-time feedback and virtual coaching.",
    price: "$1,499",
    image: "/images/sample-product.jpg",
  },
  {
    id: 2,
    name: "FitBand Pro+",
    description: "Advanced fitness tracker with health metrics and workout suggestions.",
    price: "$199",
    image: "/images/sample-product.jpg",
  },
  {
    id: 3,
    name: "Smart Home Gym Kit",
    description: "All-in-one gym kit with smart weights and app integration.",
    price: "$899",
    image: "/images/sample-product.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-pink-500">Smart Fitness Equipment Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
