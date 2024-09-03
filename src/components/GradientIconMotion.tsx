import React from 'react';
import { BackgroundGradientAnimation } from './BackgroundGradient';
import { FloatingIcons } from './FloatingIcons';
import { FloatingIconsProps, BackgroundGradientAnimationProps } from '../interface/props';

interface GradientIconMotionProps extends FloatingIconsProps, BackgroundGradientAnimationProps { }

const GradientIconMotion: React.FC<GradientIconMotionProps> = ({
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    size,
    blendingValue,
    containerClasses,
    floatDirectionReverse,
    iconClasses,
    iconColor,
    icons,
}) => {
    return (
        <>
            <BackgroundGradientAnimation
                gradientBackgroundEnd={gradientBackgroundEnd}
                gradientBackgroundStart={gradientBackgroundStart}
                firstColor={firstColor}
                secondColor={secondColor}
                thirdColor={thirdColor}
                fourthColor={fourthColor}
                fifthColor={fifthColor}
                size={size}
                blendingValue={blendingValue}
            />
            <FloatingIcons
                containerClasses={containerClasses}
                floatDirectionReverse={floatDirectionReverse}
                iconClasses={iconClasses}
                iconColor={iconColor}
                icons={icons}
            />
        </>
    );
};

export { GradientIconMotion };
