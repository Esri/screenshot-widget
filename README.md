# screenshot-widget

Screenshot widget built with the ArcGIS API for Javascript version 4.x and html2canvas.

More info on html2canvas can be found here: http://html2canvas.hertzen.com/

## Features:

1.  `MapView` and `SceneView` compatability
2.  Take a screenshot of the `MapView` or `SceneView`
3.  Include screenshots of map components i.e. Legend or Popup

## Screenshot

### Constructor:

#### new **Screenshot(_properties?_)**

##### Property Overview:

| Name                            | Type                 | Summary                                                                     |
| ------------------------------- | -------------------- | --------------------------------------------------------------------------- |
| view \*\*                       | MapView \| SceneView | A reference to the `MapView` or `SceneView`                                 |
| label                           | String               | The widget's default label.                                                 |
| iconClass                       | String               | Expand widget icon class.                                                   |
| legendIncludedInScreenshot \*\* | boolean              | Boolean to include option for user to include/exclude legend in screenshot. |
| popupIncludedInScreenshot \*\*  | boolean              | Boolean to include option for user to include/exclude pop-up in screenshot. |
| legendScreenshotEnabled \*\*    | boolean              | Boolean to include/exclude legend in screenshot.                            |
| popupScreenshotEnabled \*\*     | boolean              | Boolean to include/exclude pop-up in screenshot.                            |
| expandWidgetEnabled \*\*        | boolean              | Boolean to opt into expand widget.                                          |
| expandWidget \*\*               | Expand               | Instance of the Expand widget.                                              |
| screenshotPanel \*\*            | ScreenshotPanel      | View for screenshot widget panel.                                           |

\*\* = aliased

## ScreenshotPanel

### Constructor:

#### new **ScreenshotPanel(_properties?_)**

##### Property Overview:

| Name                            | Type                 | Summary                                                                                   |
| ------------------------------- | -------------------- | ----------------------------------------------------------------------------------------- |
| view \*\*                       | MapView \| SceneView | A reference to the `MapView` or `SceneView`                                               |
| viewModel                       | ScreenshotViewModel  | The view model for this widget.                                                           |
| mapComponentSelectors \*\*      | String[] \*\*        | Array of strings consisting of HTML class name selectors. Length of array can be up to 2. |
| legendIncludedInScreenshot \*\* | boolean              | Boolean to include option for user to include/exclude legend in screenshot.               |
| popupIncludedInScreenshot \*\*  | boolean              | Boolean to include option for user to include/exclude pop-up in screenshot.               |
| legendScreenshotEnabled \*\*    | boolean              | Boolean to include/exclude legend in screenshot.                                          |
| popupScreenshotEnabled \*\*     | boolean              | Boolean to include/exclude pop-up in screenshot.                                          |
| expandWidgetEnabled \*\*        | boolean              | Boolean to opt into expand widget.                                                        |
| expandWidget \*\*               | Expand               | Instance of the Expand widget.                                                            |
| featureWidget \*\*              | Feature              | Instance of the Feature widget.                                                           |
| legendWidget \*\*               | Legend               | Instance of the Legend widget.                                                            |

\*\* = aliased

## ScreenshotViewModel

### Constructor:

#### new **ScreenshotViewModel(_properties?_)**

##### Property Overview:

| Name                       | Type                 | Summary                                                                                   |
| -------------------------- | -------------------- | ----------------------------------------------------------------------------------------- |
| view                       | MapView \| SceneView | A reference to the `MapView` or `SceneView`                                               |
| previewIsVisible           | boolean              | Boolean which indicates if the image preview panel is visible.                            |
| screenshotModeIsActive     | boolean              | Boolean which indicates if the widget is in screenshot mode.                              |
| mapComponentSelectors      | String[]             | Array of strings consisting of HTML class name selectors. Length of array can be up to 2. |
| firstMapComponent          | HTMLCanvasElement    | Map component to be included in screenshot.                                               |
| secondMapComponent         | HTMLCanvasElement    | Map component to be included in screenshot.                                               |
| dragHandler                | any                  | Drag handler event.                                                                       |
| legendIncludedInScreenshot | boolean              | Boolean to include option for user to include/exclude legend in screenshot.               |
| popupIncludedInScreenshot  | boolean              | Boolean to include option for user to include/exclude pop-up in screenshot.               |
| legendScreenshotEnabled    | boolean              | Boolean to include/exclude legend in screenshot.                                          |
| popupScreenshotEnabled     | boolean              | Boolean to include/exclude pop-up in screenshot.                                          |
| expandWidgetEnabled        | boolean              | Boolean to opt into expand widget.                                                        |
| expandWidget               | Expand               | Instance of the Expand widget.                                                            |
| featureWidget              | Feature              | Instance of the Feature widget.                                                           |
| legendWidget               | Legend               | Instance of the Legend widget.                                                            |

\*\* = aliased

### **Example usage:**

```
const screenshot = new Screenshot({
  view: this.view,
  legendIncludedInScreenshot: true,
  popupIncludedInScreenshot: false
});
```

## Resources

- [ArcGIS for JavaScript API Resource Center](http://help.arcgis.com/en/webapi/javascript/arcgis/index.html)
- [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)
- [twitter@esri](http://twitter.com/esri)

## Issues

Find a bug or want to request a new feature? Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2019 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](License.txt) file.
