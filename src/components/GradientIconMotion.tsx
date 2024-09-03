import React from 'react';
import { BackgroundGradientAnimation } from './BackgroundGradient';
import { FloatingIcons } from './FloatingIcons';
import { FloatingIconsProps, BackgroundGradientAnimationProps, CommonProps } from '../interface/props';

interface GradientIconMotionProps extends FloatingIconsProps, BackgroundGradientAnimationProps, CommonProps {}

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
    floatDirectionReverse,
    iconColor,
    icons,
    children,
}) => {
    return (
        <>
            <div>
                <div className="relative z-50">
                    {children}
                </div>
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
                    floatDirectionReverse={floatDirectionReverse}
                    iconColor={iconColor}
                    icons={icons}
                />
            </div>
        </>
    );
};

export { GradientIconMotion };
