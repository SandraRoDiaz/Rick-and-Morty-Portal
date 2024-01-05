"use client";
import React from "react";

interface CustomButtonProps {
  text: string;
  handleClick: () => void;
}

export default function CustomButton({ text, handleClick }: CustomButtonProps) {
  return (
    <button
      className="bg-cyan hover:opacity-80 py-2 px-4 rounded"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
