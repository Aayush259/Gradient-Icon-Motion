
interface BackgroundGradientAnimationProps {
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

interface FloatingIconsProps {
    icons?: string[];
    iconColor?: string;
    floatDirectionReverse?: boolean;
    containerClasses?: string;
    iconClasses?: string;
};

export { BackgroundGradientAnimationProps, FloatingIconsProps };
