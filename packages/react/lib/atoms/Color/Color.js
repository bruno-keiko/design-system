import React from 'react';
import { Spacing } from '@ds.e/foundation';

const Color = ({ hexCode, height = Spacing.sm, width = Spacing.sm, }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return React.createElement("div", { className: className, style: { backgroundColor: hexCode } });
};

export { Color as default };
//# sourceMappingURL=Color.js.map
