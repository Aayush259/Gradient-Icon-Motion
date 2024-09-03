
interface CommonProps {
    children?: React.ReactNode;
}

interface BackgroundGradientAnimationProps extends CommonProps {
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

interface FloatingIconsProps extends CommonProps {
    icons?: string[];
    iconColor?: string;
    floatDirectionReverse?: boolean;
    iconClasses?: string;
};

export { BackgroundGradientAnimationProps, FloatingIconsProps, CommonProps };
