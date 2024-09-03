import { Children } from "react";

interface Children {
    children?: React.ReactNode;
}

interface BackgroundGradientAnimationProps extends Children {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    size?: string;
    blendingValue?: string;
};

interface FloatingIconsProps extends Children {
    icons?: string[];
    iconColor?: string;
    floatDirectionReverse?: boolean;
    iconClasses?: string;
};

export { BackgroundGradientAnimationProps, FloatingIconsProps, Children };
