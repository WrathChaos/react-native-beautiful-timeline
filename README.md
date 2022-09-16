<img alt="React Native Beautiful Timeline" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-beautiful-timeline)

[![Fully customizable, beautifully designed Timeline for React Native.](https://img.shields.io/badge/-Fully%20customizable%2C%20beautifully%20designed%20Timeline%20for%20React%20Native.-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-beautiful-timeline)

[![npm version](https://img.shields.io/npm/v/react-native-beautiful-timeline.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-beautiful-timeline)
[![npm](https://img.shields.io/npm/dt/react-native-beautiful-timeline.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-beautiful-timeline)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Beautiful Timeline"
        src="assets/Screenshots/example.gif" />
  <img alt="React Native Beautiful Timeline"
        src="assets/Screenshots/example.png" />
</p>

# Installation

Add the dependency:

```ruby
npm i react-native-beautiful-timeline
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"moment": ">= 2.24.0",
"react-native-dash-2": ">= 0.2.3",
"react-native-androw" : ">= 0.0.34",
"@freakycoder/react-native-helpers": ">= 0.1.0",
```

# Usage

## Import

```js
import Timeline from "react-native-beautiful-timeline";
```

## Basic Usage

### Data Format

The data format MUST like this example.

```json
[
  {
    "date": 1574342522000,
    "data": [
      {
        "title": "React Native Beautiful Timeline",
        "subtitle": "Sed at justo eros. Phasellus.",
        "date": 1574342522000
      },
      {
        "title": "React Native",
        "subtitle": "Sed viverra. Nam sagittis.",
        "date": 1574342501000
      }
    ]
  },
  {
    "date": 1574248261000,
    "data": [
      {
        "title": "Timeline",
        "subtitle": "Morbi magna orci, consequat in.",
        "date": 1574248261000
      }
    ]
  },
  {
    "date": 1574125621000,
    "data": [
      {
        "title": "Beauty Timeline",
        "subtitle": "Nulla a eleifend urna. Morbi. Praesent.",
        "date": 1574125621000
      }
    ]
  }
]
```

#### Let's take a look a bit closer:

For each day & there would be limitless objects(Cards) for each day something like this example:
Each card comes from `data` array and each **day** comes from each `object` from main array.

```json
{
  "date": 1574342522000,
  "data": [
    {
      "title": "React Native Beautiful Timeline",
      "subtitle": "Sed at justo eros. Phasellus.",
      "date": 1574342522000
    },
    {
      "title": "React Native",
      "subtitle": "Sed viverra. Nam sagittis.",
      "date": 1574342501000
    }
  ]
}
```

## Basic Usage

Please take a look at above data formatting. Library itself solves everything for you if the data format is correct.

```jsx
<Timeline data={data} />
```

## Configuration - Props

### Coming Soon !

## Future Plans

- [x] ~~LICENSE~~
- [x] ~~README: Better Example Image~~
- [x] ~~README: GIF Asset~~
- [x] ~~README: Data Formatting~~
- [x] ~~Configuration: Props~~
- [x] ~~Version 1~~
- [ ] Without Card Feature Data Formatting Implementation (Coming soon!)
- [ ] Write an article about the lib on Medium

## Credits

Thank you for this awesome inspiration. Designed by [Kamil Janus](https://dribbble.com/shots/3934981-Calendar-view-of-concept-financial-app)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Beautiful Timeline is available under the MIT license. See the LICENSE file for more info.
