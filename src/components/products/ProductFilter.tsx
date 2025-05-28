"use client";

import { Button } from "@/components/ui/button";
import { productCategories } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProductFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function ProductFilter({ selectedCategory, onSelectCategory }: ProductFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {productCategories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onSelectCategory(category)}
          className="button-interactive"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
