// src/components/Button.js
import Link from 'next/link';

const Button = ({ href, variant = 'primary', children, className, target, rel }) => {
  const baseClasses = "rounded-full font-medium transition-all duration-350 ease-in";
  
  const variants = {
    primary: "bg-[#C8705C] text-white hover:bg-[#FF7C5E]",
    secondary: "border border-[#3F3F3F] text-[#3F3F3F] hover:bg-[#3F3F3F] hover:text-white",
  };

  const variantClasses = variants[variant] || variants.primary;

  return (
    <Link href={href || '#'} className={`${baseClasses} ${variantClasses} ${className || ''}`} target={target} rel={rel}>
      {children}
    </Link>
  );
};

export default Button;