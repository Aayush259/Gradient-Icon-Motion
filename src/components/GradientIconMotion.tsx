import React from 'react';
import { BackgroundGradientAnimation } from './BackgroundGradient';
import { FloatingIcons } from './FloatingIcons';
import { FloatingIconsProps, BackgroundGradientAnimationProps, CommonProps } from '../interface/props';

interface GradientIconMotionProps extends FloatingIconsProps, BackgroundGradientAnimationProps, CommonProps { }

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
    animationHeight,
    animationWidth,
    children,
}) => {
    return (
        <>
            <div className="relative">
                <div>
                    {children}
                </div>

                <div className="absolute top-0 left-0">
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
                        animationHeight={animationHeight}
                        animationWidth={animationWidth}
                    />
                </div>


                <div className="absolute top-0 left-0">
                    <FloatingIcons
                        floatDirectionReverse={floatDirectionReverse}
                        iconColor={iconColor}
                        icons={icons}
                        animationHeight={animationHeight}
                        animationWidth={animationWidth}
                    />
                </div>
            </div>
        </>
    );
};

export { GradientIconMotion };
