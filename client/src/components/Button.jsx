export const Button = ({
    label,
    bg = "brand-50",
    variant = "solid",
    color = "brand-100",
    px = 8,
    py = 4,
    mx = 8,
    my = 4,
    w,
    h,
  }) => {
    // Define button class based on variant
    let buttonClass;
    switch (variant) {
      case "ghost":
        buttonClass = `text-${color} hover:bg-${bg}`;
        break;
      case "solid":
        buttonClass = `bg-${bg} text-${color}`;
        break;
      case "outline":
        buttonClass = `border border-${color} text-${color} hover:bg-${bg}`;
        break;
      default:
        buttonClass = `bg-${bg} text-${color}`;
        break;
    }
  
    // Construct button class string with all other props
    const className = `
      ${buttonClass}
      px-${px}
      py-${py}
      mx-${mx}
      my-${my}
      rounded
      transition-all 
      duration-150 
      ease-out 
      hover:ease-in 
      ${w ? `w-${w}` : ""}
      ${h ? `h-${h}` : ""}
    `;
  
    // Render button with label and class
    return <button className={className}>{label}</button>;
  };
  