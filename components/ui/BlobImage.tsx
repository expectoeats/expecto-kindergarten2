"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type BlobVariant = "blob1" | "blob2" | "blob3";

const variantMap: Record<BlobVariant, string> = {
  blob1: "rounded-blob1",
  blob2: "rounded-blob2",
  blob3: "rounded-blob3",
};

const clipMap: Record<BlobVariant, string> = {
  blob1: "clip-blob-1",
  blob2: "clip-blob-2",
  blob3: "clip-blob-3",
};

interface BlobImageProps {
  src: string;
  alt: string;
  variant?: BlobVariant;
  width?: number;
  height?: number;
  className?: string;
  useClip?: boolean;
  priority?: boolean;
}

export default function BlobImage({
  src,
  alt,
  variant = "blob1",
  width = 600,
  height = 500,
  className = "",
  useClip = false,
  priority = false,
}: BlobImageProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${useClip ? clipMap[variant] : variantMap[variant]} ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 768px) 90vw, 50vw"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
