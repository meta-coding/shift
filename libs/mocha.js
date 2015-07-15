type callback = () => void;

declare var describe : (context: string, fn: callback) => void;

declare var it : (scenario: string, fn: callback) => void;
