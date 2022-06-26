export interface GoldRushStateNode {
    here: boolean;
    isReading: boolean;
    nextReady: boolean;
    picking: boolean;
    waiting: boolean;
    waitTimeout: number;
    answerNext(): void;
    choosePrize(arg0: unknown): void;
    claimPrize(): void;
    componentDidMount(): unknown;
    componentWillUnmount(): void;
    forceUpdate(t?: unknown): void;
    onAnswer(arg0: unknown): void;
    randomQ(): void;
    readQuestion(): void;
    render(): unknown;
    selectPlayer(arg0: unknown): void;
    setState(t: unknown, e: unknown): void;
    _reactInternalFiber: {
        childExpirationTime: number;
        effectTag: number;
        expirationTime: number;
        index: number;
        mode: number;
        tag: number;
        dependencies: null;
        key: null;
        nextEffect: null;
        ref: null;
        sibling: null;
        elementType(e: unknown): unknown;
        type(e: unknown): unknown;
        alternate: {
            childExpirationTime: number;
            effectTag: number;
            expirationTime: number;
            index: number;
            mode: number;
            tag: number;
            dependencies: null;
            key: null;
            nextEffect: null;
            ref: null;
            sibling: null;
            elementType(e: unknown): unknown;
            type(e: unknown): unknown;
            alternate: GoldRushStateNode["_reactInternalFiber"];
            child: {
                childExpirationTime: number;
                effectTag: number;
                expirationTime: number;
                index: number;
                mode: number;
                tag: number;
                elementType: string;
                type: string;
                dependencies: null;
                key: null;
                memoizedState: null;
                nextEffect: null;
                ref: null;
                sibling: null;
                updateQueue: null;
                stateNode: HTMLDivElement;
                alternate: {
                    childExpirationTime: number;
                    effectTag: number;
                    expirationTime: number;
                    index: number;
                    mode: number;
                    tag: number;
                    elementType: string;
                    type: string;
                    dependencies: null;
                    key: null;
                    memoizedState: null;
                    nextEffect: null;
                    ref: null;
                    sibling: null;
                    updateQueue: null;
                    stateNode: HTMLDivElement;
                    alternate: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"];
                    child: unknown /* too deep */;
                    firstEffect: unknown /* too deep */;
                    lastEffect: unknown /* too deep */;
                    memoizedProps: unknown /* too deep */;
                    pendingProps: unknown /* too deep */;
                    return: GoldRushStateNode["_reactInternalFiber"];
                };
                child: {
                    childExpirationTime: number;
                    effectTag: number;
                    expirationTime: number;
                    index: number;
                    mode: number;
                    tag: number;
                    dependencies: null;
                    firstEffect: null;
                    key: null;
                    lastEffect: null;
                    memoizedState: null;
                    nextEffect: null;
                    ref: null;
                    stateNode: null;
                    updateQueue: null;
                    elementType(e: unknown): unknown;
                    type(e: unknown): unknown;
                    alternate: unknown /* too deep */;
                    child: unknown /* too deep */;
                    memoizedProps: unknown /* too deep */;
                    pendingProps: unknown /* too deep */;
                    return: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"];
                    sibling: unknown /* too deep */;
                };
                firstEffect: {
                    childExpirationTime: number;
                    effectTag: number;
                    expirationTime: number;
                    index: number;
                    mode: number;
                    tag: number;
                    elementType: string;
                    type: string;
                    child: null;
                    dependencies: null;
                    firstEffect: null;
                    key: null;
                    lastEffect: null;
                    memoizedState: null;
                    nextEffect: null;
                    sibling: null;
                    updateQueue: null;
                    ref(e: unknown): unknown;
                    stateNode: HTMLDivElement;
                    alternate: unknown /* too deep */;
                    memoizedProps: unknown /* too deep */;
                    pendingProps: unknown /* too deep */;
                    return: unknown /* too deep */;
                };
                lastEffect: {
                    childExpirationTime: number;
                    effectTag: number;
                    expirationTime: number;
                    index: number;
                    mode: number;
                    tag: number;
                    dependencies: null;
                    key: null;
                    nextEffect: null;
                    ref: null;
                    sibling: null;
                    elementType(t: unknown): unknown;
                    type(t: unknown): unknown;
                    alternate: unknown /* too deep */;
                    child: unknown /* too deep */;
                    firstEffect: unknown /* too deep */;
                    lastEffect: unknown /* too deep */;
                    memoizedProps: unknown /* too deep */;
                    memoizedState: unknown /* too deep */;
                    pendingProps: unknown /* too deep */;
                    return: unknown /* too deep */;
                    stateNode: unknown /* too deep */;
                    updateQueue: unknown /* too deep */;
                };
                memoizedProps: {
                    className: string;
                    children: unknown /* too deep */;
                    style: unknown /* too deep */;
                };
                pendingProps: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["memoizedProps"];
                return: GoldRushStateNode["_reactInternalFiber"]["alternate"];
            };
            firstEffect: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["firstEffect"];
            lastEffect: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["lastEffect"];
            memoizedProps: {
                staticContext: undefined;
                deleteClient(): unknown;
                setGoldFinal(): unknown;
                client: {
                    allowAccounts: boolean;
                    plus: boolean;
                    randomNames: boolean;
                    blook: string;
                    hostId: string;
                    name: string;
                    textColor: string;
                    type: string;
                    username: string;
                    questions: unknown /* too deep */;
                };
                firebase: {
                    liveAppNum: number;
                    checkConnection(e: unknown): unknown;
                    connectToDb(e: unknown): void;
                    disconnectFromDb(): unknown;
                    getDatabaseRef(e: unknown, t: unknown): unknown;
                    getDatabaseVal(e: unknown, t: unknown, a: unknown): unknown;
                    removeHost(e: unknown): unknown;
                    removeVal(e: unknown, t: unknown, a: unknown): unknown;
                    setAuth(e: unknown, t: unknown, a: unknown): unknown;
                    setClient(e: unknown, t: unknown, a: unknown): unknown;
                    setHost(e: unknown, t: unknown, a: unknown, n: unknown, o: unknown): unknown;
                    setStage(e: unknown, t: unknown): unknown;
                    setVal(e: unknown, t: unknown): unknown;
                    testFirewall(e: unknown): unknown;
                    liveApp: unknown /* too deep */;
                };
                history: {
                    length: number;
                    action: string;
                    block(t: unknown): unknown;
                    createHref(t: unknown): unknown;
                    go(t: unknown): void;
                    goBack(): void;
                    goForward(): void;
                    listen(t: unknown): unknown;
                    push(t: unknown, e: unknown): void;
                    replace(t: unknown, e: unknown): void;
                    location: unknown /* too deep */;
                };
                location: {
                    hash: string;
                    key: string;
                    pathname: string;
                    search: string;
                    state: undefined;
                };
                match: {
                    isExact: boolean;
                    path: string;
                    url: string;
                    params: unknown /* too deep */;
                };
            };
            memoizedState: {
                correct: boolean;
                phaseTwo: boolean;
                ready: boolean;
                choice: number;
                gold: number;
                gold2: number;
                attackerBlook: string;
                attackerMsg: string;
                readId: string;
                stage: string;
                choiceObj: {};
                choices: never[];
                players: never[];
                question: {
                    random: boolean;
                    number: number;
                    timeLimit: number;
                    text: string;
                    audio: null;
                    image: null;
                    answers: unknown /* too deep */;
                    correctAnswers: unknown /* too deep */;
                };
            };
            pendingProps: GoldRushStateNode["_reactInternalFiber"]["alternate"]["memoizedProps"];
            return: {
                childExpirationTime: number;
                effectTag: number;
                expirationTime: number;
                index: number;
                mode: number;
                tag: number;
                key: null;
                memoizedState: null;
                nextEffect: null;
                ref: null;
                sibling: null;
                stateNode: null;
                updateQueue: null;
                alternate: {
                    childExpirationTime: number;
                    effectTag: number;
                    expirationTime: number;
                    index: number;
                    mode: number;
                    tag: number;
                    key: null;
                    memoizedState: null;
                    nextEffect: null;
                    ref: null;
                    sibling: null;
                    stateNode: null;
                    updateQueue: null;
                    alternate: GoldRushStateNode["_reactInternalFiber"]["alternate"]["return"];
                    child: GoldRushStateNode["_reactInternalFiber"];
                    dependencies: unknown /* too deep */;
                    elementType: unknown /* too deep */;
                    firstEffect: unknown /* too deep */;
                    lastEffect: unknown /* too deep */;
                    memoizedProps: unknown /* too deep */;
                    pendingProps: unknown /* too deep */;
                    return: unknown /* too deep */;
                    type: unknown /* too deep */;
                };
                child: GoldRushStateNode["_reactInternalFiber"]["alternate"];
                dependencies: {
                    expirationTime: number;
                    responders: null;
                    firstContext: unknown /* too deep */;
                };
                elementType: {
                    _threadCount: number;
                    $$typeof: symbol;
                    _calculateChangedBits: null;
                    _currentValue: null;
                    _currentValue2: null;
                    Consumer: GoldRushStateNode["_reactInternalFiber"]["alternate"]["return"]["elementType"];
                    Provider: unknown /* too deep */;
                };
                firstEffect: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["firstEffect"];
                lastEffect: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["lastEffect"];
                memoizedProps: {
                    children(a: unknown): unknown;
                };
                pendingProps: GoldRushStateNode["_reactInternalFiber"]["alternate"]["return"]["memoizedProps"];
                return: {
                    childExpirationTime: number;
                    effectTag: number;
                    expirationTime: number;
                    index: number;
                    mode: number;
                    tag: number;
                    dependencies: null;
                    key: null;
                    memoizedState: null;
                    nextEffect: null;
                    ref: null;
                    sibling: null;
                    stateNode: null;
                    updateQueue: null;
                    elementType(t: unknown): unknown;
                    type(t: unknown): unknown;
                    alternate: unknown /* too deep */;
                    child: GoldRushStateNode["_reactInternalFiber"]["alternate"]["return"];
                    firstEffect: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["firstEffect"];
                    lastEffect: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["lastEffect"];
                    memoizedProps: unknown /* too deep */;
                    pendingProps: unknown /* too deep */;
                    return: unknown /* too deep */;
                };
                type: GoldRushStateNode["_reactInternalFiber"]["alternate"]["return"]["elementType"];
            };
            stateNode: {
                here: boolean;
                isReading: boolean;
                nextReady: boolean;
                picking: boolean;
                waiting: boolean;
                waitTimeout: number;
                answerNext(): void;
                choosePrize(arg0: unknown): void;
                claimPrize(): void;
                componentDidMount(): unknown;
                componentWillUnmount(): void;
                forceUpdate(t: unknown): void;
                onAnswer(arg0: unknown): void;
                randomQ(): void;
                readQuestion(): void;
                render(): unknown;
                selectPlayer(arg0: unknown): void;
                setState(t: unknown, e: unknown): void;
                _reactInternalFiber: GoldRushStateNode["_reactInternalFiber"];
                context: {};
                corrects: {};
                dbRefMe: {
                    key: string;
                    child(e: unknown): unknown;
                    endAt(): unknown;
                    endBefore(): unknown;
                    equalTo(t: unknown, n: unknown): unknown;
                    get(): unknown;
                    getKey(): unknown;
                    getParent(): unknown;
                    getRoot(): unknown;
                    isEqual(t: unknown): unknown;
                    limitToFirst(t: unknown): unknown;
                    limitToLast(t: unknown): unknown;
                    off(e: unknown, t: unknown, n: unknown): void;
                    on(t: unknown, n: unknown, r: unknown, o: unknown): unknown;
                    once(t: unknown, n: unknown, r: unknown, o: unknown): unknown;
                    onDisconnect(): unknown;
                    orderByChild(t: unknown): unknown;
                    orderByKey(): unknown;
                    orderByPriority(): unknown;
                    orderByValue(): unknown;
                    push(e: unknown, t: unknown): unknown;
                    remove(e: unknown): unknown;
                    set(e: unknown, t: unknown): unknown;
                    setPriority(e: unknown, t: unknown): unknown;
                    setWithPriority(e: unknown, t: unknown, n: unknown): unknown;
                    startAfter(): unknown;
                    startAt(): unknown;
                    toJSON(): unknown;
                    toString(): unknown;
                    transaction(e: unknown, t: unknown, n: unknown): unknown;
                    update(e: unknown, t: unknown): unknown;
                    _delegate: unknown /* too deep */;
                    database: unknown /* too deep */;
                    parent: unknown /* too deep */;
                    ref: unknown /* too deep */;
                    root: unknown /* too deep */;
                };
                dbRefStage: {
                    key: string;
                    child(e: unknown): unknown;
                    endAt(): unknown;
                    endBefore(): unknown;
                    equalTo(t: unknown, n: unknown): unknown;
                    get(): unknown;
                    getKey(): unknown;
                    getParent(): unknown;
                    getRoot(): unknown;
                    isEqual(t: unknown): unknown;
                    limitToFirst(t: unknown): unknown;
                    limitToLast(t: unknown): unknown;
                    off(e: unknown, t: unknown, n: unknown): void;
                    on(t: unknown, n: unknown, r: unknown, o: unknown): unknown;
                    once(t: unknown, n: unknown, r: unknown, o: unknown): unknown;
                    onDisconnect(): unknown;
                    orderByChild(t: unknown): unknown;
                    orderByKey(): unknown;
                    orderByPriority(): unknown;
                    orderByValue(): unknown;
                    push(e: unknown, t: unknown): unknown;
                    remove(e: unknown): unknown;
                    set(e: unknown, t: unknown): unknown;
                    setPriority(e: unknown, t: unknown): unknown;
                    setWithPriority(e: unknown, t: unknown, n: unknown): unknown;
                    startAfter(): unknown;
                    startAt(): unknown;
                    toJSON(): unknown;
                    toString(): unknown;
                    transaction(e: unknown, t: unknown, n: unknown): unknown;
                    update(e: unknown, t: unknown): unknown;
                    _delegate: unknown /* too deep */;
                    database: unknown /* too deep */;
                    parent: unknown /* too deep */;
                    ref: unknown /* too deep */;
                    root: unknown /* too deep */;
                };
                freeQuestions: unknown /* too deep */[];
                incorrects: {
                    "29": number;
                };
                isReactComponent: {};
                msg: {
                    onend(): void;
                };
                props: GoldRushStateNode["_reactInternalFiber"]["alternate"]["memoizedProps"];
                questions: unknown /* too deep */[];
                refs: {};
                state: GoldRushStateNode["_reactInternalFiber"]["alternate"]["memoizedState"];
                updater: {
                    enqueueForceUpdate(e: unknown, t: unknown): void;
                    enqueueReplaceState(e: unknown, t: unknown, n: unknown): void;
                    enqueueSetState(e: unknown, t: unknown, n: unknown): void;
                    isMounted(e: unknown): unknown;
                };
            };
            updateQueue: {
                baseQueue: null;
                effects: null;
                baseState: GoldRushStateNode["_reactInternalFiber"]["alternate"]["memoizedState"];
                shared: {
                    pending: null;
                };
            };
        };
        child: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["alternate"];
        firstEffect: {
            childExpirationTime: number;
            effectTag: number;
            expirationTime: number;
            index: number;
            mode: number;
            tag: number;
            elementType: string;
            type: string;
            child: null;
            dependencies: null;
            firstEffect: null;
            key: null;
            lastEffect: null;
            memoizedState: null;
            nextEffect: null;
            sibling: null;
            updateQueue: null;
            ref(e: unknown): unknown;
            stateNode: HTMLDivElement;
            alternate: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["firstEffect"];
            memoizedProps: {
                children: string;
                style: {
                    display: string;
                };
            };
            pendingProps: GoldRushStateNode["_reactInternalFiber"]["firstEffect"]["memoizedProps"];
            return: {
                childExpirationTime: number;
                effectTag: number;
                expirationTime: number;
                index: number;
                mode: number;
                tag: number;
                elementType: string;
                type: string;
                dependencies: null;
                key: null;
                memoizedState: null;
                nextEffect: null;
                sibling: null;
                updateQueue: null;
                ref(e: unknown): unknown;
                stateNode: HTMLDivElement;
                alternate: {
                    childExpirationTime: number;
                    effectTag: number;
                    expirationTime: number;
                    index: number;
                    mode: number;
                    tag: number;
                    elementType: string;
                    type: string;
                    dependencies: null;
                    key: null;
                    memoizedState: null;
                    nextEffect: null;
                    sibling: null;
                    updateQueue: null;
                    ref(e: unknown): unknown;
                    stateNode: HTMLDivElement;
                    alternate: GoldRushStateNode["_reactInternalFiber"]["firstEffect"]["return"];
                    child: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["firstEffect"];
                    firstEffect: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["firstEffect"];
                    lastEffect: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["firstEffect"];
                    memoizedProps: unknown /* too deep */;
                    pendingProps: unknown /* too deep */;
                    return: unknown /* too deep */;
                };
                child: GoldRushStateNode["_reactInternalFiber"]["firstEffect"];
                firstEffect: GoldRushStateNode["_reactInternalFiber"]["firstEffect"];
                lastEffect: GoldRushStateNode["_reactInternalFiber"]["firstEffect"];
                memoizedProps: {
                    className: string;
                    children: unknown /* too deep */;
                    style: unknown /* too deep */;
                };
                pendingProps: GoldRushStateNode["_reactInternalFiber"]["firstEffect"]["return"]["memoizedProps"];
                return: {
                    childExpirationTime: number;
                    effectTag: number;
                    expirationTime: number;
                    index: number;
                    mode: number;
                    tag: number;
                    dependencies: null;
                    key: null;
                    nextEffect: null;
                    ref: null;
                    sibling: null;
                    elementType(t: unknown): unknown;
                    type(t: unknown): unknown;
                    alternate: unknown /* too deep */;
                    child: GoldRushStateNode["_reactInternalFiber"]["firstEffect"]["return"];
                    firstEffect: GoldRushStateNode["_reactInternalFiber"]["firstEffect"];
                    lastEffect: GoldRushStateNode["_reactInternalFiber"]["firstEffect"]["return"];
                    memoizedProps: unknown /* too deep */;
                    memoizedState: unknown /* too deep */;
                    pendingProps: unknown /* too deep */;
                    return: unknown /* too deep */;
                    stateNode: unknown /* too deep */;
                    updateQueue: unknown /* too deep */;
                };
            };
        };
        lastEffect: {
            childExpirationTime: number;
            effectTag: number;
            expirationTime: number;
            index: number;
            mode: number;
            tag: number;
            dependencies: null;
            key: null;
            nextEffect: null;
            ref: null;
            sibling: null;
            elementType(t: unknown): unknown;
            type(t: unknown): unknown;
            alternate: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["lastEffect"];
            child: {
                childExpirationTime: number;
                effectTag: number;
                expirationTime: number;
                index: number;
                mode: number;
                tag: number;
                elementType: string;
                type: string;
                dependencies: null;
                key: null;
                memoizedState: null;
                nextEffect: null;
                sibling: null;
                updateQueue: null;
                ref(e: unknown): unknown;
                stateNode: HTMLDivElement;
                alternate: {
                    childExpirationTime: number;
                    effectTag: number;
                    expirationTime: number;
                    index: number;
                    mode: number;
                    tag: number;
                    elementType: string;
                    type: string;
                    dependencies: null;
                    key: null;
                    memoizedState: null;
                    nextEffect: null;
                    sibling: null;
                    updateQueue: null;
                    ref(e: unknown): unknown;
                    stateNode: HTMLDivElement;
                    alternate: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["child"];
                    child: unknown /* too deep */;
                    firstEffect: unknown /* too deep */;
                    lastEffect: unknown /* too deep */;
                    memoizedProps: unknown /* too deep */;
                    pendingProps: unknown /* too deep */;
                    return: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["lastEffect"];
                };
                child: {
                    childExpirationTime: number;
                    effectTag: number;
                    expirationTime: number;
                    index: number;
                    mode: number;
                    tag: number;
                    elementType: string;
                    type: string;
                    child: null;
                    dependencies: null;
                    firstEffect: null;
                    key: null;
                    lastEffect: null;
                    memoizedState: null;
                    nextEffect: null;
                    sibling: null;
                    updateQueue: null;
                    ref(e: unknown): unknown;
                    stateNode: HTMLDivElement;
                    alternate: unknown /* too deep */;
                    memoizedProps: unknown /* too deep */;
                    pendingProps: unknown /* too deep */;
                    return: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["child"];
                };
                firstEffect: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["child"]["child"];
                lastEffect: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["child"]["child"];
                memoizedProps: {
                    className: string;
                    children: unknown /* too deep */;
                    style: unknown /* too deep */;
                };
                pendingProps: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["child"]["memoizedProps"];
                return: GoldRushStateNode["_reactInternalFiber"]["lastEffect"];
            };
            firstEffect: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["child"]["child"];
            lastEffect: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["child"];
            memoizedProps: {
                autoResize: boolean;
                forceSingleModeWidth: boolean;
                max: number;
                min: number;
                throttle: number;
                children: string;
                className: string;
                mode: string;
                onReady(): void;
                style: {
                    color: string;
                };
            };
            memoizedState: {
                ready: boolean;
                fontSize: number;
            };
            pendingProps: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["memoizedProps"];
            return: {
                childExpirationTime: number;
                effectTag: number;
                expirationTime: number;
                index: number;
                mode: number;
                tag: number;
                elementType: string;
                type: string;
                dependencies: null;
                key: null;
                memoizedState: null;
                nextEffect: null;
                ref: null;
                sibling: null;
                updateQueue: null;
                stateNode: HTMLDivElement;
                alternate: {
                    childExpirationTime: number;
                    effectTag: number;
                    expirationTime: number;
                    index: number;
                    mode: number;
                    tag: number;
                    elementType: string;
                    type: string;
                    dependencies: null;
                    key: null;
                    memoizedState: null;
                    nextEffect: null;
                    ref: null;
                    sibling: null;
                    updateQueue: null;
                    stateNode: HTMLDivElement;
                    alternate: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["return"];
                    child: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["lastEffect"];
                    firstEffect: unknown /* too deep */;
                    lastEffect: GoldRushStateNode["_reactInternalFiber"]["alternate"]["child"]["lastEffect"];
                    memoizedProps: unknown /* too deep */;
                    pendingProps: unknown /* too deep */;
                    return: unknown /* too deep */;
                };
                child: GoldRushStateNode["_reactInternalFiber"]["lastEffect"];
                firstEffect: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["child"]["child"];
                lastEffect: GoldRushStateNode["_reactInternalFiber"]["lastEffect"];
                memoizedProps: {
                    className: string;
                    children: unknown /* too deep */;
                };
                pendingProps: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["return"]["memoizedProps"];
                return: {
                    childExpirationTime: number;
                    effectTag: number;
                    expirationTime: number;
                    index: number;
                    mode: number;
                    tag: number;
                    elementType: string;
                    type: string;
                    dependencies: null;
                    key: null;
                    memoizedState: null;
                    nextEffect: null;
                    ref: null;
                    sibling: null;
                    updateQueue: null;
                    stateNode: HTMLDivElement;
                    alternate: unknown /* too deep */;
                    child: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["return"];
                    firstEffect: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["child"]["child"];
                    lastEffect: GoldRushStateNode["_reactInternalFiber"]["lastEffect"];
                    memoizedProps: unknown /* too deep */;
                    pendingProps: unknown /* too deep */;
                    return: unknown /* too deep */;
                };
            };
            stateNode: {
                pid: number;
                componentDidMount(): void;
                componentDidUpdate(t: unknown): void;
                componentWillUnmount(): void;
                forceUpdate(t: unknown): void;
                handleWindowResize(): unknown;
                process(): unknown;
                render(): unknown;
                setState(t: unknown, e: unknown): void;
                _child: HTMLDivElement;
                _parent: HTMLDivElement;
                _reactInternalFiber: GoldRushStateNode["_reactInternalFiber"]["lastEffect"];
                context: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["context"];
                isReactComponent: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["isReactComponent"];
                props: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["memoizedProps"];
                refs: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["refs"];
                state: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["memoizedState"];
                updater: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["updater"];
            };
            updateQueue: {
                baseQueue: null;
                effects: null;
                baseState: GoldRushStateNode["_reactInternalFiber"]["lastEffect"]["memoizedState"];
                shared: {
                    pending: null;
                };
            };
        };
        memoizedProps: GoldRushStateNode["_reactInternalFiber"]["alternate"]["memoizedProps"];
        memoizedState: GoldRushStateNode["_reactInternalFiber"]["alternate"]["memoizedState"];
        pendingProps: GoldRushStateNode["_reactInternalFiber"]["alternate"]["memoizedProps"];
        return: GoldRushStateNode["_reactInternalFiber"]["alternate"]["return"]["alternate"];
        stateNode: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"];
        updateQueue: GoldRushStateNode["_reactInternalFiber"]["alternate"]["updateQueue"];
    };
    context: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["context"];
    corrects: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["corrects"];
    dbRefMe: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["dbRefMe"];
    dbRefStage: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["dbRefStage"];
    freeQuestions: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["freeQuestions"];
    incorrects: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["incorrects"];
    isReactComponent: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["isReactComponent"];
    msg: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["msg"];
    props: GoldRushStateNode["_reactInternalFiber"]["alternate"]["memoizedProps"];
    questions: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["questions"];
    refs: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["refs"];
    state: GoldRushStateNode["_reactInternalFiber"]["alternate"]["memoizedState"];
    updater: GoldRushStateNode["_reactInternalFiber"]["alternate"]["stateNode"]["updater"];
}
