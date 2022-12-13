// code your solution here
function saturdayFun (activity = `roller-skate`) {
    let display = `This Saturday, I want to ${activity}!`;
    return display;
}
saturdayFun;
saturdayFun(`bathe my dog`);

function mondayWork (activity = `go to the office`) {
    let display = `This Monday, I will ${activity}.`
    return display;
}

mondayWork;
mondayWork(`work from home`);

function wrapAdjective (ish = `*`) {
    return function (adj = `special`) {
        return `You are ${ish}${adj}${ish}!`
    }
}
