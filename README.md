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

\*\* = //aliased

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

\*\* = //aliased

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

\*\* = //aliased

### **Example usage:**

```
const screenshot = new Screenshot({
  view: this.view,
  legendIncludedInScreenshot: true,
  popupIncludedInScreenshot: false
});
```
