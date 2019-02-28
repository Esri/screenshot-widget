/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!./Screenshot/nls/resources";

// esri.widgets.Widget
import Widget = require("esri/widgets/Widget");

// esri.core.accessorSupport
import {
  subclass,
  declared,
  property,
  aliasOf
} from "esri/core/accessorSupport/decorators";

// esri.views.MapView
import MapView = require("esri/views/MapView");

// esri.views.SceneView
import SceneView = require("esri/views/SceneView");

// esri.widgets.Expand
import Expand = require("esri/widgets/Expand");

// ScreenshotPanel
import ScreenshotPanel = require("./Screenshot/ScreenshotPanel");

// esri.core.watchUtils.
import watchUtils = require("esri/core/watchUtils");

// esri.core.Handles
import Handles = require("esri/core/Handles");

const CSS = {
  screenshotCursor: "esri-screenshot__cursor",
  mediaIcon: "icon-ui-media"
};

@subclass("Screenshot")
class Screenshot extends declared(Widget) {
  constructor(value: any) {
    super();
  }

  // _handles
  private _handles: Handles = new Handles();

  // view
  @aliasOf("screenshotPanel.view")
  @property()
  view: MapView | SceneView = null;

  // enableLegendOption
  @aliasOf("screenshotPanel.enableLegendOption")
  @property()
  enableLegendOption: boolean = null;

  // enablePopupOption
  @aliasOf("screenshotPanel.enablePopupOption")
  @property()
  enablePopupOption: boolean = null;

  // includeLegendInScreenshot
  @aliasOf("screenshotPanel.includeLegendInScreenshot")
  @property()
  includeLegendInScreenshot: boolean = null;

  // includePopupInScreenshot
  @aliasOf("screenshotPanel.includePopupInScreenshot")
  @property()
  includePopupInScreenshot: boolean = null;

  // expandWidgetEnabled
  @aliasOf("screenshotPanel.expandWidgetEnabled")
  @property()
  expandWidgetEnabled: boolean = null;

  // expandWidget
  @aliasOf("screenshotPanel.expandWidget")
  @property()
  expandWidget: Expand = null;

  // iconClass
  @property()
  iconClass = CSS.mediaIcon;

  // label
  @property()
  label = i18n.widgetLabel;

  // screenshotPanel
  @property()
  screenshotPanel: ScreenshotPanel = new ScreenshotPanel();

  postInitialize() {
    this.own([this._watchScreenshotViewProperties()]);

    if (this.expandWidgetEnabled) {
      this._watchScreenshotView();
    }
  }

  render() {
    return this.screenshotPanel
      ? this.expandWidgetEnabled
        ? this.expandWidget.render()
        : this.screenshotPanel.render()
      : this.screenshotPanel.render();
  }

  // _watchScreenshotViewProperties
  private _watchScreenshotViewProperties(): __esri.WatchHandle {
    return watchUtils.init(
      this,
      [
        "view",
        "enableLegendOption",
        "enablePopupOption",
        "expandWidgetEnabled"
      ],
      () => {
        const { screenshotPanel } = this;
        screenshotPanel.view = this.view;
        screenshotPanel.enableLegendOption = this.enableLegendOption;
        screenshotPanel.enablePopupOption = this.enablePopupOption;
        screenshotPanel.expandWidgetEnabled = this.expandWidgetEnabled;
        screenshotPanel.includeLegendInScreenshot = this.includeLegendInScreenshot;
        screenshotPanel.includePopupInScreenshot = this.includePopupInScreenshot;
      }
    );
  }

  // _watchScreenshotView
  private _watchScreenshotView(): void {
    this.own([
      watchUtils.when(this, "screenshotPanel", () => {
        this.expandWidget = new Expand({
          view: this.view,
          content: this.screenshotPanel,
          expandIconClass: CSS.mediaIcon
        });
        this._handleExpandWidget();
      })
    ]);
  }

  // _handleExpandWidget
  private _handleExpandWidget(): void {
    const expandWidgetKey = "expand-widget";
    this._handles.remove(expandWidgetKey);
    this._handles.add(
      watchUtils.when(this, "expandWidget", () => {
        if (this.expandWidget) {
          const screenshotModeIsActiveKey = "screenshot-active";

          this._handles.remove(screenshotModeIsActiveKey);
          this._handles.add(
            watchUtils.whenTrue(
              this,
              "screenshotPanel.viewModel.screenshotModeIsActive",
              () => {
                const expandedKey = "expanded";
                this._handles.remove(expandedKey);
                this._handles.add(
                  watchUtils.whenFalse(this, "expandWidget.expanded", () => {
                    this.screenshotPanel.viewModel.screenshotModeIsActive = false;
                    this.view.container.classList.remove(CSS.screenshotCursor);
                    if (
                      this.screenshotPanel.featureWidget &&
                      this.screenshotPanel.featureWidget.graphic
                    ) {
                      this.screenshotPanel.featureWidget.graphic = null;
                    }
                    if (this.screenshotPanel.viewModel.dragHandler) {
                      this.screenshotPanel.viewModel.dragHandler.remove();
                      this.screenshotPanel.viewModel.dragHandler = null;
                    }
                    if (this.expandWidget) {
                      this.expandWidget.expanded = false;
                    }
                    this.scheduleRender();
                  }),
                  expandedKey
                );
              }
            ),
            screenshotModeIsActiveKey
          );
        }
      }),
      expandWidgetKey
    );
  }
}

export = Screenshot;
