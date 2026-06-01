/**
 * @typedef {string | false | null | undefined} ClassValue
 * @typedef {string | boolean | null | undefined} VariantValue
 * @typedef {Record<string, ClassValue>} VariantClasses
 * @typedef {Record<string, VariantClasses>} VariantSchema
 * @typedef {Record<string, VariantValue>} VariantSelection
 */

/**
 * @param {ClassValue} [base]
 * @param {{
 *   variants?: VariantSchema,
 *   defaultVariants?: VariantSelection,
 * }} [config]
 * @return {(props?: VariantSelection) => string}
 */
export default function cva(base, config = {}) {
  const baseVal = base;
  const { variants = {}, defaultVariants = {} } = config;

  return function (required = {}) {
    let finalVals = [baseVal];
    const vals =
      Object.entries(variants).map(([key, obj]) => {
        if (Object.hasOwn(required, key)) {
          return variants[key][required[key]];
        }
        if (defaultVariants && Object.hasOwn(defaultVariants, key)) {
          return variants[key][defaultVariants[key]];
        }
      }) || [];
    finalVals = finalVals.concat(vals);

    return finalVals.filter(Boolean).join(" ");
  };
}

const button = cva("btn", {
  variants: {
    intent: {
      primary: "btn-primary",
      secondary: "btn-secondary",
    },
    size: {
      small: "btn-small",
      medium: "btn-medium",
    },
    disabled: {
      true: "btn-disabled",
      false: null,
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
    disabled: false,
  },
});
button();
button({ size: "small" });
button({ intent: "secondary", disabled: true });

/* if (cfg?.defaultVariants) {
      variants = Object.entries(cfg.defaultVariants).map(([key, val]) => {
        if (Object.hasOwn(required, key)) {
          return cfg.variants[key][required[key]];
        } else {
          return cfg.variants[key][val];
        }
      });
    }
    if(Object.keys(required).length) {
      Object.entries(required);
    } */
