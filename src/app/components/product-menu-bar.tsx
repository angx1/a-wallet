"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export function ProductMenuBar() {
  return (
    <div className="flex flex-row gap-2">
      <Button variant="outline">
        <span>Add to Cart</span>
      </Button>
      <Button>
        <span>Buy Now</span>
      </Button>
    </div>
  );
}
