import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { MonacoEditor } from "../../../controls/monacoEditor";
export var TestControl = function (props) {
    var defaultValue = React.useMemo(function () {
        return (['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'));
    }, []);
    var onValueChange = React.useCallback(function (newValue, validationErrors) {
        console.log(newValue);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Stack, null,
            React.createElement(MonacoEditor, { value: defaultValue, showMiniMap: true, onValueChange: onValueChange, language: "javascript", showLineNumbers: true }))));
};
//# sourceMappingURL=TestControl.js.map