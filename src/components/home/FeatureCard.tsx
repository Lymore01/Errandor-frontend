import React, { ForwardedRef } from "react";

import { motion } from "framer-motion";

const FeatureCard = React.forwardRef(
  (
    {
      title,
      description,
      icon,
    }: {
      title: string;
      description: string;
      icon: React.ReactNode | string;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <motion.div
        className="w-full h-auto rounded-md p-2 gap-4 flex flex-col bg-secondary/30 items-center justify-center cursor-pointer"
        ref={ref}
        transition={{ duration: 1, ease: "easeIn", type: "spring" }}
      >
        {icon}
        <h1 className="text-md capitalize font-semibold">{title}</h1>
        <p className="text-sm text-center">{description}</p>
      </motion.div>
    );
  }
);

export default FeatureCard;
