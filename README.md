# Gradient Icon Motion

[![npm version](https://img.shields.io/npm/v/gradient-icon-motion.svg?label=gradient-icon-motion)](https://www.npmjs.com/package/gradient-icon-motion)

This package provides three React components for animated backgrounds and floating icons.

## Components

### 1. BackgroundGradients

Creates a customizable gradient animation background.

Usage:

```jsx
import 'gradient-icon-motion/dist/esm/index.css';
import { BackgroundGradientAnimation } from 'gradient-icon-motion';

<BackgroundGradientAnimation
    animationHeight={"100vh"}
    animationWidth={"100vw"}
>
    <div
        style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
            fontWeight: '600',
            color: 'white'
        }}
    >
        Elegant gradient backgrounds in motion
    </div>
</BackgroundGradientAnimation>
```

You can use other props to modify your animation.

| Prop Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| gradientBackgroundStart | string | 'rgb(108, 0, 162)' | Starting RGB color of the gradient background. |
| gradientBackgroundEnd | string | 'rgb(0, 17, 82)' | Ending RGB color of the gradient background. |
| firstColor | string | '18, 113, 255' | First color of the gradient (withou rgb tag). |
| secondColor | string | '221, 74, 255' | Second color of the gradient (without rgb tag). |
| thirdColor | string | '100, 220, 255' | Third color of the gradient (without rgb tag). |
| fourthColor | string | '200, 50, 50' | Fourth color of the gradient (without rgb tag). |
| fifthColor | string | '80, 180, 50' | Fifth color of the gradient (without rgb tag). |
| size | string | '80%' | Size of floating gradients (circles). |
| blendingValue | string | 'hard-light' | Blending mode used for the floating gradients. |
| animationHeight | string | '100vh' | Height of the animation |
| animationWidth | string | '100vw' | Width of the animation |
| children | React.ReactNode | undefined | content to be rendered within the gradient background. |

*This component, originally adapted and modified from [here](https://ui.aceternity.com/components/background-gradient-animation), creates a smooth gradient animation that can be customized with various props to fit the desired aesthetic of your project.*

### 2. FloatingIcons

Renders randomly shuffles floating icons.

Usage

```jsx
import 'gradient-icon-motion/dist/esm/index.css';
import { FloatingIcons } from 'gradient-icon-motion';

<FloatingIcons
    animationHeight={"100vh"}
    animationWidth={"100vw"}
    iconColor="black"
>
    <div
        style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
            fontWeight: '600'
        }}
    >
        Floating icons create visual interest
    </div>
</FloatingIcons>
```

You can use other props to modify your animation.

| Prop Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| icons | array | ['fa-solid fa-magnifying-glass', ...15 more] | An array of icons (Fontawesome icons) to be used for the floating icons. |
| iconColor | string | '#EEE8AA' | The color of the floating icons. |
| floatingDirectionReverse | boolean | false | Whether to reverse the floating direction of the icons. |
| animationHeight | string | '100vh' | Height of the animation |
| animationWidth | string | '100vw' | Width of the animation |
| children | React.ReactNode | undefined | content to be rendered within the gradient background. |

**Note: For optimal performance, use 15 icons. Increasing icons count will lead to slower animation and high floating speed. Currently working on this issue.**

### GradientIconMotion

Combines both `BackgroundGradients` and `FloatingIcons` animations.

Usage:

```jsx
import 'gradient-icon-motion/dist/esm/index.css';
import { GradientIconMotion } from 'gradient-icon-motion';

<GradientIconMotion
    animationHeight={"100vh"}
    animationWidth={"100vw"}
    iconColor="black"
>
    <div
        style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
            fontWeight: '600',
            color: 'white'
        }}
    >
        Captivating blend of gradients and icons
    </div>
</GradientIconMotion>
```

Supports props from both BackgroundGradients and FloatingIcons components.

## Contribution

Contributions are welcome! Open issues or submit pull requests to help enhance this package ([GitHub](https://github.com/Aayush259/Gradient-Icon-Motion)).
