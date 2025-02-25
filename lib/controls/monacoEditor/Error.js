import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import { MessageBarType, MessageBar } from "office-ui-fabric-react/lib/MessageBar";
import * as React from "react";
export var Error = function (props) {
    var error = props.error, show = props.show;
    return (React.createElement(React.Fragment, null, (show && error) ?
        React.createElement(Stack, { horizontal: true, horizontalAlign: "start" },
            React.createElement(MessageBar, { isMultiline: true, messageBarType: MessageBarType.error }, error.message))
        :
            null));
};
//# sourceMappingURL=Error.js.map