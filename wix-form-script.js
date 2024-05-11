<scritp>

$w.onReady(function () {

    const myMutliState = $w('#myStateBox');

    // stepTwo
    $w("#button24").onClick(() => {
        loadNext(myMutliState);
    });

    // stepThree
    $w("#button26").onClick(() => {
        loadNext(myMutliState);
    });

    // stepFive
    $w("#button27").onClick(() => {
        loadNext(myMutliState);
    });

    // stepSix
    $w("#button28").onClick(() => {
        loadNext(myMutliState);
    });

    // stepSeven
    $w("#button33").onClick(() => {
        loadNext(myMutliState);
    });

    // stepEight
    $w("#button34").onClick(() => {
        loadNext(myMutliState);
    });

    // stepEight
    $w("#button36").onClick(() => {
        loadNext(myMutliState);
    });

    // step back start from here

    // stepOne
    $w("#button31").onClick(() => {
        loadBack(myMutliState);
    });

    // stepTwo
    $w("#button30").onClick(() => {
        loadBack(myMutliState);
    });

    // stepThree
    $w("#button29").onClick(() => {
        loadBack(myMutliState);
    });

    // stepFour
    $w("#button32").onClick(() => {
        loadBack(myMutliState);
    });

    // stepFive
    $w("#button35").onClick(() => {
        loadBack(myMutliState);
    });

    // stepSix
    $w("#button37").onClick(() => {
        loadBack(myMutliState);
    });

    // stepSeven
    $w("#button39").onClick(() => {
        loadBack(myMutliState);
    });

});

//LoadNext
function loadNext(MultiState) {
    const states = MultiState.states;
    let current = MultiState.currentState;
    const indexCurrent = states.findIndex(state =>
        state.id == current.id
    );
    let indexNext = indexCurrent + 1;
    let next = indexNext < states.length ? states[indexNext].id : '';
    goToState(MultiState, next);
}

//loadBack
function loadBack(MultiState) {
    const states = MultiState.states;
    let current = MultiState.currentState;
    const indexCurrent = states.findIndex(state =>
        state.id == current.id
    );
    let indexBack = indexCurrent - 1;
    let back = indexBack >= 0 ? states[indexBack].id : '';
    goToState(MultiState, back);
}

// goToState
function goToState(multi, id) {
    if (id != '') {
        multi.changeState(id);
    }
}

</script>
