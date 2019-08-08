const API_DOCS = {
  "NgbAccordionConfig": {
    "fileName": "src/accordion/accordion-config.ts",
    "className": "NgbAccordionConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/accordion/api#NgbAccordion\">NgbAccordion</a> component.</p>\n<p>You can inject this service, typically in your root component, and customize its properties\nto provide default values for all accordions used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "closeOthers",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  "NgbPanelHeaderContext": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbPanelHeaderContext",
    "description": "<p>The context for the <a href=\"#/components/accordion/api#NgbPanelHeader\">NgbPanelHeader</a> template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "opened",
        "type": "boolean",
        "description": "<p><code>True</code> if current panel is opened</p>"
      }
    ]
  },
  "NgbPanelHeader": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbPanelHeader",
    "description": "<p>A directive that wraps an accordion panel header with any HTML markup and a toggling button\nmarked with <a href=\"#/components/accordion/api#NgbPanelToggle\"><code>NgbPanelToggle</code></a>.\nSee the <a href=\"#/components/accordion/examples#header\">header customization demo</a> for more details.</p>\n<p>You can also use <a href=\"#/components/accordion/api#NgbPanelTitle\"><code>NgbPanelTitle</code></a> to customize only the panel title.</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngbPanelHeader]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbPanelTitle": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbPanelTitle",
    "description": "<p>A directive that wraps only the panel title with HTML markup inside.</p>\n<p>You can also use <a href=\"#/components/accordion/api#NgbPanelHeader\"><code>NgbPanelHeader</code></a> to customize the full panel header.</p>",
    "type": "Directive",
    "selector": "ng-template[ngbPanelTitle]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbPanelContent": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbPanelContent",
    "description": "<p>A directive that wraps the accordion panel content.</p>",
    "type": "Directive",
    "selector": "ng-template[ngbPanelContent]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbPanel": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbPanel",
    "description": "<p>A directive that wraps an individual accordion panel with title and collapsible content.</p>",
    "type": "Directive",
    "selector": "ngb-panel",
    "inputs": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the panel is disabled an can&#39;t be toggled.</p>"
      },
      {
        "name": "id",
        "type": "string",
        "description": "<p>An optional id for the panel that must be unique on the page.</p>\n<p>If not provided, it will be auto-generated in the <code>ngb-panel-xxx</code> format.</p>"
      },
      {
        "name": "title",
        "type": "string",
        "description": "<p>The panel title.</p>\n<p>You can alternatively use <a href=\"#/components/accordion/api#NgbPanelTitle\"><code>NgbPanelTitle</code></a> to set panel title.</p>"
      },
      {
        "name": "type",
        "type": "string",
        "description": "<p>Type of the current panel.</p>\n<p>Bootstrap provides styles for the following types: <code>&#39;success&#39;</code>, <code>&#39;info&#39;</code>, <code>&#39;warning&#39;</code>, <code>&#39;danger&#39;</code>, <code>&#39;primary&#39;</code>,\n<code>&#39;secondary&#39;</code>, <code>&#39;light&#39;</code> and <code>&#39;dark&#39;</code>.</p>"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "contentTpl",
        "type": "NgbPanelContent",
        "description": ""
      },
      {
        "name": "contentTpls",
        "type": "QueryList<NgbPanelContent>",
        "description": ""
      },
      {
        "name": "headerTpl",
        "type": "NgbPanelHeader",
        "description": ""
      },
      {
        "name": "headerTpls",
        "type": "QueryList<NgbPanelHeader>",
        "description": ""
      },
      {
        "name": "isOpen",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "titleTpl",
        "type": "NgbPanelTitle",
        "description": ""
      },
      {
        "name": "titleTpls",
        "type": "QueryList<NgbPanelTitle>",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbPanelChangeEvent": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbPanelChangeEvent",
    "description": "<p>An event emitted right before toggling an accordion panel.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "nextState",
        "type": "boolean",
        "description": "<p>The next state of the panel.</p>\n<p><code>true</code> if it will be opened, <code>false</code> if closed.</p>"
      },
      {
        "name": "panelId",
        "type": "string",
        "description": "<p>The id of the accordion panel that is being toggled.</p>"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "<p>Calling this function will prevent panel toggling.</p>"
      }
    ]
  },
  "NgbAccordion": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbAccordion",
    "description": "<p>Accordion is a collection of collapsible panels (bootstrap cards).</p>\n<p>It can ensure only one panel is opened at a time and allows to customize panel\nheaders.</p>",
    "type": "Component",
    "selector": "ngb-accordion",
    "exportAs": "ngbAccordion",
    "inputs": [
      {
        "name": "activeIds",
        "type": "string | string[]",
        "description": "<p>An array or comma separated strings of panel ids that should be opened <strong>initially</strong>.</p>\n<p>For subsequent changes use methods like <code>expand()</code>, <code>collapse()</code>, etc. and\nthe <code>(panelChange)</code> event.</p>"
      },
      {
        "name": "closeOthers",
        "type": "boolean",
        "description": "<p>If <code>true</code>, only one panel could be opened at a time.</p>\n<p>Opening a new panel will close others.</p>"
      },
      {
        "name": "destroyOnHide",
        "defaultValue": "true",
        "type": "boolean",
        "description": "<p>If <code>true</code>, panel content will be detached from DOM and not simply hidden when the panel is collapsed.</p>"
      },
      {
        "name": "type",
        "type": "string",
        "description": "<p>Type of panels.</p>\n<p>Bootstrap provides styles for the following types: <code>&#39;success&#39;</code>, <code>&#39;info&#39;</code>, <code>&#39;warning&#39;</code>, <code>&#39;danger&#39;</code>, <code>&#39;primary&#39;</code>,\n<code>&#39;secondary&#39;</code>, <code>&#39;light&#39;</code> and <code>&#39;dark&#39;</code>.</p>"
      }
    ],
    "outputs": [
      {
        "name": "panelChange",
        "description": "<p>Event emitted right before the panel toggle happens.</p>\n<p>See <a href=\"#/components/accordion/api#NgbPanelChangeEvent\">NgbPanelChangeEvent</a> for payload details.</p>"
      }
    ],
    "properties": [
      {
        "name": "panels",
        "type": "QueryList<NgbPanel>",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "isExpanded",
        "description": "<p>Checks if a panel with a given id is expanded.</p>",
        "args": [
          {
            "name": "panelId",
            "type": "string"
          }
        ],
        "returnType": "boolean"
      },
      {
        "name": "expand",
        "description": "<p>Expands a panel with a given id.</p>\n<p>Has no effect if the panel is already expanded or disabled.</p>",
        "args": [
          {
            "name": "panelId",
            "type": "string"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "expandAll",
        "description": "<p>Expands all panels, if <code>[closeOthers]</code> is <code>false</code>.</p>\n<p>If <code>[closeOthers]</code> is <code>true</code>, it will expand the first panel, unless there is already a panel opened.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "collapse",
        "description": "<p>Collapses a panel with the given id.</p>\n<p>Has no effect if the panel is already collapsed or disabled.</p>",
        "args": [
          {
            "name": "panelId",
            "type": "string"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "collapseAll",
        "description": "<p>Collapses all opened panels.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "<p>Toggles a panel with the given id.</p>\n<p>Has no effect if the panel is disabled.</p>",
        "args": [
          {
            "name": "panelId",
            "type": "string"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "NgbPanelToggle": {
    "fileName": "src/accordion/accordion.ts",
    "className": "NgbPanelToggle",
    "description": "<p>A directive to put on a button that toggles panel opening and closing.</p>\n<p>To be used inside the <a href=\"#/components/accordion/api#NgbPanelHeader\"><code>NgbPanelHeader</code></a></p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "button[ngbPanelToggle]",
    "inputs": [
      {
        "name": "ngbPanelToggle",
        "type": "NgbPanel",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbAlertConfig": {
    "fileName": "src/alert/alert-config.ts",
    "className": "NgbAlertConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/alert/api#NgbAlert\">NgbAlert</a> component.</p>\n<p>You can inject this service, typically in your root component, and customize its properties\nto provide default values for all alerts used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "dismissible",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "defaultValue": "warning",
        "type": "string",
        "description": ""
      }
    ]
  },
  "NgbAlert": {
    "fileName": "src/alert/alert.ts",
    "className": "NgbAlert",
    "description": "<p>Alert is a component to provide contextual feedback messages for user.</p>\n<p>It supports several alert types and can be dismissed.</p>",
    "type": "Component",
    "selector": "ngb-alert",
    "inputs": [
      {
        "name": "dismissible",
        "type": "boolean",
        "description": "<p>If <code>true</code>, alert can be dismissed by the user.</p>\n<p>The close button (×) will be displayed and you can be notified\nof the event with the <code>(close)</code> output.</p>"
      },
      {
        "name": "type",
        "type": "string",
        "description": "<p>Type of the alert.</p>\n<p>Bootstrap provides styles for the following types: <code>&#39;success&#39;</code>, <code>&#39;info&#39;</code>, <code>&#39;warning&#39;</code>, <code>&#39;danger&#39;</code>, <code>&#39;primary&#39;</code>,\n<code>&#39;secondary&#39;</code>, <code>&#39;light&#39;</code> and <code>&#39;dark&#39;</code>.</p>"
      }
    ],
    "outputs": [
      {
        "name": "close",
        "description": "<p>An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.</p>"
      }
    ],
    "properties": [],
    "methods": []
  },
  "NgbCheckBox": {
    "fileName": "src/buttons/checkbox.ts",
    "className": "NgbCheckBox",
    "description": "<p>Allows to easily create Bootstrap-style checkbox buttons.</p>\n<p>Integrates with forms, so the value of a checked button is bound to the underlying form control\neither in a reactive or template-driven way.</p>",
    "type": "Directive",
    "selector": "[ngbButton][type=checkbox]",
    "inputs": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the checkbox button will be disabled</p>"
      },
      {
        "name": "valueChecked",
        "defaultValue": "true",
        "type": "boolean",
        "description": "<p>The form control value when the checkbox is checked.</p>"
      },
      {
        "name": "valueUnChecked",
        "defaultValue": "false",
        "type": "boolean",
        "description": "<p>The form control value when the checkbox is unchecked.</p>"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "checked",
        "type": "any",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbRadioGroup": {
    "fileName": "src/buttons/radio.ts",
    "className": "NgbRadioGroup",
    "description": "<p>Allows to easily create Bootstrap-style radio buttons.</p>\n<p>Integrates with forms, so the value of a checked button is bound to the underlying form control\neither in a reactive or template-driven way.</p>",
    "type": "Directive",
    "selector": "[ngbRadioGroup]",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "description": "<p>Name of the radio group applied to radio input elements.</p>\n<p>Will be applied to all radio input elements inside the group,\nunless <a href=\"#/components/buttons/api#NgbRadio\"><code>NgbRadio</code></a>&#39;s specify names themselves.</p>\n<p>If not provided, will be generated in the <code>ngb-radio-xx</code> format.</p>"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbRadio": {
    "fileName": "src/buttons/radio.ts",
    "className": "NgbRadio",
    "description": "<p>A directive that marks an input of type &quot;radio&quot; as a part of the\n<a href=\"#/components/buttons/api#NgbRadioGroup\"><code>NgbRadioGroup</code></a>.</p>",
    "type": "Directive",
    "selector": "[ngbButton][type=radio]",
    "inputs": [
      {
        "name": "disabled",
        "type": "boolean",
        "description": "<p>If <code>true</code>, current radio button will be disabled.</p>"
      },
      {
        "name": "name",
        "type": "string",
        "description": "<p>The value for the &#39;name&#39; property of the input element.</p>\n<p>All inputs of the radio group should have the same name. If not specified,\nthe name of the enclosing group is used.</p>"
      },
      {
        "name": "value",
        "type": "any",
        "description": "<p>The form control value when current radio button is checked.</p>"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "checked",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "<p>If <code>true</code>, current radio button will be disabled.</p>"
      },
      {
        "name": "nameAttr",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "any",
        "description": "<p>The form control value when current radio button is checked.</p>"
      }
    ],
    "methods": []
  },
  "NgbCarouselConfig": {
    "fileName": "src/carousel/carousel-config.ts",
    "className": "NgbCarouselConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/carousel/api#NgbCarousel\">NgbCarousel</a> component.</p>\n<p>You can inject this service, typically in your root component, and customize its properties\nto provide default values for all carousels used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "interval",
        "defaultValue": "5000",
        "type": "number",
        "description": ""
      },
      {
        "name": "keyboard",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "pauseOnHover",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showNavigationArrows",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showNavigationIndicators",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "wrap",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "NgbSlide": {
    "fileName": "src/carousel/carousel.ts",
    "className": "NgbSlide",
    "description": "<p>A directive that wraps the individual carousel slide.</p>",
    "type": "Directive",
    "selector": "ng-template[ngbSlide]",
    "inputs": [
      {
        "name": "id",
        "type": "string",
        "description": "<p>Slide id that must be unique for the entire document.</p>\n<p>If not provided, will be generated in the <code>ngb-slide-xx</code> format.</p>"
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbCarousel": {
    "fileName": "src/carousel/carousel.ts",
    "className": "NgbCarousel",
    "description": "<p>Carousel is a component to easily create and control slideshows.</p>\n<p>Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.</p>",
    "type": "Component",
    "selector": "ngb-carousel",
    "exportAs": "ngbCarousel",
    "inputs": [
      {
        "name": "activeId",
        "type": "string",
        "description": "<p>The slide id that should be displayed <strong>initially</strong>.</p>\n<p>For subsequent interactions use methods <code>select()</code>, <code>next()</code>, etc. and the <code>(slide)</code> output.</p>"
      },
      {
        "name": "interval",
        "type": "number",
        "description": "<p>Time in milliseconds before the next slide is shown.</p>"
      },
      {
        "name": "keyboard",
        "type": "boolean",
        "description": "<p>If <code>true</code>, allows to interact with carousel using keyboard &#39;arrow left&#39; and &#39;arrow right&#39;.</p>"
      },
      {
        "name": "pauseOnHover",
        "type": "boolean",
        "description": "<p>If <code>true</code>, will pause slide switching when mouse cursor hovers the slide.</p>",
        "since": {
          "version": "2.2.0",
          "description": ""
        }
      },
      {
        "name": "showNavigationArrows",
        "type": "boolean",
        "description": "<p>If <code>true</code>, &#39;previous&#39; and &#39;next&#39; navigation arrows will be visible on the slide.</p>",
        "since": {
          "version": "2.2.0",
          "description": ""
        }
      },
      {
        "name": "showNavigationIndicators",
        "type": "boolean",
        "description": "<p>If <code>true</code>, navigation indicators at the bottom of the slide will be visible.</p>",
        "since": {
          "version": "2.2.0",
          "description": ""
        }
      },
      {
        "name": "wrap",
        "type": "boolean",
        "description": "<p>If <code>true</code>, will &#39;wrap&#39; the carousel by switching from the last slide back to the first.</p>"
      }
    ],
    "outputs": [
      {
        "name": "slide",
        "description": "<p>An event emitted right after the slide transition is completed.</p>\n<p>See <a href=\"#/components/carousel/api#NgbSlideEvent\"><code>NgbSlideEvent</code></a> for payload details.</p>"
      }
    ],
    "properties": [
      {
        "name": "interval",
        "type": "number",
        "description": "<p>Time in milliseconds before the next slide is shown.</p>"
      },
      {
        "name": "NgbSlideEventSource",
        "defaultValue": "NgbSlideEventSource",
        "type": "typeof NgbSlideEventSource",
        "description": ""
      },
      {
        "name": "pauseOnHover",
        "type": "boolean",
        "description": "<p>If <code>true</code>, will pause slide switching when mouse cursor hovers the slide.</p>",
        "since": {
          "version": "2.2.0",
          "description": ""
        }
      },
      {
        "name": "slides",
        "type": "QueryList<NgbSlide>",
        "description": ""
      },
      {
        "name": "wrap",
        "type": "boolean",
        "description": "<p>If <code>true</code>, will &#39;wrap&#39; the carousel by switching from the last slide back to the first.</p>"
      }
    ],
    "methods": [
      {
        "name": "select",
        "description": "<p>Navigates to a slide with the specified identifier.</p>",
        "args": [
          {
            "name": "slideId",
            "type": "string"
          },
          {
            "name": "source",
            "type": "NgbSlideEventSource"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "prev",
        "description": "<p>Navigates to the previous slide.</p>",
        "args": [
          {
            "name": "source",
            "type": "NgbSlideEventSource"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "next",
        "description": "<p>Navigates to the next slide.</p>",
        "args": [
          {
            "name": "source",
            "type": "NgbSlideEventSource"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "pause",
        "description": "<p>Pauses cycling through the slides.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "cycle",
        "description": "<p>Restarts cycling through the slides from left to right.</p>",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "NgbSlideEvent": {
    "fileName": "src/carousel/carousel.ts",
    "className": "NgbSlideEvent",
    "description": "<p>A slide change event emitted right after the slide transition is completed.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "current",
        "type": "string",
        "description": "<p>The current slide id.</p>"
      },
      {
        "name": "direction",
        "type": "NgbSlideEventDirection",
        "description": "<p>The slide event direction.</p>\n<p>Possible values are <code>&#39;left&#39; | &#39;right&#39;</code>.</p>"
      },
      {
        "name": "paused",
        "type": "boolean",
        "description": "<p>Whether the pause() method was called (and no cycle() call was done afterwards).</p>",
        "since": {
          "version": "5.1.0",
          "description": ""
        }
      },
      {
        "name": "prev",
        "type": "string",
        "description": "<p>The previous slide id.</p>"
      },
      {
        "name": "source",
        "type": "NgbSlideEventSource",
        "description": "<p>Source triggering the slide change event.</p>\n<p>Possible values are <code>&#39;timer&#39; | &#39;arrowLeft&#39; | &#39;arrowRight&#39; | &#39;indicator&#39;</code></p>",
        "since": {
          "version": "5.1.0",
          "description": ""
        }
      }
    ]
  },
  "NgbCollapse": {
    "fileName": "src/collapse/collapse.ts",
    "className": "NgbCollapse",
    "description": "<p>A directive to provide a simple way of hiding and showing elements on the page.</p>",
    "type": "Directive",
    "selector": "[ngbCollapse]",
    "exportAs": "ngbCollapse",
    "inputs": [
      {
        "name": "ngbCollapse",
        "defaultValue": "false",
        "type": "boolean",
        "description": "<p>If <code>true</code>, will collapse the element or show it otherwise.</p>"
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbDateAdapter": {
    "fileName": "src/datepicker/adapters/ngb-date-adapter.ts",
    "className": "NgbDateAdapter",
    "description": "<p>An abstract service that does the conversion between the internal datepicker <code>NgbDateStruct</code> model and\nany provided user date model <code>D</code>, ex. a string, a native date, etc.</p>\n<p>The adapter is used <strong>only</strong> for conversion when binding datepicker to a form control,\nex. <code>[(ngModel)]=&quot;userDateModel&quot;</code>. Here <code>userDateModel</code> can be of any type.</p>\n<p>The default datepicker implementation assumes we use <code>NgbDateStruct</code> as a user model.</p>\n<p>See the <a href=\"#/components/datepicker/overview#date-model\">date format overview</a> for more details\nand the <a href=\"#/components/datepicker/examples#adapter\">custom adapter demo</a> for an example.</p>",
    "typeParameter": "D",
    "type": "Service",
    "methods": [
      {
        "name": "fromModel",
        "description": "<p>Converts a user-model date of type <code>D</code> to an <code>NgbDateStruct</code> for internal use.</p>",
        "args": [
          {
            "name": "value",
            "type": "D"
          }
        ],
        "returnType": "NgbDateStruct"
      },
      {
        "name": "toModel",
        "description": "<p>Converts an internal <code>NgbDateStruct</code> date to a user-model date of type <code>D</code>.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "D"
      }
    ],
    "properties": []
  },
  "NgbDateNativeAdapter": {
    "fileName": "src/datepicker/adapters/ngb-date-native-adapter.ts",
    "className": "NgbDateNativeAdapter",
    "description": "<p><a href=\"#/components/datepicker/api#NgbDateAdapter\"><code>NgbDateAdapter</code></a> implementation that uses\nnative javascript dates as a user date model.</p>",
    "type": "Service",
    "methods": [
      {
        "name": "fromModel",
        "description": "<p>Converts a native <code>Date</code> to a <code>NgbDateStruct</code>.</p>",
        "args": [
          {
            "name": "date",
            "type": "Date"
          }
        ],
        "returnType": "NgbDateStruct"
      },
      {
        "name": "toModel",
        "description": "<p>Converts a <code>NgbDateStruct</code> to a native <code>Date</code>.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "Date"
      }
    ],
    "properties": []
  },
  "NgbDateNativeUTCAdapter": {
    "fileName": "src/datepicker/adapters/ngb-date-native-utc-adapter.ts",
    "className": "NgbDateNativeUTCAdapter",
    "description": "<p>Same as <a href=\"#/components/datepicker/api#NgbDateNativeAdapter\"><code>NgbDateNativeAdapter</code></a>, but with UTC dates.</p>",
    "since": {
      "version": "3.2.0",
      "description": ""
    },
    "type": "Service",
    "methods": [],
    "properties": []
  },
  "NgbDatepickerConfig": {
    "fileName": "src/datepicker/datepicker-config.ts",
    "className": "NgbDatepickerConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/datepicker/api#NgbDatepicker\"><code>NgbDatepicker</code></a> component.</p>\n<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the datepickers used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": ""
      },
      {
        "name": "dayTemplateData",
        "type": "(date: NgbDateStruct, current: { year: number; month: number; }) => any",
        "description": ""
      },
      {
        "name": "displayMonths",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "firstDayOfWeek",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "footerTemplate",
        "type": "TemplateRef<any>",
        "description": ""
      },
      {
        "name": "markDisabled",
        "type": "(date: NgbDateStruct, current: { year: number; month: number; }) => boolean",
        "description": ""
      },
      {
        "name": "maxDate",
        "type": "NgbDateStruct",
        "description": ""
      },
      {
        "name": "minDate",
        "type": "NgbDateStruct",
        "description": ""
      },
      {
        "name": "navigation",
        "defaultValue": "select",
        "type": "\"select\" | \"arrows\" | \"none\"",
        "description": ""
      },
      {
        "name": "outsideDays",
        "defaultValue": "visible",
        "type": "\"visible\" | \"collapsed\" | \"hidden\"",
        "description": ""
      },
      {
        "name": "showWeekdays",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showWeekNumbers",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "startDate",
        "type": "{ year: number; month: number; }",
        "description": ""
      }
    ]
  },
  "DayTemplateContext": {
    "fileName": "src/datepicker/datepicker-day-template-context.ts",
    "className": "DayTemplateContext",
    "description": "<p>The context for the datepicker &#39;day&#39; template.</p>\n<p>You can override the way dates are displayed in the datepicker via the <code>[dayTemplate]</code> input.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "$implicit",
        "type": "NgbDate",
        "description": "<p>The date that corresponds to the template. Same as the <code>date</code> parameter.</p>\n<p>Can be used for convenience as a default template key, ex. <code>let-d</code>.</p>",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      },
      {
        "name": "currentMonth",
        "type": "number",
        "description": "<p>The month currently displayed by the datepicker.</p>"
      },
      {
        "name": "data",
        "type": "any",
        "description": "<p>Any data you pass using the <code>[dayTemplateData]</code> input in the datepicker.</p>",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      },
      {
        "name": "date",
        "type": "NgbDate",
        "description": "<p>The date that corresponds to the template.</p>"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "<p><code>True</code> if the current date is disabled.</p>"
      },
      {
        "name": "focused",
        "type": "boolean",
        "description": "<p><code>True</code> if the current date is focused.</p>"
      },
      {
        "name": "selected",
        "type": "boolean",
        "description": "<p><code>True</code> if the current date is selected.</p>"
      },
      {
        "name": "today",
        "type": "boolean",
        "description": "<p><code>True</code> if the current date is today (equal to <code>NgbCalendar.getToday()</code>).</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      }
    ]
  },
  "NgbDatepickerI18n": {
    "fileName": "src/datepicker/datepicker-i18n.ts",
    "className": "NgbDatepickerI18n",
    "description": "<p>A service supplying i18n data to the datepicker component.</p>\n<p>The default implementation of this service uses the Angular locale and registered locale data for\nweekdays and month names (as explained in the Angular i18n guide).</p>\n<p>It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year\nnumerals. For other static labels the datepicker uses the default Angular i18n.</p>\n<p>See the <a href=\"#/components/datepicker/examples#i18n\">i18n demo</a> and\n<a href=\"#/components/datepicker/calendars#hebrew\">Hebrew calendar demo</a> on how to extend this class and define\na custom provider for i18n.</p>",
    "type": "Service",
    "methods": [
      {
        "name": "getWeekdayShortName",
        "description": "<p>Returns the short weekday name to display in the heading of the month view.</p>\n<p>With default calendar we use ISO 8601: &#39;weekday&#39; is 1=Mon ... 7=Sun.</p>",
        "args": [
          {
            "name": "weekday",
            "type": "number"
          }
        ],
        "returnType": "string"
      },
      {
        "name": "getMonthShortName",
        "description": "<p>Returns the short month name to display in the date picker navigation.</p>\n<p>With default calendar we use ISO 8601: &#39;month&#39; is 1=Jan ... 12=Dec.</p>",
        "args": [
          {
            "name": "month",
            "type": "number"
          },
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "string"
      },
      {
        "name": "getMonthFullName",
        "description": "<p>Returns the full month name to display in the date picker navigation.</p>\n<p>With default calendar we use ISO 8601: &#39;month&#39; is 1=Jan ... 12=Dec.</p>",
        "args": [
          {
            "name": "month",
            "type": "number"
          },
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "string"
      },
      {
        "name": "getDayAriaLabel",
        "description": "<p>Returns the value of the <code>aria-label</code> attribute for a specific date.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "string",
        "since": {
          "version": "2.0.0",
          "description": ""
        }
      },
      {
        "name": "getDayNumerals",
        "description": "<p>Returns the textual representation of a day that is rendered in a day cell.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "string",
        "since": {
          "version": "3.0.0",
          "description": ""
        }
      },
      {
        "name": "getWeekNumerals",
        "description": "<p>Returns the textual representation of a week number rendered by datepicker.</p>",
        "args": [
          {
            "name": "weekNumber",
            "type": "number"
          }
        ],
        "returnType": "string",
        "since": {
          "version": "3.0.0",
          "description": ""
        }
      },
      {
        "name": "getYearNumerals",
        "description": "<p>Returns the textual representation of a year that is rendered in the datepicker year select box.</p>",
        "args": [
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "string",
        "since": {
          "version": "3.0.0",
          "description": ""
        }
      }
    ],
    "properties": []
  },
  "NgbInputDatepicker": {
    "fileName": "src/datepicker/datepicker-input.ts",
    "className": "NgbInputDatepicker",
    "description": "<p>A directive that allows to stick a datepicker popup to an input field.</p>\n<p>Manages interaction with the input field itself, does value formatting and provides forms integration.</p>",
    "type": "Directive",
    "selector": "input[ngbDatepicker]",
    "exportAs": "ngbDatepicker",
    "inputs": [
      {
        "name": "autoClose",
        "defaultValue": "true",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": "<p>Indicates whether the datepicker popup should be closed automatically after date selection / outside click or not.</p>\n<ul>\n<li><code>true</code> - the popup will close on both date selection and outside click.</li>\n<li><code>false</code> - the popup can only be closed manually via <code>close()</code> or <code>toggle()</code> methods.</li>\n<li><code>&quot;inside&quot;</code> - the popup will close on date selection, but not outside clicks.</li>\n<li><code>&quot;outside&quot;</code> - the popup will close only on the outside click and not on date selection/inside clicks.</li>\n</ul>",
        "since": {
          "version": "3.0.0",
          "description": ""
        }
      },
      {
        "name": "container",
        "type": "string",
        "description": "<p>A selector specifying the element the datepicker popup should be appended to.</p>\n<p>Currently only supports <code>&quot;body&quot;</code>.</p>"
      },
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": "<p>The reference to a custom template for the day.</p>\n<p>Allows to completely override the way a day &#39;cell&#39; in the calendar is displayed.</p>\n<p>See <a href=\"#/components/datepicker/api#DayTemplateContext\"><code>DayTemplateContext</code></a> for the data you get inside.</p>"
      },
      {
        "name": "dayTemplateData",
        "type": "(date: NgbDate, current: { year: number; month: number; }) => any",
        "description": "<p>The callback to pass any arbitrary data to the template cell via the\n<a href=\"#/components/datepicker/api#DayTemplateContext\"><code>DayTemplateContext</code></a>&#39;s <code>data</code> parameter.</p>\n<p><code>current</code> is the month that is currently displayed by the datepicker.</p>",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      },
      {
        "name": "disabled",
        "type": "any",
        "description": ""
      },
      {
        "name": "displayMonths",
        "type": "number",
        "description": "<p>The number of months to display.</p>"
      },
      {
        "name": "firstDayOfWeek",
        "type": "number",
        "description": "<p>The first day of the week.</p>\n<p>With default calendar we use ISO 8601: &#39;weekday&#39; is 1=Mon ... 7=Sun.</p>"
      },
      {
        "name": "footerTemplate",
        "type": "TemplateRef<any>",
        "description": "<p>The reference to the custom template for the datepicker footer.</p>",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      },
      {
        "name": "markDisabled",
        "type": "(date: NgbDate, current: { year: number; month: number; }) => boolean",
        "description": "<p>The callback to mark some dates as disabled.</p>\n<p>It is called for each new date when navigating to a different month.</p>\n<p><code>current</code> is the month that is currently displayed by the datepicker.</p>"
      },
      {
        "name": "maxDate",
        "type": "NgbDateStruct",
        "description": "<p>The latest date that can be displayed or selected. Also used for form validation.</p>\n<p>If not provided, &#39;year&#39; select box will display 10 years after the current month.</p>"
      },
      {
        "name": "minDate",
        "type": "NgbDateStruct",
        "description": "<p>The earliest date that can be displayed or selected. Also used for form validation.</p>\n<p>If not provided, &#39;year&#39; select box will display 10 years before the current month.</p>"
      },
      {
        "name": "navigation",
        "type": "\"select\" | \"arrows\" | \"none\"",
        "description": "<p>Navigation type.</p>\n<ul>\n<li><code>&quot;select&quot;</code> - select boxes for month and navigation arrows</li>\n<li><code>&quot;arrows&quot;</code> - only navigation arrows</li>\n<li><code>&quot;none&quot;</code> - no navigation visible at all</li>\n</ul>"
      },
      {
        "name": "outsideDays",
        "type": "\"visible\" | \"collapsed\" | \"hidden\"",
        "description": "<p>The way of displaying days that don&#39;t belong to the current month.</p>\n<ul>\n<li><code>&quot;visible&quot;</code> - days are visible</li>\n<li><code>&quot;hidden&quot;</code> - days are hidden, white space preserved</li>\n<li><code>&quot;collapsed&quot;</code> - days are collapsed, so the datepicker height might change between months</li>\n</ul>\n<p>For the 2+ months view, days in between months are never shown.</p>"
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": "<p>The preferred placement of the datepicker popup.</p>\n<p>Possible values are <code>&quot;top&quot;</code>, <code>&quot;top-left&quot;</code>, <code>&quot;top-right&quot;</code>, <code>&quot;bottom&quot;</code>, <code>&quot;bottom-left&quot;</code>,\n<code>&quot;bottom-right&quot;</code>, <code>&quot;left&quot;</code>, <code>&quot;left-top&quot;</code>, <code>&quot;left-bottom&quot;</code>, <code>&quot;right&quot;</code>, <code>&quot;right-top&quot;</code>,\n<code>&quot;right-bottom&quot;</code></p>\n<p>Accepts an array of strings or a string with space separated possible values.</p>\n<p>The default order of preference is <code>&quot;bottom-left bottom-right top-left top-right&quot;</code></p>\n<p>Please see the <a href=\"#/positioning\">positioning overview</a> for more details.</p>"
      },
      {
        "name": "positionTarget",
        "type": "string | HTMLElement",
        "description": "<p>A css selector or html element specifying the element the datepicker popup should be positioned against.</p>\n<p>By default the input is used as a target.</p>",
        "since": {
          "version": "4.2.0",
          "description": ""
        }
      },
      {
        "name": "showWeekdays",
        "type": "boolean",
        "description": "<p>If <code>true</code>, weekdays will be displayed.</p>"
      },
      {
        "name": "showWeekNumbers",
        "type": "boolean",
        "description": "<p>If <code>true</code>, week numbers will be displayed.</p>"
      },
      {
        "name": "startDate",
        "type": "{ year: number; month: number; day?: number; }",
        "description": "<p>The date to open calendar with.</p>\n<p>With the default calendar we use ISO 8601: &#39;month&#39; is 1=Jan ... 12=Dec.\nIf nothing or invalid date is provided, calendar will open with current month.</p>\n<p>You could use <code>navigateTo(date)</code> method as an alternative.</p>"
      }
    ],
    "outputs": [
      {
        "name": "closed",
        "description": "<p>An event fired after closing datepicker window.</p>",
        "since": {
          "version": "4.2.0",
          "description": ""
        }
      },
      {
        "name": "dateSelect",
        "description": "<p>An event emitted when user selects a date using keyboard or mouse.</p>\n<p>The payload of the event is currently selected <code>NgbDate</code>.</p>",
        "since": {
          "version": "1.1.1",
          "description": ""
        }
      },
      {
        "name": "navigate",
        "description": "<p>Event emitted right after the navigation happens and displayed month changes.</p>\n<p>See <a href=\"#/components/datepicker/api#NgbDatepickerNavigateEvent\"><code>NgbDatepickerNavigateEvent</code></a> for the payload info.</p>"
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "open",
        "description": "<p>Opens the datepicker popup.</p>\n<p>If the related form control contains a valid date, the corresponding month will be opened.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "<p>Closes the datepicker popup.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "<p>Toggles the datepicker popup.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "navigateTo",
        "description": "<p>Navigates to the provided date.</p>\n<p>With the default calendar we use ISO 8601: &#39;month&#39; is 1=Jan ... 12=Dec.\nIf nothing or invalid date provided calendar will open current month.</p>\n<p>Use the <code>[startDate]</code> input as an alternative.</p>",
        "args": [
          {
            "name": "date",
            "type": "{ year: number; month: number; day?: number; }"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "NgbDatepickerNavigateEvent": {
    "fileName": "src/datepicker/datepicker.ts",
    "className": "NgbDatepickerNavigateEvent",
    "description": "<p>An event emitted right before the navigation happens and the month displayed by the datepicker changes.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "current",
        "type": "{ year: number; month: number; }",
        "description": "<p>The currently displayed month.</p>"
      },
      {
        "name": "next",
        "type": "{ year: number; month: number; }",
        "description": "<p>The month we&#39;re navigating to.</p>"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "<p>Calling this function will prevent navigation from happening.</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      }
    ]
  },
  "NgbDatepicker": {
    "fileName": "src/datepicker/datepicker.ts",
    "className": "NgbDatepicker",
    "description": "<p>A highly configurable component that helps you with selecting calendar dates.</p>\n<p><code>NgbDatepicker</code> is meant to be displayed inline on a page or put inside a popup.</p>",
    "type": "Component",
    "selector": "ngb-datepicker",
    "exportAs": "ngbDatepicker",
    "inputs": [
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": "<p>The reference to a custom template for the day.</p>\n<p>Allows to completely override the way a day &#39;cell&#39; in the calendar is displayed.</p>\n<p>See <a href=\"#/components/datepicker/api#DayTemplateContext\"><code>DayTemplateContext</code></a> for the data you get inside.</p>"
      },
      {
        "name": "dayTemplateData",
        "type": "(date: NgbDate, current: { year: number; month: number; }) => any",
        "description": "<p>The callback to pass any arbitrary data to the template cell via the\n<a href=\"#/components/datepicker/api#DayTemplateContext\"><code>DayTemplateContext</code></a>&#39;s <code>data</code> parameter.</p>\n<p><code>current</code> is the month that is currently displayed by the datepicker.</p>",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      },
      {
        "name": "displayMonths",
        "type": "number",
        "description": "<p>The number of months to display.</p>"
      },
      {
        "name": "firstDayOfWeek",
        "type": "number",
        "description": "<p>The first day of the week.</p>\n<p>With default calendar we use ISO 8601: &#39;weekday&#39; is 1=Mon ... 7=Sun.</p>"
      },
      {
        "name": "footerTemplate",
        "type": "TemplateRef<any>",
        "description": "<p>The reference to the custom template for the datepicker footer.</p>",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      },
      {
        "name": "markDisabled",
        "type": "(date: NgbDate, current: { year: number; month: number; }) => boolean",
        "description": "<p>The callback to mark some dates as disabled.</p>\n<p>It is called for each new date when navigating to a different month.</p>\n<p><code>current</code> is the month that is currently displayed by the datepicker.</p>"
      },
      {
        "name": "maxDate",
        "type": "NgbDateStruct",
        "description": "<p>The latest date that can be displayed or selected.</p>\n<p>If not provided, &#39;year&#39; select box will display 10 years after the current month.</p>"
      },
      {
        "name": "minDate",
        "type": "NgbDateStruct",
        "description": "<p>The earliest date that can be displayed or selected.</p>\n<p>If not provided, &#39;year&#39; select box will display 10 years before the current month.</p>"
      },
      {
        "name": "navigation",
        "type": "\"select\" | \"arrows\" | \"none\"",
        "description": "<p>Navigation type.</p>\n<ul>\n<li><code>&quot;select&quot;</code> - select boxes for month and navigation arrows</li>\n<li><code>&quot;arrows&quot;</code> - only navigation arrows</li>\n<li><code>&quot;none&quot;</code> - no navigation visible at all</li>\n</ul>"
      },
      {
        "name": "outsideDays",
        "type": "\"visible\" | \"collapsed\" | \"hidden\"",
        "description": "<p>The way of displaying days that don&#39;t belong to the current month.</p>\n<ul>\n<li><code>&quot;visible&quot;</code> - days are visible</li>\n<li><code>&quot;hidden&quot;</code> - days are hidden, white space preserved</li>\n<li><code>&quot;collapsed&quot;</code> - days are collapsed, so the datepicker height might change between months</li>\n</ul>\n<p>For the 2+ months view, days in between months are never shown.</p>"
      },
      {
        "name": "showWeekdays",
        "type": "boolean",
        "description": "<p>If <code>true</code>, weekdays will be displayed.</p>"
      },
      {
        "name": "showWeekNumbers",
        "type": "boolean",
        "description": "<p>If <code>true</code>, week numbers will be displayed.</p>"
      },
      {
        "name": "startDate",
        "type": "{ year: number; month: number; day?: number; }",
        "description": "<p>The date to open calendar with.</p>\n<p>With the default calendar we use ISO 8601: &#39;month&#39; is 1=Jan ... 12=Dec.\nIf nothing or invalid date is provided, calendar will open with current month.</p>\n<p>You could use <code>navigateTo(date)</code> method as an alternative.</p>"
      }
    ],
    "outputs": [
      {
        "name": "navigate",
        "description": "<p>An event emitted right before the navigation happens and displayed month changes.</p>\n<p>See <a href=\"#/components/datepicker/api#NgbDatepickerNavigateEvent\"><code>NgbDatepickerNavigateEvent</code></a> for the payload info.</p>"
      },
      {
        "name": "select",
        "description": "<p>An event emitted when user selects a date using keyboard or mouse.</p>\n<p>The payload of the event is currently selected <code>NgbDate</code>.</p>"
      }
    ],
    "properties": [
      {
        "name": "model",
        "type": "DatepickerViewModel",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "navigateTo",
        "description": "<p>Navigates to the provided date.</p>\n<p>With the default calendar we use ISO 8601: &#39;month&#39; is 1=Jan ... 12=Dec.\nIf nothing or invalid date provided calendar will open current month.</p>\n<p>Use the <code>[startDate]</code> input as an alternative.</p>",
        "args": [
          {
            "name": "date",
            "type": "{ year: number; month: number; day?: number; }"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "NgbCalendar": {
    "fileName": "src/datepicker/ngb-calendar.ts",
    "className": "NgbCalendar",
    "description": "<p>A service that represents the calendar used by the datepicker.</p>\n<p>The default implementation uses the Gregorian calendar. You can inject it in your own\nimplementations if necessary to simplify <code>NgbDate</code> calculations.</p>",
    "type": "Service",
    "methods": [
      {
        "name": "getDaysPerWeek",
        "description": "<p>Returns the number of days per week.</p>",
        "args": [],
        "returnType": "number"
      },
      {
        "name": "getMonths",
        "description": "<p>Returns an array of months per year.</p>\n<p>With default calendar we use ISO 8601 and return [1, 2, ..., 12];</p>",
        "args": [
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "number[]"
      },
      {
        "name": "getWeeksPerMonth",
        "description": "<p>Returns the number of weeks per month.</p>",
        "args": [],
        "returnType": "number"
      },
      {
        "name": "getWeekday",
        "description": "<p>Returns the weekday number for a given day.</p>\n<p>With the default calendar we use ISO 8601: &#39;weekday&#39; is 1=Mon ... 7=Sun</p>",
        "args": [
          {
            "name": "date",
            "type": "NgbDate"
          }
        ],
        "returnType": "number"
      },
      {
        "name": "getNext",
        "description": "<p>Adds a number of years, months or days to a given date.</p>\n<ul>\n<li><code>period</code> can be <code>y</code>, <code>m</code> or <code>d</code> and defaults to day.</li>\n<li><code>number</code> defaults to 1.</li>\n</ul>\n<p>Always returns a new date.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgbDate"
          },
          {
            "name": "period",
            "type": "NgbPeriod"
          },
          {
            "name": "number",
            "type": "number"
          }
        ],
        "returnType": "NgbDate"
      },
      {
        "name": "getPrev",
        "description": "<p>Subtracts a number of years, months or days from a given date.</p>\n<ul>\n<li><code>period</code> can be <code>y</code>, <code>m</code> or <code>d</code> and defaults to day.</li>\n<li><code>number</code> defaults to 1.</li>\n</ul>\n<p>Always returns a new date.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgbDate"
          },
          {
            "name": "period",
            "type": "NgbPeriod"
          },
          {
            "name": "number",
            "type": "number"
          }
        ],
        "returnType": "NgbDate"
      },
      {
        "name": "getWeekNumber",
        "description": "<p>Returns the week number for a given week.</p>",
        "args": [
          {
            "name": "week",
            "type": "NgbDate[]"
          },
          {
            "name": "firstDayOfWeek",
            "type": "number"
          }
        ],
        "returnType": "number"
      },
      {
        "name": "getToday",
        "description": "<p>Returns the today&#39;s date.</p>",
        "args": [],
        "returnType": "NgbDate"
      },
      {
        "name": "isValid",
        "description": "<p>Checks if a date is valid in the current calendar.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgbDate"
          }
        ],
        "returnType": "boolean"
      }
    ],
    "properties": []
  },
  "NgbDateParserFormatter": {
    "fileName": "src/datepicker/ngb-date-parser-formatter.ts",
    "className": "NgbDateParserFormatter",
    "description": "<p>An abstract service for parsing and formatting dates for the\n<a href=\"#/components/datepicker/api#NgbInputDatepicker\"><code>NgbInputDatepicker</code></a> directive.\nConverts between the internal <code>NgbDateStruct</code> model presentation and a <code>string</code> that is displayed in the\ninput element.</p>\n<p>When user types something in the input this service attempts to parse it into a <code>NgbDateStruct</code> object.\nAnd vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a <code>string</code>\nin the input.</p>\n<p>Default implementation uses the ISO 8601 format, but you can provide another implementation via DI\nto use an alternative string format or a custom parsing logic.</p>\n<p>See the <a href=\"#/components/datepicker/overview#date-model\">date format overview</a> for more details.</p>",
    "type": "Service",
    "methods": [
      {
        "name": "parse",
        "description": "<p>Parses the given <code>string</code> to an <code>NgbDateStruct</code>.</p>\n<p>Implementations should try their best to provide a result, even\npartial. They must return <code>null</code> if the value can&#39;t be parsed.</p>",
        "args": [
          {
            "name": "value",
            "type": "string"
          }
        ],
        "returnType": "NgbDateStruct"
      },
      {
        "name": "format",
        "description": "<p>Formats the given <code>NgbDateStruct</code> to a <code>string</code>.</p>\n<p>Implementations should return an empty string if the given date is <code>null</code>,\nand try their best to provide a partial result if the given date is incomplete or invalid.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "string"
      }
    ],
    "properties": []
  },
  "NgbDateStruct": {
    "fileName": "src/datepicker/ngb-date-struct.ts",
    "className": "NgbDateStruct",
    "description": "<p>An interface of the date model used by the datepicker.</p>\n<p>All datepicker APIs consume <code>NgbDateStruct</code>, but return <code>NgbDate</code>.</p>\n<p>See the <a href=\"#/components/datepicker/overview#date-model\">date format overview</a> for more details.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "day",
        "type": "number",
        "description": "<p>The day of month, starting at 1</p>"
      },
      {
        "name": "month",
        "type": "number",
        "description": "<p>The month, for example 1=Jan ... 12=Dec</p>"
      },
      {
        "name": "year",
        "type": "number",
        "description": "<p>The year, for example 2016</p>"
      }
    ]
  },
  "NgbDate": {
    "fileName": "src/datepicker/ngb-date.ts",
    "className": "NgbDate",
    "description": "<p>A simple class that represents a date that datepicker also uses internally.</p>\n<p>It is the implementation of the <code>NgbDateStruct</code> interface that adds some convenience methods,\nlike <code>.equals()</code>, <code>.before()</code>, etc.</p>\n<p>All datepicker APIs consume <code>NgbDateStruct</code>, but return <code>NgbDate</code>.</p>\n<p>In many cases it is simpler to manipulate these objects together with\n<a href=\"#/components/datepicker/api#NgbCalendar\"><code>NgbCalendar</code></a> than native JS Dates.</p>\n<p>See the <a href=\"#/components/datepicker/overview#date-model\">date format overview</a> for more details.</p>",
    "since": {
      "version": "3.0.0",
      "description": ""
    },
    "type": "Class",
    "methods": [
      {
        "name": "from",
        "description": "<p>A <strong>static method</strong> that creates a new date object from the <code>NgbDateStruct</code>,</p>\n<p>ex. <code>NgbDate.from({year: 2000, month: 5, day: 1})</code>.</p>\n<p>If the <code>date</code> is already of <code>NgbDate</code> type, the method will return the same object.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "NgbDate"
      },
      {
        "name": "equals",
        "description": "<p>Checks if the current date is equal to another date.</p>",
        "args": [
          {
            "name": "other",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "boolean"
      },
      {
        "name": "before",
        "description": "<p>Checks if the current date is before another date.</p>",
        "args": [
          {
            "name": "other",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "boolean"
      },
      {
        "name": "after",
        "description": "<p>Checks if the current date is after another date.</p>",
        "args": [
          {
            "name": "other",
            "type": "NgbDateStruct"
          }
        ],
        "returnType": "boolean"
      }
    ],
    "properties": [
      {
        "name": "day",
        "type": "number",
        "description": "<p>The day of month, starting with 1</p>"
      },
      {
        "name": "month",
        "type": "number",
        "description": "<p>The month, for example 1=Jan ... 12=Dec as in ISO 8601</p>"
      },
      {
        "name": "year",
        "type": "number",
        "description": "<p>The year, for example 2016</p>"
      }
    ]
  },
  "NgbDropdownConfig": {
    "fileName": "src/dropdown/dropdown-config.ts",
    "className": "NgbDropdownConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/dropdown/api#NgbDropdown\"><code>NgbDropdown</code></a> component.</p>\n<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the dropdowns used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "autoClose",
        "defaultValue": "true",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": ""
      },
      {
        "name": "container",
        "type": "\"body\"",
        "description": ""
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": ""
      }
    ]
  },
  "NgbDropdownItem": {
    "fileName": "src/dropdown/dropdown.ts",
    "className": "NgbDropdownItem",
    "description": "<p>A directive you should put put on a dropdown item to enable keyboard navigation.\nArrow keys will move focus between items marked with this directive.</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "[ngbDropdownItem]",
    "inputs": [
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbDropdownMenu": {
    "fileName": "src/dropdown/dropdown.ts",
    "className": "NgbDropdownMenu",
    "description": "<p>A directive that wraps dropdown menu content and dropdown items.</p>",
    "type": "Directive",
    "selector": "[ngbDropdownMenu]",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "isOpen",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "menuItems",
        "type": "QueryList<NgbDropdownItem>",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "bottom",
        "type": "Placement",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbDropdownAnchor": {
    "fileName": "src/dropdown/dropdown.ts",
    "className": "NgbDropdownAnchor",
    "description": "<p>A directive to mark an element to which dropdown menu will be anchored.</p>\n<p>This is a simple version of the <code>NgbDropdownToggle</code> directive.\nIt plays the same role, but doesn&#39;t listen to click events to toggle dropdown menu thus enabling support\nfor events other than click.</p>",
    "since": {
      "version": "1.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "[ngbDropdownAnchor]",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "anchorEl",
        "type": "any",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbDropdownToggle": {
    "fileName": "src/dropdown/dropdown.ts",
    "className": "NgbDropdownToggle",
    "description": "<p>A directive to mark an element that will toggle dropdown via the <code>click</code> event.</p>\n<p>You can also use <code>NgbDropdownAnchor</code> as an alternative.</p>",
    "type": "Directive",
    "selector": "[ngbDropdownToggle]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbDropdown": {
    "fileName": "src/dropdown/dropdown.ts",
    "className": "NgbDropdown",
    "description": "<p>A directive that provides contextual overlays for displaying lists of links and more.</p>",
    "type": "Directive",
    "selector": "[ngbDropdown]",
    "exportAs": "ngbDropdown",
    "inputs": [
      {
        "name": "autoClose",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": "<p>Indicates whether the dropdown should be closed when clicking one of dropdown items or pressing ESC.</p>\n<ul>\n<li><code>true</code> - the dropdown will close on both outside and inside (menu) clicks.</li>\n<li><code>false</code> - the dropdown can only be closed manually via <code>close()</code> or <code>toggle()</code> methods.</li>\n<li><code>&quot;inside&quot;</code> - the dropdown will close on inside menu clicks, but not outside clicks.</li>\n<li><code>&quot;outside&quot;</code> - the dropdown will close only on the outside clicks and not on menu clicks.</li>\n</ul>"
      },
      {
        "name": "container",
        "type": "\"body\"",
        "description": "<p>A selector specifying the element the dropdown should be appended to.\nCurrently only supports &quot;body&quot;.</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      },
      {
        "name": "display",
        "type": "\"dynamic\" | \"static\"",
        "description": "<p>Enable or disable the dynamic positioning. The default value is dynamic unless the dropdown is used\ninside a Bootstrap navbar. If you need custom placement for a dropdown in a navbar, set it to\ndynamic explicitly. See the <a href=\"#/positioning#dropdown\">positioning of dropdown</a>\nand the <a href=\"/#/components/dropdown/examples#navbar\">navbar demo</a> for more details.</p>",
        "since": {
          "version": "4.2.0",
          "description": ""
        }
      },
      {
        "name": "open",
        "defaultValue": "false",
        "type": "boolean",
        "description": "<p>Defines whether or not the dropdown menu is opened initially.</p>"
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": "<p>The preferred placement of the dropdown.</p>\n<p>Possible values are <code>&quot;top&quot;</code>, <code>&quot;top-left&quot;</code>, <code>&quot;top-right&quot;</code>, <code>&quot;bottom&quot;</code>, <code>&quot;bottom-left&quot;</code>,\n<code>&quot;bottom-right&quot;</code>, <code>&quot;left&quot;</code>, <code>&quot;left-top&quot;</code>, <code>&quot;left-bottom&quot;</code>, <code>&quot;right&quot;</code>, <code>&quot;right-top&quot;</code>,\n<code>&quot;right-bottom&quot;</code></p>\n<p>Accepts an array of strings or a string with space separated possible values.</p>\n<p>The default order of preference is <code>&quot;bottom-left bottom-right top-left top-right&quot;</code></p>\n<p>Please see the <a href=\"#/positioning\">positioning overview</a> for more details.</p>"
      }
    ],
    "outputs": [
      {
        "name": "openChange",
        "description": "<p>An event fired when the dropdown is opened or closed.</p>\n<p>The event payload is a <code>boolean</code>:</p>\n<ul>\n<li><code>true</code> - the dropdown was opened</li>\n<li><code>false</code> - the dropdown was closed</li>\n</ul>"
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "isOpen",
        "description": "<p>Checks if the dropdown menu is open.</p>",
        "args": [],
        "returnType": "boolean"
      },
      {
        "name": "open",
        "description": "<p>Opens the dropdown menu.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "<p>Closes the dropdown menu.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "<p>Toggles the dropdown menu.</p>",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "NgbModalOptions": {
    "fileName": "src/modal/modal-config.ts",
    "className": "NgbModalOptions",
    "description": "<p>Options available when opening new modal windows with <code>NgbModal.open()</code> method.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "description": "<p><code>aria-labelledby</code> attribute value to set on the modal window.</p>",
        "since": {
          "version": "2.2.0",
          "description": ""
        }
      },
      {
        "name": "backdrop",
        "type": "boolean | \"static\"",
        "description": "<p>If <code>true</code>, the backdrop element will be created for a given modal.</p>\n<p>Alternatively, specify <code>&#39;static&#39;</code> for a backdrop which doesn&#39;t close the modal on click.</p>\n<p>Default value is <code>true</code>.</p>"
      },
      {
        "name": "backdropClass",
        "type": "string",
        "description": "<p>A custom class to append to the modal backdrop.</p>",
        "since": {
          "version": "1.1.0",
          "description": ""
        }
      },
      {
        "name": "beforeDismiss",
        "type": "() => boolean | Promise<boolean>",
        "description": "<p>Callback right before the modal will be dismissed.</p>\n<p>If this function returns:</p>\n<ul>\n<li><code>false</code></li>\n<li>a promise resolved with <code>false</code></li>\n<li>a promise that is rejected</li>\n</ul>\n<p>then the modal won&#39;t be dismissed.</p>"
      },
      {
        "name": "centered",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the modal will be centered vertically.</p>\n<p>Default value is <code>false</code>.</p>",
        "since": {
          "version": "1.1.0",
          "description": ""
        }
      },
      {
        "name": "container",
        "type": "string",
        "description": "<p>A selector specifying the element all new modal windows should be appended to.</p>\n<p>If not specified, will be <code>body</code>.</p>"
      },
      {
        "name": "injector",
        "type": "Injector",
        "description": "<p>The <code>Injector</code> to use for modal content.</p>"
      },
      {
        "name": "keyboard",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the modal will be closed when <code>Escape</code> key is pressed</p>\n<p>Default value is <code>true</code>.</p>"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "description": "<p>Scrollable modal content (false by default).</p>",
        "since": {
          "version": "5.0.0",
          "description": ""
        }
      },
      {
        "name": "size",
        "type": "\"sm\" | \"lg\" | \"xl\"",
        "description": "<p>Size of a new modal window.</p>"
      },
      {
        "name": "windowClass",
        "type": "string",
        "description": "<p>A custom class to append to the modal window.</p>"
      }
    ]
  },
  "NgbModalConfig": {
    "fileName": "src/modal/modal-config.ts",
    "className": "NgbModalConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/modal/api#NgbModal\"><code>NgbModal</code></a> service.</p>\n<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all modals used in the application.</p>",
    "since": {
      "version": "3.1.0",
      "description": ""
    },
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "backdrop",
        "defaultValue": "true",
        "type": "boolean | \"static\"",
        "description": "<p>If <code>true</code>, the backdrop element will be created for a given modal.</p>\n<p>Alternatively, specify <code>&#39;static&#39;</code> for a backdrop which doesn&#39;t close the modal on click.</p>\n<p>Default value is <code>true</code>.</p>"
      },
      {
        "name": "keyboard",
        "defaultValue": "true",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the modal will be closed when <code>Escape</code> key is pressed</p>\n<p>Default value is <code>true</code>.</p>"
      }
    ]
  },
  "NgbActiveModal": {
    "fileName": "src/modal/modal-ref.ts",
    "className": "NgbActiveModal",
    "description": "<p>A reference to the currently opened (active) modal.</p>\n<p>Instances of this class can be injected into your component passed as modal content.\nSo you can <code>.close()</code> or <code>.dismiss()</code> the modal window from your component.</p>",
    "type": "Class",
    "methods": [
      {
        "name": "close",
        "description": "<p>Closes the modal with an optional <code>result</code> value.</p>\n<p>The <code>NgbMobalRef.result</code> promise will be resolved with the provided value.</p>",
        "args": [
          {
            "name": "result",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "dismiss",
        "description": "<p>Dismisses the modal with an optional <code>reason</code> value.</p>\n<p>The <code>NgbModalRef.result</code> promise will be rejected with the provided value.</p>",
        "args": [
          {
            "name": "reason",
            "type": "any"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": []
  },
  "NgbModalRef": {
    "fileName": "src/modal/modal-ref.ts",
    "className": "NgbModalRef",
    "description": "<p>A reference to the newly opened modal returned by the <code>NgbModal.open()</code> method.</p>",
    "type": "Class",
    "methods": [
      {
        "name": "close",
        "description": "<p>Closes the modal with an optional <code>result</code> value.</p>\n<p>The <code>NgbMobalRef.result</code> promise will be resolved with the provided value.</p>",
        "args": [
          {
            "name": "result",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "dismiss",
        "description": "<p>Dismisses the modal with an optional <code>reason</code> value.</p>\n<p>The <code>NgbModalRef.result</code> promise will be rejected with the provided value.</p>",
        "args": [
          {
            "name": "reason",
            "type": "any"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": [
      {
        "name": "componentInstance",
        "type": "any",
        "description": "<p>The instance of a component used for the modal content.</p>\n<p>When a <code>TemplateRef</code> is used as the content, will return <code>undefined</code>.</p>"
      },
      {
        "name": "result",
        "type": "Promise<any>",
        "description": "<p>The promise that is resolved when the modal is closed and rejected when the modal is dismissed.</p>"
      }
    ]
  },
  "NgbModal": {
    "fileName": "src/modal/modal.ts",
    "className": "NgbModal",
    "description": "<p>A service for opening modal windows.</p>\n<p>Creating a modal is straightforward: create a component or a template and pass it as an argument to\nthe <code>.open()</code> method.</p>",
    "type": "Service",
    "methods": [
      {
        "name": "open",
        "description": "<p>Opens a new modal window with the specified content and supplied options.</p>\n<p>Content can be provided as a <code>TemplateRef</code> or a component type. If you pass a component type as content,\nthen instances of those components can be injected with an instance of the <code>NgbActiveModal</code> class. You can then\nuse <code>NgbActiveModal</code> methods to close / dismiss modals from &quot;inside&quot; of your component.</p>\n<p>Also see the <a href=\"#/components/modal/api#NgbModalOptions\"><code>NgbModalOptions</code></a> for the list of supported options.</p>",
        "args": [
          {
            "name": "content",
            "type": "any"
          },
          {
            "name": "options",
            "type": "NgbModalOptions"
          }
        ],
        "returnType": "NgbModalRef"
      },
      {
        "name": "dismissAll",
        "description": "<p>Dismisses all currently displayed modal windows with the supplied reason.</p>",
        "args": [
          {
            "name": "reason",
            "type": "any"
          }
        ],
        "returnType": "void",
        "since": {
          "version": "3.1.0",
          "description": ""
        }
      },
      {
        "name": "hasOpenModals",
        "description": "<p>Indicates if there are currently any open modal windows in the application.</p>",
        "args": [],
        "returnType": "boolean",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      }
    ],
    "properties": []
  },
  "NgbPaginationConfig": {
    "fileName": "src/pagination/pagination-config.ts",
    "className": "NgbPaginationConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/pagination/api#NgbPagination\"><code>NgbPagination</code></a> component.</p>\n<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the paginations used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "boundaryLinks",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "directionLinks",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "ellipses",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "maxSize",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "pageSize",
        "defaultValue": "10",
        "type": "number",
        "description": ""
      },
      {
        "name": "rotate",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "size",
        "type": "\"sm\" | \"lg\"",
        "description": ""
      }
    ]
  },
  "NgbPaginationLinkContext": {
    "fileName": "src/pagination/pagination.ts",
    "className": "NgbPaginationLinkContext",
    "description": "<p>A context for the</p>\n<ul>\n<li><code>NgbPaginationFirst</code></li>\n<li><code>NgbPaginationPrevious</code></li>\n<li><code>NgbPaginationNext</code></li>\n<li><code>NgbPaginationLast</code></li>\n<li><code>NgbPaginationEllipsis</code></li>\n</ul>\n<p>link templates in case you want to override one.</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "currentPage",
        "type": "number",
        "description": "<p>The currently selected page number</p>"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the current link is disabled</p>"
      }
    ]
  },
  "NgbPaginationNumberContext": {
    "fileName": "src/pagination/pagination.ts",
    "className": "NgbPaginationNumberContext",
    "description": "<p>A context for the <code>NgbPaginationNumber</code> link template in case you want to override one.</p>\n<p>Extends <code>NgbPaginationLinkContext</code>.</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "$implicit",
        "type": "number",
        "description": "<p>The page number, displayed by the current page link.</p>"
      }
    ]
  },
  "NgbPaginationEllipsis": {
    "fileName": "src/pagination/pagination.ts",
    "className": "NgbPaginationEllipsis",
    "description": "<p>A directive to match the &#39;ellipsis&#39; link template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngbPaginationEllipsis]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbPaginationFirst": {
    "fileName": "src/pagination/pagination.ts",
    "className": "NgbPaginationFirst",
    "description": "<p>A directive to match the &#39;first&#39; link template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngbPaginationFirst]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbPaginationLast": {
    "fileName": "src/pagination/pagination.ts",
    "className": "NgbPaginationLast",
    "description": "<p>A directive to match the &#39;last&#39; link template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngbPaginationLast]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbPaginationNext": {
    "fileName": "src/pagination/pagination.ts",
    "className": "NgbPaginationNext",
    "description": "<p>A directive to match the &#39;next&#39; link template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngbPaginationNext]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbPaginationNumber": {
    "fileName": "src/pagination/pagination.ts",
    "className": "NgbPaginationNumber",
    "description": "<p>A directive to match the page &#39;number&#39; link template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngbPaginationNumber]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbPaginationPrevious": {
    "fileName": "src/pagination/pagination.ts",
    "className": "NgbPaginationPrevious",
    "description": "<p>A directive to match the &#39;previous&#39; link template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngbPaginationPrevious]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbPagination": {
    "fileName": "src/pagination/pagination.ts",
    "className": "NgbPagination",
    "description": "<p>A component that displays page numbers and allows to customize them in several ways.</p>",
    "type": "Component",
    "selector": "ngb-pagination",
    "inputs": [
      {
        "name": "boundaryLinks",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the &quot;First&quot; and &quot;Last&quot; page links are shown.</p>"
      },
      {
        "name": "collectionSize",
        "type": "number",
        "description": "<p>The number of items in your paginated collection.</p>\n<p>Note, that this is not the number of pages. Page numbers are calculated dynamically based on\n<code>collectionSize</code> and <code>pageSize</code>. Ex. if you have 100 items in your collection and displaying 20 items per page,\nyou&#39;ll end up with 5 pages.</p>"
      },
      {
        "name": "directionLinks",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the &quot;Next&quot; and &quot;Previous&quot; page links are shown.</p>"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "<p>If <code>true</code>, pagination links will be disabled.</p>"
      },
      {
        "name": "ellipses",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the ellipsis symbols and first/last page numbers will be shown when <code>maxSize</code> &gt; number of pages.</p>"
      },
      {
        "name": "maxSize",
        "type": "number",
        "description": "<p>The maximum number of pages to display.</p>"
      },
      {
        "name": "page",
        "defaultValue": "1",
        "type": "number",
        "description": "<p>The current page.</p>\n<p>Page numbers start with <code>1</code>.</p>"
      },
      {
        "name": "pageSize",
        "type": "number",
        "description": "<p>The number of items per page.</p>"
      },
      {
        "name": "rotate",
        "type": "boolean",
        "description": "<p>Whether to rotate pages when <code>maxSize</code> &gt; number of pages.</p>\n<p>The current page always stays in the middle if <code>true</code>.</p>"
      },
      {
        "name": "size",
        "type": "\"sm\" | \"lg\"",
        "description": "<p>The pagination display size.</p>\n<p>Bootstrap currently supports small and large sizes.</p>"
      }
    ],
    "outputs": [
      {
        "name": "pageChange",
        "description": "<p>An event fired when the page is changed. Will fire only if collection size is set and all values are valid.</p>\n<p>Event payload is the number of the newly selected page.</p>\n<p>Page numbers start with <code>1</code>.</p>"
      }
    ],
    "properties": [
      {
        "name": "pageCount",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "pages",
        "type": "number[]",
        "description": ""
      },
      {
        "name": "tplEllipsis",
        "type": "NgbPaginationEllipsis",
        "description": ""
      },
      {
        "name": "tplFirst",
        "type": "NgbPaginationFirst",
        "description": ""
      },
      {
        "name": "tplLast",
        "type": "NgbPaginationLast",
        "description": ""
      },
      {
        "name": "tplNext",
        "type": "NgbPaginationNext",
        "description": ""
      },
      {
        "name": "tplNumber",
        "type": "NgbPaginationNumber",
        "description": ""
      },
      {
        "name": "tplPrevious",
        "type": "NgbPaginationPrevious",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbPopoverConfig": {
    "fileName": "src/popover/popover-config.ts",
    "className": "NgbPopoverConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/popover/api#NgbPopover\"><code>NgbPopover</code></a> component.</p>\n<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the popovers used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "autoClose",
        "defaultValue": "true",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": ""
      },
      {
        "name": "closeDelay",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "container",
        "type": "string",
        "description": ""
      },
      {
        "name": "disablePopover",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "openDelay",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "auto",
        "type": "PlacementArray",
        "description": ""
      },
      {
        "name": "popoverClass",
        "type": "string",
        "description": ""
      },
      {
        "name": "triggers",
        "defaultValue": "click",
        "type": "string",
        "description": ""
      }
    ]
  },
  "NgbPopover": {
    "fileName": "src/popover/popover.ts",
    "className": "NgbPopover",
    "description": "<p>A lightweight and extensible directive for fancy popover creation.</p>",
    "type": "Directive",
    "selector": "[ngbPopover]",
    "exportAs": "ngbPopover",
    "inputs": [
      {
        "name": "autoClose",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": "<p>Indicates whether the popover should be closed on <code>Escape</code> key and inside/outside clicks:</p>\n<ul>\n<li><code>true</code> - closes on both outside and inside clicks as well as <code>Escape</code> presses</li>\n<li><code>false</code> - disables the autoClose feature (NB: triggers still apply)</li>\n<li><code>&quot;inside&quot;</code> - closes on inside clicks as well as Escape presses</li>\n<li><code>&quot;outside&quot;</code> - closes on outside clicks (sometimes also achievable through triggers)\nas well as <code>Escape</code> presses</li>\n</ul>",
        "since": {
          "version": "3.0.0",
          "description": ""
        }
      },
      {
        "name": "closeDelay",
        "type": "number",
        "description": "<p>The closing delay in ms. Works only for &quot;non-manual&quot; opening triggers defined by the <code>triggers</code> input.</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      },
      {
        "name": "container",
        "type": "string",
        "description": "<p>A selector specifying the element the popover should be appended to.</p>\n<p>Currently only supports <code>body</code>.</p>"
      },
      {
        "name": "disablePopover",
        "type": "boolean",
        "description": "<p>If <code>true</code>, popover is disabled and won&#39;t be displayed.</p>",
        "since": {
          "version": "1.1.0",
          "description": ""
        }
      },
      {
        "name": "ngbPopover",
        "type": "string | TemplateRef<any>",
        "description": "<p>The string content or a <code>TemplateRef</code> for the content to be displayed in the popover.</p>\n<p>If the title and the content are empty, the popover won&#39;t open.</p>"
      },
      {
        "name": "openDelay",
        "type": "number",
        "description": "<p>The opening delay in ms. Works only for &quot;non-manual&quot; opening triggers defined by the <code>triggers</code> input.</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": "<p>The preferred placement of the popover.</p>\n<p>Possible values are <code>&quot;top&quot;</code>, <code>&quot;top-left&quot;</code>, <code>&quot;top-right&quot;</code>, <code>&quot;bottom&quot;</code>, <code>&quot;bottom-left&quot;</code>,\n<code>&quot;bottom-right&quot;</code>, <code>&quot;left&quot;</code>, <code>&quot;left-top&quot;</code>, <code>&quot;left-bottom&quot;</code>, <code>&quot;right&quot;</code>, <code>&quot;right-top&quot;</code>,\n<code>&quot;right-bottom&quot;</code></p>\n<p>Accepts an array of strings or a string with space separated possible values.</p>\n<p>The default order of preference is <code>&quot;auto&quot;</code> (same as the sequence above).</p>\n<p>Please see the <a href=\"#/positioning\">positioning overview</a> for more details.</p>"
      },
      {
        "name": "popoverClass",
        "type": "string",
        "description": "<p>An optional class applied to the popover window element.</p>",
        "since": {
          "version": "2.2.0",
          "description": ""
        }
      },
      {
        "name": "popoverTitle",
        "type": "string | TemplateRef<any>",
        "description": "<p>The title of the popover.</p>\n<p>If the title and the content are empty, the popover won&#39;t open.</p>"
      },
      {
        "name": "triggers",
        "type": "string",
        "description": "<p>Specifies events that should trigger the tooltip.</p>\n<p>Supports a space separated list of event names.\nFor more details see the <a href=\"#/components/popover/examples#triggers\">triggers demo</a>.</p>"
      }
    ],
    "outputs": [
      {
        "name": "hidden",
        "description": "<p>An event emitted when the popover is hidden. Contains no payload.</p>"
      },
      {
        "name": "shown",
        "description": "<p>An event emitted when the popover is shown. Contains no payload.</p>"
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "open",
        "description": "<p>Opens the popover.</p>\n<p>This is considered to be a &quot;manual&quot; triggering.\nThe <code>context</code> is an optional value to be injected into the popover template when it is created.</p>",
        "args": [
          {
            "name": "context",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "<p>Closes the popover.</p>\n<p>This is considered to be a &quot;manual&quot; triggering of the popover.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "<p>Toggles the popover.</p>\n<p>This is considered to be a &quot;manual&quot; triggering of the popover.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "isOpen",
        "description": "<p>Returns <code>true</code>, if the popover is currently shown.</p>",
        "args": [],
        "returnType": "boolean"
      }
    ]
  },
  "NgbProgressbarConfig": {
    "fileName": "src/progressbar/progressbar-config.ts",
    "className": "NgbProgressbarConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/progressbar/api#NgbProgressbar\"><code>NgbProgressbar</code></a> component.</p>\n<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the progress bars used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "animated",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "height",
        "type": "string",
        "description": ""
      },
      {
        "name": "max",
        "defaultValue": "100",
        "type": "number",
        "description": ""
      },
      {
        "name": "showValue",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "striped",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  "NgbProgressbar": {
    "fileName": "src/progressbar/progressbar.ts",
    "className": "NgbProgressbar",
    "description": "<p>A directive that provides feedback on the progress of a workflow or an action.</p>",
    "type": "Component",
    "selector": "ngb-progressbar",
    "inputs": [
      {
        "name": "animated",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the stripes on the progressbar are animated.</p>\n<p>Takes effect only for browsers supporting CSS3 animations, and if <code>striped</code> is <code>true</code>.</p>"
      },
      {
        "name": "height",
        "type": "string",
        "description": "<p>THe height of the progress bar.</p>\n<p>Accepts any valid CSS height values, ex. <code>&quot;2rem&quot;</code></p>"
      },
      {
        "name": "max",
        "type": "number",
        "description": "<p>The maximal value to be displayed in the progressbar.</p>"
      },
      {
        "name": "showValue",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the current percentage will be shown in the <code>xx%</code> format.</p>"
      },
      {
        "name": "striped",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the progress bars will be displayed as striped.</p>"
      },
      {
        "name": "type",
        "type": "string",
        "description": "<p>The type of the progress bar.</p>\n<p>Currently Bootstrap supports <code>&quot;success&quot;</code>, <code>&quot;info&quot;</code>, <code>&quot;warning&quot;</code> or <code>&quot;danger&quot;</code>.</p>"
      },
      {
        "name": "value",
        "defaultValue": "0",
        "type": "number",
        "description": "<p>The current value for the progress bar.</p>\n<p>Should be in the <code>[0, max]</code> range.</p>"
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbRatingConfig": {
    "fileName": "src/rating/rating-config.ts",
    "className": "NgbRatingConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/rating/api#NgbRating\"><code>NgbRating</code></a> component.</p>\n<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the ratings used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "max",
        "defaultValue": "10",
        "type": "number",
        "description": ""
      },
      {
        "name": "readonly",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "resettable",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "StarTemplateContext": {
    "fileName": "src/rating/rating.ts",
    "className": "StarTemplateContext",
    "description": "<p>The context for the custom star display template defined in the <code>starTemplate</code>.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "fill",
        "type": "number",
        "description": "<p>The star fill percentage, an integer in the <code>[0, 100]</code> range.</p>"
      },
      {
        "name": "index",
        "type": "number",
        "description": "<p>Index of the star, starts with <code>0</code>.</p>"
      }
    ]
  },
  "NgbRating": {
    "fileName": "src/rating/rating.ts",
    "className": "NgbRating",
    "description": "<p>A directive that helps visualising and interacting with a star rating bar.</p>",
    "type": "Component",
    "selector": "ngb-rating",
    "inputs": [
      {
        "name": "max",
        "type": "number",
        "description": "<p>The maximal rating that can be given.</p>"
      },
      {
        "name": "rate",
        "type": "number",
        "description": "<p>The current rating. Could be a decimal value like <code>3.75</code>.</p>"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the rating can&#39;t be changed.</p>"
      },
      {
        "name": "resettable",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the rating can be reset to <code>0</code> by mouse clicking currently set rating.</p>"
      },
      {
        "name": "starTemplate",
        "type": "TemplateRef<StarTemplateContext>",
        "description": "<p>The template to override the way each star is displayed.</p>\n<p>Alternatively put an <code>&lt;ng-template&gt;</code> as the only child of your <code>&lt;ngb-rating&gt;</code> element</p>"
      }
    ],
    "outputs": [
      {
        "name": "hover",
        "description": "<p>An event emitted when the user is hovering over a given rating.</p>\n<p>Event payload equals to the rating being hovered over.</p>"
      },
      {
        "name": "leave",
        "description": "<p>An event emitted when the user stops hovering over a given rating.</p>\n<p>Event payload equals to the rating of the last item being hovered over.</p>"
      },
      {
        "name": "rateChange",
        "description": "<p>An event emitted when the user selects a new rating.</p>\n<p>Event payload equals to the newly selected rating.</p>"
      }
    ],
    "properties": [
      {
        "name": "contexts",
        "type": "StarTemplateContext[]",
        "description": ""
      },
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "nextRate",
        "type": "number",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      },
      {
        "name": "starTemplateFromContent",
        "type": "TemplateRef<StarTemplateContext>",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbTabsetConfig": {
    "fileName": "src/tabset/tabset-config.ts",
    "className": "NgbTabsetConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/tabset/api#NgbTabset\"><code>NgbTabset</code></a> component.</p>\n<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the tabsets used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "justify",
        "defaultValue": "start",
        "type": "\"start\" | \"center\" | \"end\" | \"fill\" | \"justified\"",
        "description": ""
      },
      {
        "name": "orientation",
        "defaultValue": "horizontal",
        "type": "\"horizontal\" | \"vertical\"",
        "description": ""
      },
      {
        "name": "type",
        "defaultValue": "tabs",
        "type": "\"tabs\" | \"pills\"",
        "description": ""
      }
    ]
  },
  "NgbTabTitle": {
    "fileName": "src/tabset/tabset.ts",
    "className": "NgbTabTitle",
    "description": "<p>A directive to wrap tab titles that need to contain HTML markup or other directives.</p>\n<p>Alternatively you could use the <code>NgbTab.title</code> input for string titles.</p>",
    "type": "Directive",
    "selector": "ng-template[ngbTabTitle]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbTabContent": {
    "fileName": "src/tabset/tabset.ts",
    "className": "NgbTabContent",
    "description": "<p>A directive to wrap content to be displayed in a tab.</p>",
    "type": "Directive",
    "selector": "ng-template[ngbTabContent]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbTab": {
    "fileName": "src/tabset/tabset.ts",
    "className": "NgbTab",
    "description": "<p>A directive representing an individual tab.</p>",
    "type": "Directive",
    "selector": "ngb-tab",
    "inputs": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the current tab is disabled and can&#39;t be toggled.</p>"
      },
      {
        "name": "id",
        "type": "string",
        "description": "<p>The tab identifier.</p>\n<p>Must be unique for the entire document for proper accessibility support.</p>"
      },
      {
        "name": "title",
        "type": "string",
        "description": "<p>The tab title.</p>\n<p>Use the <a href=\"#/components/tabset/api#NgbTabTitle\"><code>NgbTabTitle</code></a> directive for non-string titles.</p>"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "contentTpl",
        "type": "NgbTabContent",
        "description": ""
      },
      {
        "name": "contentTpls",
        "type": "QueryList<NgbTabContent>",
        "description": ""
      },
      {
        "name": "titleTpl",
        "type": "NgbTabTitle",
        "description": ""
      },
      {
        "name": "titleTpls",
        "type": "QueryList<NgbTabTitle>",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbTabChangeEvent": {
    "fileName": "src/tabset/tabset.ts",
    "className": "NgbTabChangeEvent",
    "description": "<p>The payload of the change event fired right before the tab change.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "activeId",
        "type": "string",
        "description": "<p>The id of the currently active tab.</p>"
      },
      {
        "name": "nextId",
        "type": "string",
        "description": "<p>The id of the newly selected tab.</p>"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "<p>Calling this function will prevent tab switching.</p>"
      }
    ]
  },
  "NgbTabset": {
    "fileName": "src/tabset/tabset.ts",
    "className": "NgbTabset",
    "description": "<p>A component that makes it easy to create tabbed interface.</p>",
    "type": "Component",
    "selector": "ngb-tabset",
    "exportAs": "ngbTabset",
    "inputs": [
      {
        "name": "activeId",
        "type": "string",
        "description": "<p>The identifier of the tab that should be opened <strong>initially</strong>.</p>\n<p>For subsequent tab switches use the <code>.select()</code> method and the <code>(tabChange)</code> event.</p>"
      },
      {
        "name": "destroyOnHide",
        "defaultValue": "true",
        "type": "boolean",
        "description": "<p>If <code>true</code>, non-visible tabs content will be removed from DOM. Otherwise it will just be hidden.</p>"
      },
      {
        "name": "justify",
        "type": "\"start\" | \"center\" | \"end\" | \"fill\" | \"justified\"",
        "description": "<p>The horizontal alignment of the tabs with flexbox utilities.</p>"
      },
      {
        "name": "orientation",
        "type": "\"horizontal\" | \"vertical\"",
        "description": "<p>The orientation of the tabset.</p>"
      },
      {
        "name": "type",
        "type": "string",
        "description": "<p>Type of navigation to be used for tabs.</p>\n<p>Currently Bootstrap supports only <code>&quot;tabs&quot;</code> and <code>&quot;pills&quot;</code>.</p>\n<p>Since <code>3.0.0</code> can also be an arbitrary string (ex. for custom themes).</p>"
      }
    ],
    "outputs": [
      {
        "name": "tabChange",
        "description": "<p>A tab change event emitted right before the tab change happens.</p>\n<p>See <a href=\"#/components/tabset/api#NgbTabChangeEvent\"><code>NgbTabChangeEvent</code></a> for payload details.</p>"
      }
    ],
    "properties": [
      {
        "name": "justifyClass",
        "type": "string",
        "description": ""
      },
      {
        "name": "tabs",
        "type": "QueryList<NgbTab>",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "select",
        "description": "<p>Selects the tab with the given id and shows its associated content panel.</p>\n<p>Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or\nhidden depending on the <code>destroyOnHide</code> value.</p>",
        "args": [
          {
            "name": "tabId",
            "type": "string"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "NgbTimeAdapter": {
    "fileName": "src/timepicker/ngb-time-adapter.ts",
    "className": "NgbTimeAdapter",
    "description": "<p>An abstract service that does the conversion between the internal timepicker <code>NgbTimeStruct</code> model and\nany provided user time model <code>T</code>, ex. a string, a native date, etc.</p>\n<p>The adapter is used <strong>only</strong> for conversion when binding timepicker to a form control,\nex. <code>[(ngModel)]=&quot;userTimeModel&quot;</code>. Here <code>userTimeModel</code> can be of any type.</p>\n<p>The default timepicker implementation assumes we use <code>NgbTimeStruct</code> as a user model.</p>\n<p>See the <a href=\"#/components/timepicker/examples#adapter\">custom time adapter demo</a> for an example.</p>",
    "since": {
      "version": "2.2.0",
      "description": ""
    },
    "typeParameter": "T",
    "type": "Service",
    "methods": [
      {
        "name": "fromModel",
        "description": "<p>Converts a user-model time of type <code>T</code> to an <code>NgbTimeStruct</code> for internal use.</p>",
        "args": [
          {
            "name": "value",
            "type": "T"
          }
        ],
        "returnType": "NgbTimeStruct"
      },
      {
        "name": "toModel",
        "description": "<p>Converts an internal <code>NgbTimeStruct</code> time to a user-model time of type <code>T</code>.</p>",
        "args": [
          {
            "name": "time",
            "type": "NgbTimeStruct"
          }
        ],
        "returnType": "T"
      }
    ],
    "properties": []
  },
  "NgbTimeStruct": {
    "fileName": "src/timepicker/ngb-time-struct.ts",
    "className": "NgbTimeStruct",
    "description": "<p>An interface for the time model used by the timepicker.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "hour",
        "type": "number",
        "description": "<p>The hour in the <code>[0, 23]</code> range.</p>"
      },
      {
        "name": "minute",
        "type": "number",
        "description": "<p>The minute in the <code>[0, 59]</code> range.</p>"
      },
      {
        "name": "second",
        "type": "number",
        "description": "<p>The second in the <code>[0, 59]</code> range.</p>"
      }
    ]
  },
  "NgbTimepickerConfig": {
    "fileName": "src/timepicker/timepicker-config.ts",
    "className": "NgbTimepickerConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/timepicker/api#NgbTimepicker\"><code>NgbTimepicker</code></a> component.</p>\n<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the timepickers used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "hourStep",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "meridian",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "minuteStep",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "readonlyInputs",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "seconds",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "secondStep",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "size",
        "defaultValue": "medium",
        "type": "\"small\" | \"medium\" | \"large\"",
        "description": ""
      },
      {
        "name": "spinners",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "NgbTimepickerI18n": {
    "fileName": "src/timepicker/timepicker-i18n.ts",
    "className": "NgbTimepickerI18n",
    "description": "<p>Type of the service supplying day periods (for example, &#39;AM&#39; and &#39;PM&#39;) to NgbTimepicker component.\nThe default implementation of this service honors the Angular locale, and uses the registered locale data,\nas explained in the Angular i18n guide.</p>",
    "type": "Service",
    "methods": [
      {
        "name": "getMorningPeriod",
        "description": "<p>Returns the name for the period before midday.</p>",
        "args": [],
        "returnType": "string"
      },
      {
        "name": "getAfternoonPeriod",
        "description": "<p>Returns the name for the period after midday.</p>",
        "args": [],
        "returnType": "string"
      }
    ],
    "properties": []
  },
  "NgbTimepicker": {
    "fileName": "src/timepicker/timepicker.ts",
    "className": "NgbTimepicker",
    "description": "<p>A directive that helps with wth picking hours, minutes and seconds.</p>",
    "type": "Component",
    "selector": "ngb-timepicker",
    "inputs": [
      {
        "name": "hourStep",
        "type": "number",
        "description": "<p>The number of hours to add/subtract when clicking hour spinners.</p>"
      },
      {
        "name": "meridian",
        "type": "boolean",
        "description": "<p>Whether to display 12H or 24H mode.</p>"
      },
      {
        "name": "minuteStep",
        "type": "number",
        "description": "<p>The number of minutes to add/subtract when clicking minute spinners.</p>"
      },
      {
        "name": "readonlyInputs",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the timepicker is readonly and can&#39;t be changed.</p>"
      },
      {
        "name": "seconds",
        "type": "boolean",
        "description": "<p>If <code>true</code>, it is possible to select seconds.</p>"
      },
      {
        "name": "secondStep",
        "type": "number",
        "description": "<p>The number of seconds to add/subtract when clicking second spinners.</p>"
      },
      {
        "name": "size",
        "type": "\"small\" | \"medium\" | \"large\"",
        "description": "<p>The size of inputs and buttons.</p>"
      },
      {
        "name": "spinners",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the spinners above and below inputs are visible.</p>"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "hourStep",
        "type": "number",
        "description": "<p>The number of hours to add/subtract when clicking hour spinners.</p>"
      },
      {
        "name": "isLargeSize",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isSmallSize",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "minuteStep",
        "type": "number",
        "description": "<p>The number of minutes to add/subtract when clicking minute spinners.</p>"
      },
      {
        "name": "model",
        "type": "NgbTime",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      },
      {
        "name": "secondStep",
        "type": "number",
        "description": "<p>The number of seconds to add/subtract when clicking second spinners.</p>"
      }
    ],
    "methods": []
  },
  "NgbToastOptions": {
    "fileName": "src/toast/toast-config.ts",
    "className": "NgbToastOptions",
    "description": "<p>Interface used to type all toast config options. See <code>NgbToastConfig</code>.</p>",
    "since": {
      "version": "5.0.0",
      "description": ""
    },
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "ariaLive",
        "type": "\"polite\" | \"alert\"",
        "description": "<p>Type of aria-live attribute to be used.</p>\n<p>Could be one of these 2 values (as string):</p>\n<ul>\n<li><code>polite</code> (default)</li>\n<li><code>alert</code></li>\n</ul>"
      },
      {
        "name": "autohide",
        "type": "boolean",
        "description": "<p>Specify if the toast component should emit the <code>hide()</code> output\nafter a certain <code>delay</code> in ms.</p>"
      },
      {
        "name": "delay",
        "type": "number",
        "description": "<p>Delay in ms after which the <code>hide()</code> output should be emitted.</p>"
      }
    ]
  },
  "NgbToastConfig": {
    "fileName": "src/toast/toast-config.ts",
    "className": "NgbToastConfig",
    "description": "<p>Configuration service for the NgbToast component. You can inject this service, typically in your root component,\nand customize the values of its properties in order to provide default values for all the toasts used in the\napplication.</p>",
    "since": {
      "version": "5.0.0",
      "description": ""
    },
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "ariaLive",
        "defaultValue": "polite",
        "type": "\"polite\" | \"alert\"",
        "description": "<p>Type of aria-live attribute to be used.</p>\n<p>Could be one of these 2 values (as string):</p>\n<ul>\n<li><code>polite</code> (default)</li>\n<li><code>alert</code></li>\n</ul>"
      },
      {
        "name": "autohide",
        "defaultValue": "true",
        "type": "boolean",
        "description": "<p>Specify if the toast component should emit the <code>hide()</code> output\nafter a certain <code>delay</code> in ms.</p>"
      },
      {
        "name": "delay",
        "defaultValue": "500",
        "type": "number",
        "description": "<p>Delay in ms after which the <code>hide()</code> output should be emitted.</p>"
      }
    ]
  },
  "NgbToastHeader": {
    "fileName": "src/toast/toast.ts",
    "className": "NgbToastHeader",
    "description": "<p>This directive allows the usage of HTML markup or other directives\ninside of the toast&#39;s header.</p>",
    "since": {
      "version": "5.0.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "[ngbToastHeader]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgbToast": {
    "fileName": "src/toast/toast.ts",
    "className": "NgbToast",
    "description": "<p>Toasts provide feedback messages as notifications to the user.\nGoal is to mimic the push notifications available both on mobile and desktop operating systems.</p>",
    "since": {
      "version": "5.0.0",
      "description": ""
    },
    "type": "Component",
    "selector": "ngb-toast",
    "exportAs": "ngbToast",
    "inputs": [
      {
        "name": "autohide",
        "type": "boolean",
        "description": "<p>Auto hide the toast after a delay in ms.\ndefault: <code>true</code> (inherited from NgbToastConfig)</p>"
      },
      {
        "name": "delay",
        "type": "number",
        "description": "<p>Delay after which the toast will hide (ms).\ndefault: <code>500</code> (ms) (inherited from NgbToastConfig)</p>"
      },
      {
        "name": "header",
        "type": "string",
        "description": "<p>Text to be used as toast&#39;s header.\nIgnored if a ContentChild template is specified at the same time.</p>"
      }
    ],
    "outputs": [
      {
        "name": "hide",
        "description": "<p>An event fired immediately when toast&#39;s <code>hide()</code> method has been called.\nIt can only occur in 2 different scenarios:</p>\n<ul>\n<li><code>autohide</code> timeout fires</li>\n<li>user clicks on a closing cross (&amp;times)</li>\n</ul>\n<p>Additionally this output is purely informative. The toast won&#39;t disappear. It&#39;s up to the user to take care of\nthat.</p>"
      }
    ],
    "properties": [
      {
        "name": "contentHeaderTpl",
        "type": "TemplateRef<any>",
        "description": "<p>A template like <code>&lt;ng-template ngbToastHeader&gt;&lt;/ng-template&gt;</code> can be\nused in the projected content to allow markup usage.</p>"
      }
    ],
    "methods": []
  },
  "NgbTooltipConfig": {
    "fileName": "src/tooltip/tooltip-config.ts",
    "className": "NgbTooltipConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/tooltip/api#NgbTooltip\"><code>NgbTooltip</code></a> component.</p>\n<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the tooltips used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "autoClose",
        "defaultValue": "true",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": ""
      },
      {
        "name": "closeDelay",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "container",
        "type": "string",
        "description": ""
      },
      {
        "name": "disableTooltip",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "openDelay",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "auto",
        "type": "PlacementArray",
        "description": ""
      },
      {
        "name": "tooltipClass",
        "type": "string",
        "description": ""
      },
      {
        "name": "triggers",
        "defaultValue": "hover focus",
        "type": "string",
        "description": ""
      }
    ]
  },
  "NgbTooltip": {
    "fileName": "src/tooltip/tooltip.ts",
    "className": "NgbTooltip",
    "description": "<p>A lightweight and extensible directive for fancy tooltip creation.</p>",
    "type": "Directive",
    "selector": "[ngbTooltip]",
    "exportAs": "ngbTooltip",
    "inputs": [
      {
        "name": "autoClose",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": "<p>Indicates whether the tooltip should be closed on <code>Escape</code> key and inside/outside clicks:</p>\n<ul>\n<li><code>true</code> - closes on both outside and inside clicks as well as <code>Escape</code> presses</li>\n<li><code>false</code> - disables the autoClose feature (NB: triggers still apply)</li>\n<li><code>&quot;inside&quot;</code> - closes on inside clicks as well as Escape presses</li>\n<li><code>&quot;outside&quot;</code> - closes on outside clicks (sometimes also achievable through triggers)\nas well as <code>Escape</code> presses</li>\n</ul>",
        "since": {
          "version": "3.0.0",
          "description": ""
        }
      },
      {
        "name": "closeDelay",
        "type": "number",
        "description": "<p>The closing delay in ms. Works only for &quot;non-manual&quot; opening triggers defined by the <code>triggers</code> input.</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      },
      {
        "name": "container",
        "type": "string",
        "description": "<p>A selector specifying the element the tooltip should be appended to.</p>\n<p>Currently only supports <code>&quot;body&quot;</code>.</p>"
      },
      {
        "name": "disableTooltip",
        "type": "boolean",
        "description": "<p>If <code>true</code>, tooltip is disabled and won&#39;t be displayed.</p>",
        "since": {
          "version": "1.1.0",
          "description": ""
        }
      },
      {
        "name": "ngbTooltip",
        "type": "string | TemplateRef<any>",
        "description": "<p>The string content or a <code>TemplateRef</code> for the content to be displayed in the tooltip.</p>\n<p>If the content if falsy, the tooltip won&#39;t open.</p>"
      },
      {
        "name": "openDelay",
        "type": "number",
        "description": "<p>The opening delay in ms. Works only for &quot;non-manual&quot; opening triggers defined by the <code>triggers</code> input.</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": "<p>The preferred placement of the tooltip.</p>\n<p>Possible values are <code>&quot;top&quot;</code>, <code>&quot;top-left&quot;</code>, <code>&quot;top-right&quot;</code>, <code>&quot;bottom&quot;</code>, <code>&quot;bottom-left&quot;</code>,\n<code>&quot;bottom-right&quot;</code>, <code>&quot;left&quot;</code>, <code>&quot;left-top&quot;</code>, <code>&quot;left-bottom&quot;</code>, <code>&quot;right&quot;</code>, <code>&quot;right-top&quot;</code>,\n<code>&quot;right-bottom&quot;</code></p>\n<p>Accepts an array of strings or a string with space separated possible values.</p>\n<p>The default order of preference is <code>&quot;auto&quot;</code> (same as the sequence above).</p>\n<p>Please see the <a href=\"#/positioning\">positioning overview</a> for more details.</p>"
      },
      {
        "name": "tooltipClass",
        "type": "string",
        "description": "<p>An optional class applied to the tooltip window element.</p>",
        "since": {
          "version": "3.2.0",
          "description": ""
        }
      },
      {
        "name": "triggers",
        "type": "string",
        "description": "<p>Specifies events that should trigger the tooltip.</p>\n<p>Supports a space separated list of event names.\nFor more details see the <a href=\"#/components/tooltip/examples#triggers\">triggers demo</a>.</p>"
      }
    ],
    "outputs": [
      {
        "name": "hidden",
        "description": "<p>An event emitted when the popover is hidden. Contains no payload.</p>"
      },
      {
        "name": "shown",
        "description": "<p>An event emitted when the tooltip is shown. Contains no payload.</p>"
      }
    ],
    "properties": [
      {
        "name": "ngbTooltip",
        "type": "string | TemplateRef<any>",
        "description": "<p>The string content or a <code>TemplateRef</code> for the content to be displayed in the tooltip.</p>\n<p>If the content if falsy, the tooltip won&#39;t open.</p>"
      }
    ],
    "methods": [
      {
        "name": "open",
        "description": "<p>Opens the tooltip.</p>\n<p>This is considered to be a &quot;manual&quot; triggering.\nThe <code>context</code> is an optional value to be injected into the tooltip template when it is created.</p>",
        "args": [
          {
            "name": "context",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "<p>Closes the tooltip.</p>\n<p>This is considered to be a &quot;manual&quot; triggering of the tooltip.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "<p>Toggles the tooltip.</p>\n<p>This is considered to be a &quot;manual&quot; triggering of the tooltip.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "isOpen",
        "description": "<p>Returns <code>true</code>, if the popover is currently shown.</p>",
        "args": [],
        "returnType": "boolean"
      }
    ]
  },
  "NgbHighlight": {
    "fileName": "src/typeahead/highlight.ts",
    "className": "NgbHighlight",
    "description": "<p>A component that helps with text highlighting.</p>\n<p>If splits the <code>result</code> text into parts that contain the searched <code>term</code> and generates the HTML markup to simplify\nhighlighting:</p>\n<p>Ex. <code>result=&quot;Alaska&quot;</code> and <code>term=&quot;as&quot;</code> will produce <code>Al&lt;span class=&quot;ngb-highlight&quot;&gt;as&lt;/span&gt;ka</code>.</p>",
    "type": "Component",
    "selector": "ngb-highlight",
    "inputs": [
      {
        "name": "highlightClass",
        "defaultValue": "ngb-highlight",
        "type": "string",
        "description": "<p>The CSS class for <code>&lt;span&gt;</code> elements wrapping the <code>term</code> inside the <code>result</code>.</p>"
      },
      {
        "name": "result",
        "type": "string",
        "description": "<p>The text highlighting is added to.</p>\n<p>If the <code>term</code> is found inside this text, it will be highlighted.\nIf the <code>term</code> contains array then all the items from it will be highlighted inside the text.</p>"
      },
      {
        "name": "term",
        "type": "string | string[]",
        "description": "<p>The term or array of terms to be highlighted.\nSince version <code>v4.2.0</code> term could be a <code>string[]</code></p>"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "parts",
        "type": "string[]",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgbTypeaheadConfig": {
    "fileName": "src/typeahead/typeahead-config.ts",
    "className": "NgbTypeaheadConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/typeahead/api#NgbTypeahead\"><code>NgbTypeahead</code></a> component.</p>\n<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the typeaheads used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "container",
        "type": "any",
        "description": ""
      },
      {
        "name": "editable",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "focusFirst",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": ""
      },
      {
        "name": "showHint",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "ResultTemplateContext": {
    "fileName": "src/typeahead/typeahead-window.ts",
    "className": "ResultTemplateContext",
    "description": "<p>The context for the typeahead result template in case you want to override the default one.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "result",
        "type": "any",
        "description": "<p>Your typeahead result item.</p>"
      },
      {
        "name": "term",
        "type": "string",
        "description": "<p>Search term from the <code>&lt;input&gt;</code> used to get current result.</p>"
      }
    ]
  },
  "NgbTypeaheadSelectItemEvent": {
    "fileName": "src/typeahead/typeahead.ts",
    "className": "NgbTypeaheadSelectItemEvent",
    "description": "<p>An event emitted right before an item is selected from the result list.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "item",
        "type": "any",
        "description": "<p>The item from the result list about to be selected.</p>"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "<p>Calling this function will prevent item selection from happening.</p>"
      }
    ]
  },
  "NgbTypeahead": {
    "fileName": "src/typeahead/typeahead.ts",
    "className": "NgbTypeahead",
    "description": "<p>A directive providing a simple way of creating powerful typeaheads from any text input.</p>",
    "type": "Directive",
    "selector": "input[ngbTypeahead]",
    "exportAs": "ngbTypeahead",
    "inputs": [
      {
        "name": "autocomplete",
        "defaultValue": "off",
        "type": "string",
        "description": "<p>The value for the <code>autocomplete</code> attribute for the <code>&lt;input&gt;</code> element.</p>\n<p>Defaults to <code>&quot;off&quot;</code> to disable the native browser autocomplete, but you can override it if necessary.</p>",
        "since": {
          "version": "2.1.0",
          "description": ""
        }
      },
      {
        "name": "container",
        "type": "string",
        "description": "<p>A selector specifying the element the typeahead popup will be appended to.</p>\n<p>Currently only supports <code>&quot;body&quot;</code>.</p>"
      },
      {
        "name": "editable",
        "type": "boolean",
        "description": "<p>If <code>true</code>, model values will not be restricted only to items selected from the popup.</p>"
      },
      {
        "name": "focusFirst",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the first item in the result list will always stay focused while typing.</p>"
      },
      {
        "name": "inputFormatter",
        "type": "(item: any) => string",
        "description": "<p>The function that converts an item from the result list to a <code>string</code> to display in the <code>&lt;input&gt;</code> field.</p>\n<p>It is called when the user selects something in the popup or the model value changes, so the input needs to\nbe updated.</p>"
      },
      {
        "name": "ngbTypeahead",
        "type": "(text: Observable<string>) => Observable<any[]>",
        "description": "<p>The function that converts a stream of text values from the <code>&lt;input&gt;</code> element to the stream of the array of items\nto display in the typeahead popup.</p>\n<p>If the resulting observable emits a non-empty array - the popup will be shown. If it emits an empty array - the\npopup will be closed.</p>\n<p>See the <a href=\"#/components/typeahead/examples#basic\">basic example</a> for more details.</p>\n<p>Note that the <code>this</code> argument is <code>undefined</code> so you need to explicitly bind it to a desired &quot;this&quot; target.</p>"
      },
      {
        "name": "placement",
        "defaultValue": "bottom-left",
        "type": "PlacementArray",
        "description": "<p>The preferred placement of the typeahead.</p>\n<p>Possible values are <code>&quot;top&quot;</code>, <code>&quot;top-left&quot;</code>, <code>&quot;top-right&quot;</code>, <code>&quot;bottom&quot;</code>, <code>&quot;bottom-left&quot;</code>,\n<code>&quot;bottom-right&quot;</code>, <code>&quot;left&quot;</code>, <code>&quot;left-top&quot;</code>, <code>&quot;left-bottom&quot;</code>, <code>&quot;right&quot;</code>, <code>&quot;right-top&quot;</code>,\n<code>&quot;right-bottom&quot;</code></p>\n<p>Accepts an array of strings or a string with space separated possible values.</p>\n<p>The default order of preference is <code>&quot;bottom-left bottom-right top-left top-right&quot;</code></p>\n<p>Please see the <a href=\"#/positioning\">positioning overview</a> for more details.</p>"
      },
      {
        "name": "resultFormatter",
        "type": "(item: any) => string",
        "description": "<p>The function that converts an item from the result list to a <code>string</code> to display in the popup.</p>\n<p>Must be provided, if your <code>ngbTypeahead</code> returns something other than <code>Observable&lt;string[]&gt;</code>.</p>\n<p>Alternatively for more complex markup in the popup you should use <code>resultTemplate</code>.</p>"
      },
      {
        "name": "resultTemplate",
        "type": "TemplateRef<ResultTemplateContext>",
        "description": "<p>The template to override the way resulting items are displayed in the popup.</p>\n<p>See the <a href=\"#/components/typeahead/api#ResultTemplateContext\">ResultTemplateContext</a> for the template context.</p>\n<p>Also see the <a href=\"#/components/typeahead/examples#template\">template for results demo</a> for more details.</p>"
      },
      {
        "name": "showHint",
        "type": "boolean",
        "description": "<p>If <code>true</code>, will show the hint in the <code>&lt;input&gt;</code> when an item in the result list matches.</p>"
      }
    ],
    "outputs": [
      {
        "name": "selectItem",
        "description": "<p>An event emitted right before an item is selected from the result list.</p>\n<p>Event payload is of type <a href=\"#/components/typeahead/api#NgbTypeaheadSelectItemEvent\"><code>NgbTypeaheadSelectItemEvent</code></a>.</p>"
      }
    ],
    "properties": [
      {
        "name": "activeDescendant",
        "type": "string",
        "description": ""
      },
      {
        "name": "popupId",
        "type": "string",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "dismissPopup",
        "description": "<p>Dismisses typeahead popup window</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "isPopupOpen",
        "description": "<p>Returns true if the typeahead popup window is displayed</p>",
        "args": [],
        "returnType": "void"
      }
    ]
  }
};

export default API_DOCS;