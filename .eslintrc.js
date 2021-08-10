// eslint-disable-next-line node/no-unpublished-require
const customGroups = [
  {
    members: [
      {
        members: "group",
        type: "Hover, Focus, & Other States",
      },
    ],
    type: "CORE CONCEPTS",
  },
  {
    members: [
      {
        members: "container",
        type: "Container",
      },
      {
        members: "decoration\\-(slice|clone)",
        type: "Box Decoration Break",
      },
      {
        members: "box\\-(border|content)",
        type: "Box Sizing",
      },
      {
        members:
          "block|flex|grid|flow\\-root|contents|hidden|inline(\\-(block|flex|table|grid))?|table\\-(column|footer|header|row)\\-group|table(\\-(caption|row|cell|column))?|list\\-item",
        type: "Display",
      },
      {
        members: "float\\-(right|left|none)",
        type: "Floats",
      },
      {
        members: "clear\\-(left|right|both|none)",
        type: "Clear",
      },
      {
        members: "(isolate|isolation\\-auto)",
        type: "Isolation",
      },
      {
        members: "object\\-(contain|cover|fill|none|scale\\-down)",
        type: "Object Fit",
      },
      {
        members: "object(\\-${objectPosition}|\\-\\[.*?\\])",
        type: "Object Position",
      },
      {
        members: [
          {
            members: "overflow\\-(auto|hidden|visible|scroll)",
            type: "overflow",
          },
          {
            members: "overflow\\-x\\-(auto|hidden|visible|scroll)",
            type: "overflow-x",
          },
          {
            members: "overflow\\-y\\-(auto|hidden|visible|scroll)",
            type: "overflow-y",
          },
        ],
        type: "Overflow",
      },
      {
        members: [
          {
            members: "overscroll\\-(auto|contain|none)",
            type: "overscroll",
          },
          {
            members: "overscroll\\-x\\-(auto|contain|none)",
            type: "overscroll-x",
          },
          {
            members: "overscroll\\-y\\-(auto|contain|none)",
            type: "overscroll-y",
          },
        ],
        type: "Overscroll Behavior",
      },
      {
        members: "static|fixed|absolute|relative|sticky",
        type: "Position",
      },
      {
        members: [
          {
            members: "(inset(\\-${inset}|\\-\\[.*?\\])|\\-inset(\\-${-inset}|\\-\\[.*?\\]))",
            type: "inset",
          },
          {
            members:
              "(inset\\-y(\\-${inset}|\\-\\[.*?\\])|\\-inset\\-y(\\-${-inset}|\\-\\[.*?\\]))",
            type: "inset-y",
          },
          {
            members:
              "(inset\\-x(\\-${inset}|\\-\\[.*?\\])|\\-inset\\-x(\\-${-inset}|\\-\\[.*?\\]))",
            type: "inset-x",
          },
          {
            members: "(top(\\-${inset}|\\-\\[.*?\\])|\\-top(\\-${-inset}|\\-\\[.*?\\]))",
            type: "top",
          },
          {
            members: "(right(\\-${inset}|\\-\\[.*?\\])|\\-right(\\-${-inset}|\\-\\[.*?\\]))",
            type: "right",
          },
          {
            members: "(bottom(\\-${inset}|\\-\\[.*?\\])|\\-bottom(\\-${-inset}|\\-\\[.*?\\]))",
            type: "bottom",
          },
          {
            members: "(left(\\-${inset}|\\-\\[.*?\\])|\\-left(\\-${-inset}|\\-\\[.*?\\]))",
            type: "left",
          },
        ],
        type: "Top / Right / Bottom / Left",
      },
      {
        members: "(in)?visible",
        type: "Visibility",
      },
      {
        members: "z(\\-${zIndex}|\\-\\[.*?\\])",
        type: "Z-Index",
      },
    ],
    type: "LAYOUT",
  },
  {
    members: [
      {
        members: "flex\\-(row|col)(\\-reverse)?",
        type: "Flex Direction",
      },
      {
        members: "flex\\-(wrap(\\-reverse)?|nowrap)",
        type: "Flex Wrap",
      },
      {
        members: "flex(\\-${flex}|\\-\\[.*?\\])",
        type: "Flex",
      },
      {
        members: "flex\\-grow((\\-${flexGrow}|\\-\\[.*?\\]))?",
        type: "Flex Grow",
      },
      {
        members: "flex\\-shrink((\\-${flexShrink}|\\-\\[.*?\\]))?",
        type: "Flex Shrink",
      },
      {
        members: "order(\\-${order}|\\-\\[.*?\\])",
        type: "Order",
      },
    ],
    type: "FLEXBOX",
  },
  {
    members: [
      {
        members: "grid\\-cols(\\-${gridTemplateColumns}|\\-\\[.*?\\])",
        type: "Grid Template Columns",
      },
      {
        members: [
          {
            members: "col(\\-${gridColumn}|\\-\\[.*?\\])",
            type: "grid-column",
          },
          {
            members: "col\\-start(\\-${gridColumnStart}|\\-\\[.*?\\])",
            type: "grid-column-start",
          },
          {
            members: "col\\-end(\\-${gridColumnEnd}|\\-\\[.*?\\])",
            type: "grid-column-end",
          },
        ],
        type: "Grid Column Start / End",
      },
      {
        members: "grid\\-rows(\\-${gridTemplateRows}|\\-\\[.*?\\])",
        type: "Grid Template Rows",
      },
      {
        members: [
          {
            members: "row(\\-${gridRow}|\\-\\[.*?\\])",
            type: "grid-row",
          },
          {
            members: "row\\-start(\\-${gridRowStart}|\\-\\[.*?\\])",
            type: "grid-row-start",
          },
          {
            members: "row\\-end(\\-${gridRowEnd}|\\-\\[.*?\\])",
            type: "grid-row-end",
          },
        ],
        type: "Grid Row Start / End",
      },
      {
        members: "grid\\-flow\\-(row|col)(\\-dense)?",
        type: "Grid Auto Flow",
      },
      {
        members: "auto\\-cols(\\-${gridAutoColumns}|\\-\\[.*?\\])",
        type: "Grid Auto Columns",
      },
      {
        members: "auto\\-rows(\\-${gridAutoRows}|\\-\\[.*?\\])",
        type: "Grid Auto Rows",
      },
      {
        members: [
          {
            members: "gap(\\-${gap}|\\-\\[.*?\\])",
            type: "gap",
          },
          {
            members: "gap\\-x(\\-${gap}|\\-\\[.*?\\])",
            type: "column-gap",
          },
          {
            members: "gap\\-y(\\-${gap}|\\-\\[.*?\\])",
            type: "row-gap",
          },
        ],
        type: "Gap",
      },
    ],
    type: "GRID",
  },
  {
    members: [
      {
        members: "justify\\-(start|end|center|between|around|evenly)",
        type: "Justify Content",
      },
      {
        members: "justify\\-items\\-(auto|start|end|center|stretch)",
        type: "Justify Items",
      },
      {
        members: "justify\\-self\\-(auto|start|end|center|stretch)",
        type: "Justify Self",
      },
      {
        members: "content\\-(center|start|end|between|around|evenly)",
        type: "Align Content",
      },
      {
        members: "items\\-(start|end|center|baseline|stretch)",
        type: "Align Items",
      },
      {
        members: "self\\-(auto|start|end|center|stretch)",
        type: "Align Self",
      },
      {
        members: "place\\-content\\-(center|start|end|between|around|evenly|stretch)",
        type: "Place Content",
      },
      {
        members: "place\\-items\\-(auto|start|end|center|stretch)",
        type: "Place Items",
      },
      {
        members: "place\\-self\\-(auto|start|end|center|stretch)",
        type: "Place Self",
      },
    ],
    type: "BOX ALIGNMENT",
  },
  {
    members: [
      {
        members: [
          {
            members: "p(\\-${padding}|\\-\\[.*?\\])",
            type: "p",
          },
          {
            members: "py(\\-${padding}|\\-\\[.*?\\])",
            type: "py",
          },
          {
            members: "px(\\-${padding}|\\-\\[.*?\\])",
            type: "px",
          },
          {
            members: "pt(\\-${padding}|\\-\\[.*?\\])",
            type: "pt",
          },
          {
            members: "pr(\\-${padding}|\\-\\[.*?\\])",
            type: "pr",
          },
          {
            members: "pb(\\-${padding}|\\-\\[.*?\\])",
            type: "pb",
          },
          {
            members: "pl(\\-${padding}|\\-\\[.*?\\])",
            type: "pl",
          },
        ],
        type: "Padding",
      },
      {
        members: [
          {
            members: "(m(\\-${margin}|\\-\\[.*?\\])|\\-m(\\-${-margin}|\\-\\[.*?\\]))",
            type: "m",
          },
          {
            members: "(my(\\-${margin}|\\-\\[.*?\\])|\\-my(\\-${-margin}|\\-\\[.*?\\]))",
            type: "my",
          },
          {
            members: "(mx(\\-${margin}|\\-\\[.*?\\])|\\-mx(\\-${-margin}|\\-\\[.*?\\]))",
            type: "mx",
          },
          {
            members: "(mt(\\-${margin}|\\-\\[.*?\\])|\\-mt(\\-${-margin}|\\-\\[.*?\\]))",
            type: "mt",
          },
          {
            members: "(mr(\\-${margin}|\\-\\[.*?\\])|\\-mr(\\-${-margin}|\\-\\[.*?\\]))",
            type: "mr",
          },
          {
            members: "(mb(\\-${margin}|\\-\\[.*?\\])|\\-mb(\\-${-margin}|\\-\\[.*?\\]))",
            type: "mb",
          },
          {
            members: "(ml(\\-${margin}|\\-\\[.*?\\])|\\-ml(\\-${-margin}|\\-\\[.*?\\]))",
            type: "ml",
          },
        ],
        type: "Margin",
      },
      {
        members: [
          {
            members:
              "(space\\-y(\\-${space}|\\-\\[.*?\\])|\\-space\\-y(\\-${-space}|\\-\\[.*?\\]))",
            type: "space-y",
          },
          {
            members:
              "(space\\-x(\\-${space}|\\-\\[.*?\\])|\\-space\\-x(\\-${-space}|\\-\\[.*?\\]))",
            type: "space-x",
          },
        ],
        type: "Space Between",
      },
    ],
    type: "SPACING",
  },
  {
    members: [
      {
        members: "w(\\-${width}|\\-\\[.*?\\])",
        type: "Width",
      },
      {
        members: "min\\-w(\\-${minWidth}|\\-\\[.*?\\])",
        type: "Min-Width",
      },
      {
        members: "max\\-w(\\-${maxWidth}|\\-\\[.*?\\])",
        type: "Max-Width",
      },
      {
        members: "h(\\-${height}|\\-\\[.*?\\])",
        type: "Height",
      },
      {
        members: "min\\-h(\\-${minHeight}|\\-\\[.*?\\])",
        type: "Min-Height",
      },
      {
        members: "max\\-h(\\-${maxHeight}|\\-\\[.*?\\])",
        type: "Max-Height",
      },
    ],
    type: "SIZING",
  },
  {
    members: [
      {
        members: "font(\\-${fontFamily}|\\-\\[.*?\\])",
        type: "Font Family",
      },
      {
        members: "text(\\-${fontSize}|\\-\\[.*?\\])",
        type: "Font Size",
      },
      {
        members: "(subpixel\\-)?antialiased",
        type: "Font Smoothing",
      },
      {
        members: "(not\\-)?italic",
        type: "Font Style",
      },
      {
        members: "font(\\-${fontWeight}|\\-\\[.*?\\])",
        type: "Font Weight",
      },
      {
        members:
          "(normal|lining|oldstyle|proportional|tabular)\\-nums|ordinal|slashed-zero|(diagonal|stacked)\\-fractions",
        type: "Font Variant Numeric",
      },
      {
        members: "tracking(\\-${letterSpacing}|\\-\\[.*?\\])",
        type: "Letter Spacing",
      },
      {
        members: "leading(\\-${lineHeight}|\\-\\[.*?\\])",
        type: "Line Height",
      },
      {
        members: "list(\\-${listStyleType}|\\-\\[.*?\\])",
        type: "List Style Type",
      },
      {
        members: "list\\-(in|out)side",
        type: "List Style Position",
      },
      {
        members: "placeholder(\\-${placeholderColor}|\\-\\[.*?\\])",
        type: "Placeholder Color",
      },
      {
        members: "placeholder\\-opacity(\\-${placeholderOpacity}|\\-\\[.*?\\])",
        type: "Placeholder Opacity",
      },
      {
        members: "text\\-(left|center|right|justify)",
        type: "Text Alignment",
      },
      {
        members: "text(\\-${textColor}|\\-\\[.*?\\])",
        type: "Text Color",
      },
      {
        members: "text\\-opacity(\\-${textOpacity}|\\-\\[.*?\\])",
        type: "Text Opacity",
      },
      {
        members: "(no\\-)?underline|line\\-through",
        type: "Text Decoration",
      },
      {
        members: "(upper|lower|normal\\-)case|capitalize",
        type: "Text Transform",
      },
      {
        members: "truncate|overflow\\-(ellipsis|clip)",
        type: "Text Overflow",
      },
      {
        members: "align\\-(baseline|top|middle|bottom|text\\-(top|bottom))",
        type: "Vertical Alignment",
      },
      {
        members: "whitespace\\-(normal|nowrap|pre(\\-(line|wrap))?)",
        type: "Whitespace",
      },
      {
        members: "break\\-(normal|words|all)",
        type: "Word Break",
      },
    ],
    type: "TYPOGRAPHY",
  },
  {
    members: [
      {
        members: "bg\\-(fixed|local|scroll)",
        type: "Background Attachment",
      },
      {
        members: "bg\\-clip\\-(border|padding|content|text)",
        type: "Background Clip",
      },
      {
        members: "bg(\\-${backgroundColor}|\\-\\[.*?\\])",
        type: "Background Color",
      },
      {
        members: "bg\\-opacity(\\-${backgroundOpacity}|\\-\\[.*?\\])",
        type: "Background Opacity",
      },
      {
        members: "bg(\\-${backgroundPosition}|\\-\\[.*?\\])",
        type: "Background Position",
      },
      {
        members: "bg\\-(no\\-repeat|repeat(\\-(x|y|round|space))?)",
        type: "Background Repeat",
      },
      {
        members: "bg(\\-${backgroundSize}|\\-\\[.*?\\])",
        type: "Background Size",
      },
      {
        members: "bg(\\-${backgroundImage}|\\-\\[.*?\\])",
        type: "Background Image",
      },
      {
        members: [
          {
            members: "from(\\-${gradientColorStops}|\\-\\[.*?\\])",
            type: "from",
          },
          {
            members: "via(\\-${gradientColorStops}|\\-\\[.*?\\])",
            type: "via",
          },
          {
            members: "to(\\-${gradientColorStops}|\\-\\[.*?\\])",
            type: "to",
          },
        ],
        type: "Gradient Color Stops",
      },
    ],
    type: "BACKGROUNDS",
  },
  {
    members: [
      {
        members: [
          {
            members: "rounded((\\-${borderRadius}|\\-\\[.*?\\]))?",
            type: "border-radius",
          },
          {
            members: "rounded\\-t((\\-${borderRadius}|\\-\\[.*?\\]))?",
            type: "border-radius-top",
          },
          {
            members: "rounded\\-r((\\-${borderRadius}|\\-\\[.*?\\]))?",
            type: "border-radius-right",
          },
          {
            members: "rounded\\-b((\\-${borderRadius}|\\-\\[.*?\\]))?",
            type: "border-radius-bottom",
          },
          {
            members: "rounded\\-l((\\-${borderRadius}|\\-\\[.*?\\]))?",
            type: "border-radius-left",
          },
          {
            members: "rounded\\-tl((\\-${borderRadius}|\\-\\[.*?\\]))?",
            type: "border-radius-top-left",
          },
          {
            members: "rounded\\-tr((\\-${borderRadius}|\\-\\[.*?\\]))?",
            type: "border-radius-top-right",
          },
          {
            members: "rounded\\-br((\\-${borderRadius}|\\-\\[.*?\\]))?",
            type: "border-radius-bottom-right",
          },
          {
            members: "rounded\\-bl((\\-${borderRadius}|\\-\\[.*?\\]))?",
            type: "border-radius-bottom-left",
          },
        ],
        type: "Border Radius",
      },
      {
        members: [
          {
            members: "border((\\-${borderWidth}|\\-\\[.*?\\]))?",
            type: "border-width",
          },
          {
            members: "border\\-t((\\-${borderWidth}|\\-\\[.*?\\]))?",
            type: "border-top-width",
          },
          {
            members: "border\\-r((\\-${borderWidth}|\\-\\[.*?\\]))?",
            type: "border-right-width",
          },
          {
            members: "border\\-b((\\-${borderWidth}|\\-\\[.*?\\]))?",
            type: "border-bottom-width",
          },
          {
            members: "border\\-l((\\-${borderWidth}|\\-\\[.*?\\]))?",
            type: "border-left-width",
          },
        ],
        type: "Border Width",
      },
      {
        members: "border(\\-${borderColor}|\\-\\[.*?\\])",
        type: "Border Color",
      },
      {
        members: "border\\-opacity(\\-${borderOpacity}|\\-\\[.*?\\])",
        type: "Border Opacity",
      },
      {
        members: "border\\-(solid|dashed|dotted|double|none)",
        type: "Border Style",
      },
      {
        members: [
          {
            members: "divide\\-y((\\-${divideWidth}|\\-\\[.*?\\]))?",
            type: "divide-y",
          },
          {
            members: "divide\\-x((\\-${divideWidth}|\\-\\[.*?\\]))?",
            type: "divide-x",
          },
          {
            members: "divide\\-y\\-reverse",
            type: "divide-y-reverse",
          },
          {
            members: "divide\\-x\\-reverse",
            type: "divide-x-reverse",
          },
        ],
        type: "Divide Width",
      },
      {
        members: "divide(\\-${divideColor}|\\-\\[.*?\\])",
        type: "Divide Color",
      },
      {
        members: "divide\\-opacity(\\-${divideOpacity}|\\-\\[.*?\\])",
        type: "Divide Opacity",
      },
      {
        members: "divide\\-(solid|dashed|dotted|double|none)",
        type: "Divide Style",
      },
      {
        members: [
          {
            members: "ring((\\-${ringWidth}|\\-\\[.*?\\]))?",
            type: "ring",
          },
          {
            members: "ring\\-inset",
            type: "ring-inset",
          },
        ],
        type: "Ring Width",
      },
      {
        members: "ring(\\-${ringColor}|\\-\\[.*?\\])",
        type: "Ring Color",
      },
      {
        members: "ring\\-opacity(\\-${ringOpacity}|\\-\\[.*?\\])",
        type: "Ring Opacity",
      },
      {
        members: "ring\\-offset(\\-${ringOffsetWidth}|\\-\\[.*?\\])",
        type: "Ring Offset Width",
      },
      {
        members: "ring\\-offset(\\-${ringOffsetColor}|\\-\\[.*?\\])",
        type: "Ring Offset Color",
      },
    ],
    type: "BORDERS",
  },
  {
    members: [
      {
        members: "shadow((\\-${boxShadow}|\\-\\[.*?\\]))?",
        type: "Box Shadow",
      },
      {
        members: "opacity(\\-${opacity}|\\-\\[.*?\\])",
        type: "Opacity",
      },
      {
        members:
          "mix\\-blend\\-(normal|multiply|screen|overlay|darken|lighten|color\\-(burn|dodge)|(hard|soft)\\-light|difference|exclusion|hue|saturation|color|luminosity)",
        type: "Mix Blend Mode",
      },
      {
        members:
          "bg\\-blend\\-(normal|multiply|screen|overlay|darken|lighten|color\\-(dodge|burn)|(hard|soft)\\-light|difference|exclusion|hue|saturation|color|luminosity)",
        type: "Background Blend Mode",
      },
    ],
    type: "EFFECTS",
  },
  {
    members: [
      {
        members: "filter(\\-none)?",
        type: "Filter",
      },
      {
        members: "blur((\\-${blur}|\\-\\[.*?\\]))?",
        type: "Blur",
      },
      {
        members: "bightness(\\-${brightness}|\\-\\[.*?\\])",
        type: "Brightness",
      },
      {
        members: "contrast(\\-${contrast}|\\-\\[.*?\\])",
        type: "Contrast",
      },
      {
        members: "drop\\-shadow((\\-${dropShadow}|\\-\\[.*?\\]))?",
        type: "Drop Shadow",
      },
      {
        members: "grayscale((\\-${grayscale}|\\-\\[.*?\\]))?",
        type: "Grayscale",
      },
      {
        members: "(\\-)?hue\\-rotate(\\-${hueRotate}|\\-\\[.*?\\])",
        type: "Hue Rotate",
      },
      {
        members: "invert((\\-${invert}|\\-\\[.*?\\]))?",
        type: "Invert",
      },
      {
        members: "saturate(\\-${saturate}|\\-\\[.*?\\])",
        type: "Saturate",
      },
      {
        members: "sepia((\\-${sepia}|\\-\\[.*?\\]))?",
        type: "Sepia",
      },
      {
        members: "backdrop\\-filter(\\-none)?",
        type: "Backdrop Filter",
      },
      {
        members: "backdrop\\-blur((\\-${backdropBlur}|\\-\\[.*?\\]))?",
        type: "Backdrop Blur",
      },
      {
        members: "backdrop\\-brightness(\\-${backdropBrightness}|\\-\\[.*?\\])",
        type: "Backdrop Brightness",
      },
      {
        members: "backdrop\\-contrast(\\-${backdropContrast}|\\-\\[.*?\\])",
        type: "Backdrop Contrast",
      },
      {
        members: "backdrop\\-grayscale((\\-${backdropGrayscale}|\\-\\[.*?\\]))?",
        type: "Backdrop Grayscale",
      },
      {
        members: "(\\-)?backdrop\\-hue\\-rotate(\\-${backdropHueRotate}|\\-\\[.*?\\])",
        type: "Backdrop Hue Rotate",
      },
      {
        members: "backdrop\\-invert((\\-${backdropInvert}|\\-\\[.*?\\]))?",
        type: "Backdrop Invert",
      },
      {
        members: "backdrop\\-opacity(\\-${backdropOpacity}|\\-\\[.*?\\])",
        type: "Backdrop Opacity",
      },
      {
        members: "backdrop\\-saturate(\\-${backdropSaturate}|\\-\\[.*?\\])",
        type: "Backdrop Saturate",
      },
      {
        members: "backdrop\\-sepia((\\-${backdropSepia}|\\-\\[.*?\\]))?",
        type: "Backdrop Sepia",
      },
    ],
    type: "FILTERS",
  },
  {
    members: [
      {
        members: "border\\-(collapse|separate)",
        type: "Border Collapse",
      },
      {
        members: "table\\-(auto|fixed)",
        type: "Table Layout",
      },
    ],
    type: "TABLES",
  },
  {
    members: [
      {
        members: "transition((\\-${transitionProperty}|\\-\\[.*?\\]))?",
        type: "Transition Property",
      },
      {
        members: "duration((\\-${transitionDuration}|\\-\\[.*?\\]))?",
        type: "Transition Duration",
      },
      {
        members: "ease((\\-${transitionTimingFunction}|\\-\\[.*?\\]))?",
        type: "Transition Timing Function",
      },
      {
        members: "delay(\\-${transitionDelay}|\\-\\[.*?\\])",
        type: "Transition Delay",
      },
      {
        members: "animate(\\-${animation}|\\-\\[.*?\\])",
        type: "Animation",
      },
    ],
    type: "TRANSITIONS AND ANIMATION",
  },
  {
    members: [
      {
        members: "transform(\\-(gpu|none))?",
        type: "Transform",
      },
      {
        members: "origin(\\-${transformOrigin}|\\-\\[.*?\\])",
        type: "Transform Origin",
      },
      {
        members: [
          {
            members: "scale(\\-${scale}|\\-\\[.*?\\])",
            type: "scale",
          },
          {
            members: "scale\\-y(\\-${scale}|\\-\\[.*?\\])",
            type: "scale-y",
          },
          {
            members: "scale\\-x(\\-${scale}|\\-\\[.*?\\])",
            type: "scale-x",
          },
        ],
        type: "Scale",
      },
      {
        members: "(rotate(\\-${rotate}|\\-\\[.*?\\])|\\-rotate(\\-${-rotate}|\\-\\[.*?\\]))",
        type: "Rotate",
      },
      {
        members: [
          {
            members:
              "(translate\\-x(\\-${translate}|\\-\\[.*?\\])|\\-translate\\-x(\\-${-translate}|\\-\\[.*?\\]))",
            type: "translate-x",
          },
          {
            members:
              "(translate\\-y(\\-${translate}|\\-\\[.*?\\])|\\-translate\\-y(\\-${-translate}|\\-\\[.*?\\]))",
            type: "translate-y",
          },
        ],
        type: "Translate",
      },
      {
        members: [
          {
            members: "(skew\\-x(\\-${skew}|\\-\\[.*?\\])|\\-skew\\-x(\\-${-skew}|\\-\\[.*?\\]))",
            type: "skew-x",
          },
          {
            members: "(skew\\-y(\\-${skew}|\\-\\[.*?\\])|\\-skew\\-y(\\-${-skew}|\\-\\[.*?\\]))",
            type: "skew-y",
          },
        ],
        type: "Skew",
      },
    ],
    type: "TRANSFORMS",
  },
  {
    members: [
      {
        members: "appearance\\-none",
        type: "Appearance",
      },
      {
        members: "cursor(\\-${cursor}|\\-\\[.*?\\])",
        type: "Cursor",
      },
      {
        members: "outline(\\-${outline}|\\-\\[.*?\\])",
        type: "Outline",
      },
      {
        members: "pointer\\-events\\-(none|auto)",
        type: "Pointer Events",
      },
      {
        members: "resize(\\-(none|x|y))?",
        type: "Resize",
      },
      {
        members: "select\\-(none|text|all|auto)",
        type: "User Select",
      },
    ],
    type: "INTERACTIVITY",
  },
  {
    members: [
      {
        members: "fill(\\-${fill}|\\-\\[.*?\\])",
        type: "Fill",
      },
      {
        members: "stroke(\\-${stroke}|\\-\\[.*?\\])",
        type: "Stroke",
      },
      {
        members: "stroke(\\-${strokeWidth}|\\-\\[.*?\\])",
        type: "Stroke Width",
      },
    ],
    type: "SVG",
  },
  {
    members: [
      {
        members: "(not\\-)?sr\\-only",
        type: "Screen Readers",
      },
    ],
    type: "ACCESSIBILITY",
  },
  {
    members: [
      {
        members: [
          {
            members: "prose",
            type: "prose",
          },
          {
            members: "prose((\\-${typography}|\\-\\[.*?\\]))?",
            type: "prose-modifier",
          },
        ],
        type: "Typography",
      },
      // ('Forms' plugin has no related classnames, only selectors like `input[type='password']`)
      {
        members: [
          {
            members: "aspect\\-w(\\-${aspectRatio}|\\-\\[.*?\\])",
            type: "aspect-w",
          },
          {
            members: "aspect\\-h(\\-${aspectRatio}|\\-\\[.*?\\])",
            type: "aspect-h",
          },
        ],
        type: "Aspect Ratio",
      },
      {
        members: "line\\-clamp\\-(none|${lineClamp})",
        type: "Line Clamp",
      },
    ],
    type: "OFFICIAL PLUGINS",
  },
]

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "prettier",
    "plugin:react-hooks/recommended",
  ],
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/recommended"],
      files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
      rules: {
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": ["off", { argsIgnorePattern: "(^_|^e$)", varsIgnorePattern: "^_" }],
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-warning-comments": "off",
        "max-len": [2, { code: 100, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreUrls: true }],
        "no-dupe-class-members": "off",
        "no-empty-pattern": 0,
        "no-unused-vars": "off",
        "node/no-empty-function": "off",
        "node/no-extraneous-import": 0,
        "node/no-missing-import": "off",
        "node/no-missing-require": "off",
        "node/no-unpublished-import": 0,
        "node/no-unsupported-features/es-syntax": "off",
        "node/shebang": "off",
        "object-curly-spacing": [2, "always", { arraysInObjects: true, objectsInObjects: true }],
        "prefer-template": 1,
        "quotes": [2, "double", { allowTemplateLiterals: true, avoidEscape: true }],
        "react/display-name": 0,
        "react/jsx-curly-brace-presence": ["error", { children: "never", props: "never" }],
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-sort-props": ["error", { callbacksLast: true, ignoreCase: true, reservedFirst: ["key", "ref"], shorthandFirst: true }],
        "require-atomic-updates": "off",
        "sort-keys-fix/sort-keys-fix": ["error", "asc", { "caseSensitive": false, "natural": false }],
        "tailwindcss/classnames-order": [
          2,
          {
            groupByResponsive: true,
            groups: customGroups,
          },
        ],
        "tailwindcss/no-contradicting-classname": 0,
        "tailwindcss/no-custom-classname": 0,
        "typescript-sort-keys/interface": ["error", "asc", { caseSensitive: true, natural: true, requiredFirst: true }],
        "typescript-sort-keys/string-enum": ["error", "asc", { caseSensitive: true }]

      },
    },
  ],
  plugins: ["node", "prettierx", "react-hooks", "typescript-sort-keys", "tailwindcss", "sort-keys-fix"],
  rules: {
    "block-scoped-var": "error",
    "eol-last": "error",
    "eqeqeq": "error",
    "no-restricted-properties": ["error", { object: "describe", property: "only" }, { object: "it", property: "only" }],
    "no-trailing-spaces": "error",
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prettierx/options": "error",
    "quotes": ["warn", "double", { avoidEscape: true }],
  },
};
