import React, { useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FloatingIconsProps } from '../interface/props';

library.add(fas, fab);

const defaultIcons: string[] = [
    'fa-solid fa-magnifying-glass',
    'fa-solid fa-check',
    'fa-brands fa-github',
    'fa-brands fa-linkedin',
    'fa-solid fa-arrow-right',
    'fa-solid fa-pen',
    'fa-solid fa-folder',
    'fa-solid fa-paper-plane',
    'fa-solid fa-user',
    'fa-brands fa-js',
    'fa-brands fa-react',
    'fa-brands fa-html5',
    'fa-brands fa-css3-alt',
    'fa-solid fa-code',
    'fa-brands fa-x-twitter'
];

const FloatingIcons: React.FC<FloatingIconsProps> = ({
    icons = defaultIcons,
    iconColor = '#EEE8AA',
    floatDirectionReverse = false,
    iconClasses = '',
    children,
}) => {

    // Update classes for background animation based on floatDirectionReverse.
    useEffect(() => {

        const firstDivInRow = document.querySelectorAll('.row div:nth-child(1)');
        const secondDivInRow = document.querySelectorAll('.row div:nth-child(2)');

        if (floatDirectionReverse) {
            firstDivInRow.forEach(div => {
                div.classList.add('animate-bg-slide-1-reverse');
            });

            secondDivInRow.forEach(div => {
                div.classList.add('animate-bg-slide-2-reverse');
            });
        } else {
            firstDivInRow.forEach(div => {
                div.classList.add('animate-bg-slide-1');
            });

            secondDivInRow.forEach(div => {
                div.classList.add('animate-bg-slide-2');
            });
        }
    }, [floatDirectionReverse]);

    // This function returns an array of random icons for different rows.
    const returnRandomIcons = useCallback(() => {
        // Shuffling icons according to Fisher-Yates Shuffle Algorithm.
        for (let i: number = (icons.length - 1); i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [icons[i], icons[j]] = [icons[j], icons[i]];
        };

        return icons;
    }, [icons]);

    return (
        <>
            <div className="relative z-50">{children}</div>
            <div className={`w-screen h-screen fixed top-0 left-0 overflow-hidden bg-blend-overlay bg-transparent filter blur-[0.5px]`}>
                {
                    Array(18).fill([]).map((_, i) => (
                        <div
                            key={i}
                            className="flex row flex-row flex-nowrap text-nowrap whitespace-nowrap rotate-[-30deg] relative -top-1/2 -left-12"
                        >
                            {
                                Array(2).fill([]).map((_, j) => (
                                    <div
                                        key={j}
                                        className="text-2xl flex whitespace-nowrap text-nowrap flex-nowrap opacity-60"
                                    >
                                        {
                                            returnRandomIcons().map(randomIcon => <FontAwesomeIcon
                                                key={randomIcon}
                                                icon={randomIcon as any}
                                                style={{ color: iconColor }}
                                                className={`p-24 sm:p-36 rotate-[30deg] ${iconClasses}`}
                                            />)
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export { FloatingIcons };
