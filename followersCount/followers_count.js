const initCounter = (initVal) => {

    const getCount = () => {
        return initVal;
    }

    const increaseCount = () => {
        initVal += 1;
    }

    const decreaseCount = () => {
        if (initVal > 0)
            initVal -= 1;
    }

    const resetCount = () => {
        initVal = 0;
    }


    return { getCount, increaseCount, decreaseCount, resetCount };

}

const countEvents = (id, counter) => {

    const { getCount, increaseCount, decreaseCount, resetCount } = counter;

    const increaseBtn = document.getElementById(`f${id}`);
    const decreaseBtn = document.getElementById(`u${id}`);
    const resetBtn = document.getElementById(`r${id}`);
    const followerDisplay = document.getElementById(`display${id}`);

    const handleMessage = (ev) => {

        const count = getCount();

        if (count === 10) {
            alert("Your Instagram account gained 10 followers! Congratulations!");
        } else if (count === 20) {
            alert("Your Instagram account gained 20 followers! Keep it up!");
        }
        else if ( ev.target.id === `r${id}` ){
            alert("Your Instagram account has been reset! Start Fresh!");
        }

    }

    const handle = (ev, actionFunction) => {
        actionFunction();
        followerDisplay.textContent = getCount();
        handleMessage(ev);
    }

    increaseBtn.onclick = (ev) => { handle(ev, increaseCount); };
    decreaseBtn.onclick = (ev) => { handle(ev, decreaseCount); };
    resetBtn.onclick = (ev) => { handle(ev, resetCount); };


}




const counterFK = initCounter(parseInt(document.getElementById('displayFK').textContent));
const counterSK = initCounter(parseInt(document.getElementById('displaySK').textContent));

const eventFK = countEvents("FK", counterFK);
const eventSK = countEvents("SK", counterSK);





