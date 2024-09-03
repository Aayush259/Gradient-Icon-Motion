# Gradient Icon Motion

This package includes three React components for creating animated background and floating icons.

### BackgroundGradients

This component creates a smooth gradient animation that can be customized with various props to fit the desired aesthetic of your project.

| Prop Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| gradientBackgroundStart | string | 'rgb(108, 0, 162)' | The starting RGB color of the gradient background. |
| gradientBackgroundEnd | string | 'rgb(0, 17, 82)' | The ending RGB color of the gradient background. |
| firstColor | string | '18, 113, 255' | The first color of the gradient (withou rgb tag). |
| secondColor | string | '221, 74, 255' | The second color of the gradient (without rgb tag). |
| thirdColor | string | '100, 220, 255' | The third color of the gradient (without rgb tag). |
| fourthColor | string | '200, 50, 50' | The fourth color of the gradient (without rgb tag). |
| fifthColor | string | '80, 180, 50' | The fifth color of the gradient (without rgb tag). |
| size | string | '80%' | The size of floating gradients. |
| blendingValue | string | 'hard-light' | The blending mode used for the floating gradients. |

*This component, originally adapted and modified from [here](https://ui.aceternity.com/components/background-gradient-animation), creates a smooth gradient animation that can be customized with various props to fit the desired aesthetic of your project.*

### FloatingIcons

This component renders a set of icons that float around the screen. The order of these icons are randomly generated using Fisher-Yates shuffle algorithm.

| Prop Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| icons | array | ['fa-solid fa-magnifying-glass', ...15 more] | An array of icons (Fontawesome icons) to be used for the floating icons. |
| iconColor | string | '#EEE8AA' | The color of the floating icons. |
| floatingDirectionReverse | boolean | false | Whether to reverse the floating direction of the icons. |

**For optimal performance, the number of icons should be 15. Adding more icons may slow down the animation and increase the floating speed. I am working on this issue.**

### GradientIconMotion

The component combines both `BackgroundGradients` and `FloatingIcons` animations.

